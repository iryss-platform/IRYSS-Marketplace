import React from 'react'
import type { Preview } from '@storybook/react'
import { TooltipProvider } from '@medusajs/ui'
import { MemoryRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next'
import './storybook.css'

// Minimal i18n setup so components using useTranslation don't crash
if (!i18n.isInitialized) {
  i18n.init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    resources: {
      en: {
        translation: {
          'general.plusCount': '+{{count}}',
          'general.noResults': 'No results',
          'general.noRecords': 'No records',
          'general.search': 'Search',
          'general.save': 'Save',
          'general.cancel': 'Cancel',
          'general.delete': 'Delete',
          'general.edit': 'Edit',
          'general.create': 'Create',
          'general.add': 'Add',
          'general.remove': 'Remove',
          'general.close': 'Close',
          'general.confirm': 'Confirm',
          'general.loading': 'Loading...',
          'general.required': 'Required',
          'general.optional': 'Optional',
          'general.actions': 'Actions',
          'general.details': 'Details',
          'general.metadata': 'Metadata',
          'metadata.edit.header': 'Edit Metadata',
          'metadata.edit.description': 'Manage metadata for this resource',
          'general.clearAll': 'Clear all',
        },
      },
    },
  })
}

const preview: Preview = {
  decorators: [
    (Story) => (
      <I18nextProvider i18n={i18n}>
        <TooltipProvider>
          <MemoryRouter>
            <Story />
          </MemoryRouter>
        </TooltipProvider>
      </I18nextProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
