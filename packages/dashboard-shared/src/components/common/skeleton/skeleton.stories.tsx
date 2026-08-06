import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import {
  Skeleton,
  HeadingSkeleton,
  TextSkeleton,
  IconButtonSkeleton,
  GeneralSectionSkeleton,
  TableSkeleton,
  TableSectionSkeleton,
  JsonViewSectionSkeleton,
  SingleColumnPageSkeleton,
  TwoColumnPageSkeleton,
} from "./skeleton"

const meta: Meta<typeof Skeleton> = {
  title: "Dashboard/Common/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  args: {
    className: "h-4 w-32",
  },
}

export const Heading: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <HeadingSkeleton level="h1" characters={20} />
      <HeadingSkeleton level="h2" characters={15} />
      <HeadingSkeleton level="h3" characters={12} />
    </div>
  ),
}

export const TextVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <TextSkeleton size="xlarge" characters={20} />
      <TextSkeleton size="large" characters={18} />
      <TextSkeleton size="base" characters={15} />
      <TextSkeleton size="small" characters={12} />
      <TextSkeleton size="xsmall" characters={10} />
    </div>
  ),
}

export const IconButton: Story = {
  render: () => <IconButtonSkeleton />,
}

export const GeneralSection: Story = {
  render: () => <GeneralSectionSkeleton rowCount={4} />,
}

export const Table: Story = {
  render: () => <TableSkeleton rowCount={5} />,
}

export const TableNoToolbar: Story = {
  render: () => (
    <TableSkeleton
      rowCount={5}
      search={false}
      filters={false}
      orderBy={false}
    />
  ),
}

export const TableSection: Story = {
  render: () => <TableSectionSkeleton rowCount={5} />,
}

export const JsonViewSection: Story = {
  render: () => <JsonViewSectionSkeleton />,
}

export const SingleColumnPage: Story = {
  render: () => <SingleColumnPageSkeleton sections={3} showMetadata />,
}

export const TwoColumnPage: Story = {
  render: () => (
    <TwoColumnPageSkeleton
      mainSections={2}
      sidebarSections={1}
      showMetadata
      showJSON
    />
  ),
}
