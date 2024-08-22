#! /usr/bin/env bash

PROJECT_DIR="$(dirname "$0")/.."
CURRENT_GIT_SHA=$(git rev-parse HEAD)

AWS_REGION='us-east-1'

# Log in to ECR
aws ecr-public get-login-password --region "$AWS_REGION" | docker login --username AWS --password-stdin public.ecr.aws

IMAGE_URL="public.ecr.aws/jlukenoff/portfolio:${IMAGE_TAG:-$CURRENT_GIT_SHA}"

# Create a new builder instance
docker buildx create --use

# Build and push the image for multiple architectures
docker buildx build --platform linux/amd64,linux/arm64 -t "$IMAGE_URL" "$PROJECT_DIR" --push

echo "Pushed image: $IMAGE_URL"
