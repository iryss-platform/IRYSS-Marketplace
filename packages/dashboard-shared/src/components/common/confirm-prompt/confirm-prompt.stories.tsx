import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { ConfirmPrompt } from "./confirm-prompt"
import { Button } from "@medusajs/ui"

const meta: Meta<typeof ConfirmPrompt> = {
  title: "Dashboard/Common/ConfirmPrompt",
  component: ConfirmPrompt,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ConfirmPrompt>

const ConfirmationExample = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Confirmation</Button>
      <ConfirmPrompt
        open={open}
        onOpenChange={setOpen}
        title="Confirm action"
        description="Are you sure you want to proceed with this action?"
        onConfirm={() => setOpen(false)}
      />
    </>
  )
}

export const Confirmation: Story = {
  render: () => <ConfirmationExample />,
}

const DangerExample = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="danger" onClick={() => setOpen(true)}>
        Delete Item
      </Button>
      <ConfirmPrompt
        open={open}
        onOpenChange={setOpen}
        variant="danger"
        title="Delete product"
        description="This action cannot be undone. This will permanently delete the product and all associated data."
        confirmLabel="Delete"
        cancelLabel="Keep it"
        onConfirm={() => setOpen(false)}
      />
    </>
  )
}

export const Danger: Story = {
  render: () => <DangerExample />,
}

const WithNoteExample = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Cancel Order</Button>
      <ConfirmPrompt
        open={open}
        onOpenChange={setOpen}
        variant="danger"
        title="Cancel order"
        description="Are you sure you want to cancel this order?"
        noteLabel="Reason for cancellation"
        notePlaceholder="Enter a reason..."
        noteOptional={false}
        onConfirm={(note) => {
          console.log("Cancelled with note:", note)
          setOpen(false)
        }}
      />
    </>
  )
}

export const WithNote: Story = {
  render: () => <WithNoteExample />,
}

const LoadingExample = () => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Trigger Loading</Button>
      <ConfirmPrompt
        open={open}
        onOpenChange={setOpen}
        title="Processing"
        description="This will simulate an async operation."
        isLoading={loading}
        onConfirm={async () => {
          setLoading(true)
          await new Promise((r) => setTimeout(r, 2000))
          setLoading(false)
          setOpen(false)
        }}
      />
    </>
  )
}

export const Loading: Story = {
  render: () => <LoadingExample />,
}
