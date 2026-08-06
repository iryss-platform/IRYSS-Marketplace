import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { IncludesTaxTooltip } from "./tax-badge"

const meta: Meta<typeof IncludesTaxTooltip> = {
  title: "Dashboard/Common/TaxBadge",
  component: IncludesTaxTooltip,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: 40 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof IncludesTaxTooltip>

export const IncludesTax: Story = {
  args: {
    includesTax: true,
  },
}

export const ExcludesTax: Story = {
  args: {
    includesTax: false,
  },
}

export const BothVariants: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span>Tax Inclusive:</span>
        <IncludesTaxTooltip includesTax={true} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span>Tax Exclusive:</span>
        <IncludesTaxTooltip includesTax={false} />
      </div>
    </div>
  ),
}
