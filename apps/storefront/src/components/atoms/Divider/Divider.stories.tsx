import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './Divider'

const meta = {
  title: 'B2C/Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    square: { control: 'boolean' },
  },
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
}

export const HorizontalSecondary: Story = {
  args: {
    orientation: 'horizontal',
    variant: 'secondary',
  },
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100px', display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
}

export const Square: Story = {
  args: {
    square: true,
  },
}

export const InContext: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <p>Section A</p>
      <Divider />
      <p>Section B</p>
      <Divider variant="secondary" />
      <p>Section C</p>
    </div>
  ),
}

export const VerticalInContext: Story = {
  render: () => (
    <div className="flex items-center gap-4 h-6">
      <span>Item 1</span>
      <Divider orientation="vertical" />
      <span>Item 2</span>
      <Divider orientation="vertical" />
      <span>Item 3</span>
    </div>
  ),
}
