import type { Meta, StoryObj } from '@storybook/react'
import { TabsTrigger } from './TabsTrigger'

const meta = {
  title: 'B2C/Atoms/TabsTrigger',
  component: TabsTrigger,
  tags: ['autodocs'],
  argTypes: {
    isActive: { control: 'boolean' },
  },
} satisfies Meta<typeof TabsTrigger>

export default meta
type Story = StoryObj<typeof meta>

export const Inactive: Story = {
  args: {
    children: 'Description',
    isActive: false,
  },
}

export const Active: Story = {
  args: {
    children: 'Description',
    isActive: true,
  },
}

export const TabsRow: Story = {
  render: () => (
    <div className="flex items-center gap-4 border-b">
      <TabsTrigger isActive={true}>Description</TabsTrigger>
      <TabsTrigger isActive={false}>Reviews</TabsTrigger>
      <TabsTrigger isActive={false}>Shipping</TabsTrigger>
    </div>
  ),
}

export const LongLabels: Story = {
  render: () => (
    <div className="flex items-center gap-4 border-b">
      <TabsTrigger isActive={false}>Product Details</TabsTrigger>
      <TabsTrigger isActive={true}>Customer Reviews</TabsTrigger>
      <TabsTrigger isActive={false}>Shipping Information</TabsTrigger>
    </div>
  ),
}
