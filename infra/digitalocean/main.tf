
terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}

variable "do_token" {}

variable "image_tag" {
  default = "latest"
}

provider "digitalocean" {
  token = var.do_token
}

locals {
  user_data = file("${path.module}/droplet_userdata.sh")
}


resource "digitalocean_droplet" "portfolio" {
  image  = "ubuntu-20-04-x64"
  name   = "portfolio-droplet"
  region = "sfo2"
  size   = "s-1vcpu-1gb"


  user_data = local.user_data
}

resource "digitalocean_firewall" "web_firewall" {
  name = "web-firewall"

  droplet_ids = [digitalocean_droplet.portfolio.id]

  inbound_rule {
    protocol         = "tcp"
    port_range       = "80"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }

  inbound_rule {
    protocol         = "tcp"
    port_range       = "443"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }


  inbound_rule {
    protocol         = "tcp"
    port_range       = "22"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }

  outbound_rule {
    protocol              = "tcp"
    port_range            = "all"
    destination_addresses = ["0.0.0.0/0", "::/0"]
  }
}


output "droplet_ip" {
  value = digitalocean_droplet.portfolio.ipv4_address
}
