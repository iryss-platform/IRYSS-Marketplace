import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from './IconButton'

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M10 17.5L8.55 16.175C4.4 12.4 1.5 9.8 1.5 6.6C1.5 4 3.5 2 6 2C7.4 2 8.75 2.65 9.7 3.7L10 4.05L10.3 3.7C11.25 2.65 12.6 2 14 2C16.5 2 18.5 4 18.5 6.6C18.5 9.8 15.6 12.4 11.45 16.175L10 17.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
)

const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M6 6H18L16.5 13H7.5L6 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="8" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="15" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 2H4L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const meta = {
  title: 'B2C/Atoms/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'tonal', 'icon'],
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Filled: Story = {
  args: {
    icon: <HeartIcon />,
    variant: 'filled',
  },
}

export const Tonal: Story = {
  args: {
    icon: <HeartIcon />,
    variant: 'tonal',
  },
}

export const Icon: Story = {
  args: {
    icon: <HeartIcon />,
    variant: 'icon',
  },
}

export const Large: Story = {
  args: {
    icon: <CartIcon />,
    variant: 'filled',
    size: 'large',
  },
}

export const Loading: Story = {
  args: {
    icon: <HeartIcon />,
    variant: 'filled',
    loading: true,
  },
}

export const Disabled: Story = {
  args: {
    icon: <HeartIcon />,
    variant: 'filled',
    disabled: true,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <IconButton icon={<HeartIcon />} variant="filled" />
      <IconButton icon={<HeartIcon />} variant="tonal" />
      <IconButton icon={<HeartIcon />} variant="icon" />
    </div>
  ),
}
