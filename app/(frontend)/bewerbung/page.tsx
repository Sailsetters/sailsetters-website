import type { Metadata } from 'next'

import Section from '@/components/Section'

import ApplicationForm from './ApplicationForm'

export const metadata: Metadata = {
  title: 'Sailsetter:in werden — Sailsetters',
  description:
    'Bewirb dich als Sailsetter:in und engagiere dich für Bildungsgerechtigkeit in Deutschland.',
}

export default function BewerbungPage() {
  return (
    <Section className="pt-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-blood sm:text-4xl">
          Sailsetter:in werden
        </h1>
        <p className="mt-4 text-lg text-gray-800">
          Schön, dass du dabei sein möchtest! Erzähl uns kurz etwas über dich — wir
          melden uns danach bei dir für ein Kennenlerngespräch.
        </p>
        <div className="mt-10">
          <ApplicationForm />
        </div>
      </div>
    </Section>
  )
}
