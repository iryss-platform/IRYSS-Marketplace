import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { SectionRow } from "./section-row"

const meta: Meta<typeof SectionRow> = {
  title: "Admin/Common/SectionRow",
  component: SectionRow,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "600px", border: "1px solid #e5e7eb", borderRadius: "8px" }}>
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

export const WithNullValue: Story = {
  args: {
    title: "Description",
    value: null,
  },
}

export const WithActions: Story = {
  args: {
    title: "Email",
    value: "user@example.com",
    actions: (
      <button
        style={{
          background: "none",
          border: "1px solid #d1d5db",
          borderRadius: "4px",
          padding: "2px 8px",
          cursor: "pointer",
          fontSize: "12px",
        }}
      >
        Edit
      </button>
    ),
  },
}

export const WithReactNodeValue: Story = {
  args: {
    title: "Tags",
    value: (
      <>
        <span
          style={{
            background: "#e5e7eb",
            borderRadius: "4px",
            padding: "2px 8px",
            fontSize: "12px",
          }}
        >
          VIP
        </span>
        <span
          style={{
            background: "#e5e7eb",
            borderRadius: "4px",
            padding: "2px 8px",
            fontSize: "12px",
          }}
        >
          Wholesale
        </span>
      </>
    ),
  },
}

export const MultipleRows: Story = {
  render: () => (
    <div style={{ maxWidth: "600px", border: "1px solid #e5e7eb", borderRadius: "8px" }}>
      <SectionRow title="Name" value="Jane Smith" />
      <div style={{ borderTop: "1px solid #e5e7eb" }} />
      <SectionRow title="Email" value="jane@example.com" />
      <div style={{ borderTop: "1px solid #e5e7eb" }} />
      <SectionRow title="Role" value="Administrator" />
    </div>
  ),
}
