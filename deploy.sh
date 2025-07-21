#!/bin/bash

# Portfolio Deployment Script
echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🌐 Deployment Options:"
    echo "1. Vercel (Recommended)"
    echo "2. Netlify"
    echo "3. GitHub Pages"
    echo ""
    echo "📝 Next steps:"
    echo "• For Vercel: Push to GitHub and connect to Vercel"
    echo "• For Netlify: Upload the .next folder"
    echo "• For GitHub Pages: Run 'npm run export' and upload the out folder"
    echo ""
    echo "🎉 Your portfolio is ready for deployment!"
else
    echo "❌ Build failed. Please check for errors."
    exit 1
fi 