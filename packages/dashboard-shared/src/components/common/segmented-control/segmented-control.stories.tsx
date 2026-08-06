import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { SegmentedControl } from "./segmented-control"

const meta: Meta<typeof SegmentedControl> = {
  title: "Dashboard/Common/SegmentedControl",
  component: SegmentedControl,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 400, padding: 20 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof SegmentedControl>

const TwoOptionControl = () => {
  const [value, setValue] = useState("list")
  return (
    <SegmentedControl
      value={value}
      onValueChange={setValue}
      options={[
        { value: "list", label: "List" },
        { value: "grid", label: "Grid" },
      ]}
    />
  )
}

export const TwoOptions: Story = {
  render: () => <TwoOptionControl />,
}

const ThreeOptionControl = () => {
  const [value, setValue] = useState("all")
  return (
    <SegmentedControl
      value={value}
      onValueChange={setValue}
      options={[
        { value: "all", label: "All" },
        { value: "active", label: "Active" },
        { value: "draft", label: "Draft" },
      ]}
    />
  )
}

export const ThreeOptions: Story = {
  render: () => <ThreeOptionControl />,
}

const FourOptionControl = () => {
  const [value, setValue] = useState("day")
  return (
    <SegmentedControl
      value={value}
      onValueChange={setValue}
      options={[
        { value: "day", label: "Day" },
        { value: "week", label: "Week" },
        { value: "month", label: "Month" },
        { value: "year", label: "Year" },
      ]}
    />
  )
}

export const FourOptions: Story = {
  render: () => <FourOptionControl />,
}
