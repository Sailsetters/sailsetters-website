'use client'

import { useActionState } from 'react'

import { ConsentField, FileField, TextAreaField, TextField } from '@/components/forms/Field'
import SubmitButton from '@/components/forms/SubmitButton'
import { initialFormState } from '@/lib/forms'

import { submitApplication } from './actions'

export default function ApplicationForm() {
  const [state, formAction] = useActionState(submitApplication, initialFormState)

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
    <form action={formAction} className="flex flex-col space-y-6">
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
        hint="Optional. PDF, maximal 5 MB."
        accept="application/pdf,.pdf"
        error={errors.cv}
      />

      <ConsentField error={errors.consent} />

      <div>
        <SubmitButton>Bewerbung absenden</SubmitButton>
      </div>
    </form>
  )
}
