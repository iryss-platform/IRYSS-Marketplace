import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta = {
  title: 'B2C/Atoms/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'This is a card with some content inside.',
  },
}

export const WithCustomClass: Story = {
  args: {
    children: 'Card with extra padding',
    className: 'p-8',
  },
}

export const WithRichContent: Story = {
  render: () => (
    <Card>
      <h3 className="font-bold text-lg mb-2">Card Title</h3>
      <p className="text-sm text-gray-600">
        This card contains richer content with a title and description paragraph.
      </p>
    </Card>
  ),
}

export const Nested: Story = {
  render: () => (
    <Card className="p-4">
      <h3 className="font-bold mb-3">Outer Card</h3>
      <Card className="bg-gray-50">
        <p>Nested card content</p>
      </Card>
    </Card>
  ),
}
