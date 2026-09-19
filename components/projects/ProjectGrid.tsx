'use client'

import { useState } from 'react'

import type { Project } from '@/payload-types'

import ProjectCard from './ProjectCard'

const FILTERS: { value: Project['category'] | 'alle'; label: string }[] = [
  { value: 'alle', label: 'Alle' },
  { value: 'eigenes-projekt', label: 'Eigene Projekte' },
  { value: 'foerderung', label: '1-zu-1-Förderung' },
]

const pill =
  'rounded-full px-5 py-2.5 text-[15px] font-semibold transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-port/40'

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]['value']>('alle')
  const filtered = filter === 'alle' ? projects : projects.filter((p) => p.category === filter)

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
              onClick={() => setFilter(f.value)}
              className={`${pill} ${active ? 'bg-ink text-sand' : 'border-[1.5px] border-ink text-ink hover:bg-ink/5'}`}
            >
              {f.label}
            </button>
          )
        })}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}
