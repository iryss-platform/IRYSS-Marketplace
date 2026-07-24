import type { CollectionConfig } from 'payload'

export const Brands: CollectionConfig = {
  slug: 'brands',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'sellerId', type: 'text', admin: { description: 'Mercur seller ID' } },
    { name: 'description', type: 'richText' },
    { name: 'logo', type: 'upload', relationTo: 'media' },
    {
      name: 'pages',
      type: 'array',
      admin: { description: 'Brand story pages and content' },
      fields: [
        { name: 'title', type: 'text' },
        { name: 'content', type: 'richText' },
        { name: 'locale', type: 'text' },
      ],
    },
  ],
}
