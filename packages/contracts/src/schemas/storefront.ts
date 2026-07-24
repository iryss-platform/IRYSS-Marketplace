import { z } from 'zod'

export const StorefrontConfigSchema = z.object({
  code: z.string().min(2).max(5),
  pathPrefix: z.string().startsWith('/'),
  regionId: z.string(),
  salesChannelId: z.string(),
  locale: z.string(),
  currency: z.string().length(3),
  defaultLang: z.string().length(2),
  supportedLangs: z.array(z.string().length(2)),
})

export const StorefrontContextSchema = z.object({
  storefront: StorefrontConfigSchema,
  regionId: z.string(),
  salesChannelId: z.string(),
  locale: z.string(),
  currency: z.string(),
})
