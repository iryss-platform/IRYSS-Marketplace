import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Thumbnail } from "./thumbnail"

const meta: Meta<typeof Thumbnail> = {
  title: "Admin/Common/Thumbnail",
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
    size: "small",
    src: "https://picsum.photos/seed/thumb/100/150",
    alt: "Small product image",
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <div style={{ textAlign: "center" }}>
        <Thumbnail size="small" />
        <div style={{ fontSize: "11px", color: "#666", marginTop: "4px" }}>Small empty</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Thumbnail size="base" />
        <div style={{ fontSize: "11px", color: "#666", marginTop: "4px" }}>Base empty</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Thumbnail size="small" src="https://picsum.photos/seed/a/100/150" alt="Product" />
        <div style={{ fontSize: "11px", color: "#666", marginTop: "4px" }}>Small with img</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Thumbnail size="base" src="https://picsum.photos/seed/b/200/300" alt="Product" />
        <div style={{ fontSize: "11px", color: "#666", marginTop: "4px" }}>Base with img</div>
      </div>
    </div>
  ),
}
