import config from '@payload-config'
import type { Metadata } from 'next'
import { getPayload } from 'payload'

import PageHeader from '@/components/ui/PageHeader'
import Struktur from '@/components/verein/Struktur'
import Werte from '@/components/verein/Werte'

export const metadata: Metadata = {
  title: 'Über uns — Sailsetters',
  description:
    'Vision, Mission und Struktur des Sailsetters e.V. – ein gemeinnütziger, studentisch geführter Verein für Bildungsgerechtigkeit in München.',
}

// Static; the team collection revalidates this page on every change.
export const revalidate = 3600

export default async function VereinPage() {
  const payload = await getPayload({ config })
  const team = await payload.find({ collection: 'team', sort: 'order', limit: 20, depth: 1 })

  return (
    <>
      <PageHeader
        eyebrow="Über uns"
        title="Studierende, die Bildung gerechter machen"
        intro="Sailsetters ist ein gemeinnütziger Verein von Studierenden der TUM und LMU. Was uns antreibt, wofür wir stehen und wer den Verein gerade führt."
      />
      <Werte />
      <Struktur team={team.docs} />
    </>
  )
}
