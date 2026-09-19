import { semesterSteps } from '@/lib/semester'

/** The five steps as a horizontal strip (vertical on small screens). */
export default function SemesterSteps() {
  return (
    <ol className="relative grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-6">
      <span aria-hidden="true" className="absolute top-5 bottom-5 left-5 w-0.5 bg-dune md:top-6 md:right-6 md:bottom-auto md:left-6 md:h-0.5 md:w-auto" />
      {semesterSteps.map((s, i) => (
        <li key={s.title} className="relative flex gap-4 md:flex-col md:gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-port font-display text-[17px] font-semibold text-paper md:h-12 md:w-12 md:text-xl">
            {i + 1}
          </span>
          <div className="flex flex-col gap-1.5 pt-2 md:pt-0">
            <h3 className="text-xl lg:text-[22px]">{s.title}</h3>
            <p className="text-[15px] leading-relaxed text-driftwood">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
