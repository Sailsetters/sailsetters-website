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
export function requiredAge(
  formData: FormData,
  field: string,
  errors: Record<string, string>,
): number | undefined {
  const raw = String(formData.get(field) ?? '').trim()
  const age = Number(raw)
  if (!raw || !Number.isInteger(age) || age < 16 || age > 99) {
    errors[field] = 'Bitte gib dein Alter an (16 bis 99).'
    return undefined
  }
  return age
}

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

export const MAX_PDF_BYTES = 5 * 1024 * 1024

export type UploadedPdf = { name: string; data: Buffer }

/**
 * An optional PDF from a file input. Checks type, size and the PDF magic
 * bytes — the browser's MIME type is only a hint. Returns undefined when no
 * file was chosen.
 */
export async function optionalPdf(
  formData: FormData,
  field: string,
  errors: Record<string, string>,
): Promise<UploadedPdf | undefined> {
  const file = formData.get(field)
  if (!(file instanceof File) || file.size === 0) return undefined

  if (file.size > MAX_PDF_BYTES) {
    errors[field] = 'Die Datei ist zu groß. Bitte maximal 5 MB.'
    return undefined
  }
  const data = Buffer.from(await file.arrayBuffer())
  // Same structural check Payload applies on save, so the applicant gets a
  // clear message instead of a generic "could not be saved".
  const head = data.subarray(0, 8).toString('latin1')
  const tail = data.subarray(Math.max(0, data.length - 1024)).toString('latin1')
  const looksLikePdf = head.startsWith('%PDF-') && tail.includes('%%EOF') && tail.includes('xref')
  if (!looksLikePdf || !/\.pdf$/i.test(file.name)) {
    errors[field] = 'Bitte lade den Lebenslauf als PDF hoch.'
    return undefined
  }
  // Scripts, launch actions and embedded files have no place in a CV. This
  // only sees uncompressed object dictionaries, so it is a first filter, not
  // a scanner — the file is also served as a download, never rendered inline.
  const raw = data.toString('latin1')
  if (/\/(JavaScript|JS|Launch|EmbeddedFile)\b/.test(raw)) {
    errors[field] = 'Die PDF enthält aktive Inhalte (Skripte oder Anhänge). Bitte eine einfache PDF hochladen.'
    return undefined
  }
  return { name: file.name, data }
}
