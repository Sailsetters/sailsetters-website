'use server'

import { randomUUID } from 'crypto'

import config from '@payload-config'
import { getPayload } from 'payload'

import {
  optionalPdf,
  optionalText,
  requiredConsent,
  requiredEmail,
  requiredText,
  type FormState,
} from '@/lib/forms'

export async function submitApplication(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const errors: Record<string, string> = {}

  const name = requiredText(formData, 'name', 'Name', errors)
  const email = requiredEmail(formData, 'email', errors)
  const motivation = requiredText(formData, 'motivation', 'Motivation', errors)
  const consent = requiredConsent(formData, errors)
  const cv = await optionalPdf(formData, 'cv', errors)

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      message: 'Bitte überprüfe die markierten Felder.',
      fieldErrors: errors,
    }
  }

  const payload = await getPayload({ config })
  let cvId: number | undefined

  try {
    if (cv) {
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
    }
    await payload.create({
      collection: 'applications',
      data: {
        name,
        email,
        university: optionalText(formData, 'university'),
        studySubject: optionalText(formData, 'studySubject'),
        semester: optionalText(formData, 'semester'),
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
