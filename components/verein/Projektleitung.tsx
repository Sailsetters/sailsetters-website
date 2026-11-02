import type { Project, ProjectLead } from '@/payload-types'

import ContactReveal from './ContactReveal'

type Group = { project: Project; leads: ProjectLead[] }

/** Leads of current projects, one group per project, in the projects' order. */
function byProject(leads: ProjectLead[]): Group[] {
  const groups = new Map<number, Group>()
  for (const lead of leads) {
    const project = lead.project
    if (typeof project !== 'object' || project.status !== 'aktiv') continue
    const group = groups.get(project.id) ?? { project, leads: [] }
    group.leads.push(lead)
    groups.set(project.id, group)
  }
  return [...groups.values()].sort(
    (a, b) =>
      (a.project.order ?? 0) - (b.project.order ?? 0) || a.project.title.localeCompare(b.project.title, 'de'),
  )
}

/**
 * Contacts for questions about a single project. Deliberately unlike the
 * Vorstand cards above: outlined instead of filled, no photo, left-aligned
 * and headed by the project rather than the person.
 */
export default function Projektleitung({ leads }: { leads: ProjectLead[] }) {
  const groups = byProject(leads)
  if (groups.length === 0) return null

  return (
    <div id="projektleitung" className="flex scroll-mt-28 flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl lg:text-[30px]">Projektleitung</h3>
        <p className="max-w-[640px] leading-relaxed text-driftwood">
          Fragen zu einem bestimmten Projekt? Die Projektleitung kennt es am besten und antwortet
          dir direkt.
        </p>
      </div>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {groups.map(({ project, leads }) => (
          <li key={project.id} className="flex flex-col gap-4 rounded-2xl border border-ink/15 p-6 lg:p-7">
            <h4 className="text-xl leading-tight lg:text-[22px]">{project.title}</h4>
            <ul className="flex flex-col gap-3">
              {leads.map((l) => (
                <li key={l.id} className="flex flex-col items-start gap-1">
                  <span className="font-semibold">{l.name}</span>
                  <ContactReveal encoded={Buffer.from(l.email).toString('base64')} name={l.name} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
