import type { Meta, StoryObj } from '@storybook/react'
import { PaginationButton } from './PaginationButton'

const meta = {
  title: 'B2C/Atoms/PaginationButton',
  component: PaginationButton,
  tags: ['autodocs'],
  argTypes: {
    isActive: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof PaginationButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: '1',
  },
}

export const Active: Story = {
  args: {
    children: '3',
    isActive: true,
  },
}

export const Disabled: Story = {
  args: {
    children: '5',
    disabled: true,
  },
}

export const WithArrow: Story = {
  args: {
    children: '>',
  },
}

export const PaginationRow: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <PaginationButton>&lt;</PaginationButton>
      <PaginationButton isActive>1</PaginationButton>
      <PaginationButton>2</PaginationButton>
      <PaginationButton>3</PaginationButton>
      <PaginationButton>4</PaginationButton>
      <PaginationButton>5</PaginationButton>
      <PaginationButton>&gt;</PaginationButton>
    </div>
  ),
}
