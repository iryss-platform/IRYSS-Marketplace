import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { IconAvatar } from "./icon-avatar"
import { BuildingStorefront, CurrencyDollar, User } from "@medusajs/icons"

const meta: Meta<typeof IconAvatar> = {
  title: "Dashboard/Common/IconAvatar",
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
    children: <User />,
  },
}

export const Small: Story = {
  args: {
    size: "small",
    children: <User />,
  },
}

export const Large: Story = {
  args: {
    size: "large",
    children: <CurrencyDollar />,
  },
}

export const XLarge: Story = {
  args: {
    size: "xlarge",
    children: <BuildingStorefront />,
  },
}

export const Squared: Story = {
  args: {
    variant: "squared",
    children: <User />,
  },
}

export const Rounded: Story = {
  args: {
    variant: "rounded",
    children: <User />,
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <IconAvatar size="small">
        <User />
      </IconAvatar>
      <IconAvatar size="large">
        <User />
      </IconAvatar>
      <IconAvatar size="xlarge">
        <User />
      </IconAvatar>
    </div>
  ),
}
