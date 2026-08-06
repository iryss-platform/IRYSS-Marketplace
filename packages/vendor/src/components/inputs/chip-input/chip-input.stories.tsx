import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { ChipInput } from "./chip-input"

const meta: Meta<typeof ChipInput> = {
  title: "Vendor/Inputs/ChipInput",
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

export const Default: Story = {
  args: {
    placeholder: "Type and press Enter to add tags...",
  },
}

export const WithPrefilledValues: Story = {
  args: {
    value: ["electronics", "fashion", "home-goods"],
    placeholder: "Add more tags...",
  },
}

export const ContrastVariant: Story = {
  args: {
    variant: "contrast",
    value: ["tag-1", "tag-2"],
    placeholder: "Contrast variant...",
  },
}

export const WithoutRemoveButton: Story = {
  args: {
    value: ["read-only-tag-1", "read-only-tag-2"],
    showRemove: false,
  },
}

export const Disabled: Story = {
  args: {
    value: ["locked-tag"],
    disabled: true,
  },
}

export const Interactive: Story = {
  render: () => {
    const [tags, setTags] = useState<string[]>(["sample"])
    return (
      <div style={{ maxWidth: "400px" }}>
        <p style={{ marginBottom: "8px", fontSize: "14px", color: "#666" }}>
          Type a value and press Enter or comma to add. Backspace removes the last tag.
        </p>
        <ChipInput
          value={tags}
          onChange={setTags}
          placeholder="Add product tags..."
        />
        <p style={{ marginTop: "8px", fontSize: "12px", color: "#999" }}>
          Current tags: {JSON.stringify(tags)}
        </p>
      </div>
    )
  },
}

export const NoDuplicates: Story = {
  args: {
    value: ["unique-tag"],
    allowDuplicates: false,
    placeholder: 'Try typing "unique-tag" again...',
  },
}
