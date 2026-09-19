import type { Metadata } from 'next'

import Container from '@/components/ui/Container'
import PageHeader from '@/components/ui/PageHeader'
import Prose from '@/components/ui/Prose'
import { verein } from '@/lib/verein'

export const metadata: Metadata = {
  title: 'Impressum — Sailsetters',
  description: 'Anbieterkennzeichnung des Sailsetters e.V.',
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-[200px_minmax(0,1fr)] sm:gap-4">
      <dt className="text-driftwood">{label}</dt>
      <dd className="m-0">{children}</dd>
    </div>
  )
}

export default function Impressum() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Impressum" />
      <Container className="pb-20 lg:pb-28">
        <Prose>
          <h2>Angaben gemäß § 5 DDG</h2>
          <dl className="m-0 flex flex-col gap-3">
            <Row label="Anbieter">
              {verein.name}
              <br />
              {verein.street}
              <br />
              {verein.city}
            </Row>
            <Row label="Registergericht">Amtsgericht München</Row>
            <Row label="Registernummer">VR 210317</Row>
            <Row label="Vertreten durch">Johannes Trahasch, Vorstandsvorsitzender</Row>
          </dl>

          <h2>Kontakt</h2>
          <dl className="m-0 flex flex-col gap-3">
            <Row label="Telefon">+49 176 32369363</Row>
            <Row label="Telefax">+49 89 54645686</Row>
            <Row label="E-Mail">
              <a href={`mailto:${verein.email}`}>{verein.email}</a>
            </Row>
          </dl>

          <h2>Redaktionell verantwortlich</h2>
          <p>
            Johannes Trahasch
            <br />
            c/o {verein.name}
            <br />
            {verein.street}
            <br />
            {verein.city}
          </p>

          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
            bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr" className="break-words">
              https://ec.europa.eu/consumers/odr
            </a>
            . Unsere E-Mail-Adresse findest du oben im Impressum.
          </p>

          <h3>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h3>
          <p>
            Wir sind nicht verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </Prose>
      </Container>
    </>
  )
}
