import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Listicle } from "./listicle"

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.5 8L6.5 11L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const meta: Meta<typeof Listicle> = {
  title: "Vendor/Common/Listicle",
  component: Listicle,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "500px" }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Listicle>

export const Default: Story = {
  args: {
    labelKey: "Product Categories",
    descriptionKey: "Manage your store product categories",
  },
}

export const WithIcon: Story = {
  args: {
    labelKey: "Inventory Management",
    descriptionKey: "Track stock levels across warehouses",
    children: <CheckIcon />,
  },
}

export const MultipleItems: Story = {
  render: () => (
    <div>
      <Listicle
        labelKey="Store Settings"
        descriptionKey="Configure your vendor store details"
        children={<CheckIcon />}
      />
      <Listicle
        labelKey="Shipping Options"
        descriptionKey="Set up shipping methods and rates"
      />
      <Listicle
        labelKey="Payment Methods"
        descriptionKey="Configure accepted payment methods"
        children={<CheckIcon />}
      />
    </div>
  ),
}
