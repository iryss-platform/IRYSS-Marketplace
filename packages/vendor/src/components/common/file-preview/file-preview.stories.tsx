import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { FilePreview } from "./file-preview"

const meta: Meta<typeof FilePreview> = {
  title: "Vendor/Common/FilePreview",
  component: FilePreview,
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
type Story = StoryObj<typeof FilePreview>

export const Default: Story = {
  args: {
    filename: "product-catalog.csv",
  },
}

export const WithDownloadUrl: Story = {
  args: {
    filename: "inventory-report-2024.xlsx",
    url: "#",
  },
}

export const Loading: Story = {
  args: {
    filename: "large-import-file.csv",
    loading: true,
    activity: "Uploading... 45%",
  },
}

export const HiddenThumbnail: Story = {
  args: {
    filename: "order-export.pdf",
    url: "#",
    hideThumbnail: true,
  },
}

export const MultipleFiles: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <FilePreview filename="product-images.zip" url="#" />
      <FilePreview filename="uploading-file.csv" loading activity="Processing..." />
      <FilePreview filename="completed-import.xlsx" url="#" />
    </div>
  ),
}
