import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { ConditionalTooltip } from "./conditional-tooltip"

const meta: Meta<typeof ConditionalTooltip> = {
  title: "Vendor/Common/ConditionalTooltip",
  component: ConditionalTooltip,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: "60px", display: "flex", justifyContent: "center" }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ConditionalTooltip>

export const WithTooltipShown: Story = {
  args: {
    showTooltip: true,
    content: "This is a helpful tooltip",
    children: (
      <button
        style={{
          padding: "8px 16px",
          border: "1px solid #d1d5db",
          borderRadius: "6px",
          cursor: "pointer",
          background: "white",
        }}
      >
        Hover me (tooltip enabled)
      </button>
    ),
  },
}

export const WithTooltipHidden: Story = {
  args: {
    showTooltip: false,
    content: "This tooltip will not show",
    children: (
      <button
        style={{
          padding: "8px 16px",
          border: "1px solid #d1d5db",
          borderRadius: "6px",
          cursor: "pointer",
          background: "white",
        }}
      >
        Hover me (tooltip disabled)
      </button>
    ),
  },
}
