import type { Meta, StoryObj } from '@storybook/react'
import { StarRating } from './StarRating'

const meta = {
  title: 'B2C/Atoms/StarRating',
  component: StarRating,
  tags: ['autodocs'],
  argTypes: {
    rate: { control: { type: 'range', min: 0, max: 5, step: 0.5 } },
    starSize: { control: { type: 'range', min: 12, max: 40 } },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof StarRating>

export default meta
type Story = StoryObj<typeof meta>

export const FiveStars: Story = {
  args: {
    rate: 5,
  },
}

export const FourStars: Story = {
  args: {
    rate: 4,
  },
}

export const ThreeStars: Story = {
  args: {
    rate: 3,
  },
}

export const OneStars: Story = {
  args: {
    rate: 1,
  },
}

export const ZeroStars: Story = {
  args: {
    rate: 0,
  },
}

export const LargeStars: Story = {
  args: {
    rate: 4,
    starSize: 32,
  },
}

export const SmallStars: Story = {
  args: {
    rate: 3,
    starSize: 14,
  },
}

export const Disabled: Story = {
  args: {
    rate: 4,
    disabled: true,
  },
}

export const AllRatings: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      {[0, 1, 2, 3, 4, 5].map((rate) => (
        <div key={rate} className="flex items-center gap-2">
          <StarRating rate={rate} />
          <span className="text-sm">{rate}/5</span>
        </div>
      ))}
    </div>
  ),
}
