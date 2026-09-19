'use client'

import { useFormStatus } from 'react-dom'

export default function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-full bg-port px-7 py-4 text-[17px] font-semibold text-paper transition-colors duration-200 hover:bg-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-port/40 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? 'Wird gesendet …' : children}
    </button>
  )
}
