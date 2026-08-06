import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { BadgeListSummary } from "./badge-list-summary"

const meta: Meta<typeof BadgeListSummary> = {
  title: "Dashboard/Common/BadgeListSummary",
  component: BadgeListSummary,
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
type Story = StoryObj<typeof BadgeListSummary>

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
    list: [
      "US",
      "CA",
      "MX",
      "BR",
      "AR",
      "CL",
      "CO",
      "PE",
      "GB",
      "FR",
      "DE",
    ],
    n: 3,
  },
}

export const Rounded: Story = {
  args: {
    list: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
    rounded: true,
  },
}

export const Inline: Story = {
  args: {
    list: ["Small", "Medium", "Large", "XL"],
    inline: true,
  },
}
