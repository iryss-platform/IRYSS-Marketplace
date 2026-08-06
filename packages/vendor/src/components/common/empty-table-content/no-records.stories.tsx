import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { NoRecords } from "./empty-table-content"
import { MemoryRouter } from "react-router-dom"

const meta: Meta<typeof NoRecords> = {
  title: "Vendor/Common/NoRecords",
  component: NoRecords,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof NoRecords>

export const Default: Story = {
  args: {},
}

export const CustomMessage: Story = {
  args: {
    title: "No orders yet",
    message: "Orders will appear here once customers start purchasing.",
  },
}

export const WithAction: Story = {
  args: {
    title: "No products",
    message: "Get started by creating your first product.",
    action: {
      to: "/products/create",
      label: "Create Product",
    },
  },
}

export const TransparentIconLeftButton: Story = {
  args: {
    title: "No collections",
    message: "Organize your products into collections.",
    action: {
      to: "/collections/create",
      label: "Add Collection",
    },
    buttonVariant: "transparentIconLeft",
  },
}
