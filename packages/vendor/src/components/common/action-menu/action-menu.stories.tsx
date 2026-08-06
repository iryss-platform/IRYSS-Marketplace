import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { ActionMenu } from "./action-menu"
import { MemoryRouter } from "react-router-dom"

const PencilIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 2.5L13.5 4.5L5 13H3V11L11.5 2.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4.5H13M6 4.5V3.5C6 3.224 6.224 3 6.5 3H9.5C9.776 3 10 3.224 10 3.5V4.5M5 7V12M8 7V12M11 7V12M4 4.5L4.5 13.5H11.5L12 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
    <path d="M3 11V3H11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
)

const meta: Meta<typeof ActionMenu> = {
  title: "Vendor/Common/ActionMenu",
  component: ActionMenu,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ padding: "40px", display: "flex", justifyContent: "center" }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ActionMenu>

export const Default: Story = {
  args: {
    groups: [
      {
        actions: [
          { icon: <PencilIcon />, label: "Edit", onClick: () => alert("Edit clicked") },
          { icon: <CopyIcon />, label: "Duplicate", onClick: () => alert("Duplicate clicked") },
        ],
      },
      {
        actions: [
          { icon: <TrashIcon />, label: "Delete", onClick: () => alert("Delete clicked") },
        ],
      },
    ],
  },
}

export const SingleGroup: Story = {
  args: {
    groups: [
      {
        actions: [
          { icon: <PencilIcon />, label: "Edit Product", onClick: () => {} },
          { icon: <CopyIcon />, label: "Copy ID", onClick: () => {} },
        ],
      },
    ],
  },
}

export const WithDisabledAction: Story = {
  args: {
    groups: [
      {
        actions: [
          { icon: <PencilIcon />, label: "Edit", onClick: () => {} },
          {
            icon: <TrashIcon />,
            label: "Delete",
            onClick: () => {},
            disabled: true,
            disabledTooltip: "Cannot delete published products",
          },
        ],
      },
    ],
  },
}

export const PrimaryVariant: Story = {
  args: {
    variant: "primary",
    groups: [
      {
        actions: [
          { icon: <PencilIcon />, label: "Edit", onClick: () => {} },
          { icon: <TrashIcon />, label: "Delete", onClick: () => {} },
        ],
      },
    ],
  },
}
