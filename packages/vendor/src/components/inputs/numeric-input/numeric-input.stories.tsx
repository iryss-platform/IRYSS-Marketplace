import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { NumericInput } from "./numeric-input"

const meta: Meta<typeof NumericInput> = {
  title: "Vendor/Inputs/NumericInput",
  component: NumericInput,
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
type Story = StoryObj<typeof NumericInput>

export const Default: Story = {
  args: {
    placeholder: "Enter quantity",
  },
}

export const WithValue: Story = {
  args: {
    value: 42,
  },
}

export const WithMinMax: Story = {
  args: {
    value: 5,
    min: 0,
    max: 100,
    step: 5,
  },
}

export const Disabled: Story = {
  args: {
    value: 10,
    disabled: true,
  },
}

export const HiddenControls: Story = {
  args: {
    value: 25,
    hideControls: true,
    placeholder: "No +/- buttons",
  },
}

export const Interactive: Story = {
  render: () => {
    const [val, setVal] = useState(1)
    return (
      <div style={{ maxWidth: "300px" }}>
        <p style={{ marginBottom: "8px", fontSize: "14px", color: "#666" }}>
          Click +/- or use arrow keys. Hold to repeat.
        </p>
        <NumericInput
          value={val}
          onChange={setVal}
          min={0}
          max={999}
          step={1}
          placeholder="Quantity"
        />
        <p style={{ marginTop: "8px", fontSize: "12px", color: "#999" }}>
          Value: {val}
        </p>
      </div>
    )
  },
}

export const StepByTen: Story = {
  args: {
    value: 50,
    min: 0,
    max: 1000,
    step: 10,
  },
  name: "Step by 10",
}
