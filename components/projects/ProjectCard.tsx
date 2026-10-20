import LinkedText from '@/components/projects/LinkedText'
import ProjectHinweis from '@/components/projects/ProjectHinweis'
import type { Project } from '@/payload-types'

export const CATEGORY_LABELS: Record<Project['category'], string> = {
  'eigenes-projekt': 'Eigenes Projekt',
  foerderung: '1-zu-1-Förderung',
}

/**
 * `withHinweis` adds the project's note for applicants as a collapsed
 * „Mehr erfahren“, on /projekte and /bewerbung. The homepage leaves it out.
 */
export default function ProjectCard({ project: p, withHinweis = false }: { project: Project; withHinweis?: boolean }) {
  const hinweis = withHinweis ? p.bewerbung?.hinweis : undefined
  return (
    <article className="flex flex-col gap-3 rounded-2xl bg-paper p-7 shadow-[0_1px_2px_rgba(31,26,23,0.06)]">
      <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-driftwood">
        {CATEGORY_LABELS[p.category]}
        {p.period && <span className="font-normal normal-case tracking-normal"> · {p.period}</span>}
      </span>
      <h3 className="text-2xl leading-tight">{p.title}</h3>
      {p.tagline && (
        <span className="text-[15px] font-medium text-port">
          <LinkedText text={p.tagline} />
        </span>
      )}
      <p className="leading-relaxed">
        <LinkedText text={p.description} />
      </p>
      {hinweis && (
        <details className="group mt-1 border-t border-ink/10 pt-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-medium text-port hover:text-ink [&::-webkit-details-marker]:hidden">
            Mehr erfahren
            <span aria-hidden="true" className="text-xl leading-none transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <ProjectHinweis text={hinweis} className="pt-3 text-[15px] text-driftwood" />
        </details>
      )}
    </article>
  )
}
