import Image from 'next/image'

/** The five brand blobs, with their real pixel sizes so next/image keeps the aspect. */
const BLOBS = {
  'warm-a': { src: '/blob_warm_a.png', width: 654, height: 828 },
  'warm-b': { src: '/blob_warm_b.png', width: 690, height: 822 },
  'warm-c': { src: '/blob_warm_c.png', width: 748, height: 829 },
  'cool-a': { src: '/blob_cool_a.png', width: 772, height: 795 },
  'port-a': { src: '/blob_port_a.png', width: 844, height: 806 },
} as const

/**
 * A decorative blob, absolutely positioned inside a `relative overflow-hidden`
 * parent. Put it before the content and give the content `relative` so it
 * paints on top.
 */
export default function Blob({
  name,
  className,
  priority,
}: {
  name: keyof typeof BLOBS
  className: string
  priority?: boolean
}) {
  const b = BLOBS[name]
  return (
    <Image
      src={b.src}
      alt=""
      width={b.width}
      height={b.height}
      priority={priority}
      className={`pointer-events-none absolute ${className}`}
    />
  )
}
