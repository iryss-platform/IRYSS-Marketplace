import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { SectionRow } from "./section-row"
import { Badge, IconButton } from "@medusajs/ui"
import { PencilSquare } from "@medusajs/icons"

const meta: Meta<typeof SectionRow> = {
  title: "Dashboard/Common/SectionRow",
  component: SectionRow,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: 600,
          border: "1px solid var(--border-base)",
          borderRadius: 8,
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof SectionRow>

export const Default: Story = {
  args: {
    title: "Name",
    value: "John Doe",
  },
}

export const EmptyValue: Story = {
  args: {
    title: "Description",
    value: null,
  },
}

export const WithActions: Story = {
  args: {
    title: "Email",
    value: "john@example.com",
    actions: (
      <IconButton size="small" variant="transparent">
        <PencilSquare />
      </IconButton>
    ),
  },
}

export const WithReactNodeValue: Story = {
  args: {
    title: "Status",
    value: (
      <Badge color="green" size="2xsmall">
        Active
      </Badge>
    ),
  },
}

export const MultipleRows: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SectionRow title="Name" value="John Doe" />
      <SectionRow title="Email" value="john@example.com" />
      <SectionRow title="Phone" value="+1 (555) 123-4567" />
      <SectionRow title="Address" value={null} />
    </div>
  ),
}
