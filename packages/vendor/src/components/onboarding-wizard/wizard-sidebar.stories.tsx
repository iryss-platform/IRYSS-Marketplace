import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { WizardSidebar } from "./wizard-sidebar"

const meta: Meta<typeof WizardSidebar> = {
  title: "Vendor/Onboarding/WizardSidebar",
  component: WizardSidebar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ height: "500px", display: "flex" }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof WizardSidebar>

export const FirstStep: Story = {
  args: {
    currentStep: 0,
    showBack: false,
    children: (
      <div>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, margin: "0 0 8px" }}>
          Set up your store
        </h2>
        <p style={{ color: "#666", fontSize: "14px", margin: 0 }}>
          Tell us about your business to get started.
        </p>
      </div>
    ),
  },
}

export const MiddleStep: Story = {
  args: {
    currentStep: 1,
    showBack: true,
    onBack: () => alert("Going back"),
    children: (
      <div>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, margin: "0 0 8px" }}>
          Business Address
        </h2>
        <p style={{ color: "#666", fontSize: "14px", margin: 0 }}>
          Where is your business located?
        </p>
      </div>
    ),
  },
}

export const LastStep: Story = {
  args: {
    currentStep: 3,
    showBack: true,
    onBack: () => alert("Going back"),
    children: (
      <div>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, margin: "0 0 8px" }}>
          Payment Setup
        </h2>
        <p style={{ color: "#666", fontSize: "14px", margin: 0 }}>
          Configure how you will receive payments.
        </p>
      </div>
    ),
  },
}
