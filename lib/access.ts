import type { PayloadRequest } from 'payload'

/**
 * Only logged-in team members. The default for everything that is not a
 * public form. Typed on `req` alone so it works as both collection-level and
 * field-level access.
 */
export const authenticated = ({ req }: { req: PayloadRequest }): boolean => Boolean(req.user)
