#! /usr/bin/env bash

AWS_REGION='us-east-1'
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

PROJECT_DIR="$(dirname "$0")/../"
CURRENT_GIT_SHA=$(git rev-parse HEAD)
ECR_REPO_URL="$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com"

# Log in to ECR
aws ecr get-login-password --region "$AWS_REGION" | docker login --username AWS --password-stdin "$ECR_REPO_URL"

# Create a new builder instance
docker buildx create --use

# Build and push the image for multiple architectures
docker buildx build --platform linux/amd64,linux/arm64 -t "$ECR_REPO_URL/portfolio:$CURRENT_GIT_SHA" --push "$PROJECT_DIR"

# Update the ecs service
cd "$PROJECT_DIR/infra" && terraform apply -var "image_tag=$CURRENT_GIT_SHA" && cd -

