import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import DisplayId from "./display-id"

const meta: Meta<typeof DisplayId> = {
  title: "Vendor/Common/DisplayId",
  component: DisplayId,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: "40px", display: "flex", justifyContent: "center" }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof DisplayId>

export const Default: Story = {
  args: {
    id: "ord_01H9M2YXAVF3R1BXFBPCTNWRFD",
  },
}

export const ShortId: Story = {
  args: {
    id: "abc1234",
  },
}

export const WithCustomClass: Story = {
  args: {
    id: "prod_01JABC123456DEFGH789XYZ",
    className: "text-ui-fg-interactive",
  },
}

export const MultipleIds: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "14px", color: "#666", width: "60px" }}>Order:</span>
        <DisplayId id="ord_01H9M2YXAVF3R1BXFBPCTNWRFD" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "14px", color: "#666", width: "60px" }}>Product:</span>
        <DisplayId id="prod_01JABC123456DEFGH789XYZ" />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "14px", color: "#666", width: "60px" }}>Vendor:</span>
        <DisplayId id="vendor_01K8N3PQRS4567TUVWX890" />
      </div>
    </div>
  ),
}
