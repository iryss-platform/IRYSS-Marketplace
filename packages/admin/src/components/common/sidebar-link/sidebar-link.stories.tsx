import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { MemoryRouter } from "react-router-dom"
import { SidebarLink } from "./sidebar-link"

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1L10 5.5L15 6.5L11.5 10L12.5 15L8 12.5L3.5 15L4.5 10L1 6.5L6 5.5L8 1Z" fill="currentColor" />
  </svg>
)

const GearIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 10a2 2 0 100-4 2 2 0 000 4z" />
    <path fillRule="evenodd" d="M6.5 1.5a1.5 1.5 0 013 0v.32a6.08 6.08 0 011.22.5l.23-.23a1.5 1.5 0 012.12 2.12l-.23.23c.2.38.37.79.5 1.22h.32a1.5 1.5 0 010 3h-.32c-.13.43-.3.84-.5 1.22l.23.23a1.5 1.5 0 01-2.12 2.12l-.23-.23c-.38.2-.79.37-1.22.5v.32a1.5 1.5 0 01-3 0v-.32a6.08 6.08 0 01-1.22-.5l-.23.23a1.5 1.5 0 01-2.12-2.12l.23-.23a6.08 6.08 0 01-.5-1.22H2a1.5 1.5 0 010-3h.32c.13-.43.3-.84.5-1.22l-.23-.23a1.5 1.5 0 012.12-2.12l.23.23c.38-.2.79-.37 1.22-.5V1.5z" clipRule="evenodd" />
  </svg>
)

const meta: Meta<typeof SidebarLink> = {
  title: "Admin/Common/SidebarLink",
  component: SidebarLink,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ maxWidth: "320px" }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof SidebarLink>

export const Default: Story = {
  args: {
    to: "/settings/general",
    labelKey: "General",
    descriptionKey: "Manage general settings for your store",
    icon: <GearIcon />,
  },
}

export const WithStarIcon: Story = {
  args: {
    to: "/settings/favorites",
    labelKey: "Favorites",
    descriptionKey: "View your favorite items",
    icon: <StarIcon />,
  },
}

export const MultipleLinks: Story = {
  render: () => (
    <div style={{ maxWidth: "320px" }}>
      <SidebarLink
        to="/settings/general"
        labelKey="General"
        descriptionKey="Manage general settings for your store"
        icon={<GearIcon />}
      />
      <SidebarLink
        to="/settings/favorites"
        labelKey="Favorites"
        descriptionKey="View and manage your favorites"
        icon={<StarIcon />}
      />
    </div>
  ),
}
