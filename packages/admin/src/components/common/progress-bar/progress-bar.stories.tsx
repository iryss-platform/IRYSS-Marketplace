import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { ProgressBar } from "./progress-bar"

const meta: Meta<typeof ProgressBar> = {
  title: "Admin/Common/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ height: "4px", width: "100%", background: "#e5e7eb", borderRadius: "2px", overflow: "hidden" }}>
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

export const Slow: Story = {
  args: {
    duration: 5,
  },
}

export const Fast: Story = {
  args: {
    duration: 0.5,
  },
}
