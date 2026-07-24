import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    description: 'Product onboarding and PIM management',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'externalId', type: 'text', admin: { description: 'Shopify product ID or Medusa product ID' } },
    { name: 'brandId', type: 'text' },
    {
      name: 'onboardingStatus',
      type: 'select',
      defaultValue: 'imported',
      options: [
        'imported', 'needs_info', 'ready_for_enrichment',
        'enriching', 'translating', 'enriched',
        'review', 'approved', 'rejected', 'published', 'failed',
      ],
    },
    { name: 'description', type: 'richText' },
    {
      name: 'translations',
      type: 'json',
      admin: { description: 'AI-generated translations keyed by locale' },
    },
    {
      name: 'semanticData',
      type: 'json',
      admin: { description: 'AI-generated semantic enrichment data' },
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'alt', type: 'text' },
      ],
    },
  ],
}
