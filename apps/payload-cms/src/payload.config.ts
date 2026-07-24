import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Products } from './collections/Products'
import { Media } from './collections/Media'
import { Brands } from './collections/Brands'

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'dev-secret',
  admin: {
    user: 'users',
  },
  editor: lexicalEditor(),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.PAYLOAD_DATABASE_URL || '',
    },
  }),
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [
        { name: 'role', type: 'select', options: ['admin', 'editor'], defaultValue: 'editor' },
      ],
    },
    Products,
    Media,
    Brands,
  ],
  typescript: {
    outputFile: 'src/payload-types.ts',
  },
})
