# Coolify Deployment Guide

## VPS Setup

### 1. Install Coolify on the Contabo VPS

SSH into your VPS and run the Coolify installer:

```bash
ssh root@169.58.64.170
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

After installation, access Coolify at `http://169.58.64.170:8000`.

### 2. Initial Coolify Configuration

1. Open `http://169.58.64.170:8000` in your browser
2. Create your admin account
3. Go to **Settings** and configure your server

### 3. Connect GitHub Repository

1. In Coolify, go to **Sources** → **Add New**
2. Select **GitHub App** (recommended) or **Deploy Key**
3. Follow the prompts to connect your `iryss` repository
4. Coolify will detect the `docker-compose.prod.yml` or individual Dockerfiles

### 4. Create the IRYSS Project

1. Go to **Projects** → **New Project** → name it "IRYSS"
2. Add a new **Resource** → **Docker Compose**
3. Point to `docker/docker-compose.prod.yml` in the repository
4. Configure environment variables (see below)

### 5. Environment Variables

Set these in Coolify's environment configuration:

```
POSTGRES_USER=iryss
POSTGRES_PASSWORD=<generate-a-strong-password>
JWT_SECRET=<generate-a-32-char-secret>
COOKIE_SECRET=<generate-a-32-char-secret>
STORE_CORS=https://iryss.com
ADMIN_CORS=https://admin.iryss.com
VENDOR_CORS=https://iryssbrands.com
AUTH_CORS=https://iryss.com,https://admin.iryss.com,https://iryssbrands.com,https://iryssretail.com
MEDUSA_BACKEND_URL=https://api.iryss.com
```

### 6. Auto-Deploy Setup

1. In your resource settings, enable **Auto Deploy**
2. Set the branch to `master`
3. Every push to master will trigger a new deployment
4. Configure webhooks if using GitHub App integration

### 7. Domain Configuration

In Coolify, configure reverse proxy domains for each service:
- `api.iryss.com` → api-server:9000
- `iryss.com` → b2c-storefront:3000
- Coolify handles SSL via Let's Encrypt automatically

## Docker Compose Files

| File | Purpose |
|---|---|
| `docker-compose.yml` | Local development (PostgreSQL on port 5433, no Redis — uses Memurai) |
| `docker/docker-compose.prod.yml` | Production deployment on Coolify |
| `docker/Dockerfile.api` | Medusa/Mercur API + worker image |
| `docker/Dockerfile.b2c` | B2C Next.js storefront image |

## Notes

- PostgreSQL data is persisted in Docker volumes
- Redis data is persisted in Docker volumes
- The API server and worker use the **same Docker image** with different `MEDUSA_WORKER_MODE` values
- The worker service has no exposed ports — it only processes background jobs
