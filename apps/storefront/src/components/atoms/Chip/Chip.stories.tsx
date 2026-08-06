import type { Meta, StoryObj } from '@storybook/react'
import { Chip } from './Chip'

const meta = {
  title: 'B2C/Atoms/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    color: { control: 'boolean' },
  },
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 'Chip',
  },
}

export const Selected: Story = {
  args: {
    value: 'Selected',
    selected: true,
  },
}

export const Disabled: Story = {
  args: {
    value: 'Disabled',
    disabled: true,
  },
}

export const ColorChip: Story = {
  args: {
    value: '#3B82F6',
    color: true,
  },
}

export const ColorChipSelected: Story = {
  args: {
    value: '#EF4444',
    color: true,
    selected: true,
  },
}

export const ColorChipDisabled: Story = {
  args: {
    value: '#10B981',
    color: true,
    disabled: true,
  },
}

export const SizeVariants: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Chip value="S" />
      <Chip value="M" selected />
      <Chip value="L" />
      <Chip value="XL" />
    </div>
  ),
}

export const ColorPalette: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Chip value="#000000" color />
      <Chip value="#EF4444" color selected />
      <Chip value="#3B82F6" color />
      <Chip value="#10B981" color />
      <Chip value="#F59E0B" color />
    </div>
  ),
}
