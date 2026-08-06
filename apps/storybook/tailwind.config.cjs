const path = require("path")

const medusaUI = path.join(
  path.dirname(require.resolve("@medusajs/ui")),
  "**/*.{js,jsx,ts,tsx}"
)

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@medusajs/ui-preset")],
  darkMode: "class",
  content: [
    // B2C Storefront
    "../../apps/storefront/src/**/*.{js,ts,jsx,tsx}",
    // Admin
    "../../packages/admin/src/**/*.{js,ts,jsx,tsx}",
    // Vendor
    "../../packages/vendor/src/**/*.{js,ts,jsx,tsx}",
    // Dashboard shared
    "../../packages/dashboard-shared/src/**/*.{js,ts,jsx,tsx}",
    // Medusa UI components
    medusaUI,
    // Local stories
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // B2C storefront custom colors (from colors.css CSS variables)
      backgroundColor: {
        primary: "rgba(var(--bg-primary))",
        secondary: "rgba(var(--bg-secondary))",
        tertiary: "rgba(var(--bg-tertiary))",
        disabled: "rgba(var(--bg-disabled))",
        action: {
          DEFAULT: "rgba(var(--bg-action-primary))",
          hover: "rgba(var(--bg-action-primary-hover))",
          pressed: "rgba(var(--bg-action-primary-pressed))",
          secondary: "rgba(var(--bg-action-secondary))",
          "secondary-hover": "rgba(var(--bg-action-secondary-hover))",
          "secondary-pressed": "rgba(var(--bg-action-secondary-pressed))",
          tertiary: "rgba(var(--bg-action-tertiary))",
          "tertiary-hover": "rgba(var(--bg-action-tertiary-hover))",
          "tertiary-pressed": "rgba(var(--bg-action-tertiary-pressed))",
        },
      },
      textColor: {
        action: {
          "on-primary": "rgba(var(--content-action-on-primary))",
          "on-secondary": "rgba(var(--content-action-on-secondary))",
          disabled: "rgba(var(--content-disabled))",
        },
      },
    },
  },
  plugins: [],
}
