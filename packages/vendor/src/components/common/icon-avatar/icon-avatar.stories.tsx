import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { IconAvatar } from "./icon-avatar"

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 1L10 5.5L15 6.5L11.5 10L12.5 15L8 12.5L3.5 15L4.5 10L1 6.5L6 5.5L8 1Z"
      fill="currentColor"
    />
  </svg>
)

const meta: Meta<typeof IconAvatar> = {
  title: "Vendor/Common/IconAvatar",
  component: IconAvatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "large", "xlarge"],
    },
    variant: {
      control: "select",
      options: ["squared", "rounded"],
    },
  },
}

export default meta
type Story = StoryObj<typeof IconAvatar>

export const Default: Story = {
  args: {
    children: <StarIcon />,
  },
}

export const Small: Story = {
  args: {
    size: "small",
    variant: "rounded",
    children: <StarIcon />,
  },
}

export const Large: Story = {
  args: {
    size: "large",
    variant: "rounded",
    children: <StarIcon />,
  },
}

export const XLarge: Story = {
  args: {
    size: "xlarge",
    variant: "rounded",
    children: <StarIcon />,
  },
}

export const Squared: Story = {
  args: {
    size: "large",
    variant: "squared",
    children: <StarIcon />,
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <IconAvatar size="small" variant="rounded">
        <StarIcon />
      </IconAvatar>
      <IconAvatar size="large" variant="rounded">
        <StarIcon />
      </IconAvatar>
      <IconAvatar size="xlarge" variant="rounded">
        <StarIcon />
      </IconAvatar>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <IconAvatar size="large" variant="rounded">
        <StarIcon />
      </IconAvatar>
      <IconAvatar size="large" variant="squared">
        <StarIcon />
      </IconAvatar>
    </div>
  ),
}
