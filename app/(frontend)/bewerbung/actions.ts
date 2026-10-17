'use server'

import { randomUUID } from 'crypto'

import config from '@payload-config'
import { getPayload } from 'payload'

import { bewerbungsphase } from '@/lib/bewerbungsphase'
import {
  optionalText,
  requiredAge,
  requiredConsent,
  requiredEmail,
  requiredPdf,
  requiredText,
  type FormState,
} from '@/lib/forms'

import { NO_PROJECT } from './projects'

export async function submitApplication(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const errors: Record<string, string> = {}

  const name = requiredText(formData, 'name', 'Name', errors)
  const email = requiredEmail(formData, 'email', errors)
  const age = requiredAge(formData, 'age', errors)
  const motivation = requiredText(formData, 'motivation', 'Motivation', errors)
  const consent = requiredConsent(formData, errors)
  const cv = await requiredPdf(formData, 'cv', 'Lebenslauf', errors)

  const payload = await getPayload({ config })

  // The Wunschprojekt: a current project or „Noch offen“ (stored as none).
  // The rules a project sets in its `bewerbung` group are checked here as
  // well as in the form, since the form is only the client's word for it.
  const choice = String(formData.get('project') ?? '')
  let projectId: number | undefined
  let partnerConsent = false
  if (!choice) {
    errors.project = 'Bitte wähl ein Projekt oder „Noch offen“.'
  } else if (choice !== NO_PROJECT) {
    const project = /^\d+$/.test(choice)
      ? await payload.findByID({ collection: 'projects', id: Number(choice), depth: 0, disableErrors: true })
      : null
    if (!project || project.status !== 'aktiv') {
      errors.project = 'Dieses Projekt steht nicht mehr zur Auswahl. Bitte wähl ein anderes.'
    } else {
      projectId = project.id
      if (project.bewerbung?.bestaetigung && formData.get('projectConfirmation') !== 'on') {
        errors.projectConfirmation = 'Bitte bestätige das, um dich für dieses Projekt zu bewerben.'
      }
      if (project.bewerbung?.partner) {
        partnerConsent = formData.get('partnerConsent') === 'on'
        if (!partnerConsent) {
          errors.partnerConsent =
            'Für dieses Projekt stellen wir den Kontakt zu unserem Partner her. Ohne deine Einwilligung dürfen wir Name und E-Mail-Adresse nicht weitergeben.'
        }
      }
    }
  }

  // A missing cv always comes with an error; `!cv` is only for the type checker.
  if (Object.keys(errors).length > 0 || !cv) {
    return {
      status: 'error',
      message: 'Bitte überprüfe die markierten Felder.',
      fieldErrors: errors,
    }
  }

  // The page hides the form while closed; this covers a stale tab or a direct post.
  const phase = await payload.findGlobal({ slug: 'bewerbungsphase' })
  if (!bewerbungsphase(phase.modus).open) {
    return {
      status: 'error',
      message: 'Die Bewerbungsphase ist derzeit geschlossen. Schau zur nächsten Bewerbungsphase wieder vorbei.',
    }
  }

  let cvId: number | undefined

  try {
    // Stored under a random name: the original one is usually the
    // applicant's own name and would end up in URLs, logs and blob keys.
    const uploaded = await payload.create({
      collection: 'application-files',
      data: {},
      file: {
        data: cv.data,
        mimetype: 'application/pdf',
        name: `lebenslauf-${randomUUID()}.pdf`,
        size: cv.data.length,
      },
    })
    cvId = uploaded.id
    await payload.create({
      collection: 'applications',
      data: {
        name,
        email,
        age,
        university: optionalText(formData, 'university'),
        studySubject: optionalText(formData, 'studySubject'),
        semester: optionalText(formData, 'semester'),
        project: projectId,
        partnerConsent,
        motivation,
        availability: optionalText(formData, 'availability'),
        cv: cvId,
        consent,
        status: 'neu',
      },
    })
  } catch (error) {
    // Don't leave an orphaned CV behind if the application itself failed.
    if (cvId) {
      await payload.delete({ collection: 'application-files', id: cvId }).catch(() => {})
    }
    // The applicant should never see a stack trace, but we do want it in the logs.
    console.error('Bewerbung konnte nicht gespeichert werden:', error)
    return {
      status: 'error',
      message:
        'Deine Bewerbung konnte gerade nicht gespeichert werden. Bitte versuche es später noch einmal oder schreib uns eine E-Mail.',
    }
  }

  return {
    status: 'success',
    message: 'Danke für deine Bewerbung! Wir melden uns bei dir.',
  }
}
