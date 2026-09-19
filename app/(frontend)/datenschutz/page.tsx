import type { Metadata } from 'next'

import PageBody from '@/components/ui/PageBody'
import PageHeader from '@/components/ui/PageHeader'
import Prose from '@/components/ui/Prose'

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
    <>
      <PageHeader eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <PageBody className="pb-20 lg:pb-28">
        <Prose>{null}</Prose>
      </PageBody>
    </>
  )
}
