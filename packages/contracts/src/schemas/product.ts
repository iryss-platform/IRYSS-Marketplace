import { z } from 'zod'

export const ProductOnboardingStatusSchema = z.enum([
  'imported',
  'needs_info',
  'ready_for_enrichment',
  'enriching',
  'translating',
  'enriched',
  'review',
  'approved',
  'rejected',
  'published',
  'failed',
])

export const EnrichedProductSchema = z.object({
  title: z.record(z.string(), z.string()),
  description: z.record(z.string(), z.string()),
  seoTitle: z.record(z.string(), z.string()),
  seoDescription: z.record(z.string(), z.string()),
  attributes: z.record(z.string(), z.unknown()),
  semanticVectors: z.array(z.number()).optional(),
  enrichedAt: z.string().datetime(),
})
