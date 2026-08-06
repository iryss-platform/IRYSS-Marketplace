import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { HandleInput } from "./handle-input"

const meta: Meta<typeof HandleInput> = {
  title: "Admin/Inputs/HandleInput",
  component: HandleInput,
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
type Story = StoryObj<typeof HandleInput>

export const Default: Story = {
  args: {
    placeholder: "my-product",
  },
}

export const WithSlashPrefix: Story = {
  args: {
    prefix: "/",
    placeholder: "my-product-handle",
  },
}

export const WithCustomPrefix: Story = {
  args: {
    prefix: "https://store.com/",
    placeholder: "product-slug",
  },
}

export const WithValue: Story = {
  args: {
    prefix: "/",
    defaultValue: "summer-sale-2024",
  },
}

export const Disabled: Story = {
  args: {
    prefix: "/",
    defaultValue: "locked-handle",
    disabled: true,
  },
}

export const AllPrefixes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "400px" }}>
      <HandleInput prefix="/" placeholder="default-handle" />
      <HandleInput prefix="https://iryss.com/" placeholder="product-slug" />
      <HandleInput prefix="#" placeholder="anchor-id" />
      <HandleInput prefix="@" placeholder="username" />
    </div>
  ),
}
