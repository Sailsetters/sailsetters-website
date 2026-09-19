'use client'

import { useActionState } from 'react'

import { ConsentField, TextAreaField, TextField } from '@/components/forms/Field'
import SubmitButton from '@/components/forms/SubmitButton'
import { initialFormState } from '@/lib/forms'

import { submitContact } from './actions'

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialFormState)

  if (state.status === 'success') {
    return (
      <div role="status" className="rounded-lg bg-paper p-6 shadow-md">
        <h2 className="text-xl font-semibold text-ink">Nachricht gesendet</h2>
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

      <TextField name="subject" label="Betreff" required error={errors.subject} />

      <TextAreaField
        name="message"
        label="Nachricht"
        required
        rows={6}
        error={errors.message}
      />

      <ConsentField error={errors.consent} />

      <div>
        <SubmitButton>Nachricht senden</SubmitButton>
      </div>
    </form>
  )
}
