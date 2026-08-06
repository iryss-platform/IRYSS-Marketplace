import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'B2C/Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const WithLabel: Story = {
  args: {
    label: 'I agree to the terms and conditions',
  },
}

export const CheckedWithLabel: Story = {
  args: {
    checked: true,
    label: 'Remember me',
  },
}

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
}

export const WithError: Story = {
  args: {
    error: true,
    label: 'Accept terms (required)',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled option',
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
    label: 'Disabled checked',
  },
}
