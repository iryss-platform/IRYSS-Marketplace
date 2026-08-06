import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'

const meta = {
  title: 'B2C/Atoms/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['base', 'base-inverse', 'brand'],
    },
    icon: { control: 'boolean' },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'This is an alert message',
  },
}

export const Base: Story = {
  args: {
    variant: 'base',
    title: 'Base alert',
    icon: true,
  },
}

export const BaseInverse: Story = {
  args: {
    variant: 'base-inverse',
    title: 'Base inverse alert',
    icon: true,
  },
}

export const Brand: Story = {
  args: {
    variant: 'brand',
    title: 'Brand alert',
    icon: true,
  },
}

export const IconOnly: Story = {
  args: {
    variant: 'base',
    icon: true,
  },
}

export const TitleOnly: Story = {
  args: {
    title: 'Alert without icon',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Alert variant="base" title="Base variant" icon={true} />
      <Alert variant="base-inverse" title="Base inverse variant" icon={true} />
      <Alert variant="brand" title="Brand variant" icon={true} />
    </div>
  ),
}
