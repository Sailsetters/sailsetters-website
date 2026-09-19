'use client'

import type { JoinFieldClientComponent } from 'payload'

import {
  JoinField,
  useConfig,
  useDocumentEvents,
  useDocumentInfo,
  useField,
} from '@payloadcms/ui'
import { useEffect, useState } from 'react'

/**
 * Payload's join field loads its table once and never refetches when the
 * parent document is saved. On a Bewerbung that means the email draft created
 * by a status change only shows up after a page reload. This wrapper refetches
 * the joined documents after each save of *this* document and remounts the
 * table with the fresh data.
 */
export const RefreshingJoinField: JoinFieldClientComponent = (props) => {
  const { path } = props
  const { config } = useConfig()
  const { collectionSlug, id } = useDocumentInfo()
  const { mostRecentUpdate } = useDocumentEvents()
  const { setValue } = useField({ path })
  const [generation, setGeneration] = useState(0)

  useEffect(() => {
    const isThisDocument =
      mostRecentUpdate &&
      id &&
      mostRecentUpdate.entitySlug === collectionSlug &&
      String(mostRecentUpdate.id) === String(id)
    if (!isThisDocument) return

    let cancelled = false
    fetch(`${config.serverURL}${config.routes.api}/${collectionSlug}/${id}?depth=1`, {
      credentials: 'include',
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((doc) => {
        if (cancelled || !doc) return
        // Second argument: don't mark the form as modified — nothing the user
        // typed has changed, we're only replacing what the table displays.
        setValue(doc[path], true)
        setGeneration((n) => n + 1)
      })
      .catch(() => {
        // Leave the stale table in place; a reload still shows the drafts.
      })
    return () => {
      cancelled = true
    }
    // `mostRecentUpdate` changes identity on every save, which is the trigger.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mostRecentUpdate])

  return <JoinField key={generation} {...props} />
}
