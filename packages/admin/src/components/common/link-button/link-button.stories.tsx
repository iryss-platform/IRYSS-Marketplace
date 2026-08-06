import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { MemoryRouter } from "react-router-dom"
import { LinkButton } from "./link-button"

const meta: Meta<typeof LinkButton> = {
  title: "Admin/Common/LinkButton",
  component: LinkButton,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "interactive"],
    },
  },
}

export default meta
type Story = StoryObj<typeof LinkButton>

export const Interactive: Story = {
  args: {
    to: "/products",
    variant: "interactive",
    children: "View products",
  },
}

export const Primary: Story = {
  args: {
    to: "/settings",
    variant: "primary",
    children: "Go to settings",
  },
}

export const BothVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <LinkButton to="/products" variant="interactive">
        Interactive link
      </LinkButton>
      <LinkButton to="/settings" variant="primary">
        Primary link
      </LinkButton>
    </div>
  ),
}
