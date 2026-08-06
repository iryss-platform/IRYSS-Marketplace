export const MarketplaceEvents = {
  PRODUCT_VIEWED: 'product_viewed',
  PRODUCT_SAVED: 'product_saved',
  SEARCH_PERFORMED: 'search_performed',
  FILTER_APPLIED: 'filter_applied',
  BRAND_VIEWED: 'brand_viewed',
  ADD_TO_CART: 'add_to_cart',
  CHECKOUT_STARTED: 'checkout_started',
  ORDER_COMPLETED: 'order_completed',
  ORDER_CANCELLED: 'order_cancelled',
  REFUND_ISSUED: 'refund_issued',
} as const

export const FinancialEvents = {
  PAYMENT_CAPTURED: 'payment_captured',
  COMMISSION_CALCULATED: 'commission_calculated',
  TRANSFER_INITIATED: 'transfer_initiated',
  TRANSFER_COMPLETED: 'transfer_completed',
  REFUND_PROCESSED: 'refund_processed',
  INVOICE_GENERATED: 'invoice_generated',
  CREDIT_NOTE_CREATED: 'credit_note_created',
} as const

export const ShippingEvents = {
  FULFILMENT_CREATED: 'fulfilment_created',
  SHIPMENT_CREATED: 'shipment_created',
  SHIPMENT_LABEL_GENERATED: 'shipment_label_generated',
  SHIPMENT_TRACKING_UPDATED: 'shipment_tracking_updated',
  SHIPMENT_DELIVERED: 'shipment_delivered',
  RETURN_REQUESTED: 'return_requested',
  RETURN_RECEIVED: 'return_received',
} as const

export const ProductOnboardingEvents = {
  PRODUCT_IMPORTED: 'product_imported',
  PRODUCT_NEEDS_INFO: 'product_needs_info',
  PRODUCT_ENRICHMENT_STARTED: 'product_enrichment_started',
  PRODUCT_ENRICHMENT_COMPLETED: 'product_enrichment_completed',
  PRODUCT_ENRICHMENT_FAILED: 'product_enrichment_failed',
  PRODUCT_APPROVED: 'product_approved',
  PRODUCT_REJECTED: 'product_rejected',
  PRODUCT_PUBLISHED: 'product_published',
} as const

export const ContentEvents = {
  VIDEO_VIEWED: 'video_viewed',
  VIDEO_WATCH_PROGRESS: 'video_watch_progress',
  VIDEO_COMPLETED: 'video_completed',
  VIDEO_PRODUCT_CLICKED: 'video_product_clicked',
  VIDEO_SAVED: 'video_saved',
} as const

export const ConnectorEvents = {
  STORE_CONNECTED: 'connector_store_connected',
  IMPORT_STARTED: 'connector_import_started',
  IMPORT_COMPLETED: 'connector_import_completed',
  PRODUCT_PUSHED: 'connector_product_pushed',
  SYNC_FAILED: 'connector_sync_failed',
} as const
