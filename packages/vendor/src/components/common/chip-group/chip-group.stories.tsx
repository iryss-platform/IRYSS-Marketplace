import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { ChipGroup } from "./chip-group"

const meta: Meta<typeof ChipGroup> = {
  title: "Vendor/Common/ChipGroup",
  component: ChipGroup,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "500px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: "select",
      options: ["base", "component"],
    },
  },
}

export default meta
type Story = StoryObj<typeof ChipGroup>

export const Default: Story = {
  render: () => (
    <ChipGroup>
      <ChipGroup.Chip index={0}>Electronics</ChipGroup.Chip>
      <ChipGroup.Chip index={1}>Fashion</ChipGroup.Chip>
      <ChipGroup.Chip index={2}>Home Goods</ChipGroup.Chip>
    </ChipGroup>
  ),
}

export const WithRemove: Story = {
  render: () => (
    <ChipGroup onRemove={(index) => alert(`Remove chip at index ${index}`)}>
      <ChipGroup.Chip index={0}>Tag A</ChipGroup.Chip>
      <ChipGroup.Chip index={1}>Tag B</ChipGroup.Chip>
      <ChipGroup.Chip index={2}>Tag C</ChipGroup.Chip>
    </ChipGroup>
  ),
}

export const WithClearAll: Story = {
  render: () => (
    <ChipGroup
      onRemove={(index) => alert(`Remove ${index}`)}
      onClearAll={() => alert("Clear all")}
    >
      <ChipGroup.Chip index={0}>Filter 1</ChipGroup.Chip>
      <ChipGroup.Chip index={1}>Filter 2</ChipGroup.Chip>
      <ChipGroup.Chip index={2}>Filter 3</ChipGroup.Chip>
    </ChipGroup>
  ),
}

export const BaseVariant: Story = {
  render: () => (
    <ChipGroup variant="base" onRemove={(index) => alert(`Remove ${index}`)}>
      <ChipGroup.Chip index={0}>Base Style 1</ChipGroup.Chip>
      <ChipGroup.Chip index={1}>Base Style 2</ChipGroup.Chip>
    </ChipGroup>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [chips, setChips] = useState(["Red", "Green", "Blue", "Yellow"])

    const handleRemove = (index: number) => {
      setChips((prev) => prev.filter((_, i) => i !== index))
    }

    const handleClearAll = () => {
      setChips([])
    }

    return (
      <div>
        <ChipGroup onRemove={handleRemove} onClearAll={handleClearAll}>
          {chips.map((chip, index) => (
            <ChipGroup.Chip key={chip} index={index}>
              {chip}
            </ChipGroup.Chip>
          ))}
        </ChipGroup>
        {chips.length === 0 && (
          <p style={{ marginTop: "8px", fontSize: "14px", color: "#999" }}>
            All chips removed. Refresh to reset.
          </p>
        )}
      </div>
    )
  },
}
