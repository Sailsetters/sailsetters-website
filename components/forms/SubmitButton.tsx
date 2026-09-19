'use client'

import { useFormStatus } from 'react-dom'

export default function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-lg bg-port px-6 py-3 text-lg text-paper shadow-md transition-all duration-200 hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? 'Wird gesendet …' : children}
    </button>
  )
}
