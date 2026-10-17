'use client'

import { startTransition, useActionState, type FormEvent } from 'react'

import { ConsentField, FileField, TextAreaField, TextField } from '@/components/forms/Field'
import SubmitButton from '@/components/forms/SubmitButton'
import { initialFormState } from '@/lib/forms'

import { submitApplication } from './actions'
import ProjectChoice from './ProjectChoice'
import type { ProjectOption } from './projects'

export default function ApplicationForm({ projects }: { projects: ProjectOption[] }) {
  const [state, formAction, pending] = useActionState(submitApplication, initialFormState)

  // React resets a form after its `action` runs, also when it comes back with
  // errors: the applicant would lose every entry, the CV and the chosen
  // project. Submitting from onSubmit avoids that. `action` stays as the
  // fallback for when JavaScript has not loaded.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    startTransition(() => formAction(formData))
  }

  if (state.status === 'success') {
    return (
      <div role="status" className="rounded-lg bg-paper p-6 shadow-md">
        <h2 className="text-xl font-semibold text-ink">Bewerbung eingegangen</h2>
        <p className="mt-2 text-ink">{state.message}</p>
      </div>
    )
  }

  const errors = state.fieldErrors ?? {}

  return (
    <form action={formAction} onSubmit={handleSubmit} className="flex flex-col space-y-6">
      {state.status === 'error' && state.message && (
        <p role="alert" className="rounded-lg bg-port/10 p-4 text-port">
          {state.message}
        </p>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField name="name" label="Name" required error={errors.name} />
        <TextField
          name="email"
          label="E-Mail"
          type="email"
          required
          error={errors.email}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <TextField name="age" label="Alter" type="number" required error={errors.age} />
        <TextField name="university" label="Hochschule" error={errors.university} />
        <TextField name="studySubject" label="Studiengang" error={errors.studySubject} />
        <TextField name="semester" label="Fachsemester" error={errors.semester} />
      </div>

      <ProjectChoice projects={projects} errors={errors} />

      <TextAreaField
        name="motivation"
        label="Motivation"
        hint="Warum möchtest du bei Sailsetters mitmachen? Ein paar Sätze reichen. Wir wollen dich kennenlernen, nicht bewerten."
        rows={10}
        required
        error={errors.motivation}
      />

      <TextAreaField
        name="availability"
        label="Verfügbarkeit"
        hint="Wie viel Zeit kannst du pro Semester einbringen?"
        rows={3}
        error={errors.availability}
      />

      <FileField
        name="cv"
        label="Lebenslauf"
        hint="PDF, maximal 5 MB."
        accept="application/pdf,.pdf"
        required
        error={errors.cv}
      />

      <ConsentField error={errors.consent} />

      <div>
        <SubmitButton pending={pending}>Bewerbung absenden</SubmitButton>
      </div>
    </form>
  )
}
