import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { BadgeListSummary } from "./badge-list-summary"

/**
 * BadgeListSummary uses react-i18next for the "+N" overflow label.
 * If i18n is not configured in Storybook, the fallback key
 * "general.plusCount" will be displayed for the overflow badge.
 */

const meta: Meta<typeof BadgeListSummary> = {
  title: "Admin/Common/BadgeListSummary",
  component: BadgeListSummary,
  tags: ["autodocs"],
  argTypes: {
    n: {
      control: { type: "number", min: 1, max: 10 },
    },
    inline: {
      control: "boolean",
    },
    rounded: {
      control: "boolean",
    },
  },
}

export default meta
type Story = StoryObj<typeof BadgeListSummary>

export const Default: Story = {
  args: {
    list: ["United States", "Germany", "France", "Japan", "Australia"],
    n: 2,
  },
}

export const ShowAll: Story = {
  args: {
    list: ["US", "GB"],
    n: 3,
  },
}

export const SingleOverflow: Story = {
  args: {
    list: ["Shirts", "Pants", "Hats"],
    n: 2,
  },
}

export const Rounded: Story = {
  args: {
    list: ["Active", "Published", "Featured", "Sale"],
    n: 2,
    rounded: true,
  },
}

export const Inline: Story = {
  args: {
    list: ["Tag A", "Tag B", "Tag C", "Tag D", "Tag E"],
    n: 2,
    inline: true,
  },
}

export const LargeList: Story = {
  args: {
    list: Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`),
    n: 3,
  },
}
