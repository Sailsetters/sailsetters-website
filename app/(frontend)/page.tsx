import config from '@payload-config'
import { getPayload } from 'payload'

import Hero from '@/components/home/Hero'
import Kennzahlen from '@/components/home/Kennzahlen'
import Mitmachen from '@/components/home/Mitmachen'
import PartnerSection from '@/components/home/Partner'
import ProjekteTeaser from '@/components/home/ProjekteTeaser'
import Warum from '@/components/home/Warum'

/*
 * Rendered statically. Projects, partners and the key figures come from
 * Payload; their collections call revalidatePath('/') on every change, so
 * the page is rebuilt when someone saves in the admin. The hourly
 * revalidation is a safety net only.
 */
export const revalidate = 3600

const TEASER_COUNT = 3

export default async function Home() {
  const payload = await getPayload({ config })
  const [projects, partners, startseite] = await Promise.all([
    payload.find({
      collection: 'projects',
      where: { status: { equals: 'aktiv' } },
      sort: 'order',
      limit: 100,
      depth: 0,
    }),
    payload.find({ collection: 'partners', sort: 'order', limit: 100, depth: 1 }),
    payload.findGlobal({ slug: 'startseite' }),
  ])

  // The ones marked "Auf der Startseite zeigen", else the first three by order.
  const featured = projects.docs.filter((p) => p.featured)
  const teaser = (featured.length > 0 ? featured : projects.docs).slice(0, TEASER_COUNT)

  return (
    <>
      <Hero />
      <Warum />
      <Kennzahlen
        aktiveMitglieder={startseite.kennzahlen.aktiveMitglieder}
        projekteProSemester={startseite.kennzahlen.projekteProSemester}
        partnerCount={partners.totalDocs}
      />
      <ProjekteTeaser projects={teaser} total={projects.totalDocs} />
      <PartnerSection partners={partners.docs} />
      <Mitmachen />
    </>
  )
}
