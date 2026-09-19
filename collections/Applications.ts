import type { CollectionConfig } from 'payload'

import { authenticated } from '../lib/access'
import type { EmailTemplateKey } from './Emails'

/**
 * Bewerbungen als Sailsetter:in.
 *
 * Anyone may create (the public form posts here); only logged-in team members
 * may read, edit or delete. Applicant data is personal data under the DSGVO —
 * see `consent` and `status` below, and the retention note in the README.
 *
 * The status field is the recruiting pipeline. Two transitions create an
 * email draft from a template (see Emails and EmailVorlagen); nothing is sent
 * until a person reviews the draft.
 */

const EMAIL_ON_STATUS: Partial<Record<string, EmailTemplateKey>> = {
  eingeladen: 'einladung',
  angenommen: 'zusage',
}

export const Applications: CollectionConfig = {
  slug: 'applications',
  labels: { singular: 'Bewerbung', plural: 'Bewerbungen' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'status', 'assignee', 'email', 'createdAt'],
    group: 'Bewerbungen',
  },
  access: {
    create: () => true,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  hooks: {
    beforeDelete: [
      // Emails belong to the application: they carry the applicant's name and
      // address, so deleting the application (e.g. after the retention period)
      // must take them along. It is also required mechanically: the FK is
      // ON DELETE SET NULL but `application` is NOT NULL, so Postgres refuses
      // the delete while any email still points here.
      async ({ id, req }) => {
        await req.payload.delete({
          collection: 'emails',
          where: { application: { equals: id } },
          req,
        })
      },
    ],
    beforeChange: [
      // Stamp author and time on notes that don't have them yet, i.e. the ones
      // just added in this save. Both fields are read-only in the admin.
      ({ data, req }) => {
        for (const note of data.notes ?? []) {
          note.author ??= req.user?.id
          note.createdAt ??= new Date().toISOString()
        }
        return data
      },
    ],
    afterChange: [
      async ({ doc, previousDoc, operation, req }) => {
        if (operation !== 'update' || doc.status === previousDoc?.status) return

        const vorlage = EMAIL_ON_STATUS[doc.status]
        if (!vorlage) return

        // One draft per template per applicant. If someone needs to resend,
        // they can create a further email by hand from the application page.
        const existing = await req.payload.count({
          collection: 'emails',
          where: { and: [{ application: { equals: doc.id } }, { vorlage: { equals: vorlage } }] },
          req,
        })
        if (existing.totalDocs > 0) return

        // Subject and body are left empty on purpose: the Emails beforeValidate
        // hook fills them from the template.
        await req.payload.create({
          collection: 'emails',
          data: { application: doc.id, vorlage, status: 'entwurf', to: doc.email, subject: '', body: '' },
          req,
        })
      },
    ],
  },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'name', type: 'text', label: 'Name', required: true },
        { name: 'email', type: 'email', label: 'E-Mail', required: true },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'university', type: 'text', label: 'Hochschule' },
        { name: 'studySubject', type: 'text', label: 'Studiengang' },
        { name: 'semester', type: 'text', label: 'Fachsemester' },
      ],
    },
    {
      name: 'motivation',
      type: 'textarea',
      label: 'Motivation',
      required: true,
      admin: {
        description: 'Warum möchtest du bei Sailsetters mitmachen?',
      },
    },
    {
      name: 'availability',
      type: 'textarea',
      label: 'Verfügbarkeit',
      admin: {
        description: 'Wie viel Zeit kannst du pro Semester einbringen?',
      },
    },
    {
      name: 'consent',
      type: 'checkbox',
      label: 'Einwilligung zur Datenverarbeitung erteilt',
      required: true,
      // `required` alone does not reject a missing or false checkbox, and this
      // collection is public-create — so without this the consent requirement
      // could be bypassed by posting straight to the REST API.
      validate: (value: unknown) =>
        value === true || 'Ohne Einwilligung darf die Bewerbung nicht gespeichert werden.',
      admin: {
        readOnly: true,
        description:
          'Wird beim Absenden des Formulars gesetzt. Ohne Einwilligung darf die Bewerbung nicht gespeichert werden.',
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      defaultValue: 'neu',
      required: true,
      options: [
        { label: 'Neu', value: 'neu' },
        { label: 'In Prüfung', value: 'in-pruefung' },
        { label: 'Eingeladen', value: 'eingeladen' },
        { label: 'Gespräch geplant', value: 'gespraech-geplant' },
        { label: 'Angenommen', value: 'angenommen' },
        { label: 'Onboarding', value: 'onboarding' },
        { label: 'Mitglied', value: 'mitglied' },
        { label: 'Abgelehnt', value: 'abgelehnt' },
        { label: 'Zurückgezogen', value: 'zurueckgezogen' },
      ],
      // The collection is public-create. Without this, a request straight to
      // the REST API could open an application at any stage; denied field
      // access strips the value so the default `neu` applies.
      access: { create: authenticated },
      admin: {
        position: 'sidebar',
        description:
          '„Eingeladen“ und „Angenommen“ legen automatisch einen E-Mail-Entwurf an (siehe unten). Gesendet wird erst nach Durchsicht.',
        components: { Cell: '@/components/admin/StatusCell#StatusCell' },
      },
    },
    {
      name: 'assignee',
      type: 'relationship',
      relationTo: 'users',
      label: 'Zuständig',
      access: { create: authenticated, update: authenticated },
      admin: {
        position: 'sidebar',
        description: 'Wer diese Bewerbung betreut.',
      },
    },
    {
      name: 'notes',
      type: 'array',
      label: 'Notizen',
      labels: { singular: 'Notiz', plural: 'Notizen' },
      access: {
        // Internal only. `create` matters too: the public form endpoint must
        // not be able to plant a note attributed to a team member.
        create: authenticated,
        read: authenticated,
        update: authenticated,
      },
      admin: { description: 'Nur intern sichtbar. Wer und wann wird beim Speichern automatisch ergänzt.' },
      fields: [
        { name: 'text', type: 'textarea', label: 'Notiz', required: true },
        {
          type: 'row',
          fields: [
            {
              name: 'author',
              type: 'relationship',
              relationTo: 'users',
              label: 'Von',
              admin: { readOnly: true },
            },
            {
              name: 'createdAt',
              type: 'date',
              label: 'Am',
              admin: { readOnly: true, date: { displayFormat: 'dd.MM.yyyy HH:mm' } },
            },
          ],
        },
      ],
    },
    {
      name: 'emails',
      type: 'join',
      collection: 'emails',
      on: 'application',
      label: 'E-Mails',
      admin: {
        defaultColumns: ['vorlage', 'subject', 'status', 'sentAt'],
        description: 'Entwürfe hier öffnen, prüfen und über den Status senden.',
        // Refetches after save so a new draft shows up without a reload.
        components: { Field: '@/components/admin/RefreshingJoinField#RefreshingJoinField' },
      },
    },
  ],
}
