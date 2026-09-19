import Container from '@/components/ui/Container'

type Props = {
  aktiveMitglieder: string
  projekteProSemester: string
  partnerCount: number
}

export default function Kennzahlen({ aktiveMitglieder, projekteProSemester, partnerCount }: Props) {
  const items = [
    { value: aktiveMitglieder, label: 'aktive Sailsetter:innen' },
    { value: projekteProSemester, label: 'Projekte pro Semester' },
    { value: String(partnerCount), label: 'Havens und Partner in München' },
  ]
  return (
    <section className="bg-dune py-12 lg:py-18" aria-label="Kennzahlen">
      <Container className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
        {items.map((k) => (
          <div key={k.label} className="flex flex-col gap-2">
            <span className="font-display text-[56px] font-semibold leading-none text-port lg:text-[72px]">
              {k.value}
            </span>
            <span className="text-driftwood lg:text-[17px]">{k.label}</span>
          </div>
        ))}
      </Container>
    </section>
  )
}
