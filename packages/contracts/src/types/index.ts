export type ActorType =
  | 'customer'
  | 'b2b_user'
  | 'brand_user'
  | 'reseller_user'
  | 'admin'
  | 'storefront_manager'

export interface StorefrontConfig {
  code: string
  pathPrefix: string
  regionId: string
  salesChannelId: string
  locale: string
  currency: string
  defaultLang: string
  supportedLangs: string[]
}

export interface StorefrontContext {
  storefront: StorefrontConfig
  regionId: string
  salesChannelId: string
  locale: string
  currency: string
}

export interface TokenClaims {
  sub: string
  actor_type: ActorType
  storefronts: string[]
  brand_id?: string
  reseller_id?: string
  permissions: string[]
  consent: {
    analytics: boolean
    marketing: boolean
  }
}

export type ProductOnboardingStatus =
  | 'imported'
  | 'needs_info'
  | 'ready_for_enrichment'
  | 'enriching'
  | 'translating'
  | 'enriched'
  | 'review'
  | 'approved'
  | 'rejected'
  | 'published'
  | 'failed'
