provider "aws" {
  region = "us-east-1"
}

variable "image_tag" {
  default = "latest"
}

locals {
  portfolio_host = "jlukenoff.com"
}


# Create an ECR Repository
resource "aws_ecr_repository" "portfolio" {
  name = "portfolio"
}

module "s3" {
  source = "./modules/s3"
}

# module "ecs_deployment" {
# 	source = "./modules/ecs"
# 	image_tag = var.image_tag
# 	host = local.portfolio_host
# }
