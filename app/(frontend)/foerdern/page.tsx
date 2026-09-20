import type { Metadata } from 'next'

import InfoCard from '@/components/ui/InfoCard'
import LinkButton from '@/components/ui/LinkButton'
import PageBody from '@/components/ui/PageBody'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = {
  title: 'Fördern · Sailsetters',
  description:
    'Sailsetters e.V. finanziert sich über Spenden. Schon ein paar Euro helfen, Projekte für Kinder und Jugendliche in München möglich zu machen.',
}

const kosten = [
  { title: 'Material für Projekte', text: 'Experimente, Werkzeug, Bücher und Arbeitsmaterial für die Kinder und Jugendlichen in unseren Havens.' },
  { title: 'Onboarding Day und Reflection Day', text: 'Die beiden Tage im Semester, an denen aus einzelnen Studierenden ein Team wird.' },
  { title: 'Website und E-Mail', text: 'Hosting, Domain und die Technik hinter Bewerbungen, Projekten und Kontakt.' },
  { title: 'Vereinsverwaltung', text: 'Konto, Vereinsregister und alles, was ein eingetragener Verein laufend braucht.' },
]

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
              Wir freuen uns über jede Unterstützung, ob einmalig ein paar Euro oder dauerhaft.
              Wenn du spenden möchtest, schreib uns kurz über das Kontaktformular. Wir melden uns
              mit allem, was du brauchst: der Bankverbindung und, wenn du magst, einer
              Zuwendungsbestätigung. Sailsetters e.V. ist als gemeinnützig anerkannt.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-col items-start gap-5 rounded-[20px] bg-paper p-6 shadow-[0_1px_2px_rgba(31,26,23,0.06)] sm:p-8">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl">Spenden</h3>
                <p className="leading-relaxed text-driftwood">
                  Schreib uns eine kurze Nachricht. Es dauert zwei Minuten, und du bekommst alles
                  Weitere von uns.
                </p>
              </div>
              <LinkButton href="/kontakt?betreff=spende">Spenden: Kontakt aufnehmen</LinkButton>
            </div>
            <div className="flex flex-col items-start gap-5 rounded-[20px] bg-dune p-6 sm:p-8">
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
