import Image from 'next/image'

import type { Media } from '@/payload-types'

type Props = {
  media: Media | number | null | undefined
  className?: string
  sizes?: string
  fill?: boolean
  priority?: boolean
}

/**
 * Renders a Payload upload with next/image. Relationships fetched at depth 0
 * arrive as bare ids; those (and missing files) render nothing rather than a
 * broken image.
 */
export default function MediaImage({ media, className, sizes, fill, priority }: Props) {
  if (!media || typeof media !== 'object' || !media.url) return null
  if (fill) {
    return <Image src={media.url} alt={media.alt} fill sizes={sizes} className={className} priority={priority} />
  }
  return (
    <Image
      src={media.url}
      alt={media.alt}
      width={media.width ?? 400}
      height={media.height ?? 400}
      sizes={sizes}
      className={className}
      priority={priority}
    />
  )
}
