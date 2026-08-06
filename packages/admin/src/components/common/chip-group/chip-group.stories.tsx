import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { ChipGroup } from "./chip-group"

/**
 * ChipGroup uses react-i18next for the "Clear all" button label.
 * If i18n is not configured in Storybook, fallback key "actions.clearAll"
 * will be displayed.
 */

const meta: Meta<typeof ChipGroup> = {
  title: "Admin/Common/ChipGroup",
  component: ChipGroup,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "500px" }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ChipGroup>

const InteractiveChipGroup = ({
  initialChips,
  variant,
}: {
  initialChips: string[]
  variant?: "base" | "component"
}) => {
  const [chips, setChips] = useState(initialChips)

  const handleRemove = (index: number) => {
    setChips((prev) => prev.filter((_, i) => i !== index))
  }

  const handleClearAll = () => {
    setChips([])
  }

  return (
    <ChipGroup
      onRemove={handleRemove}
      onClearAll={handleClearAll}
      variant={variant}
    >
      {chips.map((chip, index) => (
        <ChipGroup.Chip key={chip} index={index}>
          {chip}
        </ChipGroup.Chip>
      ))}
    </ChipGroup>
  )
}

export const Default: Story = {
  render: () => (
    <InteractiveChipGroup initialChips={["Active", "Published", "Featured"]} />
  ),
}

export const BaseVariant: Story = {
  render: () => (
    <InteractiveChipGroup
      initialChips={["T-Shirt", "Hoodie", "Pants"]}
      variant="base"
    />
  ),
}

export const ManyChips: Story = {
  render: () => (
    <InteractiveChipGroup
      initialChips={[
        "United States",
        "United Kingdom",
        "Germany",
        "France",
        "Japan",
        "Australia",
        "Brazil",
      ]}
    />
  ),
}

export const ReadOnly: Story = {
  render: () => (
    <ChipGroup>
      <ChipGroup.Chip index={0}>Status: Active</ChipGroup.Chip>
      <ChipGroup.Chip index={1}>Type: Digital</ChipGroup.Chip>
      <ChipGroup.Chip index={2}>Region: EU</ChipGroup.Chip>
    </ChipGroup>
  ),
}
