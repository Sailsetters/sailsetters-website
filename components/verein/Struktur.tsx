import Image from 'next/image'
import Link from 'next/link'

import MediaImage from '@/components/MediaImage'
import Blob from '@/components/ui/Blob'
import Container from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Team } from '@/payload-types'

const organe = [
  { title: 'Mitgliederversammlung', text: 'Alle aktiven Mitglieder. Wählt den Vorstand, beschließt Haushalt und Satzung.' },
  { title: 'Vorstand', text: 'Aktive Mitglieder, für ein Jahr gewählt. Vertritt den Verein und führt die Geschäfte.' },
  { title: 'Projektteams', text: 'Sailsetter:innen, die ein Projekt über ein Semester gemeinsam tragen.' },
]

function initials(name: string) {
  return name
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')
}

function Arrow() {
  return (
    <span aria-hidden="true" className="flex justify-center text-port">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-90 md:rotate-0">
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
      </svg>
    </span>
  )
}

/** Organe, Vorstand und Teamfoto. */
export default function Struktur({ team }: { team: Team[] }) {
  return (
    <section id="vorstand" className="relative overflow-hidden bg-dune py-16 lg:py-24">
      <Blob name="cool-a" className="-bottom-40 -left-56 w-[440px] lg:-bottom-64 lg:-left-72 lg:w-[720px]" />
      <Container className="relative flex flex-col gap-10 lg:gap-14">
        <SectionHeading
          eyebrow="Verein"
          intro={
            <>
              Sailsetters e.V. ist gemeinnützig und wird von Studierenden geführt. Die
              Mitgliederversammlung wählt jedes Jahr den Vorstand, der die Projektteams koordiniert
              und den Verein nach außen vertritt. Die Details stehen in der{' '}
              <Link href="/satzung" className="underline hover:text-port">
                Satzung
              </Link>
              .
            </>
          }
        >
          Ein eingetragener Verein, getragen von seinen Mitgliedern
        </SectionHeading>

        <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-4">
          {organe.map((o, i) => (
            <div key={o.title} className="contents">
              {i > 0 && <Arrow />}
              <div className="flex flex-col gap-2 rounded-2xl bg-paper p-6 shadow-[0_1px_2px_rgba(31,26,23,0.06)] lg:p-7">
                <h3 className="text-xl lg:text-[22px]">{o.title}</h3>
                <p className="text-[15px] leading-relaxed text-driftwood">{o.text}</p>
              </div>
            </div>
          ))}
        </div>

        {team.length > 0 && (
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl lg:text-[30px]">Der aktuelle Vorstand</h3>
            <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-6">
              {team.map((m) => (
                <li key={m.id} className="flex flex-col items-center gap-3 rounded-2xl bg-paper px-3 py-6 text-center shadow-[0_1px_2px_rgba(31,26,23,0.06)] lg:p-7">
                  <span className="relative flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-full bg-dune font-display text-2xl font-semibold text-port lg:h-24 lg:w-24 lg:text-[30px]">
                    {m.photo && typeof m.photo === 'object' ? (
                      <MediaImage media={m.photo} fill sizes="96px" className="object-cover" />
                    ) : (
                      <span aria-hidden="true">{initials(m.name)}</span>
                    )}
                  </span>
                  <span className="font-display text-lg font-semibold leading-tight lg:text-[22px]">{m.name}</span>
                  <span className="text-[13px] text-driftwood lg:text-[15px]">{m.role}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Image
          src="/team.jpeg"
          alt="Das Sailsetters-Team"
          width={2659}
          height={1380}
          sizes="(min-width: 1200px) 1200px, 100vw"
          className="h-[220px] w-full rounded-2xl object-cover sm:h-[320px] lg:h-[460px] lg:rounded-[20px]"
        />
      </Container>
    </section>
  )
}
