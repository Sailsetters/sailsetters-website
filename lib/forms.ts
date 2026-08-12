export type FormState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  fieldErrors?: Record<string, string>
}

export const initialFormState: FormState = { status: 'idle' }

export function requiredText(
  formData: FormData,
  field: string,
  label: string,
  errors: Record<string, string>,
): string {
  const value = String(formData.get(field) ?? '').trim()
  if (!value) errors[field] = `${label} ist ein Pflichtfeld.`
  return value
}

export function optionalText(formData: FormData, field: string): string | undefined {
  const value = String(formData.get(field) ?? '').trim()
  return value || undefined
}

export function requiredEmail(
  formData: FormData,
  field: string,
  errors: Record<string, string>,
): string {
  const value = String(formData.get(field) ?? '').trim()
  if (!value) {
    errors[field] = 'E-Mail ist ein Pflichtfeld.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    errors[field] = 'Bitte gib eine gültige E-Mail-Adresse an.'
  }
  return value
}

/**
 * The consent checkbox is a DSGVO requirement, not a nicety — without it we are
 * not allowed to store the submission at all.
 */
export function requiredConsent(
  formData: FormData,
  errors: Record<string, string>,
): boolean {
  const given = formData.get('consent') === 'on'
  if (!given) {
    errors.consent = 'Ohne deine Einwilligung dürfen wir die Daten nicht speichern.'
  }
  return given
}
