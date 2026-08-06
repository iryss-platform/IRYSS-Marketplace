import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Thumbnail } from "./thumbnail"

const meta: Meta<typeof Thumbnail> = {
  title: "Dashboard/Common/Thumbnail",
  component: Thumbnail,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "base"],
    },
  },
}

export default meta
type Story = StoryObj<typeof Thumbnail>

export const Default: Story = {
  args: {},
}

export const WithImage: Story = {
  args: {
    src: "https://picsum.photos/seed/product/200/300",
    alt: "Product image",
  },
}

export const Small: Story = {
  args: {
    size: "small",
  },
}

export const SmallWithImage: Story = {
  args: {
    size: "small",
    src: "https://picsum.photos/seed/small/100/150",
    alt: "Small product",
  },
}

export const NoImage: Story = {
  args: {
    src: null,
    alt: "Missing image",
  },
}

export const BothSizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Thumbnail size="small" />
      <Thumbnail size="base" />
      <Thumbnail
        size="small"
        src="https://picsum.photos/seed/a/100/150"
        alt="Small"
      />
      <Thumbnail
        size="base"
        src="https://picsum.photos/seed/b/200/300"
        alt="Base"
      />
    </div>
  ),
}
