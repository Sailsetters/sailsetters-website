/** A titled Paper card with a short text: cost items, taskforces, and the like. */
export default function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <li className="flex flex-col gap-3 rounded-2xl bg-paper p-6 shadow-[0_1px_2px_rgba(31,26,23,0.06)] lg:p-7">
      <h3 className="text-xl lg:text-[22px]">{title}</h3>
      <p className="text-[15px] leading-relaxed text-driftwood">{text}</p>
    </li>
  )
}
