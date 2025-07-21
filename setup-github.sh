#!/bin/bash

echo "🚀 GitHub Repository Setup Script"
echo "=================================="
echo ""

# Check if git remote is already set
if git remote -v | grep -q "origin"; then
    echo "✅ Git remote 'origin' is already configured"
    echo "Current remote:"
    git remote -v
    echo ""
    echo "If you need to change it, run:"
    echo "git remote set-url origin https://github.com/YOUR_USERNAME/portfolio.git"
else
    echo "📝 Please provide your GitHub username:"
    read -p "GitHub Username: " github_username
    
    if [ -n "$github_username" ]; then
        echo ""
        echo "🔗 Adding GitHub remote..."
        git remote add origin https://github.com/$github_username/portfolio.git
        git branch -M main
        
        echo "✅ Remote added successfully!"
        echo "📤 Pushing to GitHub..."
        git push -u origin main
        
        echo ""
        echo "🎉 Success! Your code is now on GitHub."
        echo "Next step: Deploy to Vercel at https://vercel.com"
    else
        echo "❌ No username provided. Please run the script again."
    fi
fi

echo ""
echo "📋 Next Steps:"
echo "1. Go to https://vercel.com"
echo "2. Sign up/Login with GitHub"
echo "3. Click 'New Project'"
echo "4. Import your portfolio repository"
echo "5. Deploy!"
echo ""
echo "📖 See DEPLOYMENT_GUIDE.md for detailed instructions" 