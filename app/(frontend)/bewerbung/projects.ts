import type { Project } from '@/payload-types'

/** The radio value for „Noch offen“. Stored as no project. */
export const NO_PROJECT = 'offen'

/** What the form needs to know about a current project, small enough to send to the client. */
export type ProjectOption = {
  id: number
  title: string
  tagline: string | null
  hinweis: string | null
  bestaetigung: string | null
  partner: { name: string; website: string | null } | null
}

/** Expects the project loaded with depth ≥ 1, so the partner is populated. */
export function toProjectOption(p: Project): ProjectOption {
  const partner = p.bewerbung?.partner
  return {
    id: p.id,
    title: p.title,
    tagline: p.tagline ?? null,
    hinweis: p.bewerbung?.hinweis || null,
    bestaetigung: p.bewerbung?.bestaetigung || null,
    partner:
      partner && typeof partner === 'object' ? { name: partner.name, website: partner.website ?? null } : null,
  }
}
