import type { Meta, StoryObj } from '@storybook/react'
import { Indicator } from './Indicator'

const meta = {
  title: 'B2C/Atoms/Indicator',
  component: Indicator,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['light', 'dark'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    step: { control: { type: 'range', min: 1, max: 5 } },
    maxStep: { control: { type: 'range', min: 1, max: 10 } },
  },
} satisfies Meta<typeof Indicator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    step: 1,
    maxStep: 5,
  },
}

export const MidProgress: Story = {
  args: {
    step: 3,
    maxStep: 5,
  },
}

export const Complete: Story = {
  args: {
    step: 5,
    maxStep: 5,
  },
}

export const DarkVariant: Story = {
  args: {
    step: 2,
    maxStep: 4,
    variant: 'dark',
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-800 p-4 rounded">
        <Story />
      </div>
    ),
  ],
}

export const ThreeSteps: Story = {
  args: {
    step: 2,
    maxStep: 3,
  },
}

export const ManySteps: Story = {
  args: {
    step: 4,
    maxStep: 10,
  },
}
