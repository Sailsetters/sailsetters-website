import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, GlobalAfterChangeHook } from 'payload'
import { revalidatePath } from 'next/cache'

/**
 * The homepage is statically rendered and shows projects, partners, the
 * board and the key figures. Whenever one of those changes in the admin,
 * rebuild it in place. Scripts (e.g. the seed) pass
 * `context: { disableRevalidate: true }` because there is no Next request to
 * revalidate from.
 */
function revalidateHome(context: Record<string, unknown>) {
  if (context?.disableRevalidate) return
  try {
    revalidatePath('/')
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
