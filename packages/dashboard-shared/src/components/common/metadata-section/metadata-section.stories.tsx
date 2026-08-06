import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { MetadataSection } from "./metadata-section"
import { MemoryRouter } from "react-router-dom"

const meta: Meta<typeof MetadataSection> = {
  title: "Dashboard/Common/MetadataSection",
  component: MetadataSection,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ maxWidth: 600, padding: 20 }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof MetadataSection>

export const WithMetadata: Story = {
  args: {
    data: {
      metadata: {
        source: "import",
        sync_id: "abc-123",
        priority: "high",
      },
    },
  },
}

export const EmptyMetadata: Story = {
  args: {
    data: {
      metadata: {},
    },
  },
}

export const NullMetadata: Story = {
  args: {
    data: {
      metadata: null,
    },
  },
}

export const CustomHref: Story = {
  args: {
    data: {
      metadata: {
        key1: "value1",
        key2: "value2",
      },
    },
    href: "/custom/metadata/path",
  },
}

export const NoMetadataProperty: Story = {
  args: {
    data: {
      name: "Test product",
    },
  },
}
