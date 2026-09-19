import type { ReactNode } from 'react'

/**
 * Long-form legal text (Impressum, Satzung, Datenschutz). Headings come
 * from the base layer (Fraunces 600); this only sets measure and rhythm.
 */
export default function Prose({ children }: { children: ReactNode }) {
  return (
    <article className="flex max-w-[760px] flex-col gap-4 leading-relaxed [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:leading-tight [&_h2:first-child]:mt-0 [&_h3]:mt-4 [&_h3]:text-xl [&_p]:m-0 [&_a]:underline [&_a:hover]:text-port">
      {children}
    </article>
  )
}
