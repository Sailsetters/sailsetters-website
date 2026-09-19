import type { Metadata } from 'next'

import NotFound from '@/components/NotFound'

import './(frontend)/globals.css'
import { fraunces, inter } from './(frontend)/fonts'

/*
 * Unmatched URLs. The site has two root layouts — (frontend) and (payload) —
 * so Next cannot compose a 404 from a single layout; this file renders its own
 * document instead. Enabled via experimental.globalNotFound in next.config.mjs.
 */

export const metadata: Metadata = {
  title: 'Seite nicht gefunden · Sailsetters',
  robots: { index: false },
}

export default function GlobalNotFound() {
  return (
    <html lang="de" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans">
        <NotFound />
      </body>
    </html>
  )
}
