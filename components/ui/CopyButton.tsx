'use client'

import { CheckIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

/**
 * Copies `value` to the clipboard and confirms for two seconds. If the
 * Clipboard API is unavailable or refused, nothing happens: the text it
 * copies is always shown next to it, so it can still be selected by hand.
 */
export default function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
    } catch {
      // See above: the visible text is the fallback.
    }
  }

  const Icon = copied ? CheckIcon : DocumentDuplicateIcon
  return (
    <button
      type="button"
      onClick={copy}
      className="-my-2 inline-flex min-h-11 items-center gap-1.5 text-[15px] font-semibold text-port transition-colors hover:text-ink"
    >
      <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
      {/* Announced when it changes, so screen readers hear the confirmation. */}
      <span aria-live="polite">{copied ? 'Kopiert' : label}</span>
    </button>
  )
}
