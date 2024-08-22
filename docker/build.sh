#!/usr/bin/env bash

PROJECT_DIR="$(dirname "$0")/.."
docker build -t portfolio:latest "$PROJECT_DIR"
