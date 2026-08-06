import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import ImageAvatar from "./image-avatar"

const meta: Meta<typeof ImageAvatar> = {
  title: "Vendor/Common/ImageAvatar",
  component: ImageAvatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "number", min: 4, max: 24, step: 2 },
    },
    rounded: {
      control: "boolean",
    },
  },
}

export default meta
type Story = StoryObj<typeof ImageAvatar>

export const Default: Story = {
  args: {
    src: "https://picsum.photos/seed/avatar1/100/100",
    size: 6,
  },
}

export const Rounded: Story = {
  args: {
    src: "https://picsum.photos/seed/avatar2/100/100",
    size: 8,
    rounded: true,
  },
}

export const LargeSquare: Story = {
  args: {
    src: "https://picsum.photos/seed/avatar3/200/200",
    size: 12,
    rounded: false,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <ImageAvatar src="https://picsum.photos/seed/v1/100/100" size={6} />
      <ImageAvatar src="https://picsum.photos/seed/v2/100/100" size={8} rounded />
      <ImageAvatar src="https://picsum.photos/seed/v3/100/100" size={10} />
      <ImageAvatar src="https://picsum.photos/seed/v4/200/200" size={12} rounded />
    </div>
  ),
}
