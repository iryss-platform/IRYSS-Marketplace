import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './Label'

const meta = {
  title: 'B2C/Atoms/Label',
  component: Label,
  tags: ['autodocs'],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Label',
  },
}

export const Price: Story = {
  args: {
    children: '$29.99',
  },
}

export const Status: Story = {
  args: {
    children: 'In Stock',
  },
}

export const Category: Story = {
  args: {
    children: 'Electronics',
  },
}

export const MultipleTags: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Label>New</Label>
      <Label>Featured</Label>
      <Label>Sale</Label>
    </div>
  ),
}
