import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { ProgressBar } from "./progress-bar"

const meta: Meta<typeof ProgressBar> = {
  title: "Vendor/Common/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "400px",
          height: "4px",
          background: "#e5e7eb",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    duration: {
      control: { type: "number", min: 0.5, max: 10, step: 0.5 },
    },
  },
}

export default meta
type Story = StoryObj<typeof ProgressBar>

export const Default: Story = {
  args: {
    duration: 2,
  },
}

export const Fast: Story = {
  args: {
    duration: 0.5,
  },
}

export const Slow: Story = {
  args: {
    duration: 5,
  },
}
