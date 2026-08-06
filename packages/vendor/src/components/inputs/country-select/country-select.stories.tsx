import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { CountrySelect } from "./country-select"

const meta: Meta<typeof CountrySelect> = {
  title: "Vendor/Inputs/CountrySelect",
  component: CountrySelect,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "350px", minHeight: "320px" }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof CountrySelect>

export const Default: Story = {
  args: {
    placeholder: "Choose a country...",
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: "us",
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: "gb",
    disabled: true,
  },
}

export const Interactive: Story = {
  render: () => {
    const [country, setCountry] = useState("")
    return (
      <div style={{ maxWidth: "350px" }}>
        <CountrySelect
          value={country}
          onChange={(val) => setCountry(val)}
          placeholder="Select vendor country..."
        />
        <p style={{ marginTop: "8px", fontSize: "12px", color: "#999" }}>
          Selected: {country || "(none)"}
        </p>
      </div>
    )
  },
}
