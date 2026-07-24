#!/bin/sh
set -e

echo "Running Medusa database migrations..."
npx medusa db:migrate || echo "Migration failed or already up to date"

echo "Starting Medusa server..."
exec npx medusa develop
