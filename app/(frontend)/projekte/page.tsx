import config from '@payload-config'
import type { Metadata } from 'next'
import { getPayload } from 'payload'

import ProjectGrid from '@/components/projects/ProjectGrid'
import Container from '@/components/ui/Container'
import LinkButton from '@/components/ui/LinkButton'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = {
  title: 'Projekte — Sailsetters',
  description:
    'Eigene Projekte, Unterstützung in Einrichtungen in ganz München und 1-zu-1-Förderung – woran Sailsetter:innen dieses Semester arbeiten.',
}

// Static; the projects collection revalidates this page on every change.
export const revalidate = 3600

export default async function ProjektePage() {
  const payload = await getPayload({ config })
  const projects = await payload.find({
    collection: 'projects',
    where: { status: { equals: 'aktiv' } },
    sort: 'order',
    limit: 100,
    depth: 0,
  })

  return (
    <>
      <PageHeader
        eyebrow="Projekte"
        title="Woran wir dieses Semester arbeiten"
        intro={
          <>
            Eigene Projekte, Unterstützung in Einrichtungen in ganz München und 1-zu-1-Förderung.
            An der TUM sind dafür{' '}
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
      <Container className="flex flex-col gap-14 pb-20 lg:pb-28">
        {projects.docs.length > 0 ? (
          <ProjectGrid projects={projects.docs} />
        ) : (
          <p className="text-driftwood">Aktuell sind keine Projekte eingetragen.</p>
        )}
        <div className="flex flex-col items-start gap-4 rounded-[20px] bg-dune p-7 lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl">Eines davon passt zu dir?</h2>
            <p className="text-driftwood">Bewirb dich – im Kennenlerngespräch finden wir gemeinsam das richtige Projekt.</p>
          </div>
          <LinkButton href="/bewerbung">Sailsetter:in werden</LinkButton>
        </div>
      </Container>
    </>
  )
}
