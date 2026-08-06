import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { PercentageInput, DeprecatedPercentageInput } from "./percentage-input"

const meta: Meta<typeof PercentageInput> = {
  title: "Admin/Inputs/PercentageInput",
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

export const ZeroValue: Story = {
  args: {
    value: "0.00",
  },
}

export const MaxValue: Story = {
  args: {
    value: "100.00",
  },
}

export const Disabled: Story = {
  args: {
    value: "15.00",
    disabled: true,
  },
}

export const DeprecatedVersion: StoryObj<typeof DeprecatedPercentageInput> = {
  render: () => (
    <div style={{ maxWidth: "300px" }}>
      <DeprecatedPercentageInput placeholder="0.00" />
    </div>
  ),
}
