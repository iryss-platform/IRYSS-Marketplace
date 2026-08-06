import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta = {
  title: 'B2C/Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Badge',
    className: "bg-black mt-10"
  },
}

export const NumericBadge: Story = {
  args: {
    children: '5',
  },
}

export const LongText: Story = {
  args: {
    children: 'New Arrival',
  },
}

export const WithCustomClass: Story = {
  args: {
    children: 'Custom',
    className: 'bg-green-500',
  },
}

export const Sale: Story = {
  args: {
    children: '-20%',
  },
}
