'use client'

import { useState } from 'react'

import { CheckboxField } from '@/components/forms/Field'
import ProjectHinweis from '@/components/projects/ProjectHinweis'

import { NO_PROJECT, type ProjectOption } from './projects'

/**
 * The Wunschprojekt: one of the current projects, or „Noch offen“. A project
 * with a note, a required confirmation or a partner shows them as soon as it
 * is picked; the server action checks the same rules again.
 */
export default function ProjectChoice({
  projects,
  errors,
}: {
  projects: ProjectOption[]
  errors: Record<string, string>
}) {
  const [selected, setSelected] = useState('')
  const project = projects.find((p) => String(p.id) === selected)

  const options = [
    ...projects.map((p) => ({ value: String(p.id), title: p.title, text: p.tagline })),
    {
      value: NO_PROJECT,
      title: 'Noch offen',
      text: 'Unentschieden, lieber eine Taskforce oder eine eigene Idee? Erzähl uns in der Motivation davon.',
    },
  ]

  return (
    <div className="flex flex-col gap-5">
      <fieldset aria-describedby={errors.project ? 'project-error' : undefined} className="flex flex-col gap-1.5">
        <legend className="text-[15px] font-medium text-ink">
          Welches Projekt interessiert dich am meisten?
          <span className="text-port" aria-hidden="true">
            {' '}
            *
          </span>
        </legend>
        <p className="text-sm text-driftwood">
          Wir berücksichtigen deinen Wunsch bei der Einteilung. Bist du noch unsicher, finden wir im
          Kennenlerngespräch gemeinsam das Richtige.
        </p>
        <div className="mt-1.5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {options.map((o) => (
            <label
              key={o.value}
              className="flex cursor-pointer items-start gap-3 rounded-xl border border-driftwood/30 bg-paper p-4 transition-colors hover:border-port/60 has-checked:border-port has-checked:bg-port/5 has-focus-visible:ring-2 has-focus-visible:ring-port/25"
            >
              <input
                type="radio"
                name="project"
                value={o.value}
                required
                checked={selected === o.value}
                onChange={() => setSelected(o.value)}
                className="mt-1 h-4 w-4 shrink-0 accent-port"
              />
              <span className="flex flex-col gap-0.5">
                <span className="font-medium text-ink">{o.title}</span>
                {o.text && <span className="text-sm leading-snug text-driftwood">{o.text}</span>}
              </span>
            </label>
          ))}
        </div>
        {errors.project && (
          <p id="project-error" role="alert" className="text-sm text-port">
            {errors.project}
          </p>
        )}
      </fieldset>

      {project && (project.hinweis || project.bestaetigung || project.partner) && (
        <div className="flex flex-col gap-4 rounded-2xl bg-dune p-5 sm:p-6">
          <h3 className="text-xl">Gut zu wissen: {project.title}</h3>
          {project.hinweis && <ProjectHinweis text={project.hinweis} className="text-[15px]" />}
          {project.bestaetigung && (
            <CheckboxField name="projectConfirmation" error={errors.projectConfirmation}>
              {project.bestaetigung}
            </CheckboxField>
          )}
          {project.partner && (
            <CheckboxField name="partnerConsent" error={errors.partnerConsent}>
              Ich bin einverstanden, dass Sailsetters meinen Namen und meine E-Mail-Adresse an{' '}
              {project.partner.website ? (
                <a
                  href={project.partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-port"
                >
                  {project.partner.name}
                </a>
              ) : (
                project.partner.name
              )}{' '}
              weitergibt, damit ich von dort kontaktiert werden kann. Mehr dazu in der{' '}
              <a href="/datenschutz" className="underline hover:text-port">
                Datenschutzerklärung
              </a>
              .
            </CheckboxField>
          )}
        </div>
      )}
    </div>
  )
}
