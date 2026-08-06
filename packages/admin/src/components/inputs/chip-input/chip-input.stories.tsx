import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { ChipInput } from "./chip-input"

const meta: Meta<typeof ChipInput> = {
  title: "Admin/Inputs/ChipInput",
  component: ChipInput,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "400px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: "select",
      options: ["base", "contrast"],
    },
  },
}

export default meta
type Story = StoryObj<typeof ChipInput>

const ControlledChipInput = (props: {
  initialValue?: string[]
  placeholder?: string
  variant?: "base" | "contrast"
  showRemove?: boolean
  disabled?: boolean
  allowDuplicates?: boolean
}) => {
  const [value, setValue] = useState<string[]>(props.initialValue || [])
  return (
    <ChipInput
      value={value}
      onChange={setValue}
      placeholder={props.placeholder}
      variant={props.variant}
      showRemove={props.showRemove}
      disabled={props.disabled}
      allowDuplicates={props.allowDuplicates}
    />
  )
}

export const Empty: Story = {
  render: () => (
    <ControlledChipInput placeholder="Type and press Enter..." />
  ),
}

export const WithValues: Story = {
  render: () => (
    <ControlledChipInput
      initialValue={["tag-1", "tag-2", "tag-3"]}
      placeholder="Add more tags..."
    />
  ),
}

export const ContrastVariant: Story = {
  render: () => (
    <ControlledChipInput
      initialValue={["variant", "contrast"]}
      variant="contrast"
      placeholder="Contrast variant"
    />
  ),
}

export const WithoutRemoveButtons: Story = {
  render: () => (
    <ControlledChipInput
      initialValue={["read-only-1", "read-only-2"]}
      showRemove={false}
    />
  ),
}

export const Disabled: Story = {
  render: () => (
    <ControlledChipInput
      initialValue={["disabled", "input"]}
      disabled
    />
  ),
}

export const AllowDuplicates: Story = {
  render: () => (
    <ControlledChipInput
      initialValue={["hello"]}
      allowDuplicates
      placeholder="Duplicates allowed"
    />
  ),
}
