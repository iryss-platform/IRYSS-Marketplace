import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Thumbnail } from "./thumbnail"

const meta: Meta<typeof Thumbnail> = {
  title: "Vendor/Common/Thumbnail",
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

export const SmallSize: Story = {
  args: {
    size: "small",
  },
}

export const SmallWithImage: Story = {
  args: {
    src: "https://picsum.photos/seed/thumb/200/300",
    alt: "Small product image",
    size: "small",
  },
}

export const BothSizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <Thumbnail size="small" />
      <Thumbnail size="base" />
      <Thumbnail size="small" src="https://picsum.photos/seed/a/200/300" alt="Small" />
      <Thumbnail size="base" src="https://picsum.photos/seed/b/200/300" alt="Base" />
    </div>
  ),
}
