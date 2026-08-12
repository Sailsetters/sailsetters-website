'use server'

import config from '@payload-config'
import { getPayload } from 'payload'

import {
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

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      message: 'Bitte überprüfe die markierten Felder.',
      fieldErrors: errors,
    }
  }

  try {
    const payload = await getPayload({ config })
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
        consent,
        status: 'neu',
      },
    })
  } catch (error) {
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
