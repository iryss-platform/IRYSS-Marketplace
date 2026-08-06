import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { IconAvatar } from "../icon-avatar"

/**
 * AvatarBox depends on `virtual:mercur/config` which is only available at
 * build time. This story shows the visual shape using the underlying
 * IconAvatar component with a similar layout.
 */

const meta: Meta = {
  title: "Dashboard/Common/LogoBox",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          padding: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export default meta

const FallbackLetter = ({ letter }: { letter: string }) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ borderRadius: 10 }}
  >
    <rect width="400" height="400" rx="40" fill="#18181B" />
    <text
      x="200"
      y="200"
      textAnchor="middle"
      dominantBaseline="central"
      fill="white"
      fontSize="200"
      fontWeight="bold"
      fontFamily="Inter, system-ui, sans-serif"
    >
      {letter}
    </text>
  </svg>
)

export const DefaultFallback: StoryObj = {
  render: () => (
    <IconAvatar
      size="xlarge"
      className="bg-ui-button-neutral shadow-buttons-neutral relative mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-xl"
    >
      <FallbackLetter letter="M" />
    </IconAvatar>
  ),
}

export const CustomLetter: StoryObj = {
  render: () => (
    <IconAvatar
      size="xlarge"
      className="bg-ui-button-neutral shadow-buttons-neutral relative mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-xl"
    >
      <FallbackLetter letter="I" />
    </IconAvatar>
  ),
}

export const WithImage: StoryObj = {
  render: () => (
    <IconAvatar
      size="xlarge"
      className="bg-ui-button-neutral shadow-buttons-neutral relative mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-xl"
    >
      <img
        src="https://picsum.photos/seed/logo/100/100"
        alt="Logo"
        style={{
          height: "100%",
          width: "100%",
          borderRadius: 10,
          objectFit: "cover",
        }}
      />
    </IconAvatar>
  ),
}
