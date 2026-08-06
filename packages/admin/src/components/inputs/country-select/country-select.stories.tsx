import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { CountrySelect } from "./country-select"

/**
 * CountrySelect wraps @medusajs/ui's Select with a full list of countries.
 * It uses react-i18next for the placeholder text. If i18n is not configured
 * in Storybook, the fallback key "fields.selectCountry" will be displayed.
 */

const meta: Meta<typeof CountrySelect> = {
  title: "Admin/Inputs/CountrySelect",
  component: CountrySelect,
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
type Story = StoryObj<typeof CountrySelect>

export const Default: Story = {
  args: {
    placeholder: "Select a country...",
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: "us",
    placeholder: "Select a country...",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "gb",
    placeholder: "Select a country...",
  },
}
