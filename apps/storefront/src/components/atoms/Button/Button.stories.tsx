import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'B2C/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'tonal', 'text', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: 'Button' },
}

export const Filled: Story = {
  args: { children: 'Filled', variant: 'filled' },
}

export const Tonal: Story = {
  args: { children: 'Tonal', variant: 'tonal' },
}

export const Text: Story = {
  args: { children: 'Text', variant: 'text' },
}

export const Destructive: Story = {
  args: { children: 'Delete', variant: 'destructive' },
}

export const Large: Story = {
  args: { children: 'Large Button', size: 'large' },
}

export const LargeTonal: Story = {
  args: { children: 'Large Tonal', variant: 'tonal', size: 'large' },
}

export const Loading: Story = {
  args: { children: 'Loading', loading: true },
}

export const LoadingDestructive: Story = {
  args: { children: 'Deleting...', variant: 'destructive', loading: true },
}

export const Disabled: Story = {
  args: { children: 'Disabled', disabled: true },
}

export const DisabledTonal: Story = {
  args: { children: 'Disabled Tonal', variant: 'tonal', disabled: true },
}
