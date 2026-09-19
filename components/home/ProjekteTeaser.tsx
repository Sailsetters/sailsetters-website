import ProjectCard from '@/components/projects/ProjectCard'
import Container from '@/components/ui/Container'
import LinkButton from '@/components/ui/LinkButton'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Project } from '@/payload-types'

/** Three projects on the homepage; the full list lives on /projekte. */
export default function ProjekteTeaser({ projects, total }: { projects: Project[]; total: number }) {
  return (
    <section id="projekte" className="py-16 lg:py-24">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <SectionHeading eyebrow="Projekte">Woran wir dieses Semester arbeiten</SectionHeading>
          <p className="max-w-[380px] leading-relaxed text-driftwood">
            Eigene Projekte, Unterstützung in Einrichtungen in ganz München und 1-zu-1-Förderung.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        <div className="flex justify-center">
          <LinkButton href="/projekte" variant="secondary">
            Alle {total} Projekte ansehen
          </LinkButton>
        </div>
      </Container>
    </section>
  )
}
