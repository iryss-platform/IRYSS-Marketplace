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
    prefix = "prod"
  }
}

provider "google" {
  project = "iryss-prod"
  region  = "europe-west1"
}

locals {
  environment = "production"
  project_id  = "iryss-prod"
  region      = "europe-west1"
}
