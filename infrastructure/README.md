# IRYSS Infrastructure

Terraform modules for provisioning the IRYSS platform on Google Cloud.

## Environments

| Environment | GCP Project | Domain |
|---|---|---|
| dev | `iryss-dev` | `*.dev.iryss.com` |
| staging | `iryss-staging` | `*.stg.iryss.com` |
| production | `iryss-prod` | `*.iryss.com` + `iryssbrands.com` + `iryssretail.com` |

## Modules

- **cloud-run** — Service deployments with proper scaling, CPU allocation, and ingress settings
- **cloud-sql** — PostgreSQL instances with HA and PITR
- **redis** — Google Memorystore for Valkey
- **opensearch** — Aiven OpenSearch cluster
- **dns** — Cloudflare DNS records
- **secrets** — Google Secret Manager entries
- **monitoring** — Alerting and dashboards

## Usage

```bash
cd environments/dev
terraform init
terraform plan
terraform apply
```
