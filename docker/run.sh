#!/usr/bin/env bash

PROJECT_DIR="$(dirname "$0")/.."

$PROJECT_DIR/docker/build.sh

docker run --rm -p 3000:3000 portfolio:latest
