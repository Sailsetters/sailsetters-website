import type { Metadata } from 'next'

import SemesterSteps from '@/components/SemesterSteps'
import PageBody from '@/components/ui/PageBody'
import PageHeader from '@/components/ui/PageHeader'

import ApplicationForm from './ApplicationForm'

export const metadata: Metadata = {
  title: 'Sailsetter:in werden · Sailsetters',
  description:
    'Bewirb dich als Sailsetter:in und engagiere dich für Bildungsgerechtigkeit in München.',
}

export default function BewerbungPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mitmachen"
        title="Sailsetter:in werden"
        intro="Schön, dass du dabei sein möchtest. Erzähl uns kurz etwas über dich. Wir melden uns danach für ein Kennenlerngespräch."
      />

      <PageBody blob="cool-left" className="flex flex-col gap-14 pb-20 lg:gap-20 lg:pb-28">
        <section aria-labelledby="wen-wir-suchen" className="flex max-w-[760px] flex-col gap-5">
          <h2 id="wen-wir-suchen" className="text-2xl lg:text-[30px]">
            Wen wir suchen
          </h2>
          <p className="text-lg leading-relaxed">
            Motivierte Studierende, die Bildungsgerechtigkeit nicht nur gut finden, sondern etwas
            dafür tun wollen. Welches Fach du studierst, ist egal. Sailsetters lebt davon, dass
            Studierende aller Fachrichtungen zusammenarbeiten. Wichtiger ist, dass du zuverlässig
            bist und gern mit Kindern und Jugendlichen arbeitest.
          </p>
          <p className="text-lg leading-relaxed">
            Zeitlich sind das im Schnitt ein bis zwei Stunden pro Woche. Wie sich das verteilt,
            hängt vom Projekt ab: Manche haben aktivere Phasen, dazwischen ist es ruhiger. In
            der Prüfungszeit sind wir bewusst zurückhaltend: Niemand soll sich zwischen Klausuren
            und Sailsetters entscheiden müssen.
          </p>
          <p className="text-lg leading-relaxed">
            Erfahrung brauchst du keine. Verantwortung bekommst du trotzdem, und ein Team, das
            dich dabei nicht allein lässt.
          </p>
          <p className="text-lg leading-relaxed">
            Nicht jede:r muss in ein Projekt. Wer lieber Erfahrung in unseren Taskforces sammeln
            will, in Marketing, Outreach, Community oder Recruiting, ist genauso willkommen, auch
            ohne aktive Projektarbeit. Schreib es einfach in deine Motivation.
          </p>
        </section>

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
      </PageBody>
    </>
  )
}
