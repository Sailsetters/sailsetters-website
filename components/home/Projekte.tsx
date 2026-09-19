import Container from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Project } from '@/payload-types'

import ProjectGrid from './ProjectGrid'

export default function Projekte({ projects }: { projects: Project[] }) {
  return (
    <section id="projekte" className="py-16 lg:py-24">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <SectionHeading eyebrow="Projekte">Woran wir dieses Semester arbeiten</SectionHeading>
          <p className="max-w-[380px] leading-relaxed text-driftwood">
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
          </p>
        </div>
        {projects.length > 0 ? (
          <ProjectGrid projects={projects} />
        ) : (
          <p className="text-driftwood">Aktuell sind keine Projekte eingetragen.</p>
        )}
      </Container>
    </section>
  )
}
