import type { Project } from '@/payload-types'

export const CATEGORY_LABELS: Record<Project['category'], string> = {
  'eigenes-projekt': 'Eigenes Projekt',
  unterstuetzung: 'Unterstützung in München',
  foerderung: '1-zu-1-Förderung',
}

export default function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl bg-paper p-7 shadow-[0_1px_2px_rgba(31,26,23,0.06)]">
      <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-driftwood">
        {CATEGORY_LABELS[p.category]}
      </span>
      <h3 className="text-2xl leading-tight">{p.title}</h3>
      {p.tagline && <span className="text-[15px] font-medium text-port">{p.tagline}</span>}
      <p className="leading-relaxed">{p.description}</p>
    </article>
  )
}
