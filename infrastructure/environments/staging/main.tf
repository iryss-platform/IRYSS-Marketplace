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
    prefix = "staging"
  }
}

provider "google" {
  project = "iryss-staging"
  region  = "europe-west1"
}

locals {
  environment = "staging"
  project_id  = "iryss-staging"
  region      = "europe-west1"
}
