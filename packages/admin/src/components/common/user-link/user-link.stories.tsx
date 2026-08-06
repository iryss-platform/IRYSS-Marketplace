import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { MemoryRouter } from "react-router-dom"
import { Avatar, Text } from "@medusajs/ui"
import { Link } from "react-router-dom"

/**
 * UserLink depends on react-router-dom's <Link> and the useUser hook.
 * We create a simplified visual replica here to avoid needing the full
 * API provider, while demonstrating the exact same visual output.
 */
const UserLinkVisual = ({
  first_name,
  last_name,
  email,
  type = "user",
}: {
  id?: string
  first_name?: string | null
  last_name?: string | null
  email: string
  type?: "customer" | "user"
}) => {
  const name = [first_name, last_name].filter(Boolean).join(" ")
  const fallback = name ? name.slice(0, 1) : email.slice(0, 1)

  return (
    <Link
      to="#"
      className="flex items-center gap-x-2 w-fit transition-fg hover:text-ui-fg-subtle outline-none focus-visible:shadow-borders-focus rounded-md"
    >
      <Avatar size="2xsmall" fallback={fallback.toUpperCase()} />
      <Text size="small" leading="compact" weight="regular">
        {name || email}
      </Text>
    </Link>
  )
}

const meta: Meta<typeof UserLinkVisual> = {
  title: "Admin/Common/UserLink",
  component: UserLinkVisual,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof UserLinkVisual>

export const WithFullName: Story = {
  args: {
    first_name: "Jane",
    last_name: "Smith",
    email: "jane@example.com",
    type: "user",
  },
}

export const EmailOnly: Story = {
  args: {
    email: "admin@iryss.com",
  },
}

export const Customer: Story = {
  args: {
    first_name: "Alex",
    last_name: "Johnson",
    email: "alex@customer.com",
    type: "customer",
  },
}

export const MultipleUsers: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <UserLinkVisual first_name="Jane" last_name="Smith" email="jane@example.com" />
      <UserLinkVisual email="noreply@iryss.com" />
      <UserLinkVisual first_name="Alex" last_name="Johnson" email="alex@customer.com" type="customer" />
    </div>
  ),
}
