import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { WizardStep } from "./wizard-step"

const meta: Meta<typeof WizardStep> = {
  title: "Vendor/Onboarding/WizardStep",
  component: WizardStep,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "500px", padding: "24px" }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof WizardStep>

export const Default: Story = {
  args: {
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, margin: 0 }}>
          Store Details
        </h2>
        <p style={{ color: "#666", margin: 0, fontSize: "14px" }}>
          Fill in your store information to get started with the vendor portal.
        </p>
        <div
          style={{
            padding: "16px",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            background: "#fafafa",
          }}
        >
          <p style={{ margin: 0, fontSize: "14px", color: "#999" }}>
            [Form fields would go here]
          </p>
        </div>
      </div>
    ),
  },
}

export const CompanyStep: Story = {
  args: {
    children: (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, margin: 0 }}>
          Company Information
        </h2>
        <p style={{ color: "#666", margin: 0, fontSize: "14px" }}>
          Provide your company registration details.
        </p>
        <div
          style={{
            padding: "12px",
            border: "1px solid #e5e7eb",
            borderRadius: "6px",
          }}
        >
          <label style={{ fontSize: "13px", fontWeight: 500 }}>Company Name</label>
          <input
            style={{
              display: "block",
              width: "100%",
              marginTop: "4px",
              padding: "6px 10px",
              border: "1px solid #d1d5db",
              borderRadius: "6px",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
            placeholder="Acme Inc."
          />
        </div>
      </div>
    ),
  },
}
