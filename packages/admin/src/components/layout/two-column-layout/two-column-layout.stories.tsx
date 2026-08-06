import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { TwoColumnLayout } from "./two-column-layout"
import { Container, Heading, Text } from "@medusajs/ui"

const meta: Meta<typeof TwoColumnLayout> = {
  title: "Admin/Layout/TwoColumnLayout",
  component: TwoColumnLayout,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "1200px" }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof TwoColumnLayout>

const Section = ({
  title,
  description,
  height = "120px",
}: {
  title: string
  description?: string
  height?: string
}) => (
  <Container>
    <div style={{ minHeight: height }}>
      <Heading level="h2">{title}</Heading>
      {description && (
        <Text size="small" className="text-ui-fg-subtle" style={{ marginTop: "8px" }}>
          {description}
        </Text>
      )}
    </div>
  </Container>
)

export const Default: Story = {
  args: {
    firstCol: (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Section title="General Information" description="Main product details" height="200px" />
        <Section title="Pricing" description="Set product prices" height="160px" />
      </div>
    ),
    secondCol: (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Section title="Status" description="Product status and visibility" height="100px" />
        <Section title="Organization" description="Collections and categories" height="120px" />
      </div>
    ),
  },
}

export const ProductDetailLayout: Story = {
  args: {
    firstCol: (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Section title="Product Details" description="Name, description, handle" height="240px" />
        <Section title="Variants" description="Product variant options" height="300px" />
        <Section title="Media" description="Product images and thumbnails" height="200px" />
      </div>
    ),
    secondCol: (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Section title="Publish Status" height="80px" />
        <Section title="Sales Channels" height="120px" />
        <Section title="Tags" height="100px" />
      </div>
    ),
  },
}
