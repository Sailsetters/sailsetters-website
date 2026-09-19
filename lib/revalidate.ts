import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, GlobalAfterChangeHook } from 'payload'
import { revalidatePath } from 'next/cache'

/**
 * The homepage, /projekte and /verein are statically rendered from Payload.
 * Whenever projects, partners, the board or the key figures change in the
 * admin, rebuild them in place. Scripts (e.g. the seed) pass
 * `context: { disableRevalidate: true }` because there is no Next request to
 * revalidate from.
 */
const PAGES = ['/', '/projekte', '/verein']

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
