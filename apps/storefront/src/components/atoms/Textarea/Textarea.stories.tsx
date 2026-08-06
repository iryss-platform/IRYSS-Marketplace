import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './Textarea'

const meta = {
  title: 'B2C/Atoms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    clearable: { control: 'boolean' },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
  },
}

export const WithValue: Story = {
  args: {
    value: 'This is some pre-filled content in the textarea.',
  },
}

export const WithError: Story = {
  args: {
    placeholder: 'Required field',
    error: true,
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Cannot edit',
    disabled: true,
    value: 'This field is disabled',
  },
}

export const WithRows: Story = {
  args: {
    placeholder: 'Write a detailed review...',
    rows: 6,
  },
}

export const WithIcon: Story = {
  args: {
    placeholder: 'Add a note...',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 4L8 9L14 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="1" y="3" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
}
