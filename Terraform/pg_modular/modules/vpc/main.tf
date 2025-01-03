# Creación de la VPC
resource "aws_vpc" "example" {
  cidr_block = var.cidr
}