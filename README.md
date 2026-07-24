# IRYSS Platform

Multi-country B2C/B2B marketplace built on **Mercur 2.2.0** (Medusa 2.17.2), with Payload CMS as PIM, OpenSearch for semantic search, and dedicated Brand and Reseller portals.

## Architecture

```
iryss-platform/
├── packages/
│   ├── api/              Mercur/Medusa backend (marketplace core)
│   ├── contracts/         Shared types, Zod schemas, event taxonomy
│   ├── ui/               Shared design system (Medusa UI + IRYSS extensions)
│   ├── config/           Environment loading and validation
│   ├── api-client/       Typed HTTP client for the marketplace API
│   └── test-utils/       Shared testing utilities
│
├── apps/
│   ├── admin/            Admin Portal (Mercur admin dashboard)           :7000
│   ├── vendor/           Brand Portal (Mercur vendor dashboard)          :7001
│   ├── b2c-storefront/   B2C marketplace (Next.js, subdirectory i18n)   :3000
│   ├── b2b-storefront/   B2B wholesale marketplace (Next.js)            :3001
│   ├── reseller-portal/  Reseller Portal (Vite + React)                 :3002
│   ├── payload-cms/      PIM + CMS (Payload 3)                          :3003
│   ├── content-platform/ Content library API (NestJS)                   :4000
│   └── shopify-connector/ Shopify integration API (NestJS)              :4001
│
├── infrastructure/       Terraform (GCP)
├── plans/               Technical planning documents
└── docs/                Source specification documents
```

## Prerequisites

| Tool | Version | Install |
|---|---|---|
| **Node.js** | 20 LTS | [nodejs.org](https://nodejs.org/) or `nvm install 20` |
| **Bun** | 1.3+ | [bun.sh](https://bun.sh/) or `curl -fsSL https://bun.sh/install \| bash` |
| **Docker** | Latest | [docker.com](https://www.docker.com/) |
| **PostgreSQL** | 15+ | Via Docker or local install |
| **Redis/Valkey** | 7+ | Via Docker or local install |

## Quick Start

### 1. Install dependencies

```bash
bun install
```

### 2. Start infrastructure (PostgreSQL + Redis)

```bash
docker compose up -d
```

This starts PostgreSQL on **port 5433** (to avoid conflicts with existing PostgreSQL on 5432).

**Redis:** If you have [Memurai](https://www.memurai.com/) installed (Windows Redis-compatible server), it runs on `localhost:6379` by default — no Docker Redis needed. The API is already configured to use `localhost:6379`.

### 3. Configure environment

```bash
# The API package has a pre-configured .env for local development
# For other apps, copy their .env.example files:
cp apps/b2c-storefront/.env.local.example apps/b2c-storefront/.env.local
cp apps/b2b-storefront/.env.local.example apps/b2b-storefront/.env.local
cp apps/payload-cms/.env.example apps/payload-cms/.env
```

### 4. Set up the database

```bash
# Run Medusa migrations
cd packages/api
bun run db:migrate
bun run seed
cd ../..
```

### 5. Start development

```bash
# Start everything
bun run dev

# Or start specific services
bun run dev:api          # Medusa API only (port 9000)
bun run dev:admin        # Admin Portal + API (ports 7000 + 9000)
bun run dev:vendor       # Brand Portal + API (ports 7001 + 9000)
bun run dev:b2c          # B2C Storefront (port 3000)
bun run dev:b2b          # B2B Storefront (port 3001)
bun run dev:reseller     # Reseller Portal (port 3002)
bun run dev:payload      # Payload CMS (port 3003)
bun run dev:content      # Content Platform (port 4000)
bun run dev:connector    # Shopify Connector (port 4001)
```

## Service URLs (Development)

| Service | URL | Purpose |
|---|---|---|
| **Medusa API** | http://localhost:9000 | Marketplace backend API |
| **Admin Portal** | http://localhost:9000/dashboard | Mercur Admin (served by Medusa) |
| **Brand Portal** | http://localhost:9000/seller | Mercur Vendor (served by Medusa) |
| **Admin Portal (dev)** | http://localhost:7000 | Admin with hot reload |
| **Brand Portal (dev)** | http://localhost:7001 | Brand Portal with hot reload |
| **B2C Storefront** | http://localhost:3000 | Consumer marketplace |
| **B2B Storefront** | http://localhost:3001 | Trade/wholesale marketplace |
| **Reseller Portal** | http://localhost:3002 | Reseller management |
| **Payload CMS** | http://localhost:3003/admin | PIM + CMS admin |
| **Content Platform** | http://localhost:4000 | Content library API |
| **Shopify Connector** | http://localhost:4001 | Shopify integration API |

## Per-Actor Development Guide

### Admin (Platform Operator)

**Entry point:** http://localhost:9000/dashboard (or http://localhost:7000 for dev with hot reload)

The Admin Portal manages the entire marketplace:
- **Global view:** Consolidated data across all storefronts and channels
- **B2C management:** Consumer marketplace operations, with country drill-down (France, Italy, UK, etc.)
- **B2B management:** Wholesale/trade marketplace operations
- **Seller/brand management:** Approve sellers, manage commissions, review products
- **Product approvals:** Review AI-enriched products before publishing
- **Order management:** View and manage orders across all sellers and storefronts

**Default admin credentials** (after running `seed`):
- Created during Medusa setup — check the seed script output for admin login details

**Key files:**
- `apps/admin/` — Admin Portal frontend (Mercur admin extensions)
- `packages/api/src/api/admin/` — Admin API routes
- `packages/api/src/modules/` — Custom Medusa modules

### Brand (Seller)

**Entry point:** http://localhost:9000/seller (or http://localhost:7001 for dev with hot reload)

The Brand Portal is where sellers manage their marketplace presence:
- **Product management:** Create offers against master products, manage inventory
- **Order management:** View and fulfil orders
- **Accounting:** Access invoices, credit notes, and financial documents (from Odoo)
- **Analytics:** Performance data across B2C, B2B, and country storefronts
- **Content:** Upload product media, manage brand pages (Content Platform integration)
- **Shopify connection:** Connect Shopify store for product import (when Connector is live)

**Demo seller credentials** (after running `seed`):
- Email: `seller@mercur.dev`
- Password: `supersecret`

**Key files:**
- `apps/vendor/` — Brand Portal frontend (Mercur vendor extensions)
- `packages/api/src/api/vendor/` — Vendor API routes

### Reseller

**Entry point:** http://localhost:3002

The Reseller Portal is a custom IRYSS application for approved resellers:
- **Public landing:** Acquisition and onboarding at the root URL
- **Application:** Apply to become a reseller at `/apply`
- **Portal:** Authenticated reseller dashboard at `/portal`
- **Product discovery:** Browse and select approved products from the catalogue
- **Shopify integration:** Connect Shopify store to push selected products (coming soon)
- **Order tracking:** View stock levels and order information

**Key files:**
- `apps/reseller-portal/` — Reseller Portal frontend (Vite + React)
- Reseller data model is defined in `packages/api/src/modules/`

### Customer (B2C)

**Entry point:** http://localhost:3000

The consumer marketplace with subdirectory-based country storefronts:
- `http://localhost:3000` — Default (UK/global) storefront
- `http://localhost:3000/fr` — France storefront
- `http://localhost:3000/it` — Italy storefront
- Browse products, add to cart, checkout
- User accounts and order history

**Key files:**
- `apps/b2c-storefront/` — Next.js B2C storefront
- `apps/b2c-storefront/src/middleware.ts` — Locale/storefront routing

### Trade Buyer (B2B)

**Entry point:** http://localhost:3001

The wholesale marketplace for professional purchasers:
- Account-gated access
- Trade pricing and bulk ordering
- Business account management

**Key files:**
- `apps/b2b-storefront/` — Next.js B2B storefront

### Content Manager

**Entry point:** http://localhost:3003/admin (Payload CMS)

The PIM and CMS for product onboarding and content management:
- **Product onboarding:** Import, enrich, translate, review, approve products
- **Media management:** Product images and brand assets
- **Brand pages:** Editorial content for brand stories
- **CMS content:** Marketplace editorial, SEO content, localised pages

**Key files:**
- `apps/payload-cms/` — Payload CMS configuration
- `apps/payload-cms/src/collections/` — Collection definitions (Products, Media, Brands)

## Workspace Commands

```bash
# Build all packages and apps
bun run build

# Run linting across the workspace
bun run lint

# Type-check all packages
bun run check-types

# Run tests
bun run test

# Format code
bun run format

# Clean all build artifacts
bun run clean
```

## Mercur Blocks

Pull blocks from the Mercur registry to add marketplace features:

```bash
cd packages/api
npx mercurjs add <block-name>
```

Available blocks include: `requests`, `product-import-export`, `notifications`, `team-management`, `reviews`, `wishlist`.

Block-sourced files are committed to the repo. Keep them in identifiable directories so re-pulls produce readable diffs.

## Database Setup

The platform uses four separate PostgreSQL databases:

| Database | Owner | Purpose |
|---|---|---|
| `iryss_marketplace` | Medusa/Mercur API | Commerce core — products, orders, payments |
| `iryss_payload` | Payload CMS | PIM data + CMS content |
| `iryss_content` | Content Platform | Videos, channels, playlists |
| `iryss_connector` | Shopify Connector | Store connections, sync state |

**Payload uses a separate database from Medusa** — they have different migration systems (MikroORM vs Drizzle) and overlapping table names.

## Environment Variables

### Medusa API (`packages/api/.env`)

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string for marketplace DB |
| `REDIS_URL` | Redis/Valkey connection string |
| `JWT_SECRET` | JWT signing secret (min 16 chars) |
| `COOKIE_SECRET` | Cookie signing secret (min 16 chars) |
| `STORE_CORS` | Allowed origins for store API |
| `ADMIN_CORS` | Allowed origins for admin API |
| `VENDOR_CORS` | Allowed origins for vendor API |
| `AUTH_CORS` | Allowed origins for auth endpoints |

### Storefronts (`apps/b2c-storefront/.env.local`)

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_MEDUSA_BACKEND_URL` | Medusa API URL |
| `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY` | Publishable API key |

## Production Domains

| Domain | Service |
|---|---|
| `iryss.com` | B2C marketplace (with `/fr`, `/it` country paths) |
| `trade.iryss.com` | B2B wholesale marketplace |
| `admin.iryss.com` | Admin Portal |
| `iryssbrands.com` | Brand Portal (public + authenticated) |
| `iryssretail.com` | Reseller Portal (public + authenticated) |
| `api.iryss.com` | Marketplace API |
| `cms.iryss.com` | Payload CMS |
| `cdn.iryss.com` | Media CDN (Bunny) |
| `t.iryss.com` | Server-side GTM |

## Tech Stack

| Layer | Technology |
|---|---|
| **Marketplace** | Mercur 2.2.0, Medusa 2.17.2 |
| **Admin/Brand Portals** | Mercur dashboards (Vite + React) |
| **Storefronts** | Next.js 15 (App Router) |
| **Reseller Portal** | Vite + React + React Router |
| **PIM/CMS** | Payload 3 |
| **Content Platform** | NestJS |
| **Shopify Connector** | NestJS + Shopify React Router template |
| **Database** | PostgreSQL 15+ (Cloud SQL) |
| **Cache/Queues** | Redis/Valkey (Memorystore) |
| **Search** | OpenSearch (Aiven) with semantic vectors |
| **Media** | Bunny CDN + Bunny Stream (VOD) |
| **Infrastructure** | Google Cloud Run, Terraform |
| **CI/CD** | GitHub Actions |
| **Monitoring** | Sentry, Google Cloud Monitoring, PostHog |
| **Payments** | Stripe Connect |
| **Accounting** | Odoo Enterprise |
| **Shipping** | Sendcloud |

## Documentation

- [Technical Plan v2](plans/2026-07-24-iryss-platform-technical-plan-v2.md) — Full architecture and implementation plan
- [Technical Plan v1](plans/2026-07-20-iryss-platform-technical-plan.md) — Original technical plan
- [Marketplace Stack](docs/markedplace-stack.md) — Source specification
- [Shopify Connector](docs/shopifiy_connector.md) — Connector specification
- [Content Platform](docs/youtube-style.md) — Content Platform specification
