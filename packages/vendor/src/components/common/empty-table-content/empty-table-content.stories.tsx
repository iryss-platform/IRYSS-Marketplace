import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { NoResults, NoRecords } from "./empty-table-content"
import { MemoryRouter } from "react-router-dom"

const i18nDecorator = (Story: React.ComponentType) => (
  <MemoryRouter>
    <Story />
  </MemoryRouter>
)

const noResultsMeta: Meta<typeof NoResults> = {
  title: "Vendor/Common/NoResults",
  component: NoResults,
  tags: ["autodocs"],
  decorators: [i18nDecorator],
}

export default noResultsMeta
type NoResultsStory = StoryObj<typeof NoResults>

export const Default: NoResultsStory = {
  args: {},
}

export const CustomMessage: NoResultsStory = {
  args: {
    title: "No products found",
    message: "Try adjusting your search or filter to find what you are looking for.",
  },
}
