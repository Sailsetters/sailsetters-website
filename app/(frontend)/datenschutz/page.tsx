import type { Metadata } from 'next'

import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'Datenschutz — Sailsetters',
  description: 'Informationen zur Verarbeitung personenbezogener Daten auf sailsetters.de.',
}

/**
 * Platzhalter. Der Text der Datenschutzerklärung wird noch ergänzt.
 *
 * Die Route bleibt bestehen, weil Footer und Einwilligungs-Checkbox der
 * Formulare hierher verlinken.
 */
export default function DatenschutzPage() {
  return (
    <Section className="pt-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl text-ink sm:text-4xl">Datenschutz</h1>
      </div>
    </Section>
  )
}
