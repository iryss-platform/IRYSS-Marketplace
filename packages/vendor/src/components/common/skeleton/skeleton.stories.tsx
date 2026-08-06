import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import {
  Skeleton,
  TextSkeleton,
  HeadingSkeleton,
  IconButtonSkeleton,
  GeneralSectionSkeleton,
  TableSkeleton,
  SingleColumnPageSkeleton,
  TwoColumnPageSkeleton,
} from "./skeleton"

const meta: Meta<typeof Skeleton> = {
  title: "Vendor/Common/Skeleton",
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

export const TextSkeletonSmall: Story = {
  render: () => <TextSkeleton size="small" leading="compact" characters={20} />,
  name: "TextSkeleton (small)",
}

export const TextSkeletonBase: Story = {
  render: () => <TextSkeleton size="base" characters={15} />,
  name: "TextSkeleton (base)",
}

export const HeadingSkeletonH1: Story = {
  render: () => <HeadingSkeleton level="h1" characters={12} />,
  name: "HeadingSkeleton (h1)",
}

export const HeadingSkeletonH2: Story = {
  render: () => <HeadingSkeleton level="h2" characters={16} />,
  name: "HeadingSkeleton (h2)",
}

export const IconButtonSkeletonStory: Story = {
  render: () => <IconButtonSkeleton />,
  name: "IconButtonSkeleton",
}

export const GeneralSection: Story = {
  render: () => <GeneralSectionSkeleton rowCount={4} />,
  name: "GeneralSectionSkeleton",
}

export const Table: Story = {
  render: () => (
    <div style={{ maxWidth: "800px" }}>
      <TableSkeleton rowCount={5} search filters orderBy pagination layout="fit" />
    </div>
  ),
  name: "TableSkeleton",
}

export const SingleColumnPage: Story = {
  render: () => (
    <div style={{ maxWidth: "800px" }}>
      <SingleColumnPageSkeleton sections={3} showJSON showMetadata />
    </div>
  ),
  name: "SingleColumnPageSkeleton",
}

export const TwoColumnPage: Story = {
  render: () => (
    <div style={{ maxWidth: "1000px" }}>
      <TwoColumnPageSkeleton mainSections={2} sidebarSections={1} showJSON showMetadata />
    </div>
  ),
  name: "TwoColumnPageSkeleton",
}
