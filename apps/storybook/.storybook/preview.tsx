import React from 'react'
import type { Preview } from '@storybook/react'
import { TooltipProvider } from '@medusajs/ui'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next'
import './storybook.css'

if (!i18n.isInitialized) {
  i18n.init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    resources: {
      en: {
        translation: {
          'general.plusCount': '+{{count}}',
          'general.plusCountMore': '+{{count}} more',
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
          'general.clearAll': 'Clear all',
          'general.areYouSure': 'Are you sure?',
          'general.yes': 'Yes',
          'general.no': 'No',
          'metadata.edit.header': 'Edit Metadata',
          'metadata.edit.description': 'Manage metadata',
          'actions.delete': 'Delete',
          'actions.edit': 'Edit',
          'actions.view': 'View details',
          'actions.copy': 'Copy',
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
          <Story />
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
