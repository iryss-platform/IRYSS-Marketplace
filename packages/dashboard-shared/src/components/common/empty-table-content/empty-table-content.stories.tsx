import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { NoResults, NoRecords } from "./empty-table-content"
import { MemoryRouter } from "react-router-dom"
import { InformationCircle } from "@medusajs/icons"

const meta: Meta = {
  title: "Dashboard/Common/EmptyTableContent",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div
          style={{
            maxWidth: 600,
            border: "1px solid var(--border-base)",
            borderRadius: 8,
          }}
        >
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
}

export default meta

export const NoResultsDefault: StoryObj<typeof NoResults> = {
  render: () => <NoResults />,
}

export const NoResultsCustom: StoryObj<typeof NoResults> = {
  render: () => (
    <NoResults
      title="No products found"
      message="Try adjusting your search or filter to find what you are looking for."
    />
  ),
}

export const NoResultsCustomIcon: StoryObj<typeof NoResults> = {
  render: () => (
    <NoResults
      title="Nothing here yet"
      message="Start by adding some items."
      icon={<InformationCircle />}
    />
  ),
}

export const NoRecordsDefault: StoryObj<typeof NoRecords> = {
  render: () => <NoRecords />,
}

export const NoRecordsWithAction: StoryObj<typeof NoRecords> = {
  render: () => (
    <NoRecords
      title="No products"
      message="Get started by creating your first product."
      action={{ to: "/products/create", label: "Create Product" }}
    />
  ),
}

export const NoRecordsTransparentButton: StoryObj<typeof NoRecords> = {
  render: () => (
    <NoRecords
      title="No collections"
      message="Organize products into collections."
      action={{ to: "/collections/create", label: "Add Collection" }}
      buttonVariant="transparentIconLeft"
    />
  ),
}
