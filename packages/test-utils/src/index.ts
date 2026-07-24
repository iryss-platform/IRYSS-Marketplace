export function createTestStorefrontContext(overrides: Record<string, unknown> = {}) {
  return {
    storefront: {
      code: 'GB',
      pathPrefix: '/',
      regionId: 'reg_test',
      salesChannelId: 'sc_test',
      locale: 'en-GB',
      currency: 'GBP',
      defaultLang: 'en',
      supportedLangs: ['en'],
    },
    regionId: 'reg_test',
    salesChannelId: 'sc_test',
    locale: 'en-GB',
    currency: 'GBP',
    ...overrides,
  }
}
