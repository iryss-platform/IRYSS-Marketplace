import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { ChipGroup } from "./chip-group"

const meta: Meta<typeof ChipGroup> = {
  title: "Dashboard/Common/ChipGroup",
  component: ChipGroup,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 500, padding: 20 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ChipGroup>

export const Default: Story = {
  render: () => (
    <ChipGroup>
      <ChipGroup.Chip index={0}>Filter 1</ChipGroup.Chip>
      <ChipGroup.Chip index={1}>Filter 2</ChipGroup.Chip>
      <ChipGroup.Chip index={2}>Filter 3</ChipGroup.Chip>
    </ChipGroup>
  ),
}

export const WithRemove: Story = {
  render: () => {
    const RemovableChips = () => {
      const [items, setItems] = useState(["Color: Red", "Size: M", "Brand: Nike"])
      const handleRemove = (index: number) => {
        setItems((prev) => prev.filter((_, i) => i !== index))
      }
      return (
        <ChipGroup onRemove={handleRemove}>
          {items.map((item, i) => (
            <ChipGroup.Chip key={item} index={i}>
              {item}
            </ChipGroup.Chip>
          ))}
        </ChipGroup>
      )
    }
    return <RemovableChips />
  },
}

export const WithClearAll: Story = {
  render: () => {
    const ClearableChips = () => {
      const [items, setItems] = useState(["Status: Active", "Region: US", "Type: Digital"])
      const handleRemove = (index: number) => {
        setItems((prev) => prev.filter((_, i) => i !== index))
      }
      return (
        <ChipGroup
          onRemove={handleRemove}
          onClearAll={() => setItems([])}
        >
          {items.map((item, i) => (
            <ChipGroup.Chip key={item} index={i}>
              {item}
            </ChipGroup.Chip>
          ))}
        </ChipGroup>
      )
    }
    return <ClearableChips />
  },
}

export const BaseVariant: Story = {
  render: () => (
    <ChipGroup variant="base">
      <ChipGroup.Chip index={0}>Base Chip 1</ChipGroup.Chip>
      <ChipGroup.Chip index={1}>Base Chip 2</ChipGroup.Chip>
    </ChipGroup>
  ),
}

export const ComponentVariant: Story = {
  render: () => (
    <ChipGroup variant="component">
      <ChipGroup.Chip index={0}>Component Chip 1</ChipGroup.Chip>
      <ChipGroup.Chip index={1}>Component Chip 2</ChipGroup.Chip>
    </ChipGroup>
  ),
}
