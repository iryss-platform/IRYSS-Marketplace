import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs } from './Breadcrumbs'

const meta = {
  title: 'B2C/Atoms/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof Breadcrumbs>

export default meta
type Story = StoryObj<typeof meta>

export const TwoLevels: Story = {
  args: {
    items: [
      { label: 'Home', path: '/' },
      { label: 'Products', path: '/products' },
    ],
  },
}

export const ThreeLevels: Story = {
  args: {
    items: [
      { label: 'Home', path: '/' },
      { label: 'Electronics', path: '/categories/electronics' },
      { label: 'Headphones', path: '/categories/electronics/headphones' },
    ],
  },
}

export const FourLevels: Story = {
  args: {
    items: [
      { label: 'Home', path: '/' },
      { label: 'Shop', path: '/shop' },
      { label: 'Women', path: '/shop/women' },
      { label: 'Dresses', path: '/shop/women/dresses' },
    ],
  },
}
