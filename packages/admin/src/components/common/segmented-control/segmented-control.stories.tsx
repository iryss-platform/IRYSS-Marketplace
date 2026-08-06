import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { SegmentedControl } from "./segmented-control"

const meta: Meta<typeof SegmentedControl> = {
  title: "Admin/Common/SegmentedControl",
  component: SegmentedControl,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "400px" }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof SegmentedControl>

const ControlledSegmentedControl = (props: {
  options: { value: string; label: React.ReactNode }[]
  defaultValue?: string
}) => {
  const [value, setValue] = useState(props.defaultValue || props.options[0]?.value || "")
  return (
    <SegmentedControl
      value={value}
      onValueChange={setValue}
      options={props.options}
    />
  )
}

export const TwoOptions: Story = {
  render: () => (
    <ControlledSegmentedControl
      options={[
        { value: "list", label: "List" },
        { value: "grid", label: "Grid" },
      ]}
    />
  ),
}

export const ThreeOptions: Story = {
  render: () => (
    <ControlledSegmentedControl
      options={[
        { value: "all", label: "All" },
        { value: "active", label: "Active" },
        { value: "draft", label: "Draft" },
      ]}
    />
  ),
}

export const FourOptions: Story = {
  render: () => (
    <ControlledSegmentedControl
      options={[
        { value: "day", label: "Day" },
        { value: "week", label: "Week" },
        { value: "month", label: "Month" },
        { value: "year", label: "Year" },
      ]}
    />
  ),
}

export const WithDefaultSelected: Story = {
  render: () => (
    <ControlledSegmentedControl
      defaultValue="active"
      options={[
        { value: "all", label: "All" },
        { value: "active", label: "Active" },
        { value: "archived", label: "Archived" },
      ]}
    />
  ),
}
