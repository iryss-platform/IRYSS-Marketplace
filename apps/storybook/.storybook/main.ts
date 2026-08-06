import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'

const config: StorybookConfig = {
  stories: [
    '../../../apps/storefront/src/components/**/*.stories.@(ts|tsx)',
    '../../../packages/admin/src/**/*.stories.@(ts|tsx)',
    '../../../packages/vendor/src/**/*.stories.@(ts|tsx)',
    '../../../packages/dashboard-shared/src/**/*.stories.@(ts|tsx)',
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
      define: {
        ...config.define,
        'process.env': JSON.stringify({}),
      },
      css: {
        postcss: {
          plugins: [
            (await import('tailwindcss')).default({
              config: path.resolve(__dirname, '../tailwind.config.cjs'),
            }),
            (await import('autoprefixer')).default(),
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
