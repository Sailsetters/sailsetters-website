import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Custom 404 for unmatched URLs. Needed because (frontend) and (payload)
    // are separate root layouts — see app/global-not-found.tsx.
    globalNotFound: true,
  },
}

export default withPayload(nextConfig)
