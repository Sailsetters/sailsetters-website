import type { Adapter } from '@payloadcms/plugin-cloud-storage/types'
import { del, get, put } from '@vercel/blob'

/**
 * Vercel Blob adapter for files that must never be public — applicants' CVs.
 *
 * @payloadcms/storage-vercel-blob only supports public blobs (anyone with the
 * URL can read them). This adapter stores blobs with `access: 'private'` and
 * streams them back through Payload's own file route, which checks the
 * collection's read access first. So a CV is only ever served to a logged-in
 * team member, and the blob URL itself is useless without the token.
 *
 * Deliberately minimal: no prefixes, no image sizes, no client uploads.
 */
export function privateVercelBlobAdapter({ token }: { token: string }): Adapter {
  return ({ collection }) => ({
    name: 'vercel-blob-private',

    // Only consulted when Payload's access control is disabled, which this
    // adapter never does; kept so the interface is complete.
    generateURL: ({ filename }) => `/api/${collection.slug}/file/${encodeURIComponent(filename)}`,

    handleUpload: async ({ data, file }) => {
      await put(`${collection.slug}/${file.filename}`, file.buffer, {
        access: 'private',
        addRandomSuffix: false,
        allowOverwrite: true,
        contentType: file.mimeType,
        token,
      })
      return data
    },

    handleDelete: async ({ filename }) => {
      await del(`${collection.slug}/${filename}`, { token })
    },

    staticHandler: async (req, { params: { filename } }) => {
      try {
        const result = await get(`${collection.slug}/${filename}`, { access: 'private', token })
        if (!result || result.statusCode !== 200) {
          return new Response(null, { status: 404 })
        }
        return new Response(result.stream, {
          headers: {
            'Cache-Control': 'private, no-store',
            // Download, never inline — see ApplicationFiles.modifyResponseHeaders.
            'Content-Disposition': `attachment; filename="${filename}"`,
            'Content-Length': String(result.blob.size),
            'Content-Type': result.blob.contentType,
            'X-Content-Type-Options': 'nosniff',
          },
        })
      } catch (err) {
        req.payload.logger.error({ err, msg: `Private blob: could not serve ${filename}` })
        return new Response(null, { status: 500 })
      }
    },
  })
}
