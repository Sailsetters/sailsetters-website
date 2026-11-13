import type { Metadata } from 'next'

import CopyButton from '@/components/ui/CopyButton'
import InfoCard from '@/components/ui/InfoCard'
import LinkButton from '@/components/ui/LinkButton'
import PageBody from '@/components/ui/PageBody'
import PageHeader from '@/components/ui/PageHeader'
import { verein } from '@/lib/verein'

export const metadata: Metadata = {
  title: 'Fördern · Sailsetters',
  description:
    'Sailsetters e.V. finanziert sich über Spenden. Schon ein paar Euro helfen, Projekte für Kinder und Jugendliche in München möglich zu machen.',
}

const kosten = [
  { title: 'Material für Projekte', text: 'Experimente, Werkzeug, Bücher und Arbeitsmaterial für die Kinder und Jugendlichen in unseren Havens.' },
  { title: 'Versicherungen und Vereinsregister', text: 'Versicherungen, damit bei unseren Projekten alle abgesichert sind, und die Eintragungen ins Vereinsregister, etwa wenn ein neuer Vorstand gewählt wird.' },
  { title: 'Website und E-Mail', text: 'Hosting, Domain und die Technik hinter Bewerbungen, Projekten und Kontakt.' },
  { title: 'Vereinsverwaltung', text: 'Kontoführung und alles, was ein eingetragener Verein sonst laufend braucht.' },
]

const { bank } = verein

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-[130px_minmax(0,1fr)] sm:gap-4">
      <dt className="text-driftwood">{label}</dt>
      <dd className="m-0">{children}</dd>
    </div>
  )
}

export default function FoerdernPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fördern"
        title="Mit ein paar Euro viel bewegen"
        intro="Sailsetters arbeitet ehrenamtlich, aber nicht kostenlos. Wir finanzieren uns über Spenden, und jeder Betrag hilft: auch ein kleiner."
      />

      <PageBody blob="warm-right" className="flex flex-col gap-14 pb-20 lg:gap-20 lg:pb-28">
        <section aria-labelledby="wofuer" className="flex flex-col gap-8">
          <div className="flex max-w-[760px] flex-col gap-4">
            <h2 id="wofuer" className="text-2xl lg:text-[30px]">
              Wofür wir Geld brauchen
            </h2>
            <p className="text-lg leading-relaxed">
              Unsere Sailsetter:innen arbeiten unbezahlt. Was Geld kostet, ist alles drumherum: die
              Infrastruktur, die Projekte überhaupt möglich macht.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {kosten.map((k) => (
              <InfoCard key={k.title} title={k.title} text={k.text} />
            ))}
          </ul>
        </section>

        <section aria-labelledby="spenden" className="flex flex-col gap-8">
          <div className="flex max-w-[760px] flex-col gap-4">
            <h2 id="spenden" className="text-2xl lg:text-[30px]">
              So kannst du unterstützen
            </h2>
            <p className="text-lg leading-relaxed">
              Wir freuen uns über jede Unterstützung, ob einmalig ein paar Euro oder regelmäßig per
              Dauerauftrag. Am einfachsten überweist du direkt auf unser Vereinskonto.
              Sailsetters e.V. ist als gemeinnützig anerkannt.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-col items-start gap-6 rounded-[20px] bg-paper p-6 shadow-[0_1px_2px_rgba(31,26,23,0.06)] sm:p-8">
              <h3 className="text-xl">Spendenkonto</h3>
              <dl className="m-0 flex w-full flex-col gap-3">
                <Row label="Kontoinhaber">{verein.name}</Row>
                <Row label="IBAN">
                  <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span className="font-semibold tabular-nums">{bank.iban}</span>
                    <CopyButton value={bank.iban.replaceAll(' ', '')} label="IBAN kopieren" />
                  </span>
                </Row>
                <Row label="BIC">{bank.bic}</Row>
                <Row label="Bank">{bank.name}</Row>
              </dl>
              <p className="leading-relaxed text-driftwood">
                Du brauchst eine Zuwendungsbestätigung oder hast eine Frage zu deiner Spende?
                Schreib uns kurz, wir melden uns.
              </p>
              <LinkButton href="/kontakt?betreff=spende">Spenden: Kontakt aufnehmen</LinkButton>
            </div>
            <div className="flex flex-col items-start gap-5 self-start rounded-[20px] bg-dune p-6 sm:p-8">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl">Mehr als eine Spende?</h3>
                <p className="leading-relaxed text-driftwood">
                  Unternehmen und Stiftungen, die Sailsetters dauerhaft fördern möchten, sind bei
                  unserer Outreach-Taskforce richtig.
                </p>
              </div>
              <LinkButton href="/kontakt?betreff=foerderung" variant="secondary">
                Förderung anfragen
              </LinkButton>
            </div>
          </div>
        </section>
      </PageBody>
    </>
  )
}
