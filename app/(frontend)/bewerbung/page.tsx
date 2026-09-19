import type { Metadata } from 'next'

import SemesterSteps from '@/components/SemesterSteps'
import Container from '@/components/ui/Container'
import PageHeader from '@/components/ui/PageHeader'

import ApplicationForm from './ApplicationForm'

export const metadata: Metadata = {
  title: 'Sailsetter:in werden — Sailsetters',
  description:
    'Bewirb dich als Sailsetter:in und engagiere dich für Bildungsgerechtigkeit in München.',
}

export default function BewerbungPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mitmachen"
        title="Sailsetter:in werden"
        intro="Schön, dass du dabei sein möchtest. Erzähl uns kurz etwas über dich – wir melden uns danach für ein Kennenlerngespräch."
      />

      <Container className="flex flex-col gap-14 pb-20 lg:gap-20 lg:pb-28">
        <section aria-labelledby="ablauf" className="flex flex-col gap-8">
          <h2 id="ablauf" className="text-2xl lg:text-[30px]">
            So geht es weiter
          </h2>
          <SemesterSteps />
        </section>

        <section aria-labelledby="formular" className="flex flex-col gap-6">
          <h2 id="formular" className="text-2xl lg:text-[30px]">
            Deine Bewerbung
          </h2>
          <div className="rounded-[20px] bg-paper p-6 shadow-[0_1px_2px_rgba(31,26,23,0.06)] sm:p-8 lg:p-12">
            <ApplicationForm />
          </div>
        </section>
      </Container>
    </>
  )
}
