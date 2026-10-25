import config from '@payload-config'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getPayload } from 'payload'

import ProjectCard from '@/components/projects/ProjectCard'
import SemesterSteps from '@/components/SemesterSteps'
import PageBody from '@/components/ui/PageBody'
import PageHeader from '@/components/ui/PageHeader'
import { berlinToday, bewerbungsphase, formatDay } from '@/lib/bewerbungsphase'
import { verein } from '@/lib/verein'

import ApplicationForm from './ApplicationForm'
import { toProjectOption } from './projects'

export const metadata: Metadata = {
  title: 'Sailsetter:in werden · Sailsetters',
  description:
    'Bewirb dich als Sailsetter:in und engagiere dich für Bildungsgerechtigkeit in München.',
}

// Static, rebuilt hourly so the intake windows open and close on their own;
// the Bewerbungsphase global, projects and partners also revalidate this page
// when saved.
export const revalidate = 3600

export default async function BewerbungPage() {
  const payload = await getPayload({ config })
  const [settings, projects] = await Promise.all([
    payload.findGlobal({ slug: 'bewerbungsphase' }),
    // depth 1 for the partner a project passes applications on to.
    payload.find({
      collection: 'projects',
      where: { status: { equals: 'aktiv' } },
      sort: 'order',
      limit: 100,
      depth: 1,
    }),
  ])
  const phase = bewerbungsphase(settings.modus)
  const current = projects.docs
  // Autumn 2026 intake, kept open past the fixed window via the global. The
  // note hides itself after the deadline so it cannot resurface in April.
  const today = berlinToday()
  const herbst2026 = today.y * 10000 + today.m * 100 + today.d <= 20261101

  return (
    <>
      <PageHeader
        eyebrow="Mitmachen"
        title="Sailsetter:in werden"
        intro="Schön, dass du dabei sein möchtest. Erzähl uns kurz etwas über dich und welches Projekt dich am meisten reizt. Wir melden uns danach bei dir."
      />

      <PageBody blob="cool-left" className="flex flex-col gap-14 pb-20 lg:gap-20 lg:pb-28">
        <section aria-labelledby="wen-wir-suchen" className="flex max-w-[760px] flex-col gap-5">
          <h2 id="wen-wir-suchen" className="text-2xl lg:text-[30px]">
            Wen wir suchen
          </h2>
          <p className="text-lg leading-relaxed">
            Motivierte Studierende aller Fachrichtungen, die für Bildungsgerechtigkeit etwas tun
            wollen. Erfahrung brauchst du keine. Wichtig ist, dass du zuverlässig bist und gern mit
            Kindern und Jugendlichen arbeitest. Verantwortung bekommst du trotzdem, und ein Team,
            das dich dabei nicht allein lässt.
          </p>
          <p className="text-lg leading-relaxed">
            Im Schnitt sind das ein bis zwei Stunden pro Woche, in der Prüfungszeit meist weniger.
            Patenschaften leben dagegen von einem festen Termin jede Woche. Was dein Wunschprojekt
            verlangt, steht unten beim Projekt.
          </p>
          <p className="text-lg leading-relaxed">
            Lieber in eine unserer{' '}
            <Link href="/verein#taskforces" className="underline hover:text-port">
              Taskforces
            </Link>{' '}
            oder ein eigenes Projekt anstoßen? Auch dafür ist Platz. Wähl im Formular dann „Noch
            offen“.
          </p>
        </section>

        {current.length > 0 && (
          <section aria-labelledby="projekte" className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 id="projekte" className="text-2xl lg:text-[30px]">
                Unsere aktuellen Projekte
              </h2>
              <p className="max-w-[640px] text-lg leading-relaxed text-driftwood">
                In deiner Bewerbung gibst du an, welches davon dich am meisten interessiert.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {current.map((p) => (
                <ProjectCard key={p.id} project={p} withHinweis />
              ))}
            </div>
          </section>
        )}

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
          {phase.open && herbst2026 && (
            <p className="max-w-[720px] text-lg leading-relaxed">
              Die Bewerbungsphase endet am 1. November. Der Onboarding Day findet am Donnerstag,
              5. November, statt.
            </p>
          )}
          {phase.open ? (
            <div className="rounded-[20px] bg-paper p-6 shadow-[0_1px_2px_rgba(31,26,23,0.06)] sm:p-8 lg:p-12">
              <ApplicationForm projects={current.map(toProjectOption)} />
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
