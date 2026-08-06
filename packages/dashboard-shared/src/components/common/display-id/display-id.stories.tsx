import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import DisplayId from "./display-id"

const meta: Meta<typeof DisplayId> = {
  title: "Dashboard/Common/DisplayId",
  component: DisplayId,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: 20 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof DisplayId>

export const Default: Story = {
  args: {
    id: "ord_01HXYZ1234567890ABCDEF",
  },
}

export const ShortId: Story = {
  args: {
    id: "prod_ABC1234",
  },
}

export const WithCustomClass: Story = {
  args: {
    id: "order_01HXYZ9876543210FEDCBA",
    className: "text-ui-fg-interactive",
  },
}

export const MultipleIds: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      <DisplayId id="ord_01HXYZ1234567890ABCDEF" />
      <DisplayId id="prod_01ABCD5678901234EFGH" />
      <DisplayId id="cust_01IJKL9012345678MNOP" />
    </div>
  ),
}
