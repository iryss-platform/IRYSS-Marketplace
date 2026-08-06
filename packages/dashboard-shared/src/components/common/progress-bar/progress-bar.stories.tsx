import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { ProgressBar } from "./progress-bar"

const meta: Meta<typeof ProgressBar> = {
  title: "Dashboard/Common/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: 400,
          height: 4,
          borderRadius: 4,
          overflow: "hidden",
          backgroundColor: "var(--bg-subtle, #f3f4f6)",
        }}
      >
        <Story />
      </div>
    ),
  ],
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
