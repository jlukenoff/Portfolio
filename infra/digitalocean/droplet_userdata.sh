#!/bin/bash

export PORTFOLIO_IMAGE="public.ecr.aws/jlukenoff/portfolio:latest"

# Update package list and install prerequisites
apt-get update
apt-get install -y \
	apt-transport-https \
	ca-certificates \
	curl \
	software-properties-common \
	fzf \
	vim \
	nginx

systemctl start nginx
systemctl enable nginx

# Add Docker’s official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -

# Add Docker APT repository
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# Install Docker
apt-get update
apt-get install -y docker-ce

# Start and enable Docker
systemctl start docker
systemctl enable docker

# Pull and run your Docker image
docker pull "$IMAGE"
docker run -d -p 3000:3000 --name portfolio "$PORTFOLIO_IMAGE"


# Create Nginx configuration file
cat << 'EOL' > /etc/nginx/nginx.conf
events {}
http {
    server {
        listen 80;
        location / {
            proxy_pass http://portfolio:3000;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
}
EOL

# Restart Nginx to apply the configuration
systemctl restart nginx
