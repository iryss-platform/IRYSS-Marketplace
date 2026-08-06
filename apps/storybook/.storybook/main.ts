import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'

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
    // Local stories (welcome, overview)
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
    const storefrontSrc = path.resolve(__dirname, '../../../apps/storefront/src')

    return {
      ...config,
      esbuild: {
        ...config.esbuild,
        jsx: 'automatic',
      },
      css: {
        postcss: {
          plugins: [
            require('tailwindcss')({
              config: path.resolve(__dirname, '../tailwind.config.ts'),
            }),
            require('autoprefixer')(),
          ],
        },
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@': storefrontSrc,
        },
      },
    }
  },
}

export default config
