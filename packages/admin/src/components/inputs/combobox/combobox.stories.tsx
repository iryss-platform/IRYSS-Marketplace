import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Combobox } from "./combobox"

/**
 * Note: Combobox uses react-i18next internally. If translations are not
 * configured in your Storybook, fallback keys like "general.noResultsTitle"
 * will be shown for empty states. Configure i18next in .storybook/preview
 * to provide real translation strings.
 */

const sampleOptions = [
  { value: "shirt", label: "T-Shirt" },
  { value: "hoodie", label: "Hoodie" },
  { value: "pants", label: "Pants" },
  { value: "jacket", label: "Jacket" },
  { value: "sneakers", label: "Sneakers" },
  { value: "hat", label: "Hat" },
  { value: "socks", label: "Socks" },
]

const optionsWithSecondary = [
  { value: "var-1", label: "Small / Red", secondaryLabel: "T-Shirt" },
  { value: "var-2", label: "Medium / Blue", secondaryLabel: "T-Shirt" },
  { value: "var-3", label: "Large / Green", secondaryLabel: "Hoodie" },
  { value: "var-4", label: "XL / Black", secondaryLabel: "Jacket", disabled: true },
]

const meta: Meta<typeof Combobox> = {
  title: "Admin/Inputs/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "320px", minHeight: "300px" }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Combobox>

const SingleSelectDemo = () => {
  const [value, setValue] = useState<string>("")
  return (
    <Combobox
      value={value}
      onChange={(v) => setValue(v || "")}
      options={sampleOptions}
      placeholder="Select a product..."
    />
  )
}

const MultiSelectDemo = () => {
  const [value, setValue] = useState<string[]>([])
  return (
    <Combobox
      value={value}
      onChange={(v) => setValue(v || [])}
      options={sampleOptions}
      placeholder="Select products..."
    />
  )
}

const WithPreselectedDemo = () => {
  const [value, setValue] = useState<string[]>(["shirt", "hoodie"])
  return (
    <Combobox
      value={value}
      onChange={(v) => setValue(v || [])}
      options={sampleOptions}
      placeholder="Select products..."
    />
  )
}

const WithSecondaryLabelsDemo = () => {
  const [value, setValue] = useState<string[]>([])
  return (
    <Combobox
      value={value}
      onChange={(v) => setValue(v || [])}
      options={optionsWithSecondary}
      placeholder="Select variants..."
    />
  )
}

const ClearableDemo = () => {
  const [value, setValue] = useState<string>("shirt")
  return (
    <Combobox
      value={value}
      onChange={(v) => setValue(v || "")}
      options={sampleOptions}
      placeholder="Select a product..."
      allowClear
    />
  )
}

export const SingleSelect: Story = {
  render: () => <SingleSelectDemo />,
}

export const MultiSelect: Story = {
  render: () => <MultiSelectDemo />,
}

export const WithPreselected: Story = {
  render: () => <WithPreselectedDemo />,
}

export const WithSecondaryLabels: Story = {
  render: () => <WithSecondaryLabelsDemo />,
}

export const Clearable: Story = {
  render: () => <ClearableDemo />,
}
