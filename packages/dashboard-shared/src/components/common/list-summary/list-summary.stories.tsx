import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { ListSummary } from "./list-summary"

const meta: Meta<typeof ListSummary> = {
  title: "Dashboard/Common/ListSummary",
  component: ListSummary,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 400, padding: 20 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ListSummary>

export const Default: Story = {
  args: {
    list: ["United States", "Canada", "Mexico", "Brazil", "Argentina"],
  },
}

export const FewItems: Story = {
  args: {
    list: ["USD", "EUR"],
  },
}

export const SingleItem: Story = {
  args: {
    list: ["English"],
  },
}

export const ManyItems: Story = {
  args: {
    list: ["US", "CA", "MX", "BR", "AR", "CL", "CO", "PE", "GB", "FR", "DE"],
    n: 3,
  },
}

export const Inline: Story = {
  args: {
    list: ["Small", "Medium", "Large", "XL"],
    inline: true,
  },
}

export const BaseVariant: Story = {
  args: {
    list: ["Product A", "Product B", "Product C", "Product D"],
    variant: "base",
  },
}

export const CompactVariant: Story = {
  args: {
    list: ["Product A", "Product B", "Product C", "Product D"],
    variant: "compact",
  },
}
