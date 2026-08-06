import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import ImageAvatar from "./image-avatar"

const meta: Meta<typeof ImageAvatar> = {
  title: "Dashboard/Common/ImageAvatar",
  component: ImageAvatar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: 20 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ImageAvatar>

export const Default: Story = {
  args: {
    src: "https://picsum.photos/seed/avatar1/100/100",
  },
}

export const Small: Story = {
  args: {
    src: "https://picsum.photos/seed/avatar2/100/100",
    size: 4,
  },
}

export const Large: Story = {
  args: {
    src: "https://picsum.photos/seed/avatar3/200/200",
    size: 12,
  },
}

export const Rounded: Story = {
  args: {
    src: "https://picsum.photos/seed/avatar4/100/100",
    rounded: true,
  },
}

export const RoundedLarge: Story = {
  args: {
    src: "https://picsum.photos/seed/avatar5/200/200",
    size: 12,
    rounded: true,
  },
}

export const MultipleSizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <ImageAvatar src="https://picsum.photos/seed/s1/100/100" size={4} />
      <ImageAvatar src="https://picsum.photos/seed/s2/100/100" size={6} />
      <ImageAvatar src="https://picsum.photos/seed/s3/200/200" size={8} />
      <ImageAvatar src="https://picsum.photos/seed/s4/200/200" size={10} />
      <ImageAvatar src="https://picsum.photos/seed/s5/200/200" size={12} />
    </div>
  ),
}
