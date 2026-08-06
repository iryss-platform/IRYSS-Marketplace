import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { ListSummary } from "./list-summary"

const meta: Meta<typeof ListSummary> = {
  title: "Vendor/Common/ListSummary",
  component: ListSummary,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "400px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: "select",
      options: ["compact", "base"],
    },
  },
}

export default meta
type Story = StoryObj<typeof ListSummary>

export const Default: Story = {
  args: {
    list: ["United States", "Germany", "France", "Japan", "Australia"],
  },
}

export const FewItems: Story = {
  args: {
    list: ["Electronics", "Clothing"],
  },
}

export const ManyItems: Story = {
  args: {
    list: ["Product A", "Product B", "Product C", "Product D", "Product E", "Product F"],
    n: 3,
  },
}

export const BaseVariant: Story = {
  args: {
    list: ["Category 1", "Category 2", "Category 3", "Category 4"],
    variant: "base",
  },
}

export const Inline: Story = {
  args: {
    list: ["Tag A", "Tag B", "Tag C", "Tag D"],
    inline: true,
    n: 2,
  },
}
