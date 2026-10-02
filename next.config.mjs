import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Uploads (partner logos, board photos) live in Vercel Blob in production.
      { protocol: 'https', hostname: '*.public.blob.vercel-storage.com' },
      // In production Payload serves them through its own file route with an
      // absolute URL, because serverURL is set (see payload.config.ts).
      { protocol: 'https', hostname: 'sailsetters.de', pathname: '/api/media/file/**' },
    ],
  },
  experimental: {
    // The application form uploads a CV (max 5 MB) through a server action.
    serverActions: { bodySizeLimit: '6mb' },
    // Custom 404 for unmatched URLs. Needed because (frontend) and (payload)
    // are separate root layouts — see app/global-not-found.tsx.
    globalNotFound: true,
  },
}

export default withPayload(nextConfig)
