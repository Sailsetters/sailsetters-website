'use server'

import config from '@payload-config'
import { getPayload } from 'payload'

import {
  requiredConsent,
  requiredEmail,
  requiredText,
  type FormState,
} from '@/lib/forms'

export async function submitContact(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const errors: Record<string, string> = {}

  const name = requiredText(formData, 'name', 'Name', errors)
  const email = requiredEmail(formData, 'email', errors)
  const subject = requiredText(formData, 'subject', 'Betreff', errors)
  const message = requiredText(formData, 'message', 'Nachricht', errors)
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
      collection: 'contact-submissions',
      data: { name, email, subject, message, consent, status: 'neu' },
    })
  } catch (error) {
    console.error('Kontaktanfrage konnte nicht gespeichert werden:', error)
    return {
      status: 'error',
      message:
        'Deine Nachricht konnte gerade nicht gesendet werden. Bitte versuche es später noch einmal.',
    }
  }

  return {
    status: 'success',
    message: 'Danke für deine Nachricht! Wir melden uns so bald wie möglich.',
  }
}
