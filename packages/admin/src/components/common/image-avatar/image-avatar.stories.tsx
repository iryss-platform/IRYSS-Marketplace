import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

/**
 * ImageAvatar uses an internal `imagesConverter` utility.
 * We create a visual replica that demonstrates the same styling
 * without the converter dependency.
 */
const ImageAvatarVisual = ({
  src,
  size = 6,
  rounded = false,
}: {
  src: string
  size?: number
  rounded?: boolean
}) => {
  return (
    <img
      src={src}
      alt="avatar"
      className={`w-${size} h-${size} border rounded-md object-cover ${rounded ? "rounded-full" : ""}`}
      style={{
        width: `${size * 4}px`,
        height: `${size * 4}px`,
        borderRadius: rounded ? "9999px" : "6px",
        objectFit: "cover",
        border: "1px solid #e5e7eb",
      }}
    />
  )
}

const meta: Meta<typeof ImageAvatarVisual> = {
  title: "Admin/Common/ImageAvatar",
  component: ImageAvatarVisual,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "number", min: 4, max: 20, step: 1 },
    },
    rounded: {
      control: "boolean",
    },
  },
}

export default meta
type Story = StoryObj<typeof ImageAvatarVisual>

export const Default: Story = {
  args: {
    src: "https://picsum.photos/seed/avatar1/100/100",
    size: 8,
  },
}

export const Rounded: Story = {
  args: {
    src: "https://picsum.photos/seed/avatar2/100/100",
    size: 8,
    rounded: true,
  },
}

export const Small: Story = {
  args: {
    src: "https://picsum.photos/seed/avatar3/100/100",
    size: 5,
  },
}

export const Large: Story = {
  args: {
    src: "https://picsum.photos/seed/avatar4/100/100",
    size: 12,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <div style={{ textAlign: "center" }}>
        <ImageAvatarVisual src="https://picsum.photos/seed/a1/100/100" size={5} />
        <div style={{ fontSize: "11px", color: "#666", marginTop: "4px" }}>Size 5</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <ImageAvatarVisual src="https://picsum.photos/seed/a2/100/100" size={8} />
        <div style={{ fontSize: "11px", color: "#666", marginTop: "4px" }}>Size 8</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <ImageAvatarVisual src="https://picsum.photos/seed/a3/100/100" size={12} />
        <div style={{ fontSize: "11px", color: "#666", marginTop: "4px" }}>Size 12</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <ImageAvatarVisual src="https://picsum.photos/seed/a4/100/100" size={8} rounded />
        <div style={{ fontSize: "11px", color: "#666", marginTop: "4px" }}>Rounded</div>
      </div>
    </div>
  ),
}
