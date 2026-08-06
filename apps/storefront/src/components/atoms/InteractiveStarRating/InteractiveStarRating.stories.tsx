import type { Meta, StoryObj } from '@storybook/react'
import { InteractiveStarRating } from './InteractiveStarRating'
import { fn } from '@storybook/test'

const meta = {
  title: 'B2C/Atoms/InteractiveStarRating',
  component: InteractiveStarRating,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 5 } },
    error: { control: 'boolean' },
  },
  args: {
    onChange: fn(),
  },
} satisfies Meta<typeof InteractiveStarRating>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 0,
  },
}

export const WithValue: Story = {
  args: {
    value: 3,
  },
}

export const FullRating: Story = {
  args: {
    value: 5,
  },
}

export const WithError: Story = {
  args: {
    value: 0,
    error: true,
  },
}
