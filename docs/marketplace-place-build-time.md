IRYSS Marketplace Build Timeline — 7
Senior Full-Stack Developers
Development Controls Required to Protect the Timeline
• Define data models, API contracts and routing first in Week 1–2. Storefronts, portals,
search, tracking and workers must build against these contracts instead of waiting for
every real endpoint to be finished.
• Use typed contracts and mocked middleware responses so frontend, portal and search
work can start before the real middleware endpoints are complete.
• Build storefront capability as a generic Region + Sales Channel + storefront metadata
engine. Italy and France are first configured launch storefronts, not hardcoded country
logic.
• Build the Reseller Portal on its own reseller-specific data model and workflows from
day one. Reuse the shared dashboard shell, UI components, auth pattern, tables, forms
and filters only.
• Re-verify Mercur issue #909 against IRYSS’s exact pinned Mercur version in Week
1, including order_cart link creation, payment webhook correlation and auto-
refund behaviour.
• Treat RBAC as a server-side verification task, not only a UI task. The UI filters are
simple; the real work is confirming every role, region, storefront, section and function
combination is enforced server-side.
• Build the consent/privacy layer alongside tracking setup in Month 1–2, not after
tracking has already gone live.
• Include storefront, region, locale, currency, sales channel and permission context in
cache keys wherever cached data can vary by market or access level.
• Keep AI Product Enrichment as a controlled structured-output workflow writing to
existing product fields. Do not turn it into a separate AI platform, agent system or
experimental side product.
• Use Bunny for media storage, CDN delivery, optimisation and resizing only. AI alt
text and image classification are separate enrichment workflow steps.
• Treat MOR, VAT, Avalara, Stripe and Odoo configuration as finance/accountant-
owned setup done directly in those systems. Developers own only the integration
boundaries, webhooks, event handling, data handoff, error states and testing support.
• Keep Figma screens finished ahead of each developer’s build slice. If design
decisions are still open when implementation starts, AI-assisted speed is lost.
Developer Allocation
Dev 1 — Technical Lead / Senior Full-Stack Architect
Dev 1 owns architecture, code quality and release readiness.
Responsibilities:
• Mercur-first architecture decisions
• Turborepo structure and shared package boundaries
• technical standards and code review
• Week 1 Mercur technical spike
• multi-storefront architecture review
• RBAC and permission model review
• checkout/order/payment risk review
• OpenSearch/search architecture review
• production readiness review
• release control
• resolving conflicts between frontend, middleware, Mercur, search and portal
workstreams
Dev 1 must be hands-on and coding, not only managing.
Dev 2 — Mercur / Medusa Backend and Commerce
Developer
Dev 2 owns the Mercur/Medusa commerce foundation.
Responsibilities:
• Mercur/Medusa core setup
• regions
• sales channels
• seller/brand model
• central catalogue structure
• product visibility by storefront
• pricing rules and price lists where required
• inventory and fulfilment configuration
• cart, checkout and order flows
• seller/brand order visibility
• returns and fulfilment logic
• Mercur-side payment and shipping logic
• split-order checkout testing
• splitAndCompleteCartWorkflow verification
• order_cart link creation verification
• payment webhook correlation and refund behaviour verification
Dev 2 owns the Mercur-side part of payment, shipping, fulfilment and returns.
Dev 3 — Middleware / API Adapter and Integration
Developer
Dev 3 owns the IRYSS Mercur Middleware / API Adapter.
Responsibilities:
• middleware/API Adapter structure
• storefront context resolution
• global admin versus storefront manager access
• brand/reseller/user permissions
• server-side RBAC enforcement
• typed API contracts
• request validation
• response shaping
• event routing
• PostHog event handoff
• webhook handling
• retry and idempotency logic
• external service integration boundaries
• payment-provider middleware boundary
• tax-provider middleware boundary
• Odoo/accounting middleware boundary
• shipping-provider middleware boundary
• cache-key scoping by storefront, region, locale, currency, sales channel and
permissions
Dev 3 owns the integration side of finance, tax, accounting and shipping.
Dev 4 — B2C and B2B Storefront Developer
Dev 4 owns the storefront applications.
Responsibilities:
• Mercur B2C storefront adaptation
• IRYSS B2C Figma implementation into the Mercur storefront codebase
• multi-storefront frontend context
• domain/locale/storefront-aware frontend behaviour
• product listing pages
• product detail pages
• category and collection pages
• search and filter UI
• cart and checkout frontend flows
• B2B storefront adaptation
• gated B2B account flows
• B2B product visibility and trade-facing user journeys
• storefront performance and responsive behaviour
Dev 4 should build against typed API contracts and mocked middleware responses early,
rather than waiting for every backend endpoint to be complete.
Dev 5 — Admin Portal Developer
Dev 5 owns the Admin Portal.
Responsibilities:
• Mercur Admin Panel adaptation
• IRYSS Admin Figma implementation into the Mercur admin foundation
• global admin dashboard
• storefront-scoped admin views
• storefront selector/filtering
• product management
• brand/seller management
• order management
• user and permission management
• approval workflows
• catalogue visibility controls
• operational dashboards
• audit/action states
• restricted access states
• admin-side RBAC testing
The Admin Portal remains one application. Global admins see consolidated platform data and
can filter into individual storefronts. Storefront managers only see the storefronts and
workflows allowed by their permissions.
Dev 6 — Brand Portal and Reseller Portal Developer
Dev 6 owns the Brand Portal and Reseller Portal.
The Brand Portal should extend the Mercur Vendor Portal foundation where the seller/brand
workflow aligns with Mercur’s seller model. The Reseller Portal should reuse the shared
dashboard shell, UI components, auth pattern, tables, forms and filters, but must be wired to a
reseller-specific data model and reseller-specific workflows from day one.
Responsibilities:
• Mercur Vendor Portal adaptation for Brand Portal
• IRYSS Brand Portal Figma implementation
• brand product/listing management
• brand content views
• brand order/status views
• brand fulfilment visibility
• reseller-specific portal structure
• reseller product discovery
• reseller product selection workflows
• reseller operational views
• portal tables, forms, filters, statuses and approval states
• portal permission tests
• portal Playwright flows
Dev 6 removes pressure from Dev 5 and stops the Admin Portal from becoming the
bottleneck.
Dev 7 — Search, Enrichment, Media, Workers and Test
Automation Developer
Dev 7 owns the supporting workflow systems.
Responsibilities:
• OpenSearch mappings
• OpenSearch indexing workers
• storefront-aware search filtering
• search facets, filters, autocomplete and synonyms
• AI Product Enrichment Workflow
• AI vision-model image alt text/classification
• Bunny image storage/CDN/optimisation workflow
• BullMQ workers
• indexing jobs
• enrichment jobs
• image processing jobs
• notification jobs
• retry and failed-job handling
• PostHog event instrumentation support
• AI-assisted Playwright test generation
• search, enrichment, media and worker regression tests
Dev 7 is the reason the 7-dev plan is faster than the 6-dev plan. Search, enrichment, media,
workers and test automation are no longer squeezed into the same role as Brand/Reseller
portal delivery.
Week 1 — Critical Setup and Risk Removal
Week 1 must prove the technical assumptions before the full build accelerates.
The team must complete a Mercur technical spike covering:
• Mercur 2.x install and project structure
• regions and sales channels
• central catalogue with storefront-specific visibility
• seller/brand availability per storefront
• pricing lists where required
• custom storefront metadata
• Admin Panel extension method
• Vendor Portal extension method
• B2C storefront template adaptation method
• order/cart/checkout behaviour under region, sales channel and storefront context
• workflow/subscriber extension pattern
• custom fields
• RBAC extension approach
• OpenSearch indexing hook points
• split-order checkout behaviour
• splitAndCompleteCartWorkflow
• order_cart link creation
• payment webhook correlation
• refund behaviour
Provider setup must also start in Week 1:
• payment provider / Stripe Connect where required
• tax provider / Avalara where required
• Odoo/accounting setup where required
• shipping provider / Sendcloud where required
• email provider
• PostHog
• Bunny storage/CDN
• OpenSearch
• Redis/Valkey
• Cloudflare / Google Cloud routing
• SSL termination decision
These items can become the real critical path if delayed.
Month 1 — Foundation and Contracts
Goal
Build the architecture spine and allow all developers to work in parallel.
Work
• Set up Mercur-first Turborepo workspace.
• Bring in Mercur backend/core, B2C storefront foundation, Admin Panel foundation
and Vendor Portal foundation.
• Set up B2C, B2B, Admin, Brand and Reseller app structures.
• Set up Docker containers per app/service.
• Confirm Cloud Run deployment flow.
• Configure Cloud SQL and Redis/Valkey.
• Define regions, sales channels, sellers/brands and central catalogue structure.
• Define a generic storefront-provisioning model using regions, sales channels,
storefront metadata, domain/locale mapping, catalogue visibility, storefront-scoped
permissions, search context and content context. Italy and France should be
configured as the first launch storefronts, not hardcoded into the application.
• Define global admin, storefront manager, brand user and reseller user permissions.
• Scaffold middleware/API Adapter.
• Create shared packages for UI, types, validation, API client, auth, events and config.
• Define typed contracts for frontend, portals, Payload, OpenSearch, tracking and
workers.
• Define PostHog event taxonomy and visitor/session/customer ID convention.
• Start consent/privacy implementation alongside tracking setup.
• Start Figma-to-code implementation into Mercur foundations.
• Start external provider setup for payment, tax, accounting, shipping, email,
OpenSearch, Redis, Bunny and PostHog.
End of Month 1 Target
The architecture spine is running, Mercur is configured, all app structures exist, typed
contracts are defined, deployment is working and all seven developers can build in parallel.
Month 2 — Integrated Alpha
Goal
Create the first connected version of the full marketplace.
Work
• Implement storefront context resolution.
• Implement central catalogue with storefront-specific visibility.
• Implement B2C homepage, category/search, product page and cart skeleton.
• Implement B2B gated storefront shell and trade catalogue structure.
• Implement Admin Portal shell with global and storefront-scoped views.
• Implement Brand Portal shell for product/listing management.
• Implement Reseller Portal shell for product discovery/selection.
• Connect Payload CMS for content blocks and pages.
• Set up OpenSearch mappings, indexing worker and first query flow.
• Add PostHog events with storefront context.
• Continue consent/privacy implementation alongside tracking.
• Build against typed contracts and mocked middleware responses where real endpoints
are not complete.
• Start AI-assisted Playwright tests for login, storefront context, product discovery,
portal access and permissions.
• Continue payment, tax, accounting and shipping setup/integration boundaries.
End of Month 2 Target
IRYSS has an integrated alpha across B2C, B2B, Admin, Brand, Reseller, Payload,
OpenSearch, PostHog and middleware.
Month 3 — Core Feature Completion
Goal
Complete the main marketplace and portal functionality.
Work
• Complete main B2C storefront pages and flows.
• Complete main B2B storefront pages and trade journeys.
• Build Admin modules for products, brands, orders, storefronts, users, approvals and
permissions.
• Build Brand Portal modules for product management, listing status, content, order
visibility and fulfilment visibility.
• Build Reseller Portal modules for catalogue access, product selection and operational
workflows.
• Implement OpenSearch filters, facets, autocomplete, synonyms and storefront-aware
query filtering.
• Implement Payload content rendering across storefronts and campaigns.
• Implement AI product enrichment as a structured-output workflow writing to existing
product fields.
• Implement AI vision-model image alt text/classification as a small step in the
enrichment workflow.
• Implement Bunny image workflow for storage, delivery, optimisation and resizing.
• Implement BullMQ workers for indexing, enrichment, image processing, notifications
and retries.
• Implement required finance/payment/tax/accounting and shipping launch integration
boundaries.
• Expand AI-assisted Playwright, API and permission tests.
End of Month 3 Target
Most core marketplace functionality exists and the platform is close to feature-complete beta.
Month 4 — Beta, Hardening and
Controlled Launch
Goal
Turn the built system into a production-ready controlled launch candidate.
Work
• Harden cart, checkout, orders, payment and fulfilment.
• Harden tax, accounting, settlement/reconciliation and shipping handoff flows.
• Validate finance/accounting outputs with accountant or finance validator.
• Harden global admin and storefront manager permissions.
• Harden Admin, Brand and Reseller workflows.
• Complete cache-key scoping by storefront, region, locale, currency, sales channel and
permission context.
• Harden OpenSearch indexing and reindexing.
• Validate PostHog event accuracy.
• Complete consent and privacy validation for tracking.
• Run regression across B2C, B2B, Admin, Brand and Reseller.
• Test multi-storefront leakage scenarios.
• Test RBAC scenarios server-side, not only through hidden UI.
• Test external integrations under real test conditions.
• Fix launch-blocking bugs.
End of Month 4 Target
The platform is ready for controlled production launch if external dependencies were started
in Week 1 and launch scope has remained tight.
Month 5 — Stabilisation and Commercial
Release
Goal
Stabilise the platform after controlled launch or final beta.
Work
• Resolve real-world bugs.
• Improve storefront and portal performance.
• Refine Admin, Brand and Reseller workflows.
• Improve search ranking, filters and merchandising rules.
• Improve AI enrichment review quality.
• Expand automated regression coverage.
• Improve monitoring and alerting.
• Validate finance, shipping, returns and reconciliation edge cases.
• Prepare next-module planning for Shopify Connector or later modules.
End of Month 5 Target
The platform is ready for stabilised commercial release.
Final Timeline
With 7 senior full-stack developers from day one, using Claude Code/Cursor heavily and
building on Mercur’s actual foundations:
Controlled production launch: 3.75–4.25 months
Clean planning target: 4 months
Stabilised commercial release: 4.75–5.25 months
Clean planning target: 5 months