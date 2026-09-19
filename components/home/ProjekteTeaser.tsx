import ProjectCard from '@/components/projects/ProjectCard'
import Container from '@/components/ui/Container'
import LinkButton from '@/components/ui/LinkButton'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { Project } from '@/payload-types'

/** All current projects; past ones live on /projekte. */
export default function ProjekteTeaser({ projects }: { projects: Project[] }) {
  return (
    <section id="projekte" className="py-16 lg:py-24">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <SectionHeading eyebrow="Projekte">Woran wir dieses Semester arbeiten</SectionHeading>
          <p className="max-w-[380px] leading-relaxed text-driftwood">
            Eigene Projekte und 1-zu-1-Förderung, gemeinsam mit unseren Havens in ganz München.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        <div className="flex flex-col items-center gap-3">
          <LinkButton href="/projekte" variant="secondary">
            Alle Projekte ansehen
          </LinkButton>
          <span className="text-sm text-driftwood">Aktuelle und vergangene Projekte auf einer Seite.</span>
        </div>
      </Container>
    </section>
  )
}
