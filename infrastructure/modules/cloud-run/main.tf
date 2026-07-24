variable "service_name" {
  type = string
}

variable "image" {
  type = string
}

variable "region" {
  type    = string
  default = "europe-west1"
}

variable "project_id" {
  type = string
}

variable "min_instances" {
  type    = number
  default = 0
}

variable "max_instances" {
  type    = number
  default = 10
}

variable "cpu_throttling" {
  type    = bool
  default = true
}

variable "env_vars" {
  type    = map(string)
  default = {}
}

variable "secret_env_vars" {
  type    = map(string)
  default = {}
}

# Cloud Run service definition will be added during infrastructure setup
# resource "google_cloud_run_v2_service" "service" { ... }
