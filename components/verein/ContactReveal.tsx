'use client'

import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { useEffect, useRef, useState } from 'react'

/**
 * „Kontakt“ on a Vorstand card: a click shows the person's e-mail address
 * as a mailto link. The address arrives Base64-encoded, so it is not in the
 * HTML or the RSC payload as plain text for simple scrapers to collect.
 */
export default function ContactReveal({ encoded, name }: { encoded: string; name: string }) {
  const [email, setEmail] = useState<string | null>(null)
  const link = useRef<HTMLAnchorElement>(null)

  // The button disappears on click; keep keyboard focus on what replaces it.
  useEffect(() => {
    if (email) link.current?.focus()
  }, [email])

  if (email) {
    // Two inline blocks, so a long address breaks before the @ rather than
    // at a hyphen in the name; only a part that alone is too wide breaks inside.
    const at = email.lastIndexOf('@')
    return (
      <a
        ref={link}
        href={`mailto:${email}`}
        className="max-w-full text-[13px] text-ink hover:text-port lg:text-[15px]"
      >
        {/* Inline blocks don't inherit the link's underline; each draws its own. */}
        <span className="inline-block max-w-full underline underline-offset-2 wrap-anywhere">{email.slice(0, at)}</span>
        <span className="inline-block max-w-full underline underline-offset-2 wrap-anywhere">{email.slice(at)}</span>
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setEmail(atob(encoded))}
      aria-label={`Kontakt zu ${name} anzeigen`}
      className="-my-2 inline-flex min-h-11 items-center gap-1.5 text-[13px] font-semibold text-port transition-colors hover:text-ink lg:text-[15px]"
    >
      <EnvelopeIcon aria-hidden="true" className="h-4 w-4 lg:h-[18px] lg:w-[18px]" />
      Kontakt
    </button>
  )
}
