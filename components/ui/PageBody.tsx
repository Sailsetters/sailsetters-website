import type { ReactNode } from 'react'

import Blob from '@/components/ui/Blob'
import Container from '@/components/ui/Container'

const ENDINGS = {
  'cool-left': <Blob name="cool-a" className="-bottom-40 -left-56 w-[440px] lg:-bottom-64 lg:-left-72 lg:w-[720px]" />,
  'warm-right': <Blob name="warm-c" className="-right-56 -bottom-40 w-[440px] lg:-right-64 lg:-bottom-64 lg:w-[720px]" />,
} as const

/** Body of an inner page: the content container with a blob at its lower end. */
export default function PageBody({
  children,
  blob = 'cool-left',
  className = '',
}: {
  children: ReactNode
  blob?: keyof typeof ENDINGS
  className?: string
}) {
  return (
    <div className="relative overflow-hidden">
      {ENDINGS[blob]}
      <Container className={`relative ${className}`}>{children}</Container>
    </div>
  )
}
