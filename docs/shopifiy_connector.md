IRYSS Shopify Connector — Brand Import
and Reseller Export Application
1. What the IRYSS Shopify Connector Is
The IRYSS Shopify Connector is the application that moves product data between Shopify
and the IRYSS marketplace in two directions. It allows approved brands to import their
existing Shopify catalogue into IRYSS. It also allows approved resellers to export
marketplace products into their own Shopify stores.
The brand-import side creates or updates real marketplace product records from a brand’s
Shopify catalogue. The Connector prepares the imported product for the IRYSS marketplace
structure and then triggers the marketplace’s AI Product Enrichment Workflow. That
workflow creates the cleaned product description, SEO fields, semantic search data, category
alignment, image alt-text, and classification data. It also places the product into the correct
review path before the product can go live.
The reseller-export side pushes approved marketplace products into a reseller’s Shopify store
as native Shopify products. The pushed product uses the reseller’s own retail price, approved
product media, Shopify product structure, collection placement, and native Shopify SEO
fields. The reseller’s store remains an independent retail store. No IRYSS branding,
watermark, or marketplace reference appears on the pushed product.
Brands use the Connector through the Brand Portal. They connect their Shopify store, review
the initial catalogue import, monitor sync progress, see sync history, and resolve product
issues before products go live. Resellers use the Connector through the Reseller Portal. They
connect their Shopify store, browse approved marketplace products, select products for
export, set retail pricing, and push products into Shopify with approved media and SEO
fields. Admins use the Connector through the Admin Portal. They monitor connection health,
sync status, sync errors, product sync, order sync, content sync, queue health, and overall
Connector activity across every brand and reseller.
A brand or reseller cannot connect a Shopify store freely. Each must first apply to join
IRYSS through the existing approval process. Once approved, IRYSS issues a unique access
code. The access code is required before the Shopify connection process can continue. Every
Shopify store connecting to the Connector has therefore already been screened and approved
by IRYSS.
The Connector has two separate directions. Brand import pulls a brand’s Shopify catalogue
into the marketplace and creates or updates marketplace product records. Reseller export
pushes marketplace product records into a reseller’s Shopify store as native Shopify products.
These are independent business processes, but they share the same Connector application,
approval model, Shopify integration layer, worker system, sync monitoring, and error-
handling structure.
2. Application Architecture
The IRYSS Shopify Connector is its own application. Its backend manages Shopify store
connections, access-code validation, brand catalogue import, reseller product export, product
mapping, sync state, retry handling, webhook processing, and error tracking. Its portal
screens are built into the Brand Portal, Reseller Portal, and Admin Portal as part of the
marketplace and portal build. Its embedded Shopify app runs inside Shopify for installation,
authorisation, access-code validation, and connected status.
Embedded Shopify app
The embedded Shopify app is the Shopify-side entry point. It runs inside the brand’s or
reseller’s Shopify admin and uses Shopify Polaris so the connection experience feels native
inside Shopify.
Its role is deliberately narrow. It handles installation, Shopify OAuth authorisation, access-
code validation, and connected status. Catalogue review, mapping decisions, sync history,
product correction, product selection, and operational monitoring are handled in the IRYSS
portal screens.
Connector backend
The Connector backend is the main application build. It stores Connector records, manages
store connections, tracks sync state, stores product mappings, records sync history, logs
errors, and coordinates background jobs.
The backend talks to Shopify through Shopify’s official APIs. It talks to the marketplace
through the IRYSS Marketplace Middleware. Marketplace reads and writes go through that
middleware. The Connector should not read from or write to the marketplace database
directly.
Brand import responsibility
For brand import, the Connector pulls a brand’s Shopify catalogue, checks incoming products
against marketplace records by SKU, maps categories and collections, triggers AI
enrichment, and writes clean product records into the marketplace through the IRYSS
Marketplace Middleware. After the initial import, Shopify product changes are processed
through webhooks.
Reseller export responsibility
For reseller export, the Connector reads approved marketplace products, lets the reseller
select products, writes native Shopify products into the reseller’s store, adds approved media
and SEO fields, places products into collections, and keeps mapped reseller products updated.
It also captures reseller Shopify sales events for the marketplace systems that need inventory,
finance, and payment data.
Sync responsibility
The Connector keeps the operational state for every Shopify connection and product
mapping. It records the history and status of each sync operation. It also tracks webhook
processing, errors, inventory events, and sales events so failed or repeated work can be
handled safely.
Background workers
Background workers handle the long-running work. They pull brand catalogues from
Shopify, process webhooks, push marketplace products into reseller stores, retry failed
operations, reconcile sync state, process inventory updates, and process sales event records.
Large catalogue imports and bulk product pushes run asynchronously. Shopify API
slowdowns do not block the portal screens or the embedded Shopify app. Retry work is also
handled in workers, not inside the user interface.
Portal screens
The Brand Portal contains the brand-side Connector screens for connection status, initial sync
progress, sync history, product correction, mapping confirmation, and error visibility. The
Reseller Portal contains the reseller-side Connector screens for connection status, product
browsing, product selection, price markup, product export status, push history, and export
errors. The Admin Portal contains the IRYSS operating screens for connection status, sync
monitoring, retry status, queue health, product sync, order sync, content sync, and Connector-
wide error visibility.
Marketplace connection
The IRYSS Marketplace Middleware is used whenever the Connector needs marketplace data
or needs to write marketplace data. Brand import writes new and updated products through
the middleware. Reseller export reads product status, wholesale price, availability, inventory
context, and reseller access through the middleware before writing products into Shopify.
Sales event data from reseller Shopify orders is also forwarded through the middleware. The
receiving marketplace, inventory, finance, and payment systems then consume that data.
Content Platform connection
The Connector uses the IRYSS Content Platform when a pushed product needs its approved
video. Product photos come from the marketplace product-media records. Product video,
where available, is retrieved through the Content Platform video retrieval path and Bunny
asset reference.
This is a media retrieval action. It is not a marketplace-data action. The Connector should not
store its own copy of product video.
Extensibility boundary
Shopify-specific code should stay inside the Connector’s Shopify integration layer. OAuth,
Shopify API clients, webhook handling, product writes, collection placement, bulk
operations, Shopify rate-limit handling, and Shopify-specific errors should not be spread
through the rest of the application.
This keeps Shopify as the first connector while preserving a clean boundary for any future
non-Shopify connector.
3. Connector Records and Marketplace Data
The IRYSS Shopify Connector stores the records needed to keep Shopify and IRYSS
correctly linked. It does not replace marketplace product records, marketplace inventory
records, marketplace pricing records, or Content Platform media records.
Connection records identify the connected Shopify store and the approved IRYSS brand
or reseller behind it. They store the connection direction, Shopify authentication state, access-
code validation state, token status, and current sync status.
A brand connection supports brand import. A reseller connection supports reseller export. If a
reseller connects more than one Shopify store, each store receives its own connection record
and its own sync history.
Shopify access tokens should be stored securely against the store connection record. Token
invalidation happens when a store disconnects or when Shopify sends an app-uninstall
webhook. Once the token is invalidated, sync activity for that store stops until the store is
reconnected.
Mapping records link Shopify products to marketplace products. For brand import, the
mapping links a brand’s Shopify product to the marketplace product created or matched from
that Shopify record. For reseller export, the mapping links a marketplace product to the
Shopify product created in the reseller’s store.
These mappings let the Connector update the correct product later. They also prevent
duplicate product creation and allow failed work to be retried safely.
Sync records store the operational history of Connector activity. A sync attempt should
record the source, target, action, status, time, error reason, retry state, and idempotency
reference where relevant. This gives brands, resellers, and admins a clear history of what
happened without relying on Shopify logs or marketplace logs alone.
The marketplace stores the commerce records. These include product records, price, stock,
availability, seller records, brand records, reseller product access, and marketplace product
context. The Content Platform stores video records, channel media records, and Bunny asset
references for approved product video and channel-based media. Marketplace product images
remain part of the marketplace product-media structure.
The Connector stores only the connection, mapping, sync-state, retry, webhook, and error
records needed to coordinate the Shopify workflows.
4. Brand Import
Brand import lets a brand connect its existing Shopify catalogue to IRYSS. The brand uses
the approved access code to connect its Shopify store. After connection, the Connector starts
the catalogue import.
This is a supplementary product-entry method. It does not replace native Brand Portal
product creation. A brand can still create and manage products directly inside the Brand
Portal without connecting Shopify.
Brand connection and initial pull
The initial import pulls the brand’s Shopify catalogue into the marketplace. The Connector
reads product titles, descriptions, categories, variants, SKUs, sizes, colours, pricing, images,
video where available, inventory data, and the metadata needed for mapping and enrichment.
The initial pull uses Shopify GraphQL Bulk Operations. Large catalogues are exported
asynchronously instead of being pulled through slow manual pagination.
SKU matching and product creation
Before creating a product, the Connector checks the incoming Shopify product against
existing marketplace records by SKU. If the SKU already exists, the Connector links the
Shopify product to the existing marketplace product. If no match exists, the Connector
creates a new marketplace product through the IRYSS Marketplace Middleware.
This prevents the brand’s existing marketplace catalogue and Shopify catalogue from
becoming two duplicate product sets.
Media handling
Product images imported from Shopify are stored as marketplace product media and
delivered through Bunny as the marketplace’s media storage and delivery layer. Product
video, where available, is handled through the IRYSS Content Platform and its Bunny asset
model.
The Connector should not create its own media store. It should also avoid creating a duplicate
product-media system.
AI enrichment and approval
Writing or updating a product through brand import triggers the marketplace’s AI Product
Enrichment Workflow. That workflow turns a raw Shopify listing into marketplace-ready
product data.
The enrichment process creates the cleaned product description, SEO fields, semantic search
data, category alignment, tag alignment, image alt-text, and image classification. The
enriched result is validated against marketplace business rules before it is written back onto
the product record.
If product data is missing or needs correction, the brand is alerted through the Connector
interface and by email. Email notifications use the marketplace’s existing transactional
notification layer. The Connector should not create a separate email system for these alerts.
Once the product data is clean, the brand submits it for manual review. The review uses the
existing Admin Product Approvals screen already used for the marketplace’s AI enrichment
review status. A person gives final approval before the product goes live, becomes indexed
for search, and appears on the correct storefronts.
The Connector should not create a separate product approval interface.
Category and collection mapping
Category and collection mapping uses the brand’s existing marketplace category structure as
the source of truth. Confident matches are applied automatically. Where no confident match
exists, a lightweight AI classification call proposes a category or collection.
Unresolved cases are flagged for the brand to confirm. A confirmed mapping is saved and
reused for future products, so manual confirmation becomes less frequent over time.
Ongoing sync and deletion handling
After the initial import, ongoing Shopify changes are handled through webhooks. New
products, product edits, inventory changes, and product deletions are picked up
automatically. Background workers process those events after the webhook has been received
and queued.
If a brand removes a product that has already been pushed into reseller stores, the reseller
copy is flagged rather than silently left without a source relationship.
If a brand disconnects Shopify, its marketplace listings remain as last synced. The Connector
should not automatically remove or alter marketplace listings simply because the Shopify
connection has been disconnected.
5. Reseller Export
Reseller export lets a reseller connect their Shopify store and receive approved marketplace
products as native Shopify products. The reseller connects using the same approval-and-
access-code process as brands. Once connected, the reseller browses the marketplace
catalogue they are approved to access and selects products to push into Shopify.
Reseller connection and product allocation
Selecting a product creates or confirms the reseller’s product allocation in the marketplace.
That allocation allows the reseller to receive the approved product data, product images, and
product video for export or download.
The reseller only receives product data and media they are approved to use.
Native Shopify product creation
Every pushed product is written into Shopify as a standard native Shopify product. Shopify’s
own product model is used, so the reseller’s existing theme can render the product normally.
The Connector should not alter the reseller’s theme. It should not alter the reseller’s
homepage, layout, or navigation. The Connector creates native Shopify product records and
leaves the reseller’s store design unchanged.
The pushed product includes the correct product title, description, variants, SKU data, retail
price, approved product images, approved product video where available, Shopify SEO
fields, and collection placement. Products are placed into the reseller’s existing Shopify
collections using the same mapping approach as brand import. If the reseller has a “New In”
collection, a newly pushed product is also added there.
Pricing and markup
Before pushing a product, the reseller sets their own retail price as a markup over the
marketplace wholesale price. That retail price is written onto the Shopify product when it is
created in the reseller’s store.
The marketplace controls the wholesale price. The reseller controls the retail price. The
wholesale price is read through the marketplace’s existing region and price-list infrastructure.
The Connector should not introduce separate currency logic for wholesale price resolution.
Media and SEO
Approved product photos come from marketplace product-media records. Approved product
video, where available, is retrieved through the IRYSS Content Platform video retrieval path
and Bunny asset reference.
The Connector should not store its own copy of the video.
The AI-generated SEO title and description already stored on the marketplace product record
are written into Shopify’s native per-product SEO fields.
No IRYSS branding, watermark, or marketplace reference appears on a pushed product. The
reseller’s store should look and behave like an independent retailer’s store.
Bulk product push
When a reseller pushes several products at once, the Connector groups the write through
Shopify bulk mutation capability where Shopify supports the required operation. The
Connector should not treat each selected product as a separate manual write when a supported
bulk operation is available.
This follows the same efficiency principle used for brand import.
Error handling and retry
If a push fails, the reseller sees the specific error in the Connector. Failed pushes retry
automatically through the same queue and retry infrastructure as the rest of the Connector.
A failed product push should not leave a half-created product in the reseller’s store. The
product should either land with its required price, media, SEO fields, and collection
placement, or fail clearly and retry safely.
Update propagation
Once a product is live in a reseller’s store, it stays current automatically. If the source
marketplace product is updated by the brand, the relevant change propagates to each mapped
reseller copy.
This includes product description, price, image, SEO, and product-media updates where those
fields are part of the mapped reseller product. Product deletion is handled separately so
reseller store copies are not silently orphaned or removed without a controlled state change.
Disconnect handling
If a reseller disconnects their store, the corresponding Shopify products are unpublished
rather than deleted. If a specific product mapping is removed, that mapped product is also
unpublished rather than deleted.
The reseller keeps the Shopify product record and can decide what to do with it. The product
stops receiving further sync updates from IRYSS.
Inventory and sales event sync
When a reseller sells a pushed product through Shopify, the sale updates marketplace
inventory tracking. This keeps stock accurate across the channels where the product is
available.
The Connector also captures the product sold, quantity, and sale price as a sales event record.
That sales event is forwarded into the marketplace alongside the inventory update.
This is not a marketplace checkout order. The reseller’s Shopify store has already processed
the customer transaction. The Connector captures only the sales data those systems need to
consume.
6. Sync and Mapping Lifecycle
Each store connection and each product mapping follows a controlled lifecycle inside the
Connector. The connection lifecycle tracks the state of the Shopify store connection. The
product mapping lifecycle tracks the state of each linked product.
Connection Sequence
1. Not connected
No Shopify store is linked. The connection process cannot begin until the brand or
reseller has been approved by IRYSS and has received a valid access code.
2. Authorising
The brand or reseller is completing Shopify OAuth inside the embedded Shopify app.
The Connector validates the access code before allowing the connection to continue.
3. Connected
Authorisation is complete and the store connection is active. For brand import, the
initial catalogue pull begins automatically. For reseller export, the reseller can begin
browsing and selecting approved marketplace products.
4. Syncing
A sync operation is active. This can be an initial catalogue import, webhook-driven
update, inventory update, sales event sync, reseller product push, bulk re-mapping
job, or retry operation.
5. Synced
The most recent sync operation completed successfully. The connection remains
active for future webhook updates, reseller pushes, inventory events, sales events, and
retries.
6. Error
A sync operation failed. The error is logged and shown to the relevant brand, reseller,
or admin. The connection remains active so future attempts can still succeed.
7. Disconnected
The connection has been removed by the user or through Shopify’s app-uninstall
webhook. Stored authentication tokens are invalidated and sync activity stops until the
store is reconnected.
Product Mapping States
1. Pending
The product has been discovered, imported, selected, or queued, but the mapping is
not complete yet.
2. Mapped
The Shopify product and marketplace product are correctly linked. Future updates,
retries, inventory events, and reseller export actions can use the saved mapping.
3. Needs review
The mapping requires brand, reseller, or admin confirmation. This can happen when
category mapping is uncertain, SKU matching needs confirmation, required product
data is missing, or a product requires approval before going live.
4. Failed
The mapping failed and needs correction or retry. A failed product mapping does not
block the rest of the catalogue from syncing normally.
7. Shopify Integration and Sync Engine
The Connector is built on Shopify’s official tooling. Shopify provides the authentication
framework, API access, webhook verification, and embedded app shell. The Connector
builds the IRYSS-specific work on top of that foundation.
Shopify’s tooling provides the foundation. The Connector still builds the IRYSS-specific
orchestration for catalogue import, bulk-operation tracking, product mapping, retry handling,
reseller export, compliance handling, and marketplace sync.
The IRYSS-specific work includes catalogue import, SKU matching, AI enrichment
triggering, mapping logic, reseller export, retry handling, webhook processing, monitoring,
and marketplace integration.
Authentication and API access
Shopify’s official Node library handles OAuth token exchange, GraphQL and REST API
clients, and webhook signature verification. This gives the Connector a supported Shopify
integration foundation.
Shopify access tokens are stored against the Connector store connection record. Token
invalidation happens when the user disconnects the store or when Shopify sends the app-
uninstall webhook.
Application scaffold
Shopify’s official app template, built around Express, Vite, and React, is used as the starting
structure for the embedded Shopify app. The embedded app uses Shopify’s app shell and
Polaris design system, with authentication already wired in.
The template and the underlying API library are open source and MIT-licensed. The template
also includes multi-language support, so the embedded Shopify connection experience can
support multiple languages without a separate custom internationalisation build.
Initial catalogue sync
The initial brand catalogue pull uses Shopify GraphQL Bulk Operations. This lets large
product exports run asynchronously instead of relying on slow manual pagination.
In API versions 2026-01 and higher, Shopify supports up to five concurrent bulk query
operations per shop and up to five concurrent bulk mutation operations per shop. The
Connector should use this capability by structuring large imports as several purpose-built
bulk queries where required. Developers should still confirm the active Shopify API-version
limits during implementation.
A bulk query supports up to five connections with a maximum nesting depth of two levels.
The sync should therefore be structured as smaller bulk queries rather than one oversized
query. Products and variants, inventory levels, and metafields should be pulled through
separate purpose-built bulk queries where required.
Ongoing sync
After the initial pull, brand import relies on Shopify webhooks for product and inventory
changes. Reseller export writes happen when a reseller selects and pushes products. Inventory
sync continues after export so marketplace stock remains accurate.
Ongoing activity runs against Shopify’s normal per-store API limits. The Connector should
queue and retry work instead of failing when Shopify rate limits are reached.
Webhook handling
The webhook endpoint should do the minimum required work before responding. It verifies
Shopify’s signature, queues the raw payload, and returns success quickly.
All real processing happens afterward in workers. This protects the Connector from slow
webhook responses that could trigger repeated delivery attempts or webhook subscription
problems.
Idempotency is enforced using Shopify’s webhook ID as the deduplication key. If Shopify
delivers the same webhook more than once, the Connector recognises the duplicate before
processing.
Product webhooks cover creation, updates, and deletion.
Inventory concurrency
The Connector should not build its own concurrency-safe stock logic. If two resellers sell the
last unit of the same product at nearly the same time, the marketplace inventory and
reservation system resolves the stock conflict.
The Connector’s role is to forward the stock-change signal into the existing marketplace
inventory system.
Horizontal scaling
Workers run as multiple Cloud Run instances pulling from the same queue. Work is
scheduled per store through the Connector queue structure, so one store hitting Shopify rate
limits does not block worker capacity for other stores.
This allows the Connector to scale across many connected Shopify stores without one large
or rate-limited store becoming a global bottleneck.
Compliance webhooks
The Connector implements Shopify’s required compliance webhooks: customer data request,
customer data deletion, and shop data deletion.
The Connector’s own data model stores store connections, product mappings, sync history,
and error records. It should not store customer-identifying checkout data as part of its normal
record model, so these handlers should remain light verification and cleanup handlers.
8. Technology Stack
The Connector follows the existing IRYSS technical standards while using Shopify’s own
tooling where the app is inside Shopify.
Application stack
• Next.js for the portal-embedded Connector screens.
• NestJS on Node.js and TypeScript for the Connector backend.
• Dedicated PostgreSQL database for Connector records, including connections,
mappings, sync history, retry state, webhook state, and error logs.
• Shared Aiven Redis/Valkey for background work and queueing, with separate
namespaces and queues so Connector jobs do not collide with marketplace or Content
Platform background jobs.
• Same Turborepo workspace as the wider IRYSS platform.
• Own Dockerfile and Cloud Run deployment for the Connector services.
• Existing shared UI package for Brand Portal, Reseller Portal, and Admin Portal
screens.
Shopify app stack
• Shopify official app template, built around Express, Vite, and React, for the
embedded Shopify app starting structure.
• Shopify Polaris for the embedded Shopify app interface.
• Shopify official Node API library for authentication, API access, and webhook
verification.
• Shopify GraphQL Bulk Operations for large catalogue pulls.
• Shopify webhooks for ongoing product and inventory synchronisation.
• Shopify bulk mutations for reseller product pushes where the selected product
operation supports bulk writing.
The portal screens and embedded Shopify app use different frontend reuse boundaries. Portal
screens use the IRYSS shared UI package. The embedded Shopify app uses Shopify Polaris
so it feels native inside Shopify.
9. V1 Scope
V1 covers both directions fully. It lets an approved brand import its Shopify catalogue into
the marketplace with enrichment, correction, review, and ongoing sync. It also lets an
approved reseller export marketplace products into Shopify with pricing, approved media,
SEO fields, collection placement, update propagation, inventory sync, sales event sync, and
clear error handling.
9.1 Approval and Connection
A brand or reseller applies to join IRYSS through the existing approval process. Once
approved, IRYSS issues a unique access code.
The embedded Shopify app handles Shopify authorisation, access-code validation, and
connected status. Operational management after connection happens in the relevant IRYSS
portal.
9.2 Brand Initial Sync
Brand initial sync pulls the brand’s Shopify catalogue into the marketplace using Shopify
Bulk Operations. The imported data includes products, variants, SKUs, pricing, images,
video where available, inventory data, metafields, and the metadata needed for mapping and
enrichment.
The Connector writes imported product data into the marketplace through the IRYSS
Marketplace Middleware.
9.3 Existing Product Matching
Every incoming product is checked against existing marketplace records by SKU before
creation. A matching SKU is linked to the existing marketplace product. A product with no
match is created as a new marketplace product.
This prevents duplicate product sets across the brand’s existing marketplace catalogue and
Shopify catalogue.
9.4 Category and Collection Mapping
Category and collection mapping uses the brand’s existing marketplace category structure as
the source of truth. Confident matches are applied automatically. Uncertain matches use an
AI classification proposal and brand confirmation.
Confirmed mappings are saved and reused. Mapping decisions can also be corrected or re-run
in bulk across an already-synced catalogue.
9.5 AI Enrichment and SEO
Every imported product triggers the marketplace’s AI Product Enrichment Workflow. The
enrichment creates cleaned product descriptions, SEO fields, semantic search data, category
alignment, tag alignment, image alt-text, and image classification.
The enriched result is validated against marketplace business rules before it is written back
onto the product record.
9.6 Brand Correction and Approval
Missing or incorrect data is flagged to the brand through the Connector and by email. Email
alerts use the marketplace’s existing transactional notification layer.
Once issues are resolved, the brand submits the product for manual review. Review happens
in the existing Admin Product Approvals screen. The Connector does not create a separate
approval interface.
9.7 Ongoing Brand Sync
After the initial sync, Shopify product changes are reflected in the marketplace through
webhooks. Product creation, product updates, inventory changes, and deletion events are
captured and processed by Connector workers.
If a brand removes a product that has already been pushed into reseller stores, the reseller
copy is flagged rather than silently left without a source relationship. If a brand disconnects
Shopify, the marketplace listings remain as last synced.
9.8 Reseller Connection and Product Selection
A reseller connects Shopify using the same approval-and-access-code process. Once
connected, the reseller browses the marketplace catalogue they are approved to access.
Selecting a product creates or confirms the reseller’s product allocation in the marketplace.
That allocation unlocks the approved product data, images, and video for export or download.
9.9 Reseller Product Push
Selected marketplace products are written into the reseller’s Shopify store as native Shopify
products. The pushed product includes product data, variants, retail price, approved media,
SEO fields, and collection placement.
The Connector creates product records only. The reseller’s theme, layout, homepage, and
navigation remain untouched.
Where Shopify supports the required operation, several selected products are pushed using
Shopify bulk mutation capability instead of individual writes.
A pushed product should either land fully formed with its price, media, SEO fields, and
collection placement, or fail clearly and retry safely.
9.10 Markup and Pricing
Before pushing a product, the reseller sets their own retail price as a markup over the
marketplace wholesale price. The reseller’s retail price is written onto the Shopify product.
Wholesale price is read through the marketplace’s existing region and price-list
infrastructure. The Connector should not create separate wholesale currency logic.
9.11 Media and SEO on Push
Every pushed product includes approved product photos and, where available, the approved
short product video. Product photos come from marketplace product-media records. Product
video is retrieved through the IRYSS Content Platform video retrieval path and Bunny asset
reference.
The AI-generated SEO title and description stored on the marketplace product record are
written into Shopify’s native per-product SEO fields.
9.12 No-Branding Rule
No IRYSS branding, watermark, or marketplace reference appears in any product pushed into
a reseller’s Shopify store. The reseller’s store should look and behave like an independent
retailer’s store.
9.13 Update Propagation
When a brand updates a product already pushed to reseller stores, the Connector propagates
the relevant update to each mapped reseller copy.
This includes product description, price, image, SEO, and product-media updates where those
fields are part of the mapped reseller product. Product deletion is handled separately so
reseller store copies are not silently orphaned or removed without a controlled state change.
9.14 Disconnect Handling
If a reseller disconnects Shopify, the corresponding reseller products are unpublished rather
than deleted. If a specific product mapping is removed, that product is also unpublished rather
than deleted.
If a brand disconnects Shopify, the marketplace listings remain as last synced.
Shopify app-uninstall webhooks invalidate stored authentication tokens and mark the
connection as disconnected.
9.15 Reseller Inventory Sync
When a reseller sells a pushed product through Shopify, the sale updates marketplace
inventory tracking.
The Connector forwards the stock-change signal into the marketplace. The marketplace
inventory and reservation system remains responsible for resolving stock availability.
9.16 Order Data Sync
When a reseller sells a pushed product, the Connector captures the product sold, quantity, and
sale price as a sales event record. That sales event is forwarded into the marketplace
alongside the inventory update.
This is not a marketplace checkout order. The reseller’s Shopify store has already processed
the customer transaction. The Connector captures only the sales data those systems need to
consume.
9.17 Sync Monitoring and Error Handling
Every sync operation is visible to the relevant user. Brands see their own connection status,
sync history, mapping status, correction issues, and product errors. Resellers see their own
connection status, product push history, export errors, and product mapping status. Admins
see consolidated connection health, sync status, retry status, queue health, product sync, order
sync, content sync, and errors across every brand and reseller.
Admin monitoring screens should reuse the same dashboard component patterns already used
for the Content Platform’s Admin oversight screens.
Failed operations retry automatically where retry is safe. Errors are shown clearly and never
fail silently. Connector failures and queue health feed into the same Sentry and Cloud
Monitoring observability stack used by the rest of the platform.
9.18 Idempotency
Every sync operation must be safe to run more than once. This applies to webhooks,
scheduled jobs, manual retries, catalogue imports, product pushes, inventory updates, sales
event records, deletion handling, and disconnect handling.
Idempotency prevents duplicate product creation, duplicate mapping, duplicate inventory
updates, duplicate sales events, and duplicate webhook processing.
9.19 Multi-Store Support
The connection record ties to a reseller and a specific Shopify store. If a reseller connects
more than one Shopify store, the same connection process is run again.
Each store receives its own connection record, mapping records, sync history, retry state, and
error history.
9.20 Bulk Re-Mapping
Category and collection mapping decisions can be corrected or re-run in bulk across an
already-synced catalogue. Bulk re-mapping uses the same mapping and AI-classification
logic already built for new products.
This allows brands and admins to fix mapping decisions across a catalogue without editing
every product one by one.
9.21 Request-Access Workflow
A reseller can request access to content or products that are not currently available to them.
This request is handled as another request type inside Mercur’s existing Request Management
system.
The request should sit alongside seller onboarding approval and catalogue change requests in
the unified admin queue. The Connector should not create a separate request-management
system.
9.22 Compliance Webhooks
The Connector implements Shopify’s required compliance webhooks: customer data request,
customer data deletion, and shop data deletion.
The Connector’s own data model stores store connections, product mappings, sync history,
and error records. It does not hold customer-identifying checkout data as part of its normal
Connector records, so these handlers should remain light verification and cleanup handlers.
10. Marketplace and Content Platform Integration
The Connector connects to the marketplace through the IRYSS Marketplace Middleware.
Brand import writes products through the middleware. Reseller export reads live product,
wholesale price, availability, reseller access, inventory context, and product status through
the middleware before writing products into Shopify.
When a reseller Shopify sale happens, the Connector forwards the inventory update and sales
event data through the IRYSS Marketplace Middleware. The marketplace, inventory, finance,
and payment systems consume that data.
The Connector connects to the Content Platform through the video retrieval path used for
approved product video. When a reseller receives a product with an approved short product
video, the Connector retrieves that video through the Content Platform and Bunny asset
reference.
The Connector should not store, process, or manage product video itself.
A signed-in marketplace user is recognised consistently across the Connector, marketplace,
and Content Platform. Brand and reseller identity follows the same shared identity model
used across the rest of the build.
11. V2 Scope
V2 contains improvements that are useful but not needed to complete the bounded V1
Connector build.
V2 includes:
• Deeper automated category-mapping intelligence
A more advanced mapping layer beyond the V1 confirm-once-reuse-forever model.
• Real-time sub-minute sync guarantees
Stronger sync guarantees beyond the webhook-driven model already included in V1.
12. Team and Timeline
The IRYSS Shopify Connector is built by four senior full-stack developers moving directly
from the marketplace and Content Platform builds.
The team already knows the IRYSS Marketplace Middleware conventions, turbo monorepo
structure, deployment pipeline, testing patterns, portal structure, shared UI library, Bunny
usage, Content Platform media retrieval, and marketplace product model.
Brand import and reseller export are independent workstreams. They use different parts of
Shopify’s API and different product rules, so splitting the team into two pairs allows both
directions to be built in parallel.
Pair 1 — Brand Import
Owns Shopify OAuth and connection handling, the initial Bulk Operations catalogue pull,
SKU matching, category and collection mapping, AI enrichment handoff, ongoing webhook-
driven sync, brand correction and approval handoff, and error handling for the brand-import
direction.
Pair 2 — Reseller Export
Owns reseller connection handling, product browsing and selection, native Shopify product
push, collection placement, media retrieval through the Content Platform, SEO field push,
no-branding enforcement, reseller inventory sync, and order data sync.
Shared across both pairs
The Connector API scaffold, shared Shopify integration layer, approval-and-access-code
system, sync monitoring, retry infrastructure, error-handling structure, compliance webhooks,
and Admin oversight screens are built once and used by both directions.
Week 1
Shopify app registration, OAuth connection process, embedded app scaffold from Shopify’s
official app template, Connector API and worker scaffold, IRYSS Marketplace Middleware
contracts for both directions, approval-and-access-code system, category-mapping data
model, and AI fallback classification call.
Week 2
Brand import delivers Bulk Operations catalogue pull, SKU matching, and initial category
mapping working end to end. Reseller export delivers product browsing, product selection,
and the first native Shopify product push working end to end, including collection placement.
Week 3
Brand import delivers webhook-driven ongoing sync and the brand correction-and-approval
process. Reseller export delivers media retrieval through the Content Platform, SEO field
push, no-branding verification, reseller inventory sync, and order data sync.
Week 3.5 and Buffer
Sync monitoring and error-handling screens across Brand Portal, Reseller Portal, and Admin
Portal. Idempotency and retry testing. Integration testing across both directions.
Week 4
Bulk re-mapping tools and the request-access workflow. Multi-store support follows from the
connection model already built and does not require a separate architecture.
Total timeline: 4–4.5 weeks with four senior developers working as two
parallel pairs.
This is development time only. It excludes Shopify app-review or approval time. It assumes
AI-assisted development consistent with the rest of the IRYSS build.