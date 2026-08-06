import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { BadgeListSummary } from "./badge-list-summary"

const meta: Meta<typeof BadgeListSummary> = {
  title: "Vendor/Common/BadgeListSummary",
  component: BadgeListSummary,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "400px" }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof BadgeListSummary>

export const Default: Story = {
  args: {
    list: ["Electronics", "Clothing", "Home & Garden", "Sports", "Books"],
  },
}

export const FewItems: Story = {
  args: {
    list: ["United States", "Germany"],
  },
}

export const ManyItems: Story = {
  args: {
    list: ["US", "GB", "DE", "FR", "JP", "AU", "CA", "BR", "IN", "CN"],
    n: 3,
  },
}

export const Rounded: Story = {
  args: {
    list: ["Active", "Premium", "Verified", "Featured"],
    rounded: true,
  },
}

export const Inline: Story = {
  args: {
    list: ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"],
    inline: true,
    n: 2,
  },
}

export const CustomN: Story = {
  args: {
    list: ["Category A", "Category B", "Category C", "Category D", "Category E"],
    n: 4,
  },
  name: "Show First 4",
}
