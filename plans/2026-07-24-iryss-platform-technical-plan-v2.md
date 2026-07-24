# IRYSS Platform — Technical Plan v2 (Enhanced)

**Date:** 2026-07-24
**Author:** Samy
**Status:** Revised draft incorporating Ronan's feedback — for final alignment before plan is locked
**Supersedes:** *IRYSS Platform Technical Plan v1* (2026-07-20), portions of *IRYSS Marketplace Technical Stack* (§2, §3, §6, §20) and *IRYSS Content Platform* (§6, §10)

---

## What changed in v2

This revision incorporates Ronan's detailed business-model feedback, the UI/UX Design and Frontend Implementation document, the Odoo/financial integration requirements, and updated Mercur 2 release information. The principal changes:

| Area | v1 | v2 | Why |
|---|---|---|---|
| Live streaming | V1 shoppable live commerce (D1) | **V2 / future phase** | Ronan: *"The live-commerce functionality described as V2 is not part of the marketplace build or the initial Content Platform build."* |
| Storefront addressing | Subdomains (`it.iryss.com`, `fr.iryss.com`) | **Subdirectories** (`iryss.com/fr`, `iryss.com/it`) | Ronan: SEO authority consolidation, single B2C container, simpler translation mapping |
| Portal domains | `brands.iryss.com`, `resellers.iryss.com` | **`iryssbrands.com`**, **`iryssretail.com`** | Ronan: separate public acquisition journeys and onboarding |
| B2C / B2B merge (J2) | Suggested evaluating merge | **Separate applications, decided** | Ronan: *"keeping the B2C and B2B customer-facing applications clearly separated"* for analytics, SEO, acquisition, experimentation |
| Server-side tracking (J1) | Deferred until paid acquisition | **Included from day one** | Ronan: paid acquisition starts at launch; backend conversion events needed for Google/Meta optimisation |
| Payload role | CMS | **PIM + CMS** — product onboarding, enrichment, translation, review, approval | Ronan: Payload is the environment for product lifecycle management |
| OpenSearch | Retained with J5 fallback note | **Confirmed from day one with semantic layer** | Ronan: *"establish OpenSearch from the beginning"* with AI-generated semantic data |
| Marketplace integrations | Mentioned but unspecified | **Stripe, Odoo, Sendcloud, email/notifications added** | Ronan: *"all part of the marketplace build and need to be added to the technical plan"* |
| Design workflow | Not covered | **Full methodology added** (§22) | Ronan's UI/UX Design and Frontend Implementation document |
| Middleware integrations | Medusa-native only | **Plug-and-play integration framework added** (§21) | Ronan: Activepieces or equivalent for managed provider connections |
| Content Platform timing | After marketplace, with live | **After marketplace, YouTube-style library only** | Live commerce deferred to separate future phase |
| Connector timing | After Content Platform | **Can begin alongside Content Platform; initial work may pull into marketplace phase** | Ronan: open to including initial Connector work if needed for marketplace product flow |
| Bun runtime | Not considered | **Evaluated** — Mercur 2 deploys with Bun | Must verify Cloud Run and dependency compatibility |

---

## Contents

1. [Scope and how to read this](#1-scope)
2. [Research findings that change the source documents](#2-research-findings)
3. [Locked decisions](#3-locked-decisions)
4. [Repository and workspace structure](#4-repository)
5. [Service inventory](#5-services)
6. [DNS, domains and routing](#6-dns)
7. [Data and storage architecture](#7-data)
8. [Identity, authentication and SSO](#8-identity)
9. [Multi-storefront context model](#9-storefront-context)
10. [Marketplace core](#10-marketplace)
11. [B2C and B2B structure](#11-b2c-b2b)
12. [Payload PIM and product onboarding](#12-payload-pim)
13. [AI product enrichment, translation and semantic layer](#13-ai-enrichment)
14. [Marketplace integrations — Stripe, Odoo, Sendcloud, email](#14-integrations)
15. [Content Platform](#15-content-platform)
16. [Shopify Connector](#16-connector)
17. [Shared contracts and event taxonomy](#17-contracts)
18. [Server-side tracking and analytics](#18-tracking)
19. [Infrastructure, environments and CI/CD](#19-infrastructure)
20. [Observability and security](#20-observability)
21. [Middleware and plug-and-play integration framework](#21-middleware-integrations)
22. [Design and frontend implementation methodology](#22-design)
23. [Public brand and reseller acquisition journeys](#23-public-journeys)
24. [Build sequencing and team](#24-sequencing)
25. [Week 1 critical path](#25-week-1)
26. [Risk register](#26-risks)
27. [Open items](#27-open-items)
28. [Recommended changes to the locked stack](#28-recommendations)
29. [Foundations to prepare now for the next phase](#29-foundations)

---

<a name="1-scope"></a>
## 1. Scope and how to read this

This plan covers three applications that together form the IRYSS platform:

| Application | Role | Source doc |
|---|---|---|
| **Marketplace** | B2C + B2B commerce, Admin/Brand/Reseller portals, catalogue, orders, search, product onboarding, financial integration, shipping, notifications | *Marketplace Technical Stack*, *Build Timeline* |
| **Content Platform** | YouTube-style content library (V1); live shoppable streaming deferred to future phase | *IRYSS Content Platform* |
| **Shopify Connector** | Brand catalogue import, reseller product export, bidirectional synchronisation | *IRYSS Shopify Connector* |

All three live in **one git repository, one Turborepo workspace**, deploy as **independent Cloud Run services**, and talk to each other only through defined API boundaries.

### 1.1 Build priority

The **marketplace is the immediate delivery priority.** It must be completed in full before the team moves to the next phase.

The **Shopify Connector and Content Platform begin immediately after the marketplace** and can then be developed alongside each other. They are separate technical applications, but both are deeply integrated with the marketplace, its portals and its wider product and content flows.

**Critical constraint from Ronan:** *"We do not want to build the marketplace in isolation and then discover that the product model, portals or onboarding process need to be redesigned before the next phase can begin."*

This means the marketplace build must actively consider:
- User journeys for Connector and Content Platform
- Portal navigation areas and frontend space for future features
- Permissions model that accommodates all portal roles
- Product relationships and the brand/reseller data model
- Event structures and integration points
- Payload PIM workflow that supports the full product onboarding path

Ronan is also open to pulling initial Connector work into the marketplace phase where it is necessary for the marketplace product flow to work properly. The decision on this is made in Week 1 once the product onboarding path is modelled.

### 1.2 What is explicitly NOT in the current build

- **Live commerce / shoppable live streaming** — future phase. Included in v1 as D1; Ronan has clarified: *"not part of the marketplace build or the initial Content Platform build."* Architectural visibility is preserved (§29) so decisions made now do not block it later.
- **Future data lake** — not part of current build; OpenSearch structure should remain useful when more advanced data capabilities are introduced later.
- **Full Shopify Connector** — only foundations if needed for marketplace product flow; full build is next phase.
- **Content Platform** — next phase after marketplace; only portal navigation space and event contracts prepared now.

### 1.3 Conventions

- **VERIFY** — an assumption that must be confirmed in Week 1 before it becomes load-bearing. Every one is listed again in §27.
- **CORRECTION** — this plan deliberately departs from one of the source documents. Rationale is always given.
- **RONAN** — a decision or clarification provided by Ronan in his feedback. These override earlier assumptions where they conflict.

---

<a name="2-research-findings"></a>
## 2. Research findings that change the source documents

Six findings from v1 remain valid and are incorporated. Two additional findings from the latest Mercur 2 release information:

### 2.1 Bunny Stream cannot do live streaming

Bunny's own FAQ states **"RTMP streams are currently not supported."** No RTMP or SRT ingest exists.

> **CORRECTION.** *Content Platform* §10 states *"Live streaming — Bunny supports live ingest."* This is incorrect. Two third-party review sites claim Bunny supports RTMP; they contradict Bunny's own FAQ.

**Impact on this plan:** Since live streaming is now deferred to a future phase (§1.2), no second video vendor is required for the current build. Bunny Stream is retained for VOD. When live streaming is scoped, a live ingest vendor (Cloudflare Stream Live or equivalent) will be selected.

### 2.2 Mercur 2.x is block-based, not fork-and-modify

Mercur **2.0** (released 17 March 2026) replaced the monolithic fork-and-modify model with a **block architecture** modelled on shadcn/ui. Current version is **2.2.0** (9 July 2026). MIT licensed.

> **CORRECTION.** *Marketplace Technical Stack* §3 describes Mercur 1.x forking. In 2.x, forking discards the block registry's re-pull path.

**RONAN confirms:** *"the blocks-based approach is now the correct way to implement the full Mercur 2 package."*

The old starter repositories are **archived**. The B2C storefront now lives in `mercurjs/b2c-marketplace-storefront`.

### 2.3 Mercur 2.x already generates a Turborepo

`create-mercur-app@2.2.0` scaffolds:

```
apps/admin/   apps/vendor/   packages/api/
turbo.json    blocks.json    tsconfig.base.json
```

`packages/api` is the Medusa application.

### 2.4 Mercur issue #909 was fixed in 2.x only, with no 1.x backport

Confirmed at `github.com/mercurjs/mercur/issues/909`. The fix is 2.x only. **Mercur 2.x is not optional.**

### 2.5 Mercur 2.2.0 reshapes the seller product model

Store API products are now **master products** with **offers** replacing seller-owned product models. Cart line items reference offer IDs, not variant IDs.

### 2.6 Medusa on Cloud Run has three specific hazards

**(a)** The worker cannot be a Cloud Run Job — it must be a service with `--no-cpu-throttling` and `--min-instances=1`.
**(b)** Cold starts measured at 13–14s (v1-era). `--min-instances=1` required.
**(c)** `.medusa/server` runs a nested `npm install` — workspace dependencies fail in production.

### 2.7 Mercur 2 full release — new features and Bun deployment

**NEW in v2.** From Ronan: *"there was a lot of new commits by mercur so i think the full mercur 2 release is out now... it has a lot of new features that we will need."*

Key new capabilities relevant to IRYSS:
- Multi-country/multi-storefront support (heavy lifting for country-specific marketplaces already done)
- Mercur 2 GitHub mentions deploying with **Bun**

**VERIFY in Week 1:**
- Exact new features in the latest Mercur 2 release and which IRYSS needs
- Bun compatibility with Cloud Run, Medusa build pipeline, and all dependencies
- Whether Bun provides meaningful performance or startup improvements over Node/pnpm

**Decision on Bun:** Evaluate in Week 1. If Bun is compatible with the full build pipeline (including `medusa build`, nested install, Turborepo, and Cloud Run), and provides cold-start or build-time improvements, adopt it. If compatibility issues exist, stay with Node 20 + pnpm. Do not adopt Bun on faith — prove it works first.

### 2.8 Mercur 2 multi-storefront capabilities

**NEW in v2.** Mercur 2 appears to support the country-specific marketplace model natively. This reduces custom development for:
- Separate store contexts per country
- Per-country catalogue availability
- Multi-language support
- Country-specific pricing and currency

**VERIFY in Week 1** with the Mercur team demo: exact scope of native multi-storefront support, what configuration is needed, and what gaps remain for the IRYSS model.

---

<a name="3-locked-decisions"></a>
## 3. Locked decisions

| # | Decision | Choice | Rationale |
|---|---|---|---|
| D1 | Live streaming | **V2 / future phase** — architectural visibility maintained but not built now | **RONAN:** *"not part of the marketplace build or the initial Content Platform build."* Reversed from v1. |
| D2 | Storefront addressing | **Subdirectories** — `iryss.com/fr`, `iryss.com/it` | **RONAN:** SEO authority consolidated on main domain, matches single B2C container, simpler OpenAI translation mapping. |
| D3 | Live video vendor | **Deferred** — Bunny Stream retained for VOD only | No live ingest needed until D1 is rescoped. |
| D4 | Marketplace foundation | **Mercur 2.x, blocks-native** | #909 fixed; blocks stay re-pullable; Turborepo free. Confirmed by Ronan. |
| D5 | Middleware | **Medusa-native, inside `packages/api`** | Ronan's position. No second framework on hot commerce paths. |
| D6 | Build sequencing | **Marketplace first → Content Platform + Connector in parallel** | Marketplace is the delivery priority. Connector and Content Platform can develop alongside each other after. |
| D7 | Root domain | **`iryss.com`** — main marketplace portal | Single Cloudflare zone for marketplace. |
| D8 | Package manager | **pnpm** | Only manager with first-party Medusa support. **VERIFY** Bun as alternative in Week 1 (§2.7). |
| D9 | Node | **20 LTS**, pinned | Medusa `engines: >=20`; Mercur `>=20`. **VERIFY** Bun compatibility in Week 1. |
| D10 | B2C / B2B separation | **Separate applications** sharing one foundation | **RONAN:** Different users, buying journeys, acquisition strategies, analytics, SEO, experimentation. Not merged. |
| D11 | Brand Portal domain | **`iryssbrands.com`** | **RONAN:** Separate public acquisition and onboarding journey. |
| D12 | Reseller Portal domain | **`iryssretail.com`** | **RONAN:** Separate public reseller-facing journey. |
| D13 | Payload role | **PIM + CMS** | **RONAN:** Payload is the environment for product onboarding — import, completion, structuring, translation, enrichment, review, approval. |
| D14 | OpenSearch | **From day one with semantic layer** | **RONAN:** *"establish OpenSearch from the beginning"* — adding it later requires catalogue reprocessing, index restructuring, query rebuilding. |
| D15 | Server-side tracking | **Included from day one** | **RONAN:** Paid acquisition at launch; backend conversion events needed for Google/Meta. Reversed J1 from v1. |
| D16 | Odoo | **Enterprise, $10/seat, accounting module** | **RONAN:** Handles invoices, credit notes, accounting paperwork. EU accountant configures; dev team integrates. |
| D17 | Sendcloud | **Operational shipping layer** | **RONAN:** Carrier services, labels, tracking, returns. Part of marketplace build. |
| D18 | Content Platform scope (current build) | **YouTube-style content library only** | **RONAN:** Live commerce deferred. Initial build is simpler content library and content-sharing system. |

**Note on D5 and the original NestJS discussion.** The middleware stays Medusa-native. The original NestJS argument was for real-time signaling — that requirement is real but belongs in the Content Platform (future live-streaming phase), not the middleware. NestJS is used for the Content Platform and the Connector.

**Note on D2 — subdirectories vs subdomains.** This is a significant architectural change from v1. Subdirectories keep all SEO authority on `iryss.com`, simplify the single-container deployment, and make pre-translated page mapping straightforward. The trade-off is that storefront resolution moves from `Host` header to URL path, and cookies no longer need `.iryss.com` scoping for storefronts (they're all on the same origin). The auth model changes — see §8.

---

<a name="4-repository"></a>
## 4. Repository and workspace structure

### 4.1 Approach

We **generate the Mercur workspace with `create-mercur-app` and grow IRYSS inside it.** This preserves `turbo.json`, `blocks.json` and `tsconfig.base.json` as upstream expects.

Blocks are pulled via the Mercur CLI into `packages/api/src`, `apps/vendor/src` and `apps/admin/src`. Block-sourced files are committed but kept in identifiable directories so a future re-pull produces a readable diff.

### 4.2 Layout

```
iryss-platform/                     ← single git repo, single Turborepo
├── turbo.json
├── blocks.json                     ← Mercur block registry aliases
├── tsconfig.base.json
├── pnpm-workspace.yaml
├── .npmrc                          ← hoist patterns, see 4.4
├── .nvmrc                          ← 20
│
├── packages/
│   ├── api/                        ★ MERCUR / MEDUSA CORE — upstream layout, do not rename
│   │   ├── medusa-config.ts
│   │   ├── instrumentation.ts
│   │   └── src/
│   │       ├── api/
│   │       │   ├── middlewares/    ← THE IRYSS MARKETPLACE MIDDLEWARE (D5)
│   │       │   │     storefront-context.ts
│   │       │   │     rbac.ts
│   │       │   │     cache-scope.ts
│   │       │   │     request-validation.ts
│   │       │   │     integration-bridge.ts    ← NEW: Activepieces/integration routing
│   │       │   ├── store/  admin/  vendor/
│   │       ├── modules/            ← IRYSS domain modules
│   │       │     reseller/
│   │       │     storefront-config/
│   │       │     product-onboarding/     ← NEW: PIM workflow status tracking
│   │       │     financial/              ← NEW: Odoo event routing
│   │       │     shipping/               ← NEW: Sendcloud event routing
│   │       │     notifications/          ← NEW: email/in-app notification dispatch
│   │       ├── workflows/
│   │       ├── subscribers/        ← OpenSearch indexing, enrichment triggers, events
│   │       └── links/
│   │
│   ├── contracts/                  ★ PUBLISHED, not workspace-linked — see 4.3
│   │                                 types · Zod schemas · event taxonomy
│   ├── ui/                         shared design system, portal shells, tables, forms
│   ├── auth/                       session/role/permission helpers
│   ├── api-client/                 typed client for api.iryss.com
│   ├── config/                     env loading + Zod validation
│   └── test-utils/
│
├── apps/
│   ├── admin/                      ← Mercur admin (upstream) + IRYSS design → Admin Portal
│   ├── vendor/                     ← Mercur vendor panel → BRAND PORTAL
│   ├── b2c-storefront/             ← from mercurjs/b2c-marketplace-storefront
│   ├── b2b-storefront/             ← custom; no Mercur foundation exists
│   ├── reseller-portal/            ← custom; reseller data model from day one
│   ├── payload-cms/                ← PIM + CMS (D13)
│   ├── content-platform/           ← NestJS — V1: content library only
│   │     src/api/  src/worker/
│   ├── shopify-connector/          ← NestJS
│   │     src/api/  src/worker/
│   └── shopify-embedded-app/       ← Shopify React Router template + Polaris Web Components
│
├── storybook/                      ← NEW: shared Storybook for portal components (§22)
│
└── infrastructure/                 ← Terraform
      environments/{dev,staging,prod}/
      modules/{cloud-run,cloud-sql,redis,opensearch,dns,secrets,monitoring}/
```

**Changes from v1:**
- `apps/content-platform` no longer includes `src/ws-gateway/` (live streaming deferred)
- New domain modules added to `packages/api/src/modules/` for product onboarding, financial, shipping and notifications
- `storybook/` directory added for the design workflow (§22)
- `integration-bridge.ts` added to middlewares for plug-and-play integration routing (§21)

### 4.3 `packages/contracts` is published, not linked

Per §2.6(c), `medusa build` produces `.medusa/server/` with its own `package.json` and runs a nested `npm install`. A `workspace:*` dependency **will resolve in development and fail in production**.

**Resolution:**
- `packages/contracts` is versioned and **published to Google Artifact Registry's npm repository** by CI on merge to `main`.
- `packages/api` consumes it as a **real semver dependency** (`"@iryss/contracts": "1.4.2"`).
- All other workspace members may link it normally (`workspace:*`).
- CI blocks a `packages/api` build if its pinned `@iryss/contracts` version is behind `main`.

### 4.4 Required workspace configuration

Root `.npmrc`:

```
public-hoist-pattern[]=*@medusajs/*
public-hoist-pattern[]=@tanstack/react-query
public-hoist-pattern[]=react-i18next
public-hoist-pattern[]=react-router-dom
```

Additional rules:
- Root `package.json` must declare `packageManager`.
- `@medusajs/framework` must be a `peerDependency` in any workspace package whose compiled output imports it.
- Pin every `@medusajs/*` package to one exact version via root `pnpm.overrides`.
- `.medusa/` is gitignored.
- `medusa build` only compiles `.ts`/`.js`. JSON and other assets need an explicit `postbuild` copy step.
- Turbo tasks that drive Medusa must `cd` into `packages/api`.

### 4.5 Deleted from the original stack document

| Removed | Why |
|---|---|
| `apps/workers` | Medusa needs no separate worker app — same image with `MEDUSA_WORKER_MODE`. |
| `apps/mercur-middleware` | Per D5, moved into `packages/api/src/api/middlewares/`. |
| `apps/mercur-core` | Renamed to `packages/api` to match Mercur's generated layout. |
| `packages/types`, `packages/validation`, `packages/events` | Merged into `packages/contracts`. |

---

<a name="5-services"></a>
## 5. Service inventory

Thirteen Cloud Run services for the current build. Live-streaming services (content-ws) deferred to future phase.

| # | Service | Source | Notes |
|---|---|---|---|
| 1 | `api-server` | `packages/api` | `MEDUSA_WORKER_MODE=server`, `DISABLE_MEDUSA_ADMIN=false`, `min-instances=1` |
| 2 | `api-worker` | `packages/api` (**same image**) | `MEDUSA_WORKER_MODE=worker`, `DISABLE_MEDUSA_ADMIN=true`, **`--no-cpu-throttling`**, `min-instances=1` |
| 3 | `b2c-storefront` | `apps/b2c-storefront` | Serves **all** country storefronts; market resolved from URL path |
| 4 | `b2b-storefront` | `apps/b2b-storefront` | Account-gated |
| 5 | `admin-portal` | `apps/admin` | |
| 6 | `brand-portal` | `apps/vendor` | Deployed to `iryssbrands.com` |
| 7 | `reseller-portal` | `apps/reseller-portal` | Deployed to `iryssretail.com` |
| 8 | `payload-cms` | `apps/payload-cms` | PIM + CMS |
| 9 | `content-api` | `apps/content-platform` | NestJS REST — V1 content library |
| 10 | `content-worker` | `apps/content-platform` (same image) | `--no-cpu-throttling`, `min-instances=1` |
| 11 | `connector-api` | `apps/shopify-connector` | NestJS REST + Shopify webhook receiver |
| 12 | `connector-worker` | `apps/shopify-connector` (same image) | `--no-cpu-throttling`, `min-instances=1` |
| 13 | `shopify-app` | `apps/shopify-embedded-app` | Shopify App URL + OAuth callback |
| 14 | `gtm-server` | Google-provided or Stape image | Server-side GTM container (D15) |

**Removed from v1:** `content-ws` (WebSocket gateway for live streaming) — deferred with D1.

**Future phase additions when live streaming is built:**
- `content-ws` — NestJS WebSocket gateway with session affinity, Valkey pub/sub fan-out
- Cloudflare Stream Live ingest integration

**Pattern:** services 1–2, 9–10 and 11–12 are each *one image deployed multiple times* with different entrypoints/env.

**Every worker service needs `--no-cpu-throttling` and `--min-instances=1`.** These containers are always on. Cloud Run's scale-to-zero economics do not apply to queue consumers. Budget accordingly.

**GTM hosting (D15):** Ronan notes that Cloud Run may become expensive for high-volume sGTM. Evaluate **Stape** or **Hetzner** as lower-cost container options. The decision on hosting provider can be made separately from the architectural decision to include sGTM from day one. See §18.

---

<a name="6-dns"></a>
## 6. DNS, domains and routing

### 6.1 Domain structure — three separate domains

**RONAN's domain model** uses three separate domains reflecting three distinct audiences with separate public acquisition journeys:

| Domain | Purpose | Cloudflare Zone |
|---|---|---|
| **`iryss.com`** | Main marketplace — B2C storefronts, B2B marketplace, Admin Portal, API, CMS, search | Primary zone |
| **`iryssbrands.com`** | Brand acquisition, onboarding and Brand Portal | Separate zone |
| **`iryssretail.com`** | Reseller acquisition, onboarding and Reseller Portal | Separate zone |

### 6.2 Production — `iryss.com` zone

| Path / Subdomain | Service | Public | Notes |
|---|---|---|---|
| `iryss.com` | `b2c-storefront` | Y | Global / UK default storefront |
| `www.iryss.com` | → `iryss.com` | Y | 301 redirect |
| `iryss.com/fr` | `b2c-storefront` | Y | France storefront — resolved from URL path |
| `iryss.com/it` | `b2c-storefront` | Y | Italy storefront — resolved from URL path |
| `iryss.com/<country>` | `b2c-storefront` | Y | Future market = 1 path route + 1 DB row |
| `trade.iryss.com` | `b2b-storefront` | Y | Account-gated B2B marketplace |
| `admin.iryss.com` | `admin-portal` | — | Cloudflare Access / IP allowlist |
| `api.iryss.com` | `api-server` | Y | Medusa store/admin/vendor API + IRYSS middleware |
| `cms.iryss.com` | `payload-cms` | — | PIM + CMS admin UI authenticated; delivery API read-only |
| `content.iryss.com` | `content-api` | Y | Content Platform REST (V1) |
| `cdn.iryss.com` | Bunny CDN pull zone | Y | Images, optimiser, resizing |
| `vod.iryss.com` | Bunny Stream | Y | VOD playback, token auth — **VERIFY** custom hostname |
| `connect.iryss.com` | `connector-api` | Y | Connector API + Shopify webhook endpoint |
| `shopify.iryss.com` | `shopify-app` | Y | Shopify App URL + OAuth redirect URI |
| `t.iryss.com` | `gtm-server` | Y | Server-side GTM, first-party context |
| `search.iryss.com` | — | — | **RESERVED** — future direct OpenSearch proxy if needed |

### 6.3 Production — `iryssbrands.com` zone

| Path / Subdomain | Service | Public | Notes |
|---|---|---|---|
| `iryssbrands.com` | `brand-portal` | Y | Public brand acquisition landing + authenticated Brand Portal |
| `www.iryssbrands.com` | → `iryssbrands.com` | Y | 301 redirect |

**RONAN:** *"Prospective brands should reach a dedicated brand-facing landing and onboarding journey, with existing brand users signing in from there to enter the Brand Portal."*

The public acquisition pages and the authenticated portal are served from the same deployment. The app handles the split between public and authenticated routes. See §23.

### 6.4 Production — `iryssretail.com` zone

| Path / Subdomain | Service | Public | Notes |
|---|---|---|---|
| `iryssretail.com` | `reseller-portal` | Y | Public reseller acquisition landing + authenticated Reseller Portal |
| `www.iryssretail.com` | → `iryssretail.com` | Y | 301 redirect |

**RONAN:** *"The same applies to resellers, with a public reseller-facing landing and onboarding journey."*

### 6.5 Subdirectory storefront resolution — how it works

The **single B2C storefront deployment** serves all country storefronts via URL path:

```
iryss.com              → storefront=GB (default)
iryss.com/fr           → storefront=FR
iryss.com/fr/products  → storefront=FR, route=/products
iryss.com/it           → storefront=IT
iryss.com/it/products  → storefront=IT, route=/products
```

Resolution flow in the Next.js middleware:
1. Extract the first path segment
2. Look up against the `storefront` config table
3. If match → set storefront context, strip prefix from downstream route
4. If no match → default storefront (GB/global)
5. Context injected into all API calls, search queries, analytics events

**Advantages over subdomains** (per Ronan):
- All SEO authority consolidated on `iryss.com`
- No wildcard DNS management per country
- Pre-translated pages map naturally to path structure
- One SSL certificate for the storefront
- Simpler ISR/SSG cache invalidation

**Trade-offs to manage:**
- `storefront-context.ts` middleware now resolves from path prefix, not Host header
- URL-rewriting logic must be correct — a bug here serves wrong-country content
- Canonical URLs must include the country prefix
- `hreflang` tags must reference all country paths
- Sitemap must enumerate all country paths

### 6.6 The two Shopify subdomains

- **`shopify.iryss.com`** is registered in the Shopify Partner dashboard as the App URL and OAuth redirect URI.
- **`connect.iryss.com`** is the Connector backend — receives webhooks, serves Connector screens embedded in portals.

### 6.7 Non-production

```
<service>.stg.iryss.com     staging
<service>.dev.iryss.com     development
```

Brand and reseller portal staging uses subdomains of the main zone for simplicity:
```
brands.stg.iryss.com        staging Brand Portal
resellers.stg.iryss.com     staging Reseller Portal
```

### 6.8 SSL termination

**Cloudflare proxied (orange cloud) → Full (strict) → Google Cloud Load Balancer → Cloud Run.**

GCLB is mandatory because:
- Cloud Run domain mapping is preview, not production-ready
- Cloud Armor and IAP attach to the load balancer, not the service
- Without GCLB, clients reach services directly on `*.run.app` URLs, bypassing all access controls
- Cost: ~$18–20/month for forwarding rules + ~$8/TB processed

**Three Cloudflare zones** (iryss.com, iryssbrands.com, iryssretail.com) each need their own SSL configuration.

Cloudflare **must not cache** dynamic commerce, account, cart, checkout, admin or API responses. Cache rules explicitly bypass `api.`, `admin.`, `connect.`, and any `/cart`, `/checkout`, `/account` path.

### 6.9 Deferred from v1

| Removed | Why |
|---|---|
| `live.iryss.com` | Cloudflare Stream Live — deferred with D1 |
| `ws.iryss.com` | WebSocket gateway — deferred with D1 |
| `stream-in.iryss.com` | RTMPS ingest — deferred with D1 |

These are reserved for the live-streaming phase.

---

<a name="7-data"></a>
## 7. Data and storage architecture

### 7.1 Relational — Google Cloud SQL for PostgreSQL

Four logical databases:

| Database | Owner | Contents |
|---|---|---|
| `iryss_marketplace` | `packages/api` | Medusa/Mercur core — products, orders, customers, sellers, offers, payments |
| `iryss_payload` | `payload-cms` | CMS content + PIM product onboarding data — **separate database** |
| `iryss_content` | `content-api` | Channels, videos, playlists, Bunny asset refs, analytics rollups |
| `iryss_connector` | `connector-api` | Store connections, product mappings, sync history, retry/webhook state |

> **CORRECTION to *Technical Stack* §13.** Payload must not share a database with Medusa. Medusa uses MikroORM, Payload uses Drizzle. Table-name collisions on `users`, `products`, `orders`. Pool contention. Medusa's own Payload integration guide provisions a separate `PAYLOAD_DATABASE_URL`.

**Instance topology:**
- **dev / staging** — one Cloud SQL instance, four databases
- **production** — `iryss_marketplace` + `iryss_payload` on one instance; `iryss_content` + `iryss_connector` on a second
- **Production must be regional (HA) with point-in-time recovery enabled**

**Odoo is NOT an IRYSS-managed database.** Odoo Enterprise is a separate hosted service. The IRYSS middleware sends financial events to Odoo and receives statuses back. No Odoo data is stored in IRYSS databases — only references and sync state within the marketplace database.

**No cross-database joins, ever.** Content Platform and Connector reach commerce data only through `api.iryss.com`.

### 7.2 Connection pooling

- Each Cloud Run instance holds its own pool
- Per-instance pool size: **single digits** (start at 5)
- **`--max-instances` must be set on every service**: `Σ(max_instances × pool_size) < max_connections × 0.8`
- Use Cloud SQL connector with **lazy** refresh strategy
- If arithmetic stops working, add **PgBouncer** or Cloud SQL Managed Connection Pooling

### 7.3 Cache and queues — Google Memorystore for Valkey

> **CORRECTION to *Technical Stack* §15.** Google Memorystore for Valkey is now GA with a 99.99% SLA. Aiven retained for OpenSearch only.

**RONAN agrees:** *"keeping Valkey in the same environment should provide simpler networking, lower latency and less operational overhead."* Estimated cost: ~$72/month for initial configuration.

**Medusa v2 needs Redis/Valkey for five distinct purposes:**

| Purpose | Configuration |
|---|---|
| Session store | `projectConfig.redisUrl` |
| Cache | `@medusajs/cache-redis` |
| Event bus | `@medusajs/event-bus-redis` |
| Workflow engine | `@medusajs/workflow-engine-redis` |
| Distributed locking | `@medusajs/locking-redis` — **required for multi-instance production** |

Single Valkey cluster, **namespaced by application:**

```
mkt:*        marketplace cache, sessions, BullMQ (Medusa)
content:*    content platform cache, BullMQ
connect:*    connector cache, BullMQ
enrich:*     product enrichment/translation job queues
```

**Cache keys must include full storefront context** — storefront, region, locale, currency, sales channel, permission scope. Enforced by a helper in `packages/contracts`.

### 7.4 Search — Aiven OpenSearch (D14 — from day one)

**RONAN:** *"Our preference is to establish OpenSearch from the beginning rather than launch with one of Mercur's simpler search options and replace it later."*

One cluster, multiple indices:

| Index | Documents | Notes |
|---|---|---|
| `products` | Marketplace catalogue with storefront, region, locale, sales_channel, visibility fields | **Plus semantic vector fields** from AI enrichment (§13) |
| `brands` | Brand/seller discovery | |
| `content` | Videos (title, description, channel, brand, category, collection, playlist, product links, visibility, processing state) | V1 content library |

**Semantic layer (new in v2):** Each product document includes AI-generated semantic vectors from the enrichment process (§13). These enable:
- Multilingual meaning-based search (not just keyword matching)
- Semantic product discovery across languages
- Structured filters derived from enriched product attributes
- Different B2C and B2B search behaviour

Per Ronan: *"Creating the product and its semantic search representation together should be cleaner than adding that layer after the catalogue is live."*

**OpenSearch is never authoritative.** On conflict, Postgres wins. Indexing runs through Medusa subscribers → BullMQ → indexing workers, with retry, failed-index logging and status tracking.

**Managed provider:** Aiven or **Bonsai** with private connectivity into Google Cloud. **VERIFY** provider options, region availability and PSC support in Week 1.

### 7.5 Media

| Asset | Vendor | Path |
|---|---|---|
| Product images, brand visuals | **Bunny** Storage + CDN + Optimizer | `cdn.iryss.com` |
| VOD video | **Bunny Stream** | TUS upload → transcode → ABR HLS → `vod.iryss.com`, token auth |

Upload rules, validation, crop standards, approval, ordering, alt-text and brand asset rules are IRYSS application logic, not Bunny's.

---

<a name="8-identity"></a>
## 8. Identity, authentication and SSO

### 8.1 Model — cross-domain authentication

**`api.iryss.com` (Medusa) is the sole identity provider.** All other services are resource servers.

```
                    ┌──────────────────────────────┐
                    │  api.iryss.com  (Medusa)     │
                    │  ISSUER — the only one       │
                    └──────────────┬───────────────┘
                                   │ signs JWT (RS256)
                                   │ publishes JWKS at
                                   │ /.well-known/jwks.json
         ┌────────────┬────────────┼────────────┬────────────┐
         ▼            ▼            ▼            ▼            ▼
   iryss.com    trade.iryss.com  iryssbrands   iryssretail  content.
   (B2C)        (B2B)            .com          .com         iryss.com
   verifies     verifies         verifies      verifies     verifies
```

**Cross-domain auth challenge (new in v2):** With Brand and Reseller portals on separate domains (`iryssbrands.com`, `iryssretail.com`), cookies scoped to `.iryss.com` **do not work** for those portals.

**Resolution — token-based auth for all portals:**

- **B2C storefront** (`iryss.com`) — session cookie on `iryss.com` origin (same-origin, simple)
- **B2B storefront** (`trade.iryss.com`) — session cookie scoped to `.iryss.com` (subdomain of main zone)
- **Admin Portal** (`admin.iryss.com`) — session cookie scoped to `.iryss.com`
- **Brand Portal** (`iryssbrands.com`) — **JWT Bearer token in Authorization header**, stored in `httpOnly` cookie on `iryssbrands.com` set during OAuth/login redirect from `api.iryss.com`
- **Reseller Portal** (`iryssretail.com`) — **JWT Bearer token in Authorization header**, stored in `httpOnly` cookie on `iryssretail.com` set during OAuth/login redirect from `api.iryss.com`
- **Content Platform** (`content.iryss.com`) — verifies via JWKS, never issues

**Login flow for cross-domain portals (Brand/Reseller):**
1. User visits `iryssbrands.com` and clicks Sign In
2. Redirect to `api.iryss.com/auth/brand/login` (or OAuth flow)
3. Medusa authenticates, issues JWT
4. Redirect back to `iryssbrands.com/auth/callback` with auth code
5. Brand Portal exchanges code for JWT, sets `httpOnly` cookie on `iryssbrands.com`
6. Subsequent API calls include JWT in Authorization header

RS256 asymmetric signing: resource servers verify with the public key; only Medusa holds the private key.

### 8.2 Token claims

```json
{
  "sub": "usr_...",
  "actor_type": "customer|b2b_user|brand_user|reseller_user|admin|storefront_manager",
  "storefronts": ["IT", "FR"],
  "brand_id": "sel_...",
  "reseller_id": "res_...",
  "permissions": ["catalogue:read", "orders:write", "content:upload"],
  "consent": { "analytics": true, "marketing": false }
}
```

### 8.3 Authorisation rules

- **Coarse checks are local.** Content Platform and Connector enforce `actor_type`, `storefronts` and `permissions` straight from verified claims.
- **Fine-grained commerce authority is delegated.** "May this reseller download this product's video?" is asked of `api.iryss.com`.
- **Service-to-service calls** use a separate service credential, never a user token.

### 8.4 Admin Portal — multi-marketplace access control

**RONAN:** *"A marketing operator in France only logs into the French B2C store and can only access and make changes to this marketplace."*

The Admin Portal token claims include `storefronts` — the list of storefronts the admin user has access to. The Admin Portal UI:
- Global admin: sees consolidated data, can filter into any storefront
- Storefront manager: sees only permitted storefronts in the dropdown
- When a French operator logs in, `storefronts: ["FR"]` means they land in the French B2C context and cannot switch to Italy

This is enforced server-side via the `storefronts` claim. Hidden navigation is not evidence of anything.

### 8.5 Enforcement discipline

Every role × region × storefront × section × function combination gets an automated permission test in `packages/test-utils`, run in CI.

---

<a name="9-storefront-context"></a>
## 9. Multi-storefront context model

### 9.1 Generic by construction

Italy and France are **configured rows, not code**. A `storefront` record carries:

```
code            IT
path_prefix     /it                    ← NEW: subdirectory prefix instead of domain
region_id       reg_...                (Medusa region)
sales_channel   sc_...                 (Medusa sales channel)
locale          it-IT
currency        EUR
default_lang    it
supported_langs [it, en]
catalogue_visibility_rules
content_context
operational_owner
```

Adding Germany is a path route + a row. No code change.

### 9.2 Resolution — subdirectory model

`storefront-context.ts` resolves context on every relevant request:

**For B2C storefront requests:**
1. Extract first path segment after `/`
2. Match against storefront `path_prefix`
3. If match → resolve region, sales channel, locale, currency from storefront record
4. If no match → default storefront (GB/global)
5. Combine with authenticated user permissions if logged in

**For B2B storefront requests:**
- `trade.iryss.com` resolves to B2B sales channel
- Same storefront/region model applies for multi-country B2B

**For Admin Portal requests:**
- Storefront context comes from the admin user's active view selection + their `storefronts` claim
- Global admin can switch between storefronts; storefront managers see only their permitted contexts

**Fail-closed behaviour:** If storefront, path prefix, locale, region, sales channel or permission context cannot be resolved safely, the request is **rejected or routed to a controlled error state**. It must never silently default to another storefront.

### 9.3 Central catalogue, never duplicated

One product = one core commerce record. Storefront-specific availability, visibility, pricing, content, localisation and brand eligibility are applied through Medusa configuration, custom fields, sales-channel/region rules and middleware-enforced context. **No per-country product tables.**

**RONAN:** *"Individual country storefronts must also remain separately controlled. Italy and France may have differences in catalogue availability, localisation and content."*

### 9.4 Pre-translated content and ISR

**RONAN's translation model:** All products are translated via OpenAI during the enrichment process (§13). All language versions are pre-generated and stored.

**Page rendering strategy — Static Pre-Rendering with Webhook-Based Revalidation (ISR):**
- All country/language versions of product pages are pre-rendered at build or first request
- Translations are already available from the enrichment process — no runtime translation
- Product updates trigger webhook-based revalidation of affected pages
- This keeps pages fast (static serving) while allowing updates without full rebuilds

**RONAN:** *"all version pre translated and pre loaded with Static Pre-Rendering with Webhook-Based Revalidation"*

**SEO requirements for subdirectory model:**
- `hreflang` tags on every page linking all language versions: `<link rel="alternate" hreflang="fr" href="https://iryss.com/fr/..." />`
- Canonical URLs include the country prefix
- Sitemaps enumerate all country paths
- `lang` attribute on `<html>` element matches the storefront locale
- Open Graph and structured data use the localised content

### 9.5 Leakage testing

A named regression suite that asserts, for every pair of storefronts, that no product, price, content block, search result, analytics record or admin view crosses between them. Runs in CI.

---

<a name="10-marketplace"></a>
## 10. Marketplace core

### 10.1 Foundation

Mercur 2.x on Medusa, blocks-native (D4). The full Mercur 2 package is used as the marketplace foundation — not a subset of components.

**RONAN:** *"Our thinking is that we should use the complete Mercur 2 structure rather than look back at Mercur 1 or separately select underlying Medusa components that Mercur has already incorporated."*

Mercur core supplies sellers, commissions, payouts, split carts, order groups, native Stripe Connect marketplace payouts, 35+ admin pages, 19+ vendor pages, plus optional blocks.

Blocks IRYSS is likely to adopt: **requests**, **product import/export**, **notifications**, **team management**, **reviews**, **wishlist**.

### 10.2 The offers model

Per §2.5, Mercur 2.2.0 makes Store API products **master products** with **offers** replacing seller-owned product models.

Consequences:
- Brand product management operates on **offers against master products**
- The Connector's SKU-matching logic matches to **master products** and creates/updates a **brand's offer**
- Reseller product allocation attaches to an offer
- OpenSearch documents model the master-product/offer relationship

Week-1 spike item.

### 10.3 Split checkout — issue #909

Fixed upstream in 2.x. **Verify against exact pinned version in Week 1** with all four assertions from v1.

### 10.4 Portals

| Portal | Foundation | Domain | Notes |
|---|---|---|---|
| **Admin** | Mercur admin | `admin.iryss.com` | One application. Global admin sees consolidated data; storefront managers see only permitted storefronts. **Marketplace-context switcher** for navigating between global, B2C, B2B and country-specific views. |
| **Brand** | Mercur vendor panel | `iryssbrands.com` | Extends seller model. Includes public acquisition landing. Access to accounting documents from Odoo. |
| **Reseller** | Custom | `iryssretail.com` | Wired to reseller-specific data model from day one. Includes public acquisition landing. Shopify connection UI present but disabled until Connector ships. |

**Admin Portal — marketplace-context switcher (RONAN's requirement):**

The Admin Portal must support:
1. **Global view** — consolidated data across all storefronts and channels
2. **B2C view** — all B2C storefronts, with the ability to drill into a specific country
3. **B2B view** — B2B-specific data and management
4. **Country-specific view** — e.g., clicking "IRYSS France" lands in a B2C management portal for France only

This is a new IRYSS structure that does not exist in Mercur (§22.5 — "new IRYSS Admin structures"). It requires:
- A storefront/channel selector in the admin navigation
- Filtered data queries based on active context
- Permission enforcement so French operators only see France
- Analytics and reporting scoped to the active context

**Brand Portal — extended scope:**
- Standard Mercur vendor functions (products, offers, orders)
- Product onboarding status and enrichment progress from Payload PIM
- Accounting documents from Odoo (invoices, credit notes, statements)
- Content Platform access (future phase, but navigation space reserved)
- Shopify Connector status and sync information (future phase, navigation space reserved)
- Performance analytics across B2C, B2B and country storefronts

**Reseller Portal — custom build:**
- Product discovery and selection from approved catalogue
- Approved content and media access
- Shopify connection management (disabled until Connector ships; UI present)
- Product publication and synchronisation status
- Stock and order information
- Reseller-specific insights and analytics
- Content Platform access (future phase, navigation space reserved)

### 10.5 AI Product Enrichment — marketplace-integrated

A controlled background workflow inside the marketplace. Details in §13, but architecturally:
- Triggered by product onboarding events from Payload PIM
- Runs as BullMQ jobs via `api-worker`
- Structured output (Zod-validated) → server-side business-rule validation → write back to Medusa product custom fields
- Status field: `pending | enriching | translating | complete | failed | approved | edited | rejected`
- Downstream systems (search, SEO, Connector) read **from Medusa**, never from a separate AI store

---

<a name="11-b2c-b2b"></a>
## 11. B2C and B2B structure

**RONAN's model:** One marketplace platform with the B2C and B2B customer-facing applications clearly separated.

### 11.1 Why separate applications

| Dimension | B2C | B2B |
|---|---|---|
| Users | End consumers | Wholesale purchasers and resellers |
| Buying journey | Consumer discovery, impulse, retention | Account-based, bulk, relationship-driven |
| Pricing | Consumer retail pricing | Wholesale / trade pricing, minimum orders |
| Acquisition | Consumer marketing, SEO, social, paid | Account development, direct outreach, partnerships |
| Analytics | Consumer conversion, CLV, basket, retention | Wholesale demand, reseller activity, account growth |
| SEO | Consumer product discovery | B2B product intelligence, trade terms |
| Experimentation | A/B testing consumer flows | Different A/B needs for trade flows |

**RONAN:** *"The reason for keeping the B2C and B2B applications separately identified is to preserve cleaner channel data and allow different analytics, automation, SEO, acquisition, experimentation and release decisions for each."*

### 11.2 Shared foundation

They are NOT duplicated platforms. They share:
- The same backend (`api.iryss.com`)
- The same product catalogue (central, never duplicated)
- The same design system (`packages/ui`)
- The same contracts (`packages/contracts`)
- The same deployment infrastructure
- The same auth model
- Common functionality built once

### 11.3 Implementation

- **B2C** — from `mercurjs/b2c-marketplace-storefront`, redesigned to IRYSS Figma. **One deployment serves every market** via subdirectory paths.
- **B2B** — custom Next.js on the same backend and design system. Served at `trade.iryss.com`. Account-gated. Own navigation, trade pricing display, business quantities, pack/minimum-order information.

### 11.4 Admin Portal views

The Admin Portal provides:
- **Global combined view** — cross-channel analytics and management
- **B2C section** — consumer marketplace data, with country-storefront drill-down
- **B2B section** — wholesale/trade data

The Brand Portal provides a unified view across B2C and B2B because brands need one place to manage their products, activity and performance.

### 11.5 Country storefronts within B2C

Each country storefront operates as a separately controlled store:
- Different catalogue availability
- Different localisation and content
- Different language
- Different pricing/currency (EUR for France/Italy, GBP for UK)

**RONAN:** *"the platform cannot assume that every brand and product is available identically in every storefront."*

Mercur 2's native multi-storefront support handles much of the heavy lifting for this. **VERIFY** in Week 1 with the Mercur team demo exactly what is native vs what requires custom work.

---

<a name="12-payload-pim"></a>
## 12. Payload PIM and product onboarding (D13)

### 12.1 Payload's dual role

**RONAN:** *"Payload is intended to serve both as the IRYSS CMS and as the PIM used throughout product onboarding."*

| Role | Responsibilities |
|---|---|
| **PIM** | Product import staging, information completion, structuring, translation, enrichment, review, approval |
| **CMS** | Marketplace editorial content, public brand/reseller pages, SEO content, localisation, market-specific content, localised imagery |

### 12.2 Product onboarding flow

```
Brand's Shopify Store
        │
        ▼ (Shopify Connector - embedded app)
   Shopify Bulk Export (GraphQL)
        │
        ▼
   IRYSS Marketplace Middleware
   (validation, permissions, storefront context)
        │
        ▼
   Payload CMS (as PIM)
   ┌─────────────────────────────────────────────────┐
   │  Products land with imported information         │
   │  Status: IMPORTED                                │
   │                                                  │
   │  ► Completeness check                           │
   │    - Missing required fields?                    │
   │    - Incomplete descriptions?                    │
   │    - Missing images?                             │
   │                                                  │
   │  If incomplete → Status: NEEDS_INFO              │
   │    → Returned to brand for completion            │
   │    → Brand completes in Brand Portal             │
   │    → Resubmitted through middleware              │
   │                                                  │
   │  If complete → Status: READY_FOR_ENRICHMENT      │
   └─────────────────────────────────────────────────┘
        │
        ▼
   AI Enrichment Pipeline (§13)
   ┌─────────────────────────────────────────────────┐
   │  1. Standardise into IRYSS product template     │
   │  2. Translate into all site languages            │
   │  3. Generate semantic vectors for search         │
   │  4. Generate SEO metadata                        │
   │  Status: ENRICHING → ENRICHED                    │
   └─────────────────────────────────────────────────┘
        │
        ▼
   Review & Approval
   ┌─────────────────────────────────────────────────┐
   │  Admin/brand review enriched product             │
   │  Status: REVIEW → APPROVED or REJECTED           │
   └─────────────────────────────────────────────────┘
        │
        ▼ (on APPROVED)
   Published to Marketplace
   ┌─────────────────────────────────────────────────┐
   │  ► Medusa product record created/updated         │
   │    (authoritative live commerce record)           │
   │  ► OpenSearch indexed with semantic vectors       │
   │  ► Available in B2C and/or B2B per storefront     │
   │    visibility rules                               │
   └─────────────────────────────────────────────────┘
```

### 12.3 Authority boundaries after approval

| System | Authoritative for |
|---|---|
| **Mercur/Medusa** | Live product, offers, pricing, availability, inventory, marketplace behaviour |
| **OpenSearch** | Approved search and semantic representation derived from the product |
| **Payload** | Product enrichment history, CMS content, editorial, localised imagery |

**RONAN:** *"After approval, Mercur should hold the authoritative live commerce record."*

### 12.4 Later product changes

Product changes received from a brand's Shopify store must pass through the **same middleware-controlled validation, enrichment and approval process** before the approved information is updated across IRYSS. No direct writes to the live product record from external systems.

### 12.5 CMS responsibilities

Beyond PIM, Payload manages:
- Marketplace editorial content
- Public brand and reseller pages (brand stories, reseller profiles)
- SEO content
- Localisation and market-specific content
- Localised imagery
- Content blocks for storefront pages

### 12.6 Separate database

Payload runs on `iryss_payload` — separate from `iryss_marketplace`. See §7.1 for rationale.

### 12.7 Awaiting detailed document

**RONAN will provide:** A more detailed Payload PIM and product-onboarding document covering the full workflow, so the implementation plan can be aligned and Samy can advise whether any part should be structured differently within Mercur 2.

---

<a name="13-ai-enrichment"></a>
## 13. AI product enrichment, translation and semantic layer

### 13.1 Overview

**RONAN's enrichment model:** Products imported from brand Shopify stores are automatically standardised, translated, enriched with semantic data, and made search-ready across all languages.

Cost estimate from Ronan: **~$0.80 per 1,000 listings** for full translation, semantic enrichment and product standardisation.

### 13.2 Three-stage enrichment pipeline

All three stages run as BullMQ jobs via `api-worker` with retry and failure handling.

**Stage 1 — Standardisation:**
- Take imported product information (which varies across brands)
- Convert into IRYSS standard product template
- Consistent structure across thousands of products from different brands
- Model: OpenAI GPT-4o-mini or equivalent

**Stage 2 — Translation:**
- Translate standardised product into all site languages (EN, FR, IT, ES, etc.)
- All translations generated and stored — not computed at runtime
- Translations stored in Payload and synced to Medusa product custom fields per locale

**Stage 3 — Semantic enrichment:**
- Generate semantic vector representation of the product
- Additional semantic attributes for stronger search matching
- Vectors indexed in OpenSearch for multilingual meaning-based discovery
- Structured output validated with Zod schemas

### 13.3 Pipeline control

```
┌─────────────────────────────────────────────┐
│  BullMQ Queue: enrich:product               │
│                                              │
│  Input: product_id, payload_record_id        │
│  Steps:                                      │
│    1. Fetch product data from Payload        │
│    2. Call OpenAI for standardisation         │
│    3. Validate output (Zod)                  │
│    4. Call OpenAI for all translations        │
│    5. Validate translations (Zod)            │
│    6. Call OpenAI for semantic vectors        │
│    7. Write enriched data to Payload         │
│    8. Update status: ENRICHED                │
│    9. Notify admin/brand for review          │
│                                              │
│  On failure: retry 3x, then status: FAILED   │
│  Rate limiting: per-API-key concurrency cap  │
└─────────────────────────────────────────────┘
```

### 13.4 Search integration

When a product is approved:
1. The full product record (including translations and semantic vectors) is pushed to Medusa
2. A subscriber triggers OpenSearch indexing
3. The OpenSearch document includes:
   - All language versions of title, description, attributes
   - Semantic vector fields for kNN search
   - Structured filter fields (category, brand, price range, attributes)
   - Storefront visibility flags

### 13.5 Heavy ingestion handling

**RONAN:** *"The main area that may require additional planning is heavy product ingestion, particularly where large brand catalogues are being imported."*

Managed through:
- Queue separation (import queue, enrichment queue, translation queue)
- Batching (process products in batches to manage API costs)
- Concurrency controls (max concurrent OpenAI calls)
- Rate limits (respect OpenAI rate limits, back off gracefully)
- Retry handling (exponential backoff)
- Workload scheduling (large imports can be scheduled for off-peak)

Open-source BullMQ core is sufficient for launch. **RONAN agrees.** Paid BullMQ product only if a clear technical requirement emerges.

---

<a name="14-integrations"></a>
## 14. Marketplace integrations — Stripe, Odoo, Sendcloud, email

**RONAN:** *"Stripe, Odoo, Sendcloud, email and notifications are all part of the marketplace build and need to be added to the technical plan."*

These providers already supply the underlying functionality. The marketplace work is to configure them correctly and connect the required data, events, statuses, identifiers and failure handling through the middleware.

### 14.1 Stripe Connect (payments)

Mercur 2 already provides the Stripe Connect marketplace foundation. IRYSS configuration work:

| Area | What needs to be configured |
|---|---|
| Payment capture | Payment methods, currency handling per storefront, 3D Secure |
| Commission | Platform commission rules per seller, per category, per storefront |
| Transfers | Split payment transfers to seller Stripe accounts |
| Refunds | Full and partial refund workflows, refund-to-original-payment |
| Reversals | Commission reversal on refund/return |
| Payouts | Payout schedules and thresholds per seller |
| Webhooks | `payment_intent.succeeded`, `charge.refunded`, `transfer.created`, `payout.paid`, etc. |
| Events to Odoo | Every financial event that Odoo needs for accounting (§14.2) |

**Connected accounts model:** Each brand/seller has a Stripe Connect account. The marketplace collects payment, deducts commission, and transfers the remainder.

**Multi-currency:** EUR (FR, IT, ES), GBP (UK) — Stripe handles currency at the payment level; the marketplace tracks which storefront/currency the order originated from.

### 14.2 Odoo (accounting and financial documents)

**RONAN's model:**
- Odoo Enterprise, $10/seat, accounting module
- EU accountant configures all Odoo accounting functionality
- Dev team only handles integration — building the correct middleware functions
- Odoo handles document generation (invoices, credit notes, accounting paperwork)
- Documents accessible to brands in the Brand Portal

**Integration architecture:**

```
Marketplace Events                    Odoo Enterprise
┌───────────────────┐                ┌───────────────────┐
│ Order confirmed   │───────────────>│ Create invoice    │
│ Payment captured  │───────────────>│ Record payment    │
│ Commission taken  │───────────────>│ Commission entry  │
│ Transfer to brand │───────────────>│ Vendor payment    │
│ Refund issued     │───────────────>│ Credit note       │
│ Return completed  │───────────────>│ Return accounting │
└───────────────────┘                └───────────────────┘
         ▲                                    │
         │                                    │
         │         ┌──────────────────┐       │
         └─────────│ Status & refs    │<──────┘
                   │ Invoice numbers  │
                   │ Document URLs    │
                   │ Accounting state │
                   └──────────────────┘
```

**What the middleware must send to Odoo:**
- Order details (line items, quantities, prices, tax)
- Payment confirmation with Stripe references
- Commission/transfer amounts
- Refund details with original order references
- Return/cancellation information
- Storefront/country context (for correct tax and accounting rules)
- Brand/seller identification

**What Odoo returns:**
- Invoice numbers and document references
- Credit note references
- Accounting status updates
- Generated document URLs (for Brand Portal access)

**Brand Portal integration:**
- Brands see their accounting documents in the Brand Portal
- Invoices, credit notes, statements generated by Odoo
- Real-time status of payments and transfers
- This automates accounting document access that would otherwise require manual distribution

**What Samy's team does NOT do:**
- Set up chart of accounts, tax rules, fiscal positions in Odoo
- Configure accounting workflows within Odoo
- EU VAT, reverse-charge, or country-specific accounting rules

The EU accountant handles all Odoo accounting configuration. Samy's team builds the integration layer that sends the right events with the right data.

**RONAN will provide:** More detailed Odoo implementation document with exact event payloads and workflow specifications.

### 14.3 Sendcloud (shipping)

**RONAN's model:** Sendcloud is the operational shipping layer for the marketplace.

| Sendcloud handles | Marketplace provides |
|---|---|
| Carrier services and rates | Order, warehouse, fulfilment data |
| Shipping label generation | Customer address and contact |
| Tracking numbers and status | Return authorisation data |
| Shipping documentation | Package dimensions and weight |
| Returns processing | Shipping method selection |
| Carrier service selection | |

**Integration points:**

```
Order Confirmed → Fulfilment Created → Sendcloud: Create Shipment
                                        │
                                        ├── Label URL → stored in order
                                        ├── Tracking number → stored in order
                                        └── Tracking events (webhook) → order status updates

Return Requested → Return Authorised → Sendcloud: Create Return Shipment
                                        │
                                        ├── Return label → provided to customer
                                        └── Return tracking → order status updates
```

**Portal surfacing:**
- Admin Portal: fulfilment management, shipping status, label downloads
- Brand Portal: order shipping status, fulfilment actions
- Customer: tracking information, return labels
- Reseller Portal: order shipping status (future phase)

**RONAN will provide:** More detailed Sendcloud implementation document.

### 14.4 Email and notifications

**RONAN:** *"The email and notification layer is intended to use confirmed marketplace events to trigger transactional emails, operational alerts and the relevant in-platform notifications."*

| Channel | Purpose | Triggers |
|---|---|---|
| **Transactional email** | Order confirmations, shipping updates, refund notices, account actions | Confirmed marketplace events (not browser events) |
| **Operational alerts** | Failed payments, sync errors, inventory warnings, approval needed | System events |
| **In-platform notifications** | Portal notifications for brands, resellers, admins | User-relevant events |

**Architecture:**
- Events come from confirmed backend state (not browser tracking)
- Routed through the middleware notification module
- Email provider selection: **DECISION PENDING** — Ronan to confirm
- Templates managed per storefront/language (use translations from enrichment)
- Consent-aware: honour user preferences

**Recipients by event:**

| Event | Customer | Brand | Admin |
|---|---|---|---|
| Order confirmed | Y | Y | — |
| Payment captured | Y | Y | — |
| Shipped | Y | Y | — |
| Delivered | Y | — | — |
| Return requested | — | Y | — |
| Refund issued | Y | Y | — |
| Product approved | — | Y | Y |
| Product rejected | — | Y | Y |
| Low stock | — | Y | Y |
| New brand application | — | — | Y |
| New reseller application | — | — | Y |

---

<a name="15-content-platform"></a>
## 15. Content Platform (D18 — V1 scope)

NestJS on Node 20, own Postgres, own BullMQ namespace, own Cloud Run services. **V1 is the YouTube-style content library and content-sharing system.**

### 15.1 V1 Responsibilities

Channels (brand + IRYSS), videos, playlists, collections, publishing state, visibility and download rules, product-linked media, playback data, analytics, Bunny asset references.

It stores the **product reference**; the product itself stays in the marketplace.

### 15.2 VOD pipeline

```
Brand Portal ──TUS resumable──> Bunny Stream
                                    │ transcode
                                    ▼
                          ABR HLS + thumbnails + previews
                                    │
   Video.js player <──token auth──── vod.iryss.com

Bunny webhook ──> content-api ──> content-worker
                                    ├─ update video status
                                    ├─ OpenSearch index
                                    └─ PostHog events
```

Lifecycle: `Draft → Uploading → Processing → Ready → Published`, plus `Failed` and `Unpublished`.

Player: **Video.js** — adaptive playback, thumbnails, chapters, playback speed, hover-scrub previews, product-link interface, up-next.

### 15.3 Portal integration

**RONAN:** *"The Content Platform will be a separate technical application, but its user experience is intended to sit inside the Admin, Brand and Reseller Portals."*

During the marketplace build:
- Reserve navigation space in Admin, Brand and Reseller portals for Content Platform features
- Design the portal areas and user journeys so the Content Platform connects into existing experiences
- When the Content Platform application is built, it plugs into the pre-planned portal spaces

### 15.4 Security

Playback happens through IRYSS-controlled pages. Protected VOD uses **Bunny tokenized playback + domain restrictions**.

### 15.5 Analytics

PostHog events: `video_viewed`, `video_watch_progress`, `video_completed`, `video_product_clicked`, `video_saved`, `video_downloaded`, `video_shared`.

### 15.6 Scope — revised from v1

| v1 plan | v2 plan (this document) |
|---|---|
| V1 with shoppable live commerce | **V1: YouTube-style content library only** |
| 6–7 weeks with 3–4 developers | **3–4 weeks with 3 developers** (revised back to original estimate without live) |
| WebSocket gateway, live chat, moderation | **Deferred to future phase** |
| Cloudflare Stream Live integration | **Deferred to future phase** |
| content-ws Cloud Run service | **Deferred to future phase** |

---

<a name="16-connector"></a>
## 16. Shopify Connector

NestJS, own Postgres, own BullMQ namespace, plus the embedded Shopify app. Two directions, one application.

### 16.0 The embedded app stack

> **CORRECTION to *Connector* §7 and §8.** Use `shopify-app-template-react-router`. Stack: React Router 7+, TypeScript, Vite, Prisma session storage, App Bridge, Polaris Web Components.

### 16.1 Connector's role in the product flow

**RONAN's product onboarding model:** The Shopify Connector is the entry point for all brand products entering IRYSS.

```
Brand's Shopify Store
        │
        ▼
Shopify Embedded App (shopify.iryss.com)
   - Brand installs app
   - OAuth authentication
   - Catalogue selection / full sync
        │
        ▼
Connector Backend (connect.iryss.com)
   - Shopify GraphQL Bulk Operations
   - Product data extraction
   - Image/media retrieval
        │
        ▼
IRYSS Marketplace Middleware (api.iryss.com)
   - Validation, permissions, storefront context
   - Routes to Payload PIM
        │
        ▼
Payload PIM → AI Enrichment → Review → Marketplace
(see §12.2 for full flow)
```

### 16.2 Boundaries

- Marketplace reads/writes go **only** through `api.iryss.com`
- Product video **retrieved** from Content Platform; Connector stores no video
- Shopify-specific code stays inside the Shopify integration layer
- Connector stores only: connections, mappings, sync history, retry state, webhook state, errors

### 16.3 Brand import

Access code → Shopify OAuth → GraphQL Bulk Operations catalogue pull → SKU match against marketplace → create/link → category mapping → **trigger Payload PIM onboarding → AI enrichment** → brand correction → Admin approval → live.

### 16.4 Reseller export

Browse approved catalogue → select → set retail markup → push as **native Shopify products** → bulk mutations.

Hard rules:
- No IRYSS branding on pushed products
- Never touch the reseller's theme/homepage/layout/navigation
- Push lands fully formed or fails cleanly
- Disconnect **unpublishes**, never deletes

**Ongoing synchronisation:** The Connector maintains product information, media, live stock and order synchronisation across connected stores.

### 16.5 Reliability

- Idempotency everywhere, keyed on webhook ID
- Webhook endpoint: verify signature → queue → return 200
- Per-store queue scheduling
- Shopify compliance webhooks implemented

### 16.6 Launch dependency

**RONAN is open to pulling initial Connector work into the marketplace phase** where needed for the product flow. The decision on scope is made in Week 1.

At minimum, the Reseller Portal ships at marketplace launch with Shopify connection UI present but disabled ("coming soon"). The reseller data model, allocation workflow and product-selection flows are built in full.

**RONAN:** *"I am open to including any initial Connector work that you believe is necessary during the marketplace build."*

### 16.7 Application framework

**RONAN:** *"When the Connector application is built, our intention is to use Shopify's current supported application framework and authentication model."* The React Router template (§16.0) satisfies this.

---

<a name="17-contracts"></a>
## 17. Shared contracts and event taxonomy

### 17.1 `packages/contracts`

Single published package (§4.3) holding:
- TypeScript types for every cross-service payload
- Zod schemas for all validated boundaries
- The event taxonomy (§17.3)
- Cache-key builders that enforce storefront-context inclusion
- **Integration event schemas** for Odoo, Sendcloud, email (new in v2)

### 17.2 Contract-first working

Weeks 1–2 lock data models, API contracts and routing. This is what makes multiple developers parallel in Month 1.

### 17.3 Event taxonomy

**Marketplace:**
`product_viewed`, `product_saved`, `search_performed`, `filter_applied`, `brand_viewed`, `add_to_cart`, `checkout_started`, `order_completed`, `order_cancelled`, `refund_issued`, `recommendation_clicked`, `brand_portal_product_uploaded`, `reseller_product_selected`

**Financial (new — for Odoo):**
`payment_captured`, `commission_calculated`, `transfer_initiated`, `transfer_completed`, `refund_processed`, `credit_note_created`, `invoice_generated`

**Shipping (new — for Sendcloud):**
`fulfilment_created`, `shipment_created`, `shipment_label_generated`, `shipment_tracking_updated`, `shipment_delivered`, `return_requested`, `return_shipment_created`, `return_received`

**Notifications (new):**
`notification_email_queued`, `notification_email_sent`, `notification_in_app_created`, `notification_alert_triggered`

**Content:**
`video_viewed`, `video_watch_progress`, `video_completed`, `video_product_clicked`, `video_saved`, `video_downloaded`, `video_shared`

**Connector:**
`connector_store_connected`, `connector_import_started`, `connector_import_completed`, `connector_product_pushed`, `connector_sync_failed`

**Product onboarding (new):**
`product_imported`, `product_needs_info`, `product_info_completed`, `product_enrichment_started`, `product_enrichment_completed`, `product_enrichment_failed`, `product_review_started`, `product_approved`, `product_rejected`, `product_published`

### 17.4 Identity convention

Anonymous visitor ID, session ID, logged-in customer ID, B2B account/user ID, brand user ID, reseller user ID, portal user ID — with consent-aware state attached at event level.

### 17.5 Consent and privacy

Built alongside tracking in Month 1–2, never retrofitted. Consent state travels in the JWT so server-side event routing can honour it without a lookup.

---

<a name="18-tracking"></a>
## 18. Server-side tracking and analytics (D15 — from day one)

### 18.1 Why from day one

**RONAN's reasoning (reversing J1 from v1):**

1. **Paid acquisition at launch** — backend conversion events needed for Google and Meta optimisation from day one
2. **Reliable conversion data** — completed payments, confirmed orders, cancellations and refunds should come from backend systems, not browser tracking that may be blocked
3. **Correct attribution** — transaction values, currencies, tax treatment, sales channel and country-storefront context taken from marketplace records
4. **One controlled layer** — consent handling, event validation, browser/server deduplication, routing to advertising platforms
5. **Better mobile performance** — less third-party tracking in storefronts
6. **Easier to extend** — adding advertising destinations later without altering customer-facing applications
7. **Building it now saves rework** — introducing after launch requires revisiting checkout, payment, refund, consent flows

### 18.2 Architecture

```
B2C / B2B Storefronts                    Backend Systems
┌─────────────────────┐                  ┌─────────────────────┐
│ Browser-side events  │                  │ Order confirmed     │
│ (pageview, click,   │                  │ Payment captured    │
│  add_to_cart)       │                  │ Refund issued       │
│                     │                  │ Cancellation        │
└─────────┬───────────┘                  └─────────┬───────────┘
          │                                        │
          ▼                                        ▼
┌─────────────────────────────────────────────────────────────┐
│  Server-Side GTM (t.iryss.com)                              │
│                                                              │
│  ► Consent enforcement                                       │
│  ► Event validation                                          │
│  ► Browser + server deduplication                            │
│  ► Identity stitching (anonymous → logged-in)                │
│  ► Storefront context enrichment                             │
│                                                              │
│  Routes to:                                                  │
│  ├── Google Ads (enhanced conversions)                       │
│  ├── Meta CAPI (Conversions API)                             │
│  ├── Google Analytics 4                                      │
│  └── Future advertising destinations                         │
└─────────────────────────────────────────────────────────────┘

PostHog (separate, complementary)
┌─────────────────────────────────────────────────────────────┐
│  Product analytics and behavioural tracking                  │
│  ► Feature flags                                             │
│  ► Session recording                                         │
│  ► Funnel analysis                                           │
│  ► Retention and cohort analysis                             │
└─────────────────────────────────────────────────────────────┘
```

### 18.3 Key conversion events from backend

These events come from systems that can **confirm** the action occurred:

| Event | Source | Data |
|---|---|---|
| `purchase` | Payment webhook confirmation | Order value, currency, tax, items, storefront, channel |
| `refund` | Refund workflow completion | Refund amount, original order ref, reason |
| `begin_checkout` | Checkout creation | Cart value, item count |
| `add_to_cart` | Cart API | Product, variant, quantity, value |

### 18.4 Hosting decision

**RONAN:** *"Running server-side GTM on Google Cloud Run may become expensive... we could compare it with Stape, Hetzner or another suitable lower-cost container option."*

Options to evaluate:
1. **Cloud Run** — simplest, same infrastructure, ~$90–150/month at minimum (2 always-on instances)
2. **Stape** — managed sGTM hosting, potentially cheaper at volume, less operational overhead
3. **Hetzner** — self-managed container, cheapest at scale, more operational work

**Recommendation:** Start with **Stape** for launch (low operational overhead, predictable pricing, purpose-built for sGTM). Move to self-hosted only if volume justifies the operational investment.

The subdomain (`t.iryss.com`), consent plumbing and event taxonomy are built regardless of hosting choice.

---

<a name="19-infrastructure"></a>
## 19. Infrastructure, environments and CI/CD

### 19.1 Environments

| Env | GCP project | Domain | Notes |
|---|---|---|---|
| dev | `iryss-dev` | `*.dev.iryss.com` | Shared Cloud SQL instance, small OpenSearch |
| staging | `iryss-staging` | `*.stg.iryss.com` | Production-shaped, reduced capacity |
| production | `iryss-prod` | `*.iryss.com` + `iryssbrands.com` + `iryssretail.com` | Full topology |

Separate GCP projects for IAM boundaries and cost attribution.

### 19.2 Terraform

Manages Cloud Run services, Cloud SQL, load balancers, IAM, service accounts, Secret Manager, Artifact Registry, DNS, networking and monitoring.

### 19.3 CI/CD

```
GitHub Actions
  ├─ install (pnpm, cached)
  ├─ lint · typecheck · unit tests (turbo, affected-only)
  ├─ publish @iryss/contracts on version change
  ├─ integration tests
  ├─ Playwright E2E on critical paths
  ├─ dependency + security scan
  ├─ docker build per affected app
  ├─ push → Google Artifact Registry
  └─ deploy → Cloud Run  (prod requires manual approval)
```

**Medusa Dockerfile specifics:**
- Run `medusa build` and nested install **in the image build stage**
- `predeploy` runs `medusa db:migrate`

### 19.4 Secrets

Google Secret Manager for: database credentials, Medusa/Mercur secrets, Payload secrets, OpenSearch credentials, Bunny keys, PostHog keys, email provider keys, sGTM secrets, Shopify app credentials, **Stripe Connect keys**, **Odoo API credentials**, **Sendcloud API credentials**, **OpenAI API keys**, webhook signing secrets, JWT signing keys.

Least-privilege service accounts per Cloud Run service.

---

<a name="20-observability"></a>
## 20. Observability and security

### 20.1 Observability

Google Cloud Logging, Cloud Monitoring, plus **Sentry** for frontend and backend error tracking.

Alerting from day one on:
- Worker queue depth and failed jobs
- OpenSearch indexing failures
- Payment webhook failures
- **Stripe Connect transfer failures**
- **Odoo sync failures**
- **Sendcloud API failures**
- **Product enrichment failures** (AI pipeline)
- Connector sync failures
- API latency
- Cloud Run instance health
- Database connection saturation
- Failed deployments

### 20.2 Security

- Permissions enforced at the backend/API layer
- Controlled CORS origins per domain (including cross-domain for `iryssbrands.com` and `iryssretail.com`)
- Rate limiting at Cloudflare and in-application
- Webhook signature validation on every inbound webhook (Shopify, Bunny, payment provider, **Sendcloud**, **Odoo**)
- Admin action audit logging
- Cloudflare Access or IP allowlist on `admin.iryss.com`
- Least-privilege service accounts
- Secrets via Secret Manager only

---

<a name="21-middleware-integrations"></a>
## 21. Middleware and plug-and-play integration framework

### 21.1 The requirement

**RONAN:** *"We also want the middleware and event structure designed so that new providers and applications can be connected through a controlled, reusable integration framework rather than requiring a separate hard-coded integration each time."*

### 21.2 Architecture

```
Mercur/Medusa Events
        │
        ▼
IRYSS Middleware (packages/api/src/api/middlewares/)
        │
        ├── Secure inbound routes
        ├── Seller and storefront context
        ├── Asynchronous event handling
        │
        ▼
Integration Bridge (integration-bridge.ts)
        │
        ├── Direct integrations (Stripe, core Medusa modules)
        │   └── Performance-critical, hot commerce paths
        │
        └── Managed integration layer (Activepieces or equivalent)
            ├── Odoo accounting workflows
            ├── Sendcloud shipping workflows
            ├── Email provider routing
            ├── Klaviyo marketing automation
            └── Future provider connections
```

### 21.3 Activepieces or equivalent

**RONAN's current option:** Activepieces — self-hosted, can be used internally to manage mappings and workflows for providers.

**Purpose:** Give the IRYSS technical team a faster internal way to connect, change and manage providers without repeatedly altering the core Mercur codebase.

**Requirements for the integration layer:**
- Self-hostable (runs on IRYSS infrastructure)
- Visual workflow mapping for non-critical integration paths
- Secure inbound routes with authentication
- Consistent seller and storefront context passed through
- Asynchronous event handling
- Reusable bridge between Mercur events and the integration workflows

**What stays as direct integration (NOT through the visual layer):**
- Stripe Connect (payment capture, transfers — latency-sensitive)
- Core Medusa modules
- Authentication flows
- Any hot commerce path where an additional network hop is unacceptable

**What routes through the managed layer:**
- Odoo accounting event forwarding
- Sendcloud shipping event forwarding
- Email/notification dispatch
- Klaviyo and future marketing automation
- Future ERP connections

**RONAN:** *"We want to extend the existing Mercur architecture rather than create a parallel integration system."*

**If a better alternative to Activepieces exists** that fits the architecture more cleanly, Ronan is open to it. Evaluate in Week 1.

### 21.4 Event structure requirements

All integration events must carry:
- Seller/brand identifier
- Storefront context
- Relevant commerce data (order, product, payment references)
- Idempotency key
- Timestamp
- Correlation ID for tracing

---

<a name="22-design"></a>
## 22. Design and frontend implementation methodology

This section is derived from Ronan's UI/UX Design and Frontend Implementation document.

### 22.1 Central principle

**Figma defines the approved IRYSS experience. Mercur retains the working application behaviour. The implementation brings the two together without rebuilding working functionality unnecessarily.**

### 22.2 Sources

| Source | Purpose |
|---|---|
| **Mercur B2C Figma file** | Design foundation for both B2C and B2B marketplaces |
| **Live Mercur Admin application** | Working foundation for Admin Portal |
| **Live Mercur Vendor application** | Working foundation for Brand Portal |
| **Approved IRYSS specifications** | Required application scope |

### 22.3 Establishing the Mercur baseline

Before design and development continue, Samy must confirm:
- The exact Mercur release or code revision
- Installed Mercur and Medusa packages
- Admin and Vendor applications
- B2C storefront
- Dependency lockfile
- First IRYSS repository commit

Once confirmed, this becomes the fixed reference. Any later Mercur upgrade must be deliberate and reviewed.

### 22.4 Parallel workflow — Islam (design) and Samy (technical)

Design and technical preparation proceed at the same time:

**Islam (design):**
1. Create IRYSS working copy of Mercur B2C Figma file
2. Confirm what is current, useful and missing
3. Establish one shared marketplace component library for B2C and B2B
4. Review live Admin and Vendor applications
5. Establish shared IRYSS visual foundation
6. Begin B2C marketplace design
7. Prepare B2B screens from same shared system
8. Begin common portal structure
9. Begin new Admin structures (marketplace-context switcher, global analytics)
10. Review and organise useful imported portal components

**Samy (technical):**
1. Establish and pin the exact Mercur project
2. Confirm usage terms of Mercur B2C Figma file
3. Run Admin and Vendor applications with representative data
4. Provide Islam access to live applications
5. Prepare first high-use portal components in Storybook
6. Test story.to.design on representative component set
7. Maintain shared component classification
8. Answer behaviour and feasibility questions

### 22.5 New IRYSS Admin structures

These do not exist in Mercur and must be designed as new experiences:
- **Marketplace-context switcher** — navigate between global view and specific marketplace/country contexts
- **Global combined-analytics view** — information from different marketplace environments in one overview
- **B2C and B2B channel views** within admin

These begin as new Figma designs immediately — no dependency on Storybook preparation.

### 22.6 Storybook

Storybook provides a visual catalogue of real coded portal components for Islam's reference and Samy's implementation verification.

Focus on reusable components and their important states. Complete pages only when reviewing the whole page provides clear benefit.

### 22.7 story.to.design — component import testing

Test before broad use. First test must include:
- Simple components (buttons, form controls)
- Complex components (navigation, modals/side panels)
- **Data tables** (the most important stress test — rows, columns, filters, actions, loading/empty states)
- Responsive components

Each import judged by whether it genuinely saves time:
- Clean → use directly
- Useful but needs cleanup → clean and add to design system
- Structurally helpful but hard to maintain → keep as reference
- Poor → rebuild in Figma

### 22.8 Shared component classification

| Classification | Meaning |
|---|---|
| Mercur Inherited | Existing component retained as-is |
| IRYSS-Styled Mercur | Working behaviour kept, IRYSS visual design applied |
| IRYSS-Extended Mercur | Foundation kept, additional IRYSS information/actions/states added |
| New IRYSS Component | No Mercur equivalent, designed and built from scratch |

### 22.9 IRYSS Figma design system

One organised system, not a collection of copied files:
- Shared marketplace components (used by both B2C and B2B)
- B2C screens and journeys
- B2B screens and journeys
- Shared portal components
- Admin Portal work
- Brand Portal work
- Reseller Portal work
- Approval statuses on every screen

B2C and B2B use **one common marketplace component library**. B2B-specific components added only where the trade experience genuinely requires them.

### 22.10 B2C and B2B marketplace design

The Mercur B2C Figma file is adapted for IRYSS B2C, then reused for B2B. Both share the same visual identity, navigation, product discovery, media presentation, layout and responsive behaviour. B2B adds trade-specific elements only where needed.

### 22.11 Portal design approach

- **Admin Portal:** existing Mercur pages restyled/extended + new IRYSS structures
- **Brand Portal:** Mercur Vendor application extended to full brand experience
- **Reseller Portal:** custom, but reuses shared portal design system

### 22.12 Implementation with Claude Code

Claude Code works on defined components, screens or journeys — not broad "rebuild this portal" instructions.

**Standing rule for every Claude Code task:**

> Implement the approved IRYSS design by updating, extending or recomposing the existing Mercur components. Preserve the current pages, authentication, user sessions, permissions, data connections, forms, validation and business behaviour unless the task specifically authorises a functional change.

For each task, Samy provides:
- Approved Figma design
- Existing Mercur page/component (if any)
- Relevant Storybook reference
- Required responsive behaviour
- Important states
- What must remain unchanged

### 22.13 Representative implementation pilot

Before broad use, one pilot must pass through the complete workflow:
1. Adapting an existing Mercur component/screen (e.g., operational table)
2. Implementing a new IRYSS element (e.g., marketplace-context switcher)

The pilot confirms whether the toolchain (story.to.design, Code Connect, Figma MCP, Claude Code) actually saves time on the real project.

### 22.14 Code Connect and Figma Dev Mode MCP

- **Storybook Connect** — links Figma component to live Storybook example (comparison)
- **Code Connect** — links Figma component to project code (implementation guidance)
- **Figma Dev Mode MCP** — allows Claude Code to read structured design information

These are prioritised for shared, frequently reused components. One-off screens don't need additional mapping.

IRYSS must not depend on MCP as the only implementation route. If unavailable, normal Figma inspection, Storybook, and written requirements are sufficient.

### 22.15 Validation

A screen is not accepted because it resembles the Figma design. Both must be confirmed:
- **Samy:** Mercur behaviour, permissions, forms, data handling preserved
- **Islam:** Live result matches approved visual and interaction design

Storybook and Chromatic for visual regression across shared components.

### 22.16 Alignment reviews

**End of Week 1:** Confirm Mercur baseline running, B2C Figma available, live portal access working, first Storybook components useful, story.to.design trial direction clear.

**Before broad implementation:** Shared Figma foundations approved, representative pilot passed, Figma-to-code connections genuinely useful.

---

<a name="23-public-journeys"></a>
## 23. Public brand and reseller acquisition journeys

### 23.1 Requirement

**RONAN:** *"The Brand and Reseller applications are also intended to include public acquisition and onboarding experiences, not only authenticated portals."*

### 23.2 Brand acquisition (`iryssbrands.com`)

```
iryssbrands.com
├── / (public landing)
│   ├── Brand value proposition
│   ├── How IRYSS works for brands
│   ├── Application/onboarding form
│   └── Sign In → /auth/login → Brand Portal
│
├── /apply (onboarding journey)
│   ├── Business information
│   ├── Product category selection
│   ├── Shopify store connection (if available)
│   └── Application submission
│
└── /portal/* (authenticated Brand Portal)
    ├── Dashboard
    ├── Products / Offers
    ├── Orders
    ├── Accounting (Odoo documents)
    ├── Content (reserved for Content Platform)
    ├── Analytics
    └── Settings
```

### 23.3 Reseller acquisition (`iryssretail.com`)

```
iryssretail.com
├── / (public landing)
│   ├── Reseller value proposition
│   ├── How IRYSS works for resellers
│   ├── Application/onboarding form
│   └── Sign In → /auth/login → Reseller Portal
│
├── /apply (onboarding journey)
│   ├── Business information
│   ├── Shopify store details
│   ├── Product category interests
│   └── Application submission
│
└── /portal/* (authenticated Reseller Portal)
    ├── Dashboard
    ├── Product Discovery & Selection
    ├── Approved Content & Media
    ├── Shopify Connection (disabled until Connector ships)
    ├── Orders & Stock
    ├── Analytics
    └── Settings
```

### 23.4 Implementation approach

**Recommendation (for Ronan's feedback):** Public pages and authenticated portal within the same deployment. The app handles the split between public and authenticated routes. This avoids maintaining two separate deployments per portal and simplifies the sign-in flow.

The alternative — separate public site and authenticated app — adds deployment complexity without meaningful benefit, since the sign-in flow already requires redirecting between them.

### 23.5 CMS-driven content

Public landing pages and onboarding journey content should be managed through Payload CMS, allowing marketing to update messaging without code changes.

---

<a name="24-sequencing"></a>
## 24. Build sequencing and team

### 24.1 Shape (D6 — marketplace first, then parallel)

```
M1    M2    M3    M4    M5     M6     M7
──────────────────────────────────────────────
MARKETPLACE  ██████████████████████  (7 devs)
                    controlled launch ▲
                        CONTENT (V1) ████  (3)
                        CONNECTOR    █████  (4)
                        (parallel)
```

### 24.2 Marketplace — 7 developers

| Dev | Ownership | v2 additions |
|---|---|---|
| 1 | Technical lead / architect | + Odoo/Sendcloud/email integration architecture, Activepieces evaluation, Bun evaluation |
| 2 | Mercur/Medusa commerce core — regions, sales channels, seller/brand model, catalogue, pricing, inventory, cart/checkout/orders, returns | + offers model (§10.2), multi-storefront Mercur 2 features |
| 3 | Middleware — storefront context, RBAC, validation, event routing, **integration bridge**, cache scoping | + subdirectory resolution, cross-domain auth, integration event routing |
| 4 | B2C + B2B storefronts | + subdirectory i18n, ISR with pre-translated content, SEO (hreflang, sitemaps) |
| 5 | Admin Portal | + marketplace-context switcher, global analytics view, country drill-down |
| 6 | Brand Portal + Reseller Portal | + public acquisition pages, cross-domain auth, Odoo document access, Storybook |
| 7 | Search (OpenSearch + semantic), enrichment (AI pipeline), media, **sGTM setup**, workers, test automation | + semantic vectors, translation pipeline, sGTM configuration |

### 24.3 Later phases (developed in parallel)

- **Content Platform V1** — 3 devs, **3–4 weeks** (YouTube-style library, no live streaming)
- **Connector** — 4 devs as two pairs, **4–4.5 weeks** (excludes Shopify app-review time)

### 24.4 Honest total

| Phase | Duration |
|---|---|
| Marketplace to controlled launch | ~4 months |
| Marketplace stabilised commercial release | ~5 months |
| Content Platform V1 (parallel) | +3–4 weeks |
| Shopify Connector (parallel) | +4–4.5 weeks |
| **Full platform (current scope)** | **~6–6.5 months** |

**Reduction from v1:** ~1 month shorter because live streaming is deferred. The marketplace timeline is unchanged; the Content Platform is faster without the WebSocket gateway, live chat, moderation and Cloudflare Stream integration.

### 24.5 Future phases (not in current scope, not estimated)

- Live shoppable commerce (requires separate scoping when business model and user journeys are defined)
- Future data lake / advanced analytics
- Additional marketplace integrations

---

<a name="25-week-1"></a>
## 25. Week 1 critical path

### 25.1 Mercur / Medusa spike

- [ ] `create-mercur-app` scaffold with latest Mercur 2; confirm generated Turborepo layout
- [ ] **Evaluate Bun deployment** — test compatibility with medusa build, nested install, Turborepo, Cloud Run (§2.7)
- [ ] Add one IRYSS app and one shared package; confirm `turbo` tasks work
- [ ] **Prove the `.medusa/server` contracts strategy** — publish to Artifact Registry, consume, deploy, confirm production resolution
- [ ] Pull two blocks; confirm re-pull diff is readable
- [ ] **Model the 2.2.0 offers / master-product relationship** — confirm it supports brand and reseller workflows
- [ ] **Re-verify issue #909** — all four assertions, forced inventory conflict
- [ ] Regions, sales channels, **subdirectory-based storefront metadata**, catalogue visibility per storefront
- [ ] **Verify Mercur 2 native multi-storefront support** — attend Mercur team demo, identify gaps for IRYSS model
- [ ] Admin panel, vendor panel and storefront extension methods
- [ ] Workflow/subscriber extension pattern, custom fields, RBAC extension approach
- [ ] OpenSearch indexing hook points
- [ ] **Subdirectory routing** — confirm Next.js middleware correctly resolves country from path prefix

### 25.2 Infrastructure

- [ ] Three GCP projects, Terraform skeleton
- [ ] Cloud SQL, Valkey, OpenSearch provisioned
- [ ] Artifact Registry (docker **and npm** repositories)
- [ ] Cloudflare zones: `iryss.com`, `iryssbrands.com`, `iryssretail.com` — DNS records per §6
- [ ] **SSL termination configured** — CF proxied → Full (strict) → GCLB
- [ ] **Cloud Run ingress** set to "Internal and Cloud Load Balancing" on every service
- [ ] First Cloud Run deploy of `api-server` + `api-worker`; **measure real cold start**
- [ ] Verify worker CPU-always-allocated processes scheduled jobs
- [ ] Configure all five Medusa Redis purposes — `redisUrl` + cache, event bus, workflow engine, locking
- [ ] Cloud SQL regional HA + PITR on production instance; separate `iryss_payload` database

### 25.3 External dependencies — start now

- [ ] Shopify Partner account + app registration (app review is externally gated)
- [ ] **Stripe Connect** setup and sandbox configuration
- [ ] **Odoo Enterprise** account — confirm API access, sandbox environment
- [ ] **Sendcloud** account and API access
- [ ] Email provider selection and account
- [ ] PostHog, Bunny (storage + CDN + Stream)
- [ ] Consent provider selection
- [ ] **OpenAI API** key and rate-limit tier for enrichment pipeline
- [ ] **Activepieces** (or equivalent) evaluation — self-hosted trial

### 25.4 Server-side tracking

- [ ] **sGTM hosting decision** — evaluate Stape vs Cloud Run vs Hetzner
- [ ] `t.iryss.com` DNS configured
- [ ] Base sGTM container deployed
- [ ] Google Ads and Meta CAPI destinations configured in sandbox
- [ ] Consent plumbing integrated with event taxonomy

### 25.5 Contracts

- [ ] `packages/contracts` v0.1.0 published
- [ ] Storefront context, RBAC claims, product, order, **financial, shipping, notification** contracts drafted
- [ ] **Integration event schemas** for Odoo, Sendcloud, email
- [ ] Event taxonomy agreed (§17.3)
- [ ] Mock middleware responses available for parallel development

### 25.6 Design preparation

- [ ] Confirm Mercur B2C Figma file usage terms
- [ ] Mercur Admin and Vendor applications running with representative data
- [ ] Islam has access to live applications
- [ ] B2C Figma file working copy created
- [ ] First high-use portal components in Storybook
- [ ] story.to.design trial on representative components
- [ ] Alignment review at end of Week 1

### 25.7 Mercur team call

- [ ] Schedule demo of Mercur 2 dashboards
- [ ] Understand new multi-storefront features
- [ ] Clarify any gaps for IRYSS model
- [ ] Ask about Bun deployment experience and any gotchas

---

<a name="26-risks"></a>
## 26. Risk register

| # | Risk | Impact | Mitigation |
|---|---|---|---|
| R1 | `.medusa/server` nested install breaks shared contracts | **Critical** | Publish `@iryss/contracts` (§4.3). Prove in Week 1. |
| R2 | Mercur #909 not actually fixed in pinned version | **Critical** | Week-1 verification with forced inventory conflict. |
| R3 | 2.2.0 offers model doesn't fit IRYSS brand/reseller workflows | **High** | Week-1 modelling spike. |
| R4 | Storefront leakage between markets (subdirectory model) | **High** | Fail-closed context resolution, context in every cache key, pairwise leakage suite. Subdirectory model requires careful path-prefix validation. |
| R5 | Cross-domain auth complexity (iryssbrands.com, iryssretail.com) | **High** | Token-based auth flow with OAuth redirects. Test cross-domain login in Week 1. |
| R6 | DB connection exhaustion from Cloud Run fan-out | **High** | Small pools, max-instances caps, documented arithmetic, PgBouncer as remedy. |
| R7 | Shopify app review delays Connector launch | **Medium** | Register app in Week 1, months before needed. |
| R8 | External provider setup becomes critical path | **High** | All initiated Week 1. |
| R9 | Contract drift between applications | **Medium** | Single published package, semver, CI gate. |
| R10 | Blocks diverge from upstream | **Medium** | Keep block files identifiable; review diffs on re-pull. |
| R11 | Always-on worker services cost more than budget | **Medium** | Budget explicitly for min-instances=1 + no-CPU-throttling. |
| R12 | Direct `*.run.app` access bypasses all controls | **High** | Cloud Run ingress locked to LB on every service. |
| R13 | Payload and Medusa migrations collide | **High** | Separate databases from day one. |
| R14 | `@medusajs/locking-redis` omitted | **High** | Configure all five Redis purposes in Week 1. |
| R15 | **AI enrichment pipeline cost at scale** | **Medium** | Monitor OpenAI spend per batch. Rate limit concurrent enrichment jobs. Start with GPT-4o-mini for cost efficiency. Budget based on expected catalogue size. |
| R16 | **Odoo integration complexity** | **Medium** | EU accountant configures Odoo; dev team focuses on event integration only. Start with core events (order, payment, refund) and expand. |
| R17 | **Sendcloud API reliability** | **Medium** | Async event handling with retry. Fallback manual process for label generation. |
| R18 | **Translation quality at scale** | **Medium** | Human review sample of AI translations for each language. Brand-specific terminology preserved. Correction workflow in Payload PIM. |
| R19 | **Bun compatibility with Medusa build pipeline** | **Medium** | Evaluate in Week 1 before committing. Node 20 + pnpm is the safe fallback. |
| R20 | **Three Cloudflare zones add operational overhead** | **Low** | Terraform manages all three zones. SSL, WAF and cache rules templated. |
| R21 | **sGTM cost at high volume** | **Medium** | Start with Stape. Monitor cost per event. Move to self-hosted if needed. |
| R22 | **ISR cache invalidation complexity** | **Medium** | Webhook-based revalidation from Medusa product update events. Test with multi-language product updates. |

---

<a name="27-open-items"></a>
## 27. Open items

Every **VERIFY** in this document, collected:

1. Medusa v2 cold-start time on Cloud Run (§2.6b)
2. Native-dependency rebuild inside `.medusa/server` (§2.6c)
3. Bunny Stream custom hostname for `vod.iryss.com` (§6.2)
4. Shopify bulk operation concurrency limits on active API version (§16.3)
5. **Bun compatibility** with Medusa build, Turborepo, Cloud Run (§2.7)
6. **Mercur 2 native multi-storefront support** — exact scope vs IRYSS requirements (§2.8)
7. **Mercur 2 new features** — which ones IRYSS needs (§2.7)
8. **Activepieces** suitability — self-hosted trial evaluation (§21.3)
9. **OpenSearch managed provider** — Aiven vs Bonsai, region availability, PSC support (§7.4)
10. **sGTM hosting** — Stape vs Cloud Run vs Hetzner cost comparison (§18.4)

Decisions still owed by IRYSS, not by engineering:

11. Email provider selection
12. Consent-management provider selection
13. Whether Mercur's Enterprise tier is needed, or MIT core suffices
14. **Mercur B2C Figma file usage terms** — commercial use confirmed?
15. **B2B storefront domain** — currently `trade.iryss.com`; confirm or change
16. **Paid acquisition strategy** — which platforms, which events needed for attribution (informs sGTM config)

Documents Ronan will provide:

17. Payload PIM and product onboarding (detailed workflow)
18. Shopify Connector (detailed specification)
19. Content Platform and portal integration
20. B2C and B2B marketplace model
21. Admin, Brand and Reseller Portals (detailed specifications)
22. Brand and Reseller onboarding
23. Domain structure (final confirmation)
24. OpenSearch (detailed requirements)
25. Server-side tracking (detailed requirements)
26. Customer acquisition and paid media strategy
27. SEO strategy
28. Figma implementation (detailed plan)
29. Middleware upgrade and plug-and-play integrations
30. Odoo (detailed integration specification)
31. Sendcloud (detailed integration specification)
32. Stripe payments, refunds and transfers
33. Email and notifications
34. **Country-specific admin access and permissions** (Ronan offered to document this)

---

<a name="28-recommendations"></a>
## 28. Recommended changes to the locked stack

### 28.1 Changes forced by verified facts (carried from v1)

| # | Change | From → To | Why |
|---|---|---|---|
| C1 | Mercur adoption | Fork-and-modify → blocks-native 2.x | #909, blocks re-pullable, Turborepo free |
| C2 | Shared contracts | workspace:* → published to Artifact Registry | .medusa/server nested install |
| C3 | Payload database | Shared with Medusa → own database | Migration collisions, table-name overlap, pool contention |
| C4 | Valkey provider | Aiven → Google Memorystore for Valkey | GA, 99.99% SLA, native PSC. Aiven kept for OpenSearch. |
| C5 | Medusa Redis config | "use connect-redis" → redisUrl + four separate modules | Internal wiring; locking-redis required for multi-instance |
| C6 | Shopify embedded app | Express/Vite/React → React Router + Polaris Web Components | Old template abandoned; Polaris React archived |
| C7 | apps/workers | Separate app → MEDUSA_WORKER_MODE same image | Medusa's own scaling primitive |
| C8 | Worker deployment | "services or jobs" → services only | Jobs are run-to-completion; workers are long-lived |
| C9 | Cloud SQL | Unspecified → regional HA + PITR | Orders and payments require HA and backup |

### 28.2 Changes from Ronan's feedback (new in v2)

| # | Change | From → To | Why |
|---|---|---|---|
| C10 | Storefront addressing | Subdomains → subdirectories | Ronan: SEO consolidation, single container, translation mapping |
| C11 | Portal domains | *.iryss.com subdomains → iryssbrands.com, iryssretail.com | Ronan: separate public acquisition journeys |
| C12 | Live streaming | V1 → V2 / future | Ronan: not part of current build |
| C13 | Server-side tracking | Deferred (J1) → day one | Ronan: paid acquisition at launch |
| C14 | B2C/B2B | Evaluate merge (J2) → separate, decided | Ronan: different analytics, SEO, acquisition |
| C15 | Payload role | CMS only → PIM + CMS | Ronan: product onboarding environment |
| C16 | OpenSearch | Retained with fallback note (J5) → confirmed from day one with semantic layer | Ronan: semantic search from the start |
| C17 | Marketplace integrations | Mentioned → Stripe, Odoo, Sendcloud, email scoped | Ronan: all part of marketplace build |
| C18 | Middleware integrations | Direct only → plug-and-play framework (Activepieces) | Ronan: reusable provider connection framework |

### 28.3 Judgement calls — still open

**J3 — Drop Zustand unless a concrete need appears.** TanStack Query owns server state; React's own state handles the rest. **RONAN has not commented.** Recommend keeping this position.

**J4 — Consolidate error tracking on Sentry.** Sentry for application errors, Cloud for infrastructure. Skip Error Reporting. **RONAN has not commented.** Recommend keeping this position.

### 28.4 Explicitly not changed

- Cloud Run as runtime
- Turborepo, TypeScript, Zod, TanStack Query, React Hook Form
- PostHog from launch
- Bunny for images and VOD
- Terraform, Artifact Registry, GitHub Actions, Secret Manager
- Cloudflare for DNS/WAF with no caching of dynamic commerce
- Fail-closed storefront context
- Vitest/Jest split by package convention

---

<a name="29-foundations"></a>
## 29. Foundations to prepare now for the next phase

**RONAN:** *"In the revised plan, it would be useful to distinguish clearly between the areas already covered, the additional marketplace-build requirements identified above, the foundations that should be prepared now for the Shopify Connector and Content Platform, and the functionality that can remain outside the current phase."*

### 29.1 Prepare during marketplace build (for Shopify Connector)

| Foundation | Why now |
|---|---|
| Product onboarding data model in Payload | The Connector feeds products into PIM — the schema must exist |
| Master product / offer model verified | The Connector creates offers against master products |
| SKU-matching logic | Determines how imported products match existing catalogue |
| Category taxonomy and mapping rules | Products need category assignment during import |
| AI enrichment pipeline | Products from the Connector are enriched on arrival |
| Integration event contracts for Connector events | Contracts defined once, consumed when Connector ships |
| Reseller data model and allocation workflow | Built in full during marketplace; Connector only activates the Shopify push |
| Shopify Partner account and app registration | Externally gated; start early |

### 29.2 Prepare during marketplace build (for Content Platform)

| Foundation | Why now |
|---|---|
| Portal navigation space | Admin, Brand and Reseller portals reserve UI areas |
| Content-related permissions in RBAC model | `content:upload`, `content:manage`, etc. in the permission set |
| Video product-link data model | How videos reference products; needed for later search integration |
| Content event contracts | Event taxonomy includes content events from day one |
| OpenSearch content index schema | Defined so the Content Platform can index immediately when built |

### 29.3 Prepare during marketplace build (for live streaming — future phase)

| Foundation | Why now | Cost of deferral |
|---|---|---|
| WebSocket-ready auth model | JWT verification works on CONNECT | Auth redesign |
| Event taxonomy includes live events | Defined in contracts | Contract version bump when live ships |
| Valkey namespace reserved (`live:*`) | Just a naming convention | Collisions |
| Portal navigation space | Reserved in design | UI rework |
| Database schema avoids assumptions that block live | No hardcoded "video = uploaded file" | Migration |

### 29.4 Can remain outside the current phase

| Item | Why it can wait |
|---|---|
| Live-commerce business model and user journeys | Requires separate scoping |
| Cloudflare Stream Live integration | No live ingest needed |
| WebSocket gateway (content-ws) | No real-time overlay needed |
| Live chat and moderation | No live sessions |
| Future data lake | OpenSearch covers current needs |
| Social simulcast, DRM, Whisper transcription | V2+ features |
| Non-Shopify connectors | Shopify first; integration framework supports future connectors |

---

## Appendix A — What changed from the source documents (updated)

| Source | Original | This plan | Why |
|---|---|---|---|
| Stack §2 | `apps/mercur-core` | `packages/api` | Mercur 2.x generated layout |
| Stack §2 | `apps/mercur-middleware` | `packages/api/src/api/middlewares/` | D5 |
| Stack §2 | `apps/workers` | Deleted — `MEDUSA_WORKER_MODE` | §4.5 |
| Stack §2 | `packages/types`, `validation`, `events` | Merged → `packages/contracts`, published | §4.3 |
| Stack §3 | Fork Mercur, preserve code paths | Blocks-native, `create-mercur-app` root | §2.2 |
| Stack §3 | Shopify push "disabled or stubbed?" | Resolved: disabled at launch, portal built in full | §16.6 |
| Stack §13 | Postgres stores Mercur "and Payload" | Payload gets own database | §7.1 |
| Stack §15 | Aiven for Valkey | Google Memorystore for Valkey | §7.3 |
| Stack §16 | "can use connect-redis" | redisUrl + four separate modules incl. locking | §7.3 |
| Stack §17 | Workers as "services or jobs" | Services only | §2.6a |
| Stack §27 | SSL termination "must be decided" | Decided: CF → GCLB, ingress locked | §6.8 |
| Stack §30 | Error Reporting and Sentry | Sentry for app errors; Cloud for infra (J4) | §28.3 |
| **v1 D1** | **Live streaming = V1** | **V2 / future phase** | **RONAN: not current build** |
| **v1 D2** | **Subdomains (it.iryss.com)** | **Subdirectories (iryss.com/it)** | **RONAN: SEO consolidation** |
| **v1 J1** | **sGTM deferred** | **sGTM from day one** | **RONAN: paid acquisition at launch** |
| **v1 J2** | **Evaluate B2C/B2B merge** | **Separate, decided** | **RONAN: different channels** |
| — | Payload = CMS | **Payload = PIM + CMS** | RONAN: product onboarding environment |
| — | OpenSearch with fallback note | **Confirmed with semantic layer** | RONAN: from the beginning |
| — | Integrations mentioned | **Stripe, Odoo, Sendcloud, email scoped** | RONAN: part of marketplace build |
| — | No design methodology | **Full design and frontend workflow** | RONAN's UI/UX document |
| — | Direct integrations only | **Plug-and-play integration framework** | RONAN: Activepieces or equivalent |
| — | brands.iryss.com | **iryssbrands.com** | RONAN: separate acquisition domain |
| — | resellers.iryss.com | **iryssretail.com** | RONAN: separate acquisition domain |
| Content §10 | Live streaming = V2 | Stays V2 (v1 promoted it; v2 reverts) | RONAN: confirmed V2 |
| Timeline | ~7–7.5 months full | **~6–6.5 months** (no live streaming) | D1 reversal |

## Appendix B — Ronan's documents still to be received

These documents will inform further plan revisions. Each is expected to explain what IRYSS is trying to achieve, why, and how. Samy then advises whether the approach fits within Mercur 2 or recommends a better technical route.

1. Payload PIM and product onboarding
2. Shopify Connector (detailed)
3. Content Platform and portal integration
4. B2C and B2B marketplace model
5. Admin, Brand and Reseller Portals
6. Brand and Reseller onboarding
7. Domain structure (final)
8. OpenSearch (detailed)
9. Server-side tracking (detailed)
10. Customer acquisition and paid media strategy
11. SEO strategy
12. Figma implementation (detailed)
13. Middleware upgrade and plug-and-play integrations
14. Odoo (detailed)
15. Sendcloud (detailed)
16. Stripe payments, refunds and transfers
17. Email and notifications

## Appendix C — Questions for Ronan before finalising

1. **B2B domain**: Currently specified as `trade.iryss.com` (subdomain of main zone). Should this also be a separate domain like the portals? Or does the subdomain model work for B2B since it shares the marketplace foundation?

2. **Admin Portal domain**: Currently `admin.iryss.com`. Confirm this remains a subdomain of the main zone (not a separate domain).

3. **Country-specific B2B**: Does the B2B marketplace also need country-specific storefronts (e.g., `trade.iryss.com/fr`), or is B2B a single global storefront?

4. **Bun adoption**: Mercur 2 mentions Bun. Are you comfortable with us evaluating in Week 1 and adopting only if compatibility is proven? Or is there a preference either way?

5. **Activepieces**: Is this a firm choice, or should we evaluate alternatives (n8n, Temporal, etc.) during Week 1?

6. **Virtual server for Mercur**: You mentioned being *"happy to set up a virtual server now to get it up and live."* Do you mean a development/staging environment for the team to work against? If so, Cloud Run dev environment per §19.1 is the intended approach — confirm this aligns with your expectation, or if you had a different setup in mind.

7. **Email provider**: Any preference or shortlist? Options include Resend, Postmark, SendGrid, Amazon SES.

8. **Connector in marketplace phase**: You're open to pulling initial Connector work forward. After the Week 1 spike models the product onboarding flow, we'll recommend which Connector pieces (if any) need to be in the marketplace phase. Is that the right approach?

9. **Design timeline**: The UI/UX document describes a parallel workflow between Islam and Samy. Is Islam already available, or is there a start date to plan around?
