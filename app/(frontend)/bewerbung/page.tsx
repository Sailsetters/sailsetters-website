import config from '@payload-config'
import type { Metadata } from 'next'
import { getPayload } from 'payload'

import SemesterSteps from '@/components/SemesterSteps'
import PageBody from '@/components/ui/PageBody'
import PageHeader from '@/components/ui/PageHeader'
import { bewerbungsphase, formatDay } from '@/lib/bewerbungsphase'
import { verein } from '@/lib/verein'

import ApplicationForm from './ApplicationForm'

export const metadata: Metadata = {
  title: 'Sailsetter:in werden · Sailsetters',
  description:
    'Bewirb dich als Sailsetter:in und engagiere dich für Bildungsgerechtigkeit in München.',
}

// Static, rebuilt hourly so the intake windows open and close on their own;
// the Bewerbungsphase global also revalidates this page when saved.
export const revalidate = 3600

export default async function BewerbungPage() {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'bewerbungsphase' })
  const phase = bewerbungsphase(settings.modus)

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
            dich dabei nicht allein lässt. Das gilt auch für eigene Ideen: Sailsetters lebt von
            Studierenden, die neue Projekte anstoßen, und wir unterstützen sie auf dem Weg.
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
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 id="formular" className="text-2xl lg:text-[30px]">
              Deine Bewerbung
            </h2>
            {phase.open && phase.closesOn && (
              <span className="text-[15px] text-driftwood">
                Bewerbungsphase bis {formatDay(phase.closesOn)}
              </span>
            )}
          </div>
          {phase.open ? (
            <div className="rounded-[20px] bg-paper p-6 shadow-[0_1px_2px_rgba(31,26,23,0.06)] sm:p-8 lg:p-12">
              <ApplicationForm />
            </div>
          ) : (
            <div role="status" className="flex flex-col gap-4 rounded-[20px] bg-dune p-7 lg:p-10">
              <h3 className="text-2xl">Die Bewerbungsphase ist derzeit geschlossen</h3>
              <p className="max-w-[720px] text-lg leading-relaxed">
                Wir nehmen zweimal im Jahr neue Sailsetter:innen auf, jeweils vom 1. bis 21. Oktober
                und vom 1. bis 21. April.
                {phase.nextOpensOn && <> Die nächste Bewerbungsphase startet am {formatDay(phase.nextOpensOn)}.</>}
              </p>
              {settings.hinweis && (
                <p className="max-w-[720px] leading-relaxed whitespace-pre-line">{settings.hinweis}</p>
              )}
              <p className="text-[15px] text-driftwood">
                Fragen vorab?{' '}
                <a href={`mailto:${verein.email}`} className="underline hover:text-port">
                  {verein.email}
                </a>
              </p>
            </div>
          )}
        </section>
      </PageBody>
    </>
  )
}
