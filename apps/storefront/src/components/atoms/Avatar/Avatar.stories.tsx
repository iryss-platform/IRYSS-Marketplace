import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta = {
  title: 'B2C/Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'large'],
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithInitials: Story = {
  args: {
    initials: 'JS',
  },
}

export const WithInitialsLarge: Story = {
  args: {
    initials: 'AB',
    size: 'large',
  },
}

export const WithImage: Story = {
  args: {
    src: 'https://placehold.co/150x150/e2e8f0/475569?text=AV',
    alt: 'User avatar',
  },
}

export const WithImageLarge: Story = {
  args: {
    src: 'https://placehold.co/150x150/e2e8f0/475569?text=AV',
    alt: 'User avatar',
    size: 'large',
  },
}

export const FallbackIcon: Story = {
  args: {
    size: 'small',
  },
}

export const FallbackIconLarge: Story = {
  args: {
    size: 'large',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="small" />
      <Avatar initials="JS" size="small" />
      <Avatar size="large" />
      <Avatar initials="AB" size="large" />
    </div>
  ),
}
