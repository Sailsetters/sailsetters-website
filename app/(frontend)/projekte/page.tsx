import config from '@payload-config'
import type { Metadata } from 'next'
import { getPayload } from 'payload'

import ProjectCard from '@/components/projects/ProjectCard'
import ProjectGrid from '@/components/projects/ProjectGrid'
import PageBody from '@/components/ui/PageBody'
import LinkButton from '@/components/ui/LinkButton'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = {
  title: 'Projekte · Sailsetters',
  description:
    'Eigene Projekte und 1-zu-1-Förderung mit unseren Havens in München: Woran Sailsetter:innen dieses Semester arbeiten.',
}

// Static; the projects collection revalidates this page on every change.
export const revalidate = 3600

export default async function ProjektePage() {
  const payload = await getPayload({ config })
  const all = await payload.find({ collection: 'projects', sort: 'order', limit: 200, depth: 0 })
  const current = all.docs.filter((p) => p.status === 'aktiv')
  const past = all.docs.filter((p) => p.status === 'archiviert')

  return (
    <>
      <PageHeader
        eyebrow="Projekte"
        title="Woran wir dieses Semester arbeiten"
        intro={
          <>
            Eigene Projekte und 1-zu-1-Förderung, gemeinsam mit unseren Havens in ganz München. An
            der TUM sind dafür{' '}
            <a
              href="https://www.sot.tum.de/wtg/tuminspiriert-studentische-projekte/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-port"
            >
              3 ECTS möglich
            </a>
            .
          </>
        }
      />
      <PageBody blob="warm-right" className="flex flex-col gap-14 pb-20 lg:gap-20 lg:pb-28">
        <section aria-labelledby="aktuell" className="flex flex-col gap-8">
          <h2 id="aktuell" className="text-2xl lg:text-[30px]">
            Aktuelle Projekte
          </h2>
          {current.length > 0 ? (
            <ProjectGrid projects={current} />
          ) : (
            <p className="text-driftwood">Aktuell sind keine Projekte eingetragen.</p>
          )}
        </section>

        {past.length > 0 && (
          <section aria-labelledby="vergangen" className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 id="vergangen" className="text-2xl lg:text-[30px]">
                Vergangene Projekte
              </h2>
              <p className="max-w-[640px] text-driftwood">
                Abgeschlossen oder pausiert. Vieles davon greifen wir wieder auf, wenn ein Haven
                Bedarf hat und sich ein Team findet.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {past.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-1 gap-8 rounded-[20px] bg-dune p-7 md:grid-cols-2 lg:gap-12 lg:p-10">
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl">Eines davon passt zu dir?</h2>
              <p className="leading-relaxed text-driftwood">
                Bewirb dich. Im Kennenlerngespräch finden wir gemeinsam das richtige Projekt.
              </p>
            </div>
            <LinkButton href="/bewerbung">Sailsetter:in werden</LinkButton>
          </div>
          <div className="flex flex-col gap-2 border-t border-ink/10 pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-12">
            <h2 className="text-2xl">Oder eine eigene Idee?</h2>
            <p className="leading-relaxed text-driftwood">
              Sailsetters lebt von Studierenden, die eigene Ideen für Projekte mitbringen. Jede:r
              kann ein neues Projekt starten, und wir unterstützen auf dem Weg: mit einem Haven,
              einem Team und der Erfahrung aus den bisherigen Projekten.
            </p>
          </div>
        </div>
      </PageBody>
    </>
  )
}
