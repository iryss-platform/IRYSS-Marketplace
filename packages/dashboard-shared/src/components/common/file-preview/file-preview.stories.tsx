import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { FilePreview } from "./file-preview"

const meta: Meta<typeof FilePreview> = {
  title: "Dashboard/Common/FilePreview",
  component: FilePreview,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 400, padding: 20 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof FilePreview>

export const Default: Story = {
  args: {
    filename: "product-image.png",
  },
}

export const WithDownloadUrl: Story = {
  args: {
    filename: "invoice-2024-001.pdf",
    url: "https://example.com/files/invoice.pdf",
  },
}

export const Loading: Story = {
  args: {
    filename: "uploading-file.jpg",
    loading: true,
    activity: "Uploading...",
  },
}

export const HiddenThumbnail: Story = {
  args: {
    filename: "data-export.csv",
    hideThumbnail: true,
  },
}

export const LongFilename: Story = {
  args: {
    filename:
      "very-long-filename-that-should-be-truncated-in-the-preview-component.xlsx",
    url: "https://example.com/files/export.xlsx",
  },
}
