import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, GlobalAfterChangeHook } from 'payload'
import { revalidatePath } from 'next/cache'

/**
 * The homepage, /projekte, /verein and /bewerbung are statically rendered
 * from Payload. Whenever projects, partners, the board or the key figures
 * change in the admin, rebuild them in place. (/bewerbung lists the current
 * projects and names a project's partner in the form.) Scripts (e.g. the seed) pass
 * `context: { disableRevalidate: true }` because there is no Next request to
 * revalidate from.
 */
const PAGES = ['/', '/projekte', '/verein', '/bewerbung']

function revalidateHome(context: Record<string, unknown>) {
  if (context?.disableRevalidate) return
  try {
    for (const path of PAGES) revalidatePath(path)
  } catch {
    // Outside a Next request (CLI, tests) there is nothing to revalidate.
  }
}

export const revalidateHomeAfterChange: CollectionAfterChangeHook = ({ doc, req }) => {
  revalidateHome(req.context)
  return doc
}

export const revalidateHomeAfterDelete: CollectionAfterDeleteHook = ({ doc, req }) => {
  revalidateHome(req.context)
  return doc
}

export const revalidateHomeAfterGlobalChange: GlobalAfterChangeHook = ({ doc, req }) => {
  revalidateHome(req.context)
  return doc
}

/** For globals that drive other pages, e.g. the Bewerbungsphase → /bewerbung. */
export const revalidateAfterGlobalChange =
  (paths: string[]): GlobalAfterChangeHook =>
  ({ doc, req }) => {
    if (!req.context?.disableRevalidate) {
      try {
        for (const path of paths) revalidatePath(path)
      } catch {
        // Outside a Next request there is nothing to revalidate.
      }
    }
    return doc
  }
