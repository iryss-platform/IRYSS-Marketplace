terraform {
  required_version = ">= 1.5"

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }

  backend "gcs" {
    bucket = "iryss-terraform-state"
    prefix = "dev"
  }
}

provider "google" {
  project = "iryss-dev"
  region  = "europe-west1"
}

locals {
  environment = "dev"
  project_id  = "iryss-dev"
  region      = "europe-west1"
}

# Cloud SQL — shared instance for dev
# module "cloud_sql" {
#   source      = "../../modules/cloud-sql"
#   environment = local.environment
#   project_id  = local.project_id
#   region      = local.region
# }

# Memorystore for Valkey
# module "redis" {
#   source      = "../../modules/redis"
#   environment = local.environment
#   project_id  = local.project_id
#   region      = local.region
# }
