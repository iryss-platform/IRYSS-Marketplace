import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { LinkButton } from "./link-button"
import { MemoryRouter } from "react-router-dom"

const meta: Meta<typeof LinkButton> = {
  title: "Dashboard/Common/LinkButton",
  component: LinkButton,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ padding: 20 }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof LinkButton>

export const Interactive: Story = {
  args: {
    to: "/products",
    variant: "interactive",
    children: "View all products",
  },
}

export const Primary: Story = {
  args: {
    to: "/orders",
    variant: "primary",
    children: "View all orders",
  },
}

export const BothVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      <LinkButton to="/products" variant="interactive">
        Interactive link
      </LinkButton>
      <LinkButton to="/orders" variant="primary">
        Primary link
      </LinkButton>
    </div>
  ),
}
