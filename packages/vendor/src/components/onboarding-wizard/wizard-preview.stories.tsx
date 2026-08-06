import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { WizardPreview } from "./wizard-preview"

const meta: Meta<typeof WizardPreview> = {
  title: "Vendor/Onboarding/WizardPreview",
  component: WizardPreview,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ height: "600px", display: "flex" }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof WizardPreview>

export const Default: Story = {}

export const WithSidebar: Story = {
  render: () => (
    <div style={{ display: "flex", height: "600px", width: "100%" }}>
      <div
        style={{
          width: "400px",
          flexShrink: 0,
          borderRight: "1px solid #e5e7eb",
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <p style={{ fontSize: "12px", color: "#999" }}>Step 1 of 4</p>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, margin: 0 }}>
          Store Details
        </h2>
        <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>
          Sidebar content would go here alongside the preview panel.
        </p>
      </div>
      <WizardPreview />
    </div>
  ),
}
