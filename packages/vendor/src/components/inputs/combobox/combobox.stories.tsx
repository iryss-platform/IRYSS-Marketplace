import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Combobox } from "./combobox"

const sampleOptions = [
  { value: "electronics", label: "Electronics" },
  { value: "clothing", label: "Clothing" },
  { value: "home", label: "Home & Garden" },
  { value: "sports", label: "Sports & Outdoors" },
  { value: "books", label: "Books" },
  { value: "toys", label: "Toys & Games" },
  { value: "beauty", label: "Beauty & Personal Care" },
  { value: "food", label: "Food & Beverages" },
]

const countryOptions = [
  { value: "us", label: "United States", secondaryLabel: "US" },
  { value: "gb", label: "United Kingdom", secondaryLabel: "GB" },
  { value: "de", label: "Germany", secondaryLabel: "DE" },
  { value: "fr", label: "France", secondaryLabel: "FR" },
  { value: "jp", label: "Japan", secondaryLabel: "JP" },
  { value: "au", label: "Australia", secondaryLabel: "AU" },
]

const meta: Meta<typeof Combobox> = {
  title: "Vendor/Inputs/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "350px", minHeight: "300px" }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Combobox>

export const SingleSelect: Story = {
  args: {
    options: sampleOptions,
    placeholder: "Select a category...",
  },
}

export const MultiSelect: Story = {
  args: {
    value: [] as string[],
    options: sampleOptions,
    placeholder: "Select categories...",
  },
}

export const WithSecondaryLabels: Story = {
  args: {
    options: countryOptions,
    placeholder: "Select a country...",
  },
}

export const WithPreselectedValues: Story = {
  args: {
    value: ["electronics", "clothing"],
    options: sampleOptions,
    placeholder: "Select categories...",
  },
}

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    placeholder: "Disabled combobox",
    disabled: true,
  },
}

export const WithDisabledOptions: Story = {
  args: {
    options: [
      { value: "active", label: "Active Category" },
      { value: "disabled1", label: "Archived Category", disabled: true },
      { value: "another", label: "Another Category" },
      { value: "disabled2", label: "Deprecated Category", disabled: true },
    ],
    placeholder: "Some options are disabled...",
  },
}

export const InteractiveMulti: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([])
    return (
      <div style={{ maxWidth: "350px" }}>
        <Combobox
          value={selected}
          onChange={(v) => setSelected(v ?? [])}
          options={sampleOptions}
          placeholder="Pick categories..."
        />
        <p style={{ marginTop: "8px", fontSize: "12px", color: "#999" }}>
          Selected: {selected.length ? selected.join(", ") : "(none)"}
        </p>
      </div>
    )
  },
  name: "Interactive (Multi)",
}
