import Image from 'next/image'
import Link from 'next/link'

/**
 * The 404 content, without <html>/<body>. Rendered by app/global-not-found.tsx
 * for unmatched URLs and by app/(frontend)/not-found.tsx for notFound() calls.
 */
export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-sand px-4">
      <Image
        src="/blob_cool_a.png"
        alt=""
        width={654}
        height={828}
        className="pointer-events-none absolute -right-24 -top-24 w-[60vw] max-w-2xl opacity-20"
        priority
      />
      <div className="relative flex flex-col items-center text-center">
        <h1 className="mb-4 text-7xl text-ink sm:text-8xl">404</h1>
        <p className="mb-8 max-w-md text-xl text-driftwood">
          Diese Seite gibt es nicht – vielleicht ist sie in See gestochen.
        </p>
        <Link
          href="/"
          className="rounded-full bg-port px-6 py-3 text-paper transition-colors duration-200 hover:bg-ink"
        >
          Zur Startseite
        </Link>
      </div>
    </section>
  )
}
