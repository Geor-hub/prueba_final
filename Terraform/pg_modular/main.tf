# Proveedor de AWS
provider "aws" {
  region = var.aws_region
}
# Modulo VPC
module "vpc" {
    source = "./modules/vpc"
    cidr = var.cidr
}