import type { Meta, StoryObj } from '@storybook/react'
import { NavigationItem } from './NavigationItem'

const meta = {
  title: 'B2C/Atoms/NavigationItem',
  component: NavigationItem,
  tags: ['autodocs'],
  argTypes: {
    active: { control: 'boolean' },
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof NavigationItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Shop',
    href: '/shop',
  },
}

export const Active: Story = {
  args: {
    children: 'Shop',
    href: '/shop',
    active: true,
  },
}

export const NavBar: Story = {
  render: () => (
    <nav className="flex items-center">
      <NavigationItem href="/shop" active>Shop</NavigationItem>
      <NavigationItem href="/categories">Categories</NavigationItem>
      <NavigationItem href="/brands">Brands</NavigationItem>
      <NavigationItem href="/sale">Sale</NavigationItem>
    </nav>
  ),
}
