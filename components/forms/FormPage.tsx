import type { ReactNode } from 'react'

import PageBody from '@/components/ui/PageBody'

/** Two-column shell for the form pages: the form in a Paper card, context beside it. */
export default function FormPage({ form, aside }: { form: ReactNode; aside: ReactNode }) {
  return (
    <PageBody blob="cool-left" className="pb-20 lg:pb-28">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
        <div className="rounded-[20px] bg-paper p-6 shadow-[0_1px_2px_rgba(31,26,23,0.06)] sm:p-8 lg:p-10">{form}</div>
        <aside className="flex flex-col gap-6 lg:sticky lg:top-28">{aside}</aside>
      </div>
    </PageBody>
  )
}
