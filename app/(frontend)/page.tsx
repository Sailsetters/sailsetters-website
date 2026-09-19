import config from '@payload-config'
import { getPayload } from 'payload'

import Hero from '@/components/home/Hero'
import Mitmachen from '@/components/home/Mitmachen'
import PartnerSection from '@/components/home/Partner'
import Projekte from '@/components/home/Projekte'
import Semester from '@/components/home/Semester'
import Verein from '@/components/home/Verein'
import Warum from '@/components/home/Warum'
import WasWirTun from '@/components/home/WasWirTun'

/*
 * Rendered statically. Projects, partners, the board and the key figures come
 * from Payload; their collections call revalidatePath('/') on every change,
 * so the page is rebuilt when someone saves in the admin. The hourly
 * revalidation is a safety net only.
 */
export const revalidate = 3600

export default async function Home() {
  const payload = await getPayload({ config })
  const [projects, partners, team, startseite] = await Promise.all([
    payload.find({
      collection: 'projects',
      where: { status: { equals: 'aktiv' } },
      sort: 'order',
      limit: 100,
      depth: 0,
    }),
    payload.find({ collection: 'partners', sort: 'order', limit: 100, depth: 1 }),
    payload.find({ collection: 'team', sort: 'order', limit: 20, depth: 1 }),
    payload.findGlobal({ slug: 'startseite' }),
  ])

  return (
    <>
      <Hero />
      <Warum />
      <WasWirTun
        aktiveMitglieder={startseite.kennzahlen.aktiveMitglieder}
        projekteProSemester={startseite.kennzahlen.projekteProSemester}
        partnerCount={partners.totalDocs}
      />
      <Projekte projects={projects.docs} />
      <PartnerSection partners={partners.docs} />
      <Semester />
      <Verein team={team.docs} />
      <Mitmachen />
    </>
  )
}
