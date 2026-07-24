# IRYSS Marketplace Technical Stack — Locked Recommended Architecture

> **Source document.** Transcribed from *IRYSS Marketplace Technical Stack.pdf* (Ronan McKenna) for version control alongside the technical plan.
> Where this document has been superseded by verified research, see `plans/2026-07-20-iryss-platform-technical-plan.md` §2 and Appendix A. The original text is preserved here unaltered.

This document defines the recommended technical stack for the IRYSS core marketplace application.

The stack is designed for a serious startup marketplace build that must support B2C commerce, B2B commerce, central administration, brand operations, reseller operations, product enrichment, search, media processing, behavioural event capture, background automation, secure infrastructure and scalable deployment.

The stack is **Mercur-first**, modular, cost-aware and production-ready. IRYSS will use Mercur's open marketplace foundation as the base, then build the IRYSS frontend design, portals, middleware, content, search, media, tracking and automation workflows around it.

The marketplace must be built from launch with clean behavioural event capture, consistent identity and middleware-controlled tracking so analytics, attribution, optimisation and future platform intelligence can operate from structured marketplace data.

---

## 1. Project Management and Engineering Workflow

**Jira** is the project-management and delivery-control system. It should be used for sprint planning, backlog control, delivery tracking, QA tickets, bug management, refinements, release planning and milestone reporting.

**GitHub** is the engineering repository and collaboration layer. All application code, backend services, shared packages, worker services, configuration and infrastructure code should be controlled through GitHub repositories with pull requests, code review and automated checks.

**Turborepo** is the monorepo and workspace manager for the IRYSS marketplace codebase. It allows the marketplace applications, portals, shared UI components, shared types, shared API clients and shared configuration to live inside one controlled engineering workspace. This prevents duplication across the B2C storefront, B2B storefront, Admin Portal, Brand Portal and Reseller Portal while still allowing each application to remain separately runnable, separately testable and separately deployable.

**TypeScript** is the locked language standard across the frontend, middleware, workers and shared packages. It gives IRYSS stronger contracts between frontend apps, backend services, search, CMS, workers, behavioural tracking and integrations.

---

## 2. Repository and Workspace Structure

IRYSS should use a **Mercur-first Turborepo workspace**.

This means the repository should preserve Mercur's working backend, storefront and dashboard foundations, then add IRYSS-specific applications, shared packages, middleware, workers and infrastructure around that base.

**The recommended structure is:**

| Path | Purpose |
|---|---|
| `apps/mercur-core` | Mercur/Medusa backend, marketplace modules, workflows, subscribers, custom fields, API extensions and IRYSS backend customisations. This remains the core commerce backend. |
| `apps/b2c-storefront` | The public B2C marketplace storefront, based on the Mercur marketplace storefront foundation and redesigned for IRYSS. |
| `apps/b2b-storefront` | The B2B marketplace storefront, built from the same Mercur/Medusa commerce foundation and adapted for trade-specific journeys. |
| `apps/admin-portal` | The central IRYSS administration portal, extending Mercur's admin/dashboard foundation. |
| `apps/brand-portal` | The operational portal for brands and suppliers, extending Mercur's vendor/dashboard foundation where relevant. |
| `apps/reseller-portal` | The operational portal for resellers and trade partners, built as an IRYSS-specific portal using the shared dashboard foundation and the IRYSS Mercur Middleware / API Adapter layer. |
| `apps/payload-cms` | The Payload CMS application for non-transactional content management. |
| `apps/mercur-middleware` | The IRYSS Mercur Middleware / API Adapter layer connected to Mercur/Medusa, the frontend apps and external services. |
| `apps/workers` | Dedicated background workers for queue processing, indexing, enrichment, media processing, notifications, event processing and integration jobs. |
| `packages/ui` | Shared UI components, layout primitives, portal shells, tables, forms, modals and design-system elements. |
| `packages/api-client` | Shared frontend API client patterns and response handling. |
| `packages/auth` | Shared authentication, session, role and permission helpers. |
| `packages/config` | Shared application configuration and environment configuration. |
| `packages/types` | Shared TypeScript types across frontend, backend and workers. |
| `packages/validation` | Shared Zod or equivalent schemas for forms, APIs, worker jobs, event payloads, environment variables and enrichment outputs. |
| `packages/events` | Shared behavioural event taxonomy, event names, event payload schemas and tracking helpers. |
| `packages/test-utils` | Shared testing utilities and mocked fixtures. |
| `infrastructure` | Terraform infrastructure definitions, deployment configuration and environment setup. |

This structure gives IRYSS separation between applications while allowing common logic, design patterns, API contracts, validation, tracking conventions and deployment logic to be reused across the platform.

---

## 3. Frontend, Figma and Portal Build Layer

The core rule is simple: IRYSS can fully redesign the visual layer, but it must preserve Mercur's working marketplace logic where Mercur provides a real foundation. B2C, Admin and Brand should start from forked Mercur code. B2B and Reseller are custom IRYSS applications using the same backend, contracts, deployment model and shared UI system, but they are not Mercur storefront/vendor-panel clones.

IRYSS will fork/clone the relevant Mercur codebase into the IRYSS GitHub environment and reorganise it inside a Turborepo-managed workspace. The existing Mercur backend, B2C storefront, Admin Panel and Vendor Panel code paths should be preserved as working foundations, then adapted into the IRYSS application structure.

**Each deployable application should run as its own independently containerised service:**

- Mercur / Medusa backend service
- B2C storefront service
- B2B storefront service
- Admin Portal service
- Brand Portal service
- Reseller Portal service
- Payload CMS service
- Middleware / API Adapter service
- Worker service for indexing, enrichment, media processing and background jobs

Forking Mercur gives IRYSS control over the codebase, but upstream Mercur fixes will not arrive automatically. The technical lead must track Mercur releases, bug fixes and security updates and decide when to rebase, merge or cherry-pick upstream changes into the IRYSS fork.

The Figma workflow should use Mercur's real UI/code structure as the design reference. The team should bring the existing Mercur storefront, admin and vendor-panel structures into Figma using Figma Connect or component mapping, design the approved IRYSS visual layer on top of those structures, then use Claude/Cursor to implement the approved design back into the forked codebase.

Generated code is presentation-layer acceleration only. It must be wired back into the real Mercur/IRYSS contracts, sessions, carts, checkout flows, product data, seller/brand data, orders, permissions and workflows.

The B2C storefront should start from Mercur's existing Next.js storefront. The IRYSS B2C design should be implemented into that forked storefront while preserving Mercur's working product, session, cart, checkout and order logic.

The B2B storefront has no equivalent Mercur storefront foundation to fork. It should be built as a custom IRYSS storefront, independently containerised like the other apps, using the same Mercur/Medusa backend, shared frontend packages, typed API contracts and design-system components. It may reuse B2C components and patterns, but it must have its own trade navigation, account-gated flows, pricing behaviour, product visibility rules and B2B/reseller-facing journeys.

The Admin Portal should start from Mercur's existing React/Vite admin codebase. The IRYSS Admin Portal should extend that foundation while staying connected to Mercur's real marketplace structure, including catalogue, sellers/brands, orders, storefronts, permissions and operational workflows.

The Brand Portal should start from Mercur's existing React/Vite vendor/seller panel where the brand workflow aligns with Mercur's seller model. It should support brand product/listing management, brand content views, order/status visibility, fulfilment-related views and brand-side operational workflows.

The Reseller Portal has no Mercur foundation to fork. It should be built as a fresh IRYSS portal, independently containerised like the other apps, using the shared dashboard shell, UI components, tables, forms and filters. It must not reuse the Vendor/Brand Portal code or data model as its business foundation. Although it may visually resemble the Brand Portal, its workflow is different: reseller product discovery, product selection, markup control, Shopify connection, external-store syndication, reseller order visibility and wholesale/settlement tracking.

The Reseller Portal has one launch dependency: Shopify push/sync. The full Shopify Connector is outside the core marketplace build, so IRYSS must decide whether the launch Reseller Portal ships with Shopify push/sync disabled or stubbed, or whether a limited Shopify OAuth and product-push slice is pulled forward into this build.

**IRYSS implementation choices:**

- Typed API contracts for frontend/backend boundaries.
- Medusa/Mercur JS SDK where it fits the Mercur backend routes.
- Typed IRYSS API client for middleware/API Adapter routes.
- TanStack Query for frontend server-state handling.
- React Hook Form for forms.
- Zod or equivalent validation for form/API safety.
- Zustand only for lightweight local UI state where needed.
- Shared UI packages for reusable storefront and portal components.
- Storybook where useful for reusable shared UI components.

---

## 4. Shared Design System and Frontend Foundation

IRYSS should have a shared internal UI package used across all frontend areas. This should include reusable components, layout primitives, dashboard shells, storefront layout components, table components, form components, modal and drawer patterns, navigation components, design tokens, shared icons, validation messages, loading states, empty states and permission-aware UI wrappers.

This is important because IRYSS is not building one website. It is building a coordinated headless frontend ecosystem with separate deployable applications. A shared UI system keeps the build faster, more consistent and easier to maintain.

---

## 5. Backend Commerce Core

**Mercur / MedusaJS core** is the marketplace commerce foundation.

Mercur/Medusa should own the core commerce backend for the platform, including product records, catalogue structure, brand/seller records, regions, sales channels, inventory, pricing configuration, carts, checkout, orders, returns state, commerce workflows, product custom fields, seller/brand marketplace operations and marketplace events.

Mercur/Medusa is the core backend system. The IRYSS Mercur Middleware / API Adapter is the controlled access, orchestration and integration layer that exposes, shapes, secures and coordinates this backend for the frontend apps and connected services.

**Payload, OpenSearch, Bunny, PostHog**, tracking tools and frontend apps must not become separate sources of transactional commerce truth.

---

## 6. IRYSS Mercur Middleware / API Adapter Layer

**IRYSS Mercur Middleware / API Adapter** is the controlled API and orchestration layer between the frontend applications, Mercur backend, Payload, OpenSearch, PostHog, media workflows, workers, finance/shipping systems and later external apps such as the Shopify Connector.

**This layer owns:**

- role and context handling
- Admin, Brand, Reseller, B2C and B2B access rules
- request validation
- response shaping
- API contracts
- event handoff
- behavioural event routing
- background-job triggering
- external-service gateway logic
- search gateway logic
- product enrichment workflow handoff
- media-processing workflow handoff
- finance and shipping workflow handoff
- future Shopify Connector boundary

This layer prevents the frontend from becoming tightly coupled to every backend service and keeps IRYSS in control of how data is exposed, transformed, tracked and secured.

### Multi-Storefront Context and Scoped Administration

The middleware/API layer must also enforce IRYSS's multi-storefront B2C model. IRYSS B2C is not one fixed consumer storefront; it must support country-specific marketplace storefronts such as IRYSS Italy, IRYSS France and future market storefronts, each with its own domain, locale, catalogue visibility, brand availability, content, campaigns, pricing/currency/tax display where applicable, search context, analytics context and operational management scope.

This should be implemented using Mercur/Medusa's marketplace and commerce primitives rather than separate codebases. During setup, the engineering team should configure the required storefront-market structure using Mercur/Medusa regions, sales channels, seller/brand relationships, product visibility rules, pricing lists where required, fulfilment/payment configuration where required, and custom storefront metadata for domain, locale, market, currency, default language and operational ownership.

The catalogue must remain centralised. IRYSS should not create duplicated per-country product tables or duplicated product records for each storefront. A product should exist as a single core commerce record, with storefront-specific availability, visibility, pricing, content, localisation and brand/storefront eligibility applied through Mercur/Medusa configuration, custom fields, sales-channel/region rules and middleware-enforced storefront context.

The IRYSS Mercur Middleware / API Adapter must resolve storefront context on every relevant request from the request domain, route, locale, configured storefront record, region, sales channel and authenticated user permissions. That resolved context must then be applied consistently when calling Mercur/Medusa, Payload, OpenSearch, PostHog, workers and operational dashboards. Product queries, search queries, content queries, analytics events, admin views and workflow actions must therefore be scoped by storefront context, not only filtered visually in the frontend.

**Storefront context must fail closed.** If the storefront, domain, locale, region, sales channel or permission context cannot be resolved safely, the request should be rejected or routed to a controlled error state. It must not silently default to another storefront, because that can expose the wrong products, prices, content, analytics or operational data.

OpenSearch should use a shared marketplace search architecture with storefront, region, language, sales-channel and visibility fields indexed on the relevant documents, rather than creating isolated per-country search systems by default. Storefront-specific search results should be produced through query-time filtering and permission-aware middleware rules, so the same search layer can support consolidated search operations while still enforcing each storefront's catalogue visibility.

Cache keys must include storefront context wherever cached data can vary by market. Redis, CDN and application-level cache keys must include the relevant storefront, region, locale, currency, sales-channel and permission context where applicable. Cloudflare and Redis must never serve cached French pricing, content, search results or product visibility into the Italian storefront, or vice versa.

The Admin Portal remains one application, but access must be server-side scoped. A global admin can see consolidated platform-wide data and filter into a specific storefront such as B2C Italy or B2C France. A storefront manager should only see the products, brands, orders, customers, campaigns, analytics and workflows allowed for their assigned storefronts. This must be enforced through backend permissions, storefront context and middleware/API rules, not only through hidden frontend navigation.

---

## 7. Visitor, Session and Customer Identity Convention

IRYSS must define a consistent visitor, session and customer identity convention from launch.

This should support anonymous visitor IDs, session IDs, logged-in customer IDs, B2B account/user IDs, brand/seller user IDs, reseller user IDs, portal user IDs, event-level identity attachment, consent-aware tracking state and future platform intelligence.

This is normal marketplace identity hygiene.

The purpose is to ensure that marketplace behaviour can be connected cleanly across anonymous browsing, logged-in activity, portal actions, product interaction, search behaviour and analytics records.

---

## 8. Behavioural Event Capture and Tracking

**PostHog** should be included from launch as the marketplace behavioural event-capture layer.

PostHog should capture structured marketplace behaviour across the B2C storefront, B2B storefront, Admin Portal, Brand Portal and Reseller Portal.

Launch events should include, where relevant, product views, product saves, product clicks, searches, filter usage, collection views, brand views, add-to-cart actions, checkout starts, order completions, recommendation interactions, B2B account activity, brand product uploads, brand content updates, reseller product selections and key portal workflow completions.

PostHog gives IRYSS visibility into how users interact with the marketplace from the start and creates clean behavioural history for improvement of search, merchandising, recommendations, conversion flows, portal usability and attribution analysis.

---

## 9. Event Taxonomy and Middleware-Routed Tracking

IRYSS should use a consistent event taxonomy from launch.

Tracked events should have controlled names, consistent properties and validated payloads. Event naming should avoid random one-off tracking names created separately by different developers.

**Examples of controlled event names include:**

`product_viewed` · `product_saved` · `search_performed` · `filter_applied` · `brand_viewed` · `add_to_cart` · `checkout_started` · `order_completed` · `recommendation_clicked` · `brand_portal_product_uploaded` · `reseller_product_selected`

Tracking should be routed through the IRYSS Mercur Middleware / API Adapter layer where server-side validation, identity attachment, consent checks, event enrichment and forwarding rules can be controlled.

Frontend apps can trigger events, but they should not scatter independent tracking calls across the codebase without shared event contracts.

This gives the marketplace clean launch analytics and ensures that behavioural data remains structured, consistent and useful for marketplace optimisation.

---

## 10. Payload CMS Content Layer

**Payload CMS** is the content-management system for IRYSS.

Payload should manage non-transactional content, including landing pages, campaign pages, marketing content, editorial content, promotional content blocks, vendor onboarding content, legal and policy pages, selected brand/profile content where appropriate, and reusable frontend content blocks.

Payload does not own transactional marketplace logic. Product, pricing, inventory, checkout, order, fulfilment, settlement and permission-controlled commerce data are owned by the IRYSS Mercur backend and exposed through the IRYSS Mercur Middleware / API Adapter layer.

Payload may publish approved content or selected profile/content metadata to the frontend or middleware, but it must not become a second ecommerce database or a second commerce source of truth.

---

## 11. AI Product Enrichment Workflow

IRYSS should include a controlled **AI Product Enrichment Workflow**.

This is not a separate AI platform. It is a background product-data workflow that improves product records after upload or import.

It should support product-description cleanup, structured SEO fields, semantic search descriptions, category and tag alignment, product attribute normalisation, product-feed-ready metadata where needed, audience tags, image alt-text and image classification generated through an AI vision-model call as part of the enrichment workflow, enrichment status tracking, and manual re-enrichment where required.

The AI output should be validated and written back to Mercur product custom fields. Downstream systems such as search, SEO, ads, image workflows and later connector workflows should read from Mercur rather than from a separate AI database.

**Recommended implementation approach:**

- structured-output tooling such as AI SDK / `generateObject` or equivalent
- Zod or equivalent schema validation
- provider-swappable LLM access
- BullMQ queue/retry handling
- server-side business-rule validation before writing to Mercur
- status fields for pending, complete, failed, approved, edited or rejected enrichment

This keeps AI useful, controlled and production-safe.

---

## 12. Validation and Shared Contracts

IRYSS should use **Zod or equivalent schema validation** as a shared validation layer.

Validation should cover environment variables, API requests, API responses, product enrichment outputs, form inputs, worker job payloads, webhook payloads, tracking event payloads, configuration objects and integration payloads.

This is important because IRYSS has multiple frontend apps, backend services, workers, behavioural events and integrations. Shared validation reduces drift and prevents one part of the platform from silently breaking another.

---

## 13. Primary Database Layer

**Google Cloud SQL for PostgreSQL** is the primary relational database layer.

PostgreSQL should store the main operational data for Mercur and, where configured, Payload. It is the correct primary database for the marketplace because IRYSS needs relational integrity across users, products, brands, orders, inventory, permissions, content and operational records.

**Cloud SQL Auth Proxy / Cloud SQL Connector** should be used for secure Cloud Run-to-Cloud SQL connectivity where appropriate.

> **Important correction:** Cloud SQL Auth Proxy provides secure connectivity, **not** connection pooling. Connection pooling must be handled separately.

---

## 14. Database Connection Pooling

IRYSS should include a clear database connection pooling strategy.

For launch, this can use controlled application-level PostgreSQL pooling with careful Cloud Run scaling limits and Cloud SQL connection limits.

If required, the stack can later use Google Cloud SQL Managed Connection Pooling, pgBouncer or another explicit pooling layer.

The purpose is to prevent serverless container scaling from creating too many open database connections and overloading PostgreSQL.

---

## 15. Redis / Valkey Cache Layer

**Aiven for Valkey / Redis-compatible caching** is the low-latency cache and queue backing layer.

It should support short-lived cache, session storage where needed, BullMQ queue backend, rate-limit counters, temporary workflow state, background processing coordination and fast operational lookups that should not hit PostgreSQL repeatedly.

This keeps pressure off the primary database and gives the platform a fast memory layer for high-frequency operations.

---

## 16. Session Storage

A **Redis-backed session store** should be used where server-side sessions are required.

This prevents session loss when Cloud Run scales across multiple containers.

The implementation can use **connect-redis** or a framework-appropriate equivalent depending on the final authentication and session setup.

---

## 17. Queue and Worker Layer

**BullMQ** is the background job and queue framework.

BullMQ workers should handle product enrichment jobs, product import jobs, image processing jobs, OpenSearch indexing jobs, Payload publishing handoff where needed, email and notification jobs, tracking and attribution event forwarding, finance workflow jobs, shipping workflow jobs, retries, rate-limited outbound calls, failed-job logging and recovery.

Workers should run as dedicated Cloud Run worker services or jobs. They should not be hidden inside frontend services.

---

## 18. Search and Catalogue Discovery Layer

**Aiven OpenSearch** is the search and catalogue discovery engine.

OpenSearch should power product search, B2C search, B2B search, filters, facets, autocomplete, fuzzy matching, synonym and brand-alias support, merchandising rules, product/content search where relevant, search analytics indexing and a vector-ready semantic discovery foundation.

**OpenSearch is the search, discovery, filtering, faceting, analytics-indexing and vector-retrieval layer. Mercur/PostgreSQL remain the source of truth.**

---

## 19. OpenSearch Sync Pipeline

IRYSS should include a dedicated OpenSearch sync and indexing pipeline.

This should use Mercur/Medusa events, subscribers, BullMQ jobs, indexing workers, retry handling, failed-index logging and indexing status tracking.

When product, content or visibility data changes, the search index must update. However, the index never becomes the authority. If there is a conflict, Mercur/PostgreSQL wins.

---

## 20. Media Storage and CDN Layer

**Bunny.net Storage, Bunny CDN and Bunny Optimizer** are the recommended media storage, optimisation and delivery layer for product images and marketplace visuals.

Bunny should be used for product images, brand visuals, promotional visuals, optimised image delivery, fast global CDN delivery, image format optimisation and reduced load on Google Cloud infrastructure.

The application still needs its own image workflow for upload rules, image validation, crop standards, required formats, image approval, product image order, alt-text, brand asset rules and marketplace display formats.

> **Important rule:** Bunny is the media delivery and optimisation layer. It is **not** the full image-management workflow by itself.

---

## 21. Hosting and Runtime Layer

**Google Cloud Run** is the recommended hosting and runtime layer for the IRYSS marketplace services.

Cloud Run should host the B2C storefront, B2B storefront, Admin Portal, Brand Portal, Reseller Portal, Payload CMS, Mercur backend/core where applicable, IRYSS Mercur Middleware / API Adapter, worker services, scheduled jobs where appropriate, and the server-side GTM container if hosted in Google Cloud.

Cloud Run is suitable because it runs containerised services, scales automatically and supports a modular service architecture without requiring IRYSS to manage servers directly.

---

## 22. Containerisation and Image Registry

**Docker** is the containerisation standard. Each major application or service should be packaged into its own Docker image.

Each deployable application should be independently containerised, including: B2C storefront, B2B storefront, Admin Portal, Brand Portal, Reseller Portal, Payload CMS, Mercur backend/core where applicable, IRYSS Mercur Middleware / API Adapter, worker services, and the server-side GTM container if hosted in Google Cloud.

**Google Artifact Registry** should be used as the container image registry for Google Cloud deployment.

The correct deployment flow is:

**GitHub Actions → build/test → Docker image → Artifact Registry → Cloud Run deployment**

This gives IRYSS a clean, repeatable and production-ready deployment process.

---

## 23. CI/CD Pipeline

**GitHub Actions** is the CI/CD automation layer.

The pipeline should include dependency installation, linting, TypeScript type-checking, unit tests, integration tests where relevant, Playwright end-to-end tests for critical paths, Docker image build, dependency/security checks where practical, push to Google Artifact Registry, deploy to Cloud Run, environment-specific deployment rules and production deployment approvals.

This prevents unsafe code from being deployed and keeps the engineering process controlled.

---

## 24. Testing Stack

**Vitest/Jest** should be used for unit and integration testing, aligned with the package being tested. Mercur package conventions should be respected rather than forcing one test runner where the underlying package already uses another.

Unit and integration tests should cover business logic, mapping logic, API helper logic, queue logic, enrichment validation, checkout-related logic where relevant, search indexing transformation logic, tracking event validation and middleware response shaping.

**Playwright** should be used for browser end-to-end testing.

It should cover critical user journeys, including B2C browse/search/cart/checkout, B2B browse/request/order, Admin approval flows, Brand product upload, Reseller access flows, login/logout/session behaviour, product indexing visibility rules, image upload and display, behavioural event firing, and key finance/shipping workflow states where relevant.

Vitest/Jest checks logic. Playwright checks real user journeys. Both layers are needed.

---

## 25. Secrets and Environment Management

**Google Secret Manager** is the secrets-management layer.

It should store and control access to database credentials, Payload secrets, Mercur/Medusa secrets, OpenSearch credentials, Bunny credentials, PostHog keys, email provider keys, server-side GTM secrets, finance integration credentials, shipping integration credentials, AI provider keys, webhook signing secrets and API tokens.

Environment variables should be validated at application startup using Zod or equivalent validation.

---

## 26. Infrastructure as Code

**Terraform** is the infrastructure-as-code layer. Terraform should manage Cloud Run services, Cloud SQL, Cloud Load Balancer, IAM roles, service accounts, secrets, Artifact Registry, environment configuration, networking rules and monitoring resources where practical.

This prevents fragile manual setup inside the Google Cloud console and gives IRYSS version-controlled infrastructure.

---

## 27. Network, DNS and Web Security

**Cloudflare DNS and WAF** are the DNS and edge-security layer.

Cloudflare should handle DNS, WAF rules, bot protection, DDoS protection configuration, rate limiting where appropriate, security headers where appropriate, and cache bypass rules for dynamic routes and APIs.

> **Important rule:** Cloudflare must not cache dynamic commerce, account, cart, checkout, admin or API responses.

It can protect and accelerate the public edge, but it must not interfere with live commerce behaviour.

During infrastructure setup, the engineering lead must deliberately decide the SSL termination strategy between Cloudflare and Google Cloud Load Balancer so certificates, redirects, proxying and security rules are not split inconsistently across both layers.

---

## 28. Google Cloud Load Balancer

**Google Cloud Load Balancer** is the routing layer in front of Cloud Run services where required.

It should route the main marketplace domain, B2B subdomain, Admin subdomain, Brand subdomain, Reseller subdomain, tracking subdomain and API/middleware routes where required.

It supports clean domain routing, SSL strategy and routing to the correct Cloud Run services.

---

## 29. CORS and API Security

CORS whitelist configuration is required, but it is not enough on its own.

The platform must also include controlled CORS origins, backend-side role checks, RBAC and permission enforcement, request validation, rate limiting, audit logging, secure headers, webhook signature validation, admin action logging and least-privilege service accounts.

> **Important rule:** Frontend restrictions are never enough. Permissions must be enforced at the backend/API layer.

---

## 30. Observability and Error Monitoring

IRYSS should include a full observability layer from launch.

**Recommended stack:**

- Google Cloud Logging
- Google Cloud Monitoring
- Google Error Reporting
- Sentry for frontend and backend error tracking

This should monitor frontend errors, backend errors, worker failures, failed jobs, indexing failures, tracking failures, API latency, Cloud Run health, database pressure, failed deployments and integration errors.

This is essential because IRYSS will have multiple applications, workers and integrations. Without observability, production issues become difficult to diagnose.

---

## 31. Server-Side Tracking and Attribution

**Google Tag Manager Server Container** is the server-side tracking gateway.

It should support GA4, Meta CAPI, TikTok events if used, first-party event routing, cleaner conversion data, reduced frontend script load and better control over what data is sent to tracking vendors.

This should be implemented carefully with privacy, consent and cookie rules. It improves tracking resilience and data quality, but it should not be described as magically bypassing every blocker or eliminating all attribution loss.

PostHog remains the marketplace behavioural event-capture layer. Server-side GTM is the attribution and advertising-event routing layer. These are related but not the same thing.

---

## 32. Consent and Privacy Layer

IRYSS should include a consent-management and cookie-control layer.

This layer should control analytics consent, marketing consent, cookie categories, PostHog event capture, GTM firing logic, server-side event permissions, privacy-policy alignment, consent auditability and regional compliance requirements.

The exact provider can be selected during implementation, but the layer itself should be treated as required.

---

## 33. Email and Notification Layer

IRYSS needs a transactional email and notification layer.

The exact provider can be selected during implementation, but the stack must support account verification, password reset, order confirmations, brand approval notifications, reseller approval notifications, product approval/rejection notifications, shipping notifications, return notifications, payout/settlement notifications and operational admin alerts.

Email and notification jobs should run through the middleware/workers, not directly from frontend apps.

---

## 34. Finance, Payment, Tax, Shipping and Accounting Integration Boundary

The general marketplace technical stack should acknowledge the integration boundary for finance, payment, tax, shipping and accounting without over-expanding it here.

IRYSS will use a broader automated finance system, with payment, tax, accounting, settlement and reconciliation handled in the Finance, Payments and Settlement scope.

This boundary includes payment-provider integration, finance automation, tax/VAT/compliance provider, accounting target such as Odoo, settlement/reconciliation workflow, shipping-provider integration, returns and fulfilment integration.

These are not removed from the project. They are owned by the finance and shipping build-scope documents rather than over-explained inside the general technical stack.

---

## 35. Package Manager and Mercur Compatibility Rule

The engineering setup should respect Mercur's existing package-manager and build conventions during initial setup.

If Mercur's core, storefront or dashboard packages use different package-manager conventions, the engineering lead should decide deliberately whether to preserve those defaults or standardise them inside the IRYSS monorepo.

The rule is:

> **Do not break Mercur's working build assumptions just to force a clean-looking workspace.**

Repository standardisation is useful, but Mercur compatibility comes first.
