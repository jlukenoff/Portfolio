#! /usr/bin/env bash

AWS_REGION='us-east-1'
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

CURRENT_GIT_SHA=$(git rev-parse HEAD)
ECR_REPO_URL="$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com"

# Log in to ECR
aws ecr get-login-password --region "$AWS_REGION" | docker login --username AWS --password-stdin "$ECR_REPO_URL"

docker build -t "$ECR_REPO_URL/portfolio:$CURRENT_GIT_SHA" ../
docker push "$ECR_REPO_URL/portfolio:$CURRENT_GIT_SHA"

# Update the ecs service
terraform apply -var "image_tag=$CURRENT_GIT_SHA"

