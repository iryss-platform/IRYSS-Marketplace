import type { Meta, StoryObj } from '@storybook/react'

const WelcomePage = () => (
  <div style={{ padding: '2rem', maxWidth: '800px', fontFamily: 'system-ui' }}>
    <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
      IRYSS Design System
    </h1>
    <p style={{ color: '#666', marginBottom: '2rem' }}>
      Component library for the IRYSS marketplace platform. Use story.to.design to import these into Figma.
    </p>

    <h2 style={{ fontSize: '1.3rem', fontWeight: 600, marginTop: '2rem' }}>Component Sources</h2>
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
      <thead>
        <tr style={{ borderBottom: '2px solid #eee', textAlign: 'left' }}>
          <th style={{ padding: '0.5rem' }}>Category</th>
          <th style={{ padding: '0.5rem' }}>Source</th>
          <th style={{ padding: '0.5rem' }}>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ borderBottom: '1px solid #eee' }}>
          <td style={{ padding: '0.5rem' }}>B2C / Atoms</td>
          <td style={{ padding: '0.5rem' }}><code>apps/storefront/src/components/atoms</code></td>
          <td style={{ padding: '0.5rem' }}>Base UI primitives for the consumer marketplace</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #eee' }}>
          <td style={{ padding: '0.5rem' }}>B2C / Molecules</td>
          <td style={{ padding: '0.5rem' }}><code>apps/storefront/src/components/molecules</code></td>
          <td style={{ padding: '0.5rem' }}>Composed elements (forms, dropdowns, nav items)</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #eee' }}>
          <td style={{ padding: '0.5rem' }}>B2C / Organisms</td>
          <td style={{ padding: '0.5rem' }}><code>apps/storefront/src/components/organisms</code></td>
          <td style={{ padding: '0.5rem' }}>Full sections (Header, Footer, ProductCard, Cart)</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #eee' }}>
          <td style={{ padding: '0.5rem' }}>Dashboard / Shared</td>
          <td style={{ padding: '0.5rem' }}><code>packages/dashboard-shared/src/components</code></td>
          <td style={{ padding: '0.5rem' }}>Components shared across Admin and Vendor portals</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #eee' }}>
          <td style={{ padding: '0.5rem' }}>Admin</td>
          <td style={{ padding: '0.5rem' }}><code>packages/admin/src</code></td>
          <td style={{ padding: '0.5rem' }}>Admin portal pages and components</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #eee' }}>
          <td style={{ padding: '0.5rem' }}>Vendor</td>
          <td style={{ padding: '0.5rem' }}><code>packages/vendor/src</code></td>
          <td style={{ padding: '0.5rem' }}>Vendor (Brand) portal pages and components</td>
        </tr>
      </tbody>
    </table>

    <h2 style={{ fontSize: '1.3rem', fontWeight: 600, marginTop: '2rem' }}>Figma Import</h2>
    <p style={{ color: '#666' }}>
      Use <a href="https://story.to.design" target="_blank">story.to.design</a> to import these components into Figma.
      Focus on atoms and shared components first — they form the IRYSS design system foundation.
    </p>
  </div>
)

const meta = {
  title: 'IRYSS/Welcome',
  component: WelcomePage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof WelcomePage>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {}
