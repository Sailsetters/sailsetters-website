/**
 * Email templates use `{{name}}`-style placeholders. The ones we know are
 * filled in when a draft is created; anything left over blocks sending, so
 * nobody can accidentally mail an applicant a literal `{{meetingLink}}`.
 */
const PLACEHOLDER = /\{\{\s*([a-zA-Z]+)\s*\}\}/g

export function renderTemplate(
  text: string,
  values: Record<string, string | undefined>,
): string {
  return text.replace(PLACEHOLDER, (match, key: string) => values[key] ?? match)
}

export function unresolvedPlaceholders(text: string): string[] {
  return Array.from(new Set(Array.from(text.matchAll(PLACEHOLDER), (m) => m[0])))
}
