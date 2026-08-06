import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Switch, Text } from "@medusajs/ui"
import { useState } from "react"

/**
 * SwitchBox requires react-hook-form's FormProvider. We create a visual
 * replica that demonstrates the same layout and interactions without
 * requiring the form context.
 */
const SwitchBoxVisual = ({
  label,
  description,
  checked: controlledChecked,
  optional = false,
}: {
  label: string
  description: string
  checked?: boolean
  optional?: boolean
}) => {
  const [checked, setChecked] = useState(controlledChecked ?? false)

  return (
    <div className="bg-ui-bg-component shadow-elevation-card-rest flex items-start gap-x-3 rounded-lg p-3">
      <Switch
        className="mt-0.5 shrink-0"
        checked={checked}
        onCheckedChange={setChecked}
      />
      <div>
        <div className="flex items-center gap-x-1">
          <Text size="small" weight="plus" leading="compact">
            {label}
          </Text>
          {optional && (
            <Text size="small" leading="compact" className="text-ui-fg-muted">
              (optional)
            </Text>
          )}
        </div>
        <Text size="small" leading="compact" className="text-ui-fg-subtle">
          {description}
        </Text>
      </div>
    </div>
  )
}

const meta: Meta<typeof SwitchBoxVisual> = {
  title: "Admin/Common/SwitchBox",
  component: SwitchBoxVisual,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "400px" }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof SwitchBoxVisual>

export const Default: Story = {
  args: {
    label: "Enable notifications",
    description: "Receive email notifications for new orders",
  },
}

export const Checked: Story = {
  args: {
    label: "Enable notifications",
    description: "Receive email notifications for new orders",
    checked: true,
  },
}

export const Optional: Story = {
  args: {
    label: "Sales channel",
    description: "Associate this product with a sales channel",
    optional: true,
  },
}

export const MultipleSwitches: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "400px" }}>
      <SwitchBoxVisual
        label="Email notifications"
        description="Receive email notifications for new orders"
        checked={true}
      />
      <SwitchBoxVisual
        label="SMS notifications"
        description="Receive SMS notifications for order updates"
      />
      <SwitchBoxVisual
        label="Marketing emails"
        description="Receive marketing and promotional emails"
        optional
      />
    </div>
  ),
}
