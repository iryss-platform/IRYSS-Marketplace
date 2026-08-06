import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { ActionMenu } from "./action-menu"
import { MemoryRouter } from "react-router-dom"
import { PencilSquare, Trash, EllipsisHorizontal, Eye, ArrowPath } from "@medusajs/icons"

const meta: Meta<typeof ActionMenu> = {
  title: "Dashboard/Common/ActionMenu",
  component: ActionMenu,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ padding: 40 }}>
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
          {
            icon: <PencilSquare />,
            label: "Edit",
            onClick: () => console.log("Edit clicked"),
          },
          {
            icon: <Eye />,
            label: "View details",
            onClick: () => console.log("View clicked"),
          },
        ],
      },
      {
        actions: [
          {
            icon: <Trash />,
            label: "Delete",
            onClick: () => console.log("Delete clicked"),
          },
        ],
      },
    ],
  },
}

export const WithLinks: Story = {
  args: {
    groups: [
      {
        actions: [
          {
            icon: <PencilSquare />,
            label: "Edit product",
            to: "/products/1/edit",
          },
          {
            icon: <Eye />,
            label: "View product",
            to: "/products/1",
          },
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
          {
            icon: <PencilSquare />,
            label: "Edit",
            onClick: () => console.log("Edit"),
          },
          {
            icon: <ArrowPath />,
            label: "Sync inventory",
            disabled: true,
            disabledTooltip: "Inventory sync is not available for this product",
            onClick: () => {},
          },
          {
            icon: <Trash />,
            label: "Delete",
            onClick: () => console.log("Delete"),
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
          {
            icon: <PencilSquare />,
            label: "Edit",
            onClick: () => console.log("Edit"),
          },
        ],
      },
    ],
  },
}

export const MultipleGroups: Story = {
  args: {
    groups: [
      {
        actions: [
          {
            icon: <Eye />,
            label: "View",
            onClick: () => console.log("View"),
          },
          {
            icon: <PencilSquare />,
            label: "Edit",
            onClick: () => console.log("Edit"),
          },
        ],
      },
      {
        actions: [
          {
            icon: <ArrowPath />,
            label: "Refresh",
            onClick: () => console.log("Refresh"),
          },
        ],
      },
      {
        actions: [
          {
            icon: <Trash />,
            label: "Delete",
            onClick: () => console.log("Delete"),
          },
        ],
      },
    ],
  },
}
