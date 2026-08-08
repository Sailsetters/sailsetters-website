import type { CollectionConfig } from 'payload'

const authenticated = ({ req }: { req: { user?: unknown } }) => Boolean(req.user)

export const Users: CollectionConfig = {
  slug: 'users',
  labels: { singular: 'Benutzer:in', plural: 'Benutzer:innen' },
  auth: true,
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email'],
    group: 'System',
  },
  access: {
    create: authenticated,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },
  ],
}
