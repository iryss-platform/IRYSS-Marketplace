import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { PercentageInput, DeprecatedPercentageInput } from "./percentage-input"

const meta: Meta<typeof PercentageInput> = {
  title: "Vendor/Inputs/PercentageInput",
  component: PercentageInput,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "300px" }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof PercentageInput>

export const Default: Story = {
  args: {
    placeholder: "0.00",
  },
}

export const WithValue: Story = {
  args: {
    value: "25.50",
  },
}

export const Disabled: Story = {
  args: {
    value: "10.00",
    disabled: true,
  },
}

export const CustomRange: Story = {
  args: {
    min: 0,
    max: 50,
    placeholder: "Max 50%",
  },
}

export const DeprecatedVariant: Story = {
  render: () => (
    <div style={{ maxWidth: "300px" }}>
      <p style={{ marginBottom: "8px", fontSize: "12px", color: "#999" }}>
        Deprecated HTML number input variant:
      </p>
      <DeprecatedPercentageInput placeholder="0.00" />
    </div>
  ),
  name: "Deprecated Variant",
}
