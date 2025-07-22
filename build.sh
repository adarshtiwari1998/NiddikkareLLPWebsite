#!/bin/bash

# Build script for Render deployment
echo "Building application for production..."

# Build frontend and backend
npm run build

# Ensure dist/public directory exists
mkdir -p dist/public

# Copy public folder contents to dist/public for deployment
if [ -d "public" ]; then
    echo "Copying public folder to dist/public..."
    cp -r public/* dist/public/
    echo "Public folder copied successfully"
else
    echo "Warning: public folder not found"
fi

# Copy attached_assets to dist/public/assets if they exist
if [ -d "attached_assets" ]; then
    echo "Copying attached assets..."
    mkdir -p dist/public/assets
    cp -r attached_assets/* dist/public/assets/
    echo "Attached assets copied successfully"
fi

echo "Build completed successfully!"