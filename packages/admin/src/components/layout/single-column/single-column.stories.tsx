import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { SingleColumnLayout } from "./single-column"
import { Container, Heading, Text } from "@medusajs/ui"

const meta: Meta<typeof SingleColumnLayout> = {
  title: "Admin/Layout/SingleColumnLayout",
  component: SingleColumnLayout,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "800px" }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof SingleColumnLayout>

const PlaceholderSection = ({
  title,
  height = "120px",
}: {
  title: string
  height?: string
}) => (
  <Container>
    <div style={{ minHeight: height }}>
      <Heading level="h2">{title}</Heading>
      <Text size="small" className="text-ui-fg-subtle" style={{ marginTop: "8px" }}>
        Section content goes here
      </Text>
    </div>
  </Container>
)

export const Default: Story = {
  render: () => (
    <SingleColumnLayout>
      <PlaceholderSection title="General Information" />
      <PlaceholderSection title="Details" height="200px" />
    </SingleColumnLayout>
  ),
}

export const MultipleSections: Story = {
  render: () => (
    <SingleColumnLayout>
      <PlaceholderSection title="Overview" />
      <PlaceholderSection title="Pricing" height="160px" />
      <PlaceholderSection title="Variants" height="240px" />
      <PlaceholderSection title="Metadata" height="80px" />
    </SingleColumnLayout>
  ),
}
