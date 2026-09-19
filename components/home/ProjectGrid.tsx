'use client'

import { useState } from 'react'

import type { Project } from '@/payload-types'

export const CATEGORY_LABELS: Record<Project['category'], string> = {
  'eigenes-projekt': 'Eigenes Projekt',
  unterstuetzung: 'Unterstützung in München',
  foerderung: '1-zu-1-Förderung',
}

const FILTERS: { value: Project['category'] | 'alle'; label: string }[] = [
  { value: 'alle', label: 'Alle' },
  { value: 'eigenes-projekt', label: 'Eigene Projekte' },
  { value: 'unterstuetzung', label: 'Unterstützung in München' },
  { value: 'foerderung', label: '1-zu-1-Förderung' },
]

const INITIAL = 6

const pill =
  'rounded-full px-5 py-2.5 text-[15px] font-semibold transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-port/40'

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]['value']>('alle')
  const [showAll, setShowAll] = useState(false)

  const filtered = filter === 'alle' ? projects : projects.filter((p) => p.category === filter)
  const visible = showAll ? filtered : filtered.slice(0, INITIAL)
  const hidden = filtered.length - visible.length

  return (
    <div className="flex flex-col gap-8 lg:gap-10">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Projektkategorien">
        {FILTERS.map((f) => {
          const active = f.value === filter
          return (
            <button
              key={f.value}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => {
                setFilter(f.value)
                setShowAll(false)
              }}
              className={`${pill} ${active ? 'bg-ink text-sand' : 'border-[1.5px] border-ink text-ink hover:bg-ink/5'}`}
            >
              {f.label}
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {visible.map((p) => (
          <article key={p.id} className="flex flex-col gap-3 rounded-2xl bg-paper p-7 shadow-[0_1px_2px_rgba(31,26,23,0.06)]">
            <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-driftwood">
              {CATEGORY_LABELS[p.category]}
            </span>
            <h3 className="text-2xl leading-tight">{p.title}</h3>
            {p.tagline && <span className="text-[15px] font-medium text-port">{p.tagline}</span>}
            <p className="leading-relaxed">{p.description}</p>
          </article>
        ))}
      </div>

      {hidden > 0 && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className={`${pill} border-[1.5px] border-ink text-ink hover:bg-ink hover:text-sand`}
          >
            {hidden} weitere Projekte anzeigen
          </button>
        </div>
      )}
    </div>
  )
}
