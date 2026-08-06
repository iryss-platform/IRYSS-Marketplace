import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import {
  Skeleton,
  HeadingSkeleton,
  TextSkeleton,
  IconButtonSkeleton,
  GeneralSectionSkeleton,
  TableSkeleton,
  SingleColumnPageSkeleton,
  TwoColumnPageSkeleton,
} from "./skeleton"

const meta: Meta<typeof Skeleton> = {
  title: "Admin/Common/Skeleton",
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

export const CustomSize: Story = {
  args: {
    className: "h-8 w-64 rounded-lg",
  },
}

export const HeadingSkeletons: StoryObj = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div>
        <div style={{ fontSize: "11px", color: "#888", marginBottom: "4px" }}>h1 (16 characters)</div>
        <HeadingSkeleton level="h1" characters={16} />
      </div>
      <div>
        <div style={{ fontSize: "11px", color: "#888", marginBottom: "4px" }}>h2 (12 characters)</div>
        <HeadingSkeleton level="h2" characters={12} />
      </div>
      <div>
        <div style={{ fontSize: "11px", color: "#888", marginBottom: "4px" }}>h3 (8 characters)</div>
        <HeadingSkeleton level="h3" characters={8} />
      </div>
    </div>
  ),
}

export const TextSkeletons: StoryObj = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {(["xsmall", "small", "base", "large", "xlarge"] as const).map((size) => (
        <div key={size}>
          <div style={{ fontSize: "11px", color: "#888", marginBottom: "4px" }}>{size}</div>
          <TextSkeleton size={size} characters={20} />
        </div>
      ))}
    </div>
  ),
}

export const IconButtonSkeletonStory: StoryObj = {
  name: "IconButton Skeleton",
  render: () => <IconButtonSkeleton />,
}

export const GeneralSection: StoryObj = {
  render: () => <GeneralSectionSkeleton rowCount={4} />,
}

export const Table: StoryObj = {
  render: () => (
    <div style={{ maxWidth: "800px" }}>
      <TableSkeleton rowCount={5} search filters orderBy pagination layout="fit" />
    </div>
  ),
}

export const SingleColumnPage: StoryObj = {
  render: () => (
    <div style={{ maxWidth: "800px" }}>
      <SingleColumnPageSkeleton sections={3} showJSON showMetadata />
    </div>
  ),
}

export const TwoColumnPage: StoryObj = {
  render: () => (
    <div style={{ maxWidth: "1000px" }}>
      <TwoColumnPageSkeleton mainSections={2} sidebarSections={2} showJSON showMetadata />
    </div>
  ),
}
