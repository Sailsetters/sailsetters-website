import type { CollectionConfig } from 'payload'
import { APIError } from 'payload'

import { authenticated } from '../lib/access'
import { renderTemplate, unresolvedPlaceholders } from '../lib/email-templates'

/**
 * Outgoing emails to applicants.
 *
 * Each email is a document that starts as a draft (usually created
 * automatically from a template when an application changes status — see
 * Applications), gets edited by whoever is handling the application, and is
 * sent by switching its status to „Jetzt senden“ and saving.
 *
 * Sending happens in `afterChange`, i.e. after validation and after the row
 * is written but before the transaction commits. If the send fails, the
 * throw rolls the transaction back and the draft stays a draft. Doing it any
 * earlier (in `beforeChange`) risks the opposite: mail sent, save rejected,
 * editor retries, applicant gets it twice.
 *
 * Sent emails are frozen, so the collection doubles as the record of what
 * an applicant was actually told.
 */

export type EmailTemplateKey = 'einladung' | 'zusage'

const relationId = (value: unknown): number | undefined =>
  typeof value === 'object' && value !== null && 'id' in value
    ? (value as { id: number }).id
    : typeof value === 'number'
      ? value
      : undefined

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export const Emails: CollectionConfig = {
  slug: 'emails',
  labels: { singular: 'E-Mail', plural: 'E-Mails' },
  admin: {
    useAsTitle: 'subject',
    defaultColumns: ['subject', 'to', 'vorlage', 'status', 'sentAt'],
    group: 'Bewerbungen',
  },
  access: {
    create: authenticated,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  hooks: {
    beforeValidate: [
      async ({ data, operation, req }) => {
        if (operation !== 'create' || !data) return data

        const applicationId = relationId(data.application)
        if (!applicationId) return data

        const application = await req.payload.findByID({
          collection: 'applications',
          id: applicationId,
          depth: 0,
          req,
        })

        data.to ||= application.email

        // Prefill from the template only when the draft is still empty, so a
        // manually written email is never overwritten.
        if (data.vorlage && !data.subject && !data.body) {
          const vorlagen = await req.payload.findGlobal({ slug: 'email-vorlagen', req })
          const template = vorlagen[data.vorlage as EmailTemplateKey]
          const values = {
            name: application.name,
            bearbeiter: req.user?.name ?? '',
          }
          data.subject = renderTemplate(template.betreff, values)
          data.body = renderTemplate(template.text, values)
        }

        return data
      },
    ],
    beforeChange: [
      async ({ data, originalDoc, req }) => {
        if (originalDoc?.status === 'gesendet') {
          throw new APIError('Gesendete E-Mails können nicht mehr geändert werden.', 400)
        }

        if (data.status === 'gesendet') {
          throw new APIError('Bitte „Jetzt senden“ wählen – der Status „Gesendet“ wird automatisch gesetzt.', 400)
        }

        if (data.status !== 'senden') return data

        // The fields are deliberately not `required` (see below), so check
        // them here, at the one moment it matters.
        const missing = (['to', 'subject', 'body'] as const).filter((k) => !data[k]?.trim())
        if (missing.length > 0) {
          const labels = { to: 'An', subject: 'Betreff', body: 'Text' }
          throw new APIError(
            `Vor dem Senden bitte ausfüllen: ${missing.map((k) => labels[k]).join(', ')}.`,
            400,
          )
        }

        const leftover = unresolvedPlaceholders(`${data.subject}\n${data.body}`)
        if (leftover.length > 0) {
          throw new APIError(
            `Die E-Mail enthält noch Platzhalter: ${leftover.join(', ')}. Bitte vor dem Senden ersetzen.`,
            400,
          )
        }

        data.status = 'gesendet'
        data.sentAt = new Date().toISOString()
        data.sentBy = req.user?.id
        return data
      },
    ],
    afterChange: [
      async ({ doc, previousDoc, req }) => {
        if (doc.status !== 'gesendet' || previousDoc?.status === 'gesendet') return

        const body: string = doc.body
        try {
          await req.payload.sendEmail({
            to: doc.to,
            subject: doc.subject,
            text: body,
            html: `<p>${escapeHtml(body).replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>')}</p>`,
          })
        } catch (error) {
          req.payload.logger.error({ err: error, msg: 'E-Mail konnte nicht gesendet werden' })
          // Throwing here rolls back the status change — see the note at the top.
          throw new APIError(
            'Die E-Mail konnte nicht gesendet werden. Der Entwurf wurde nicht verändert – bitte später erneut versuchen.',
            502,
          )
        }
      },
    ],
  },
  fields: [
    {
      name: 'application',
      type: 'relationship',
      relationTo: 'applications',
      label: 'Bewerbung',
      required: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'vorlage',
      type: 'select',
      label: 'Vorlage',
      options: [
        { label: 'Einladung zum Gespräch', value: 'einladung' },
        { label: 'Zusage', value: 'zusage' },
      ],
      admin: {
        position: 'sidebar',
        description:
          'Vorlage wählen und Betreff und Text leer lassen – beim Speichern wird der Entwurf aus der Vorlage gefüllt.',
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      required: true,
      defaultValue: 'entwurf',
      options: [
        { label: 'Entwurf', value: 'entwurf' },
        { label: 'Jetzt senden', value: 'senden' },
        { label: 'Gesendet', value: 'gesendet' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Auf „Jetzt senden“ stellen und speichern. Die E-Mail geht raus, sobald das Speichern erfolgreich war.',
      },
    },
    {
      name: 'sentAt',
      type: 'date',
      label: 'Gesendet am',
      admin: { position: 'sidebar', readOnly: true, date: { displayFormat: 'dd.MM.yyyy HH:mm' } },
    },
    {
      name: 'sentBy',
      type: 'relationship',
      relationTo: 'users',
      label: 'Gesendet von',
      admin: { position: 'sidebar', readOnly: true },
    },
    // Not `required`: the admin validates required fields in the browser
    // before submitting, which would block the "pick a Vorlage, leave the rest
    // empty, save" flow that fills them in. Emptiness is enforced on send.
    { name: 'to', type: 'email', label: 'An' },
    { name: 'subject', type: 'text', label: 'Betreff' },
    { name: 'body', type: 'textarea', label: 'Text', admin: { rows: 16 } },
  ],
}
