import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: [
    // B2C Storefront components
    '../../../apps/storefront/src/components/**/*.stories.@(ts|tsx)',
    // Admin panel components
    '../../../packages/admin/src/**/*.stories.@(ts|tsx)',
    // Vendor panel components
    '../../../packages/vendor/src/**/*.stories.@(ts|tsx)',
    // Dashboard shared components
    '../../../packages/dashboard-shared/src/**/*.stories.@(ts|tsx)',
    // Local stories for overview/docs
    '../stories/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@': '../../../apps/storefront/src',
        },
      },
    }
  },
}

export default config
