import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { FileUpload } from "./file-upload"

const meta: Meta<typeof FileUpload> = {
  title: "Dashboard/Common/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 500, padding: 20 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof FileUpload>

export const Default: Story = {
  args: {
    label: "Upload files",
    formats: ["image/png", "image/jpeg", "image/webp"],
    hint: "PNG, JPG, or WebP. Max 10MB.",
    onUploaded: (files) => console.log("Uploaded:", files),
  },
}

export const SingleFile: Story = {
  args: {
    label: "Upload a document",
    multiple: false,
    formats: ["application/pdf"],
    hint: "PDF only. Max 5MB.",
    onUploaded: (files) => console.log("Uploaded:", files),
  },
}

export const WithError: Story = {
  args: {
    label: "Upload image",
    formats: ["image/png", "image/jpeg"],
    hasError: true,
    hint: "File is required",
    onUploaded: (files) => console.log("Uploaded:", files),
  },
}

export const WithUploadedImage: Story = {
  args: {
    label: "Upload logo",
    formats: ["image/png", "image/svg+xml"],
    hint: "PNG or SVG.",
    uploadedImage: "https://picsum.photos/seed/logo/128/128",
    onUploaded: (files) => console.log("Uploaded:", files),
  },
}

export const CSVUpload: Story = {
  args: {
    label: "Import data",
    multiple: false,
    formats: [".csv", ".xlsx"],
    hint: "CSV or Excel spreadsheet.",
    onUploaded: (files) => console.log("Uploaded:", files),
  },
}
