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
        'process.env.NODE_ENV': JSON.stringify('production'),
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
        dedupe: ['react', 'react-dom', 'react-router-dom'],
        alias: {
          ...config.resolve?.alias,
          '@': storefrontSrc,
          'next/link': path.resolve(__dirname, '../stubs/next-link.tsx'),
          'next/navigation': path.resolve(__dirname, '../stubs/next-navigation.tsx'),
          'next/image': path.resolve(__dirname, '../stubs/next-image.tsx'),
          'virtual:mercur/config': path.resolve(__dirname, '../stubs/mercur-config.ts'),
        },
      },
      // Force Rollup to resolve through node_modules properly
      build: {
        ...config.build,
        commonjsOptions: {
          include: [/node_modules/],
        },
      },
    }
  },
}

export default config
