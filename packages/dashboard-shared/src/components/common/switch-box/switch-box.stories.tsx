import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Switch } from "@medusajs/ui"

/**
 * SwitchBox depends on react-hook-form's Controller and a custom Form
 * component. This story demonstrates the visual shape of the SwitchBox
 * layout using raw @medusajs/ui primitives, so it renders in Storybook
 * without needing a form provider.
 */

const meta: Meta = {
  title: "Dashboard/Common/SwitchBox",
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

const SwitchBoxMock = ({
  label,
  description,
  checked = false,
  optional = false,
}: {
  label: string
  description: string
  checked?: boolean
  optional?: boolean
}) => {
  const [isChecked, setIsChecked] = React.useState(checked)
  return (
    <div className="bg-ui-bg-component shadow-elevation-card-rest flex items-start gap-x-3 rounded-lg p-3">
      <Switch
        checked={isChecked}
        onCheckedChange={setIsChecked}
      />
      <div>
        <label className="txt-compact-small-plus text-ui-fg-base">
          {label}
          {optional && (
            <span className="text-ui-fg-muted ml-1 font-normal">(optional)</span>
          )}
        </label>
        <p className="txt-small text-ui-fg-subtle">{description}</p>
      </div>
    </div>
  )
}

export const Default: StoryObj = {
  render: () => (
    <SwitchBoxMock
      label="Enable notifications"
      description="Receive email notifications when new orders are placed."
    />
  ),
}

export const Checked: StoryObj = {
  render: () => (
    <SwitchBoxMock
      label="Tax inclusive pricing"
      description="All prices include tax by default."
      checked
    />
  ),
}

export const Optional: StoryObj = {
  render: () => (
    <SwitchBoxMock
      label="Advanced mode"
      description="Enable advanced settings for power users."
      optional
    />
  ),
}

export const MultipleToggles: StoryObj = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <SwitchBoxMock
        label="Email notifications"
        description="Get notified about new orders via email."
        checked
      />
      <SwitchBoxMock
        label="SMS notifications"
        description="Receive text messages for urgent updates."
      />
      <SwitchBoxMock
        label="Push notifications"
        description="Enable browser push notifications."
        optional
      />
    </div>
  ),
}
