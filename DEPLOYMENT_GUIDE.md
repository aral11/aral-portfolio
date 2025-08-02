# 🚀 Complete Deployment Guide to GitHub Pages

## Step 1: Download Project to Your Local System

### Option A: Download as ZIP (Recommended)
1. **Download the project files** from your current development environment
2. **Extract to a folder** on your computer (e.g., `C:\aral-portfolio` or `~/aral-portfolio`)

### Option B: If you have access to git clone
```bash
git clone [your-current-repo-url] aral-portfolio
cd aral-portfolio
```

## Step 2: Set Up SSH for GitHub (One-time setup)

### Generate SSH Key (if you don't have one)
```bash
# Check if you already have SSH keys
ls -la ~/.ssh

# If no SSH keys exist, generate new one
ssh-keygen -t ed25519 -C "araldsouza20@gmail.com"

# When prompted, press Enter for default file location
# Set a passphrase or press Enter for no passphrase
```

### Add SSH Key to GitHub
```bash
# Copy your public key
cat ~/.ssh/id_ed25519.pub
# Copy the entire output
```

1. **Go to GitHub.com** → **Settings** → **SSH and GPG keys**
2. **Click "New SSH key"**
3. **Paste your public key** and save

### Test SSH Connection
```bash
ssh -T git@github.com
# Should say: "Hi aral11! You've successfully authenticated"
```

## Step 3: Create New GitHub Repository

1. **Go to GitHub.com** → **New Repository**
2. **Repository name:** `aral-portfolio`
3. **Make it Public** ✅
4. **Don't initialize** with README (we have files already)
5. **Click "Create repository"**

## Step 4: Local Setup and Deployment

### Navigate to Your Project Folder
```bash
cd path/to/your/aral-portfolio
# Example: cd C:\aral-portfolio or cd ~/aral-portfolio
```

### Install Dependencies
```bash
npm install
```

### Configure Git and Remote
```bash
# Initialize git repository
git init

# Configure git (if not done before)
git config --global user.name "Aral D'Souza"
git config --global user.email "araldsouza20@gmail.com"

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio setup"

# Add GitHub repository (using SSH)
git remote add origin git@github.com:aral11/aral-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Deploy to GitHub Pages
```bash
# Build and deploy in one command
npm run deploy
```

## Step 5: Configure GitHub Pages

1. **Go to your repository:** `https://github.com/aral11/aral-portfolio`
2. **Click Settings** → **Pages**
3. **Source:** Deploy from a branch
4. **Branch:** Select `gh-pages`
5. **Click Save**

## Step 6: Add EmailJS Environment Variables

Create a `.env.local` file in your project root:
```bash
# .env.local
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Step 7: Your Portfolio is Live! 🎉

**URL:** `https://aral11.github.io/aral-portfolio`

## 🔄 Future Updates

To update your portfolio:
```bash
# Make your changes
# Then:
git add .
git commit -m "Updated portfolio"
git push
npm run deploy
```

## 📋 Troubleshooting

### If SSH doesn't work:
Use HTTPS instead:
```bash
git remote set-url origin https://github.com/aral11/aral-portfolio.git
```

### If deploy fails:
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run deploy
```

### If site doesn't load properly:
1. Check that base path is correct in vite.config.ts
2. Ensure repository name matches: `aral-portfolio`
3. Wait 5-10 minutes for GitHub Pages to propagate

## 🎯 Quick Commands Summary

```bash
# Initial setup
npm install
git init
git add .
git commit -m "Initial commit"
git remote add origin git@github.com:aral11/aral-portfolio.git
git push -u origin main
npm run deploy

# Future updates
git add .
git commit -m "Updates"
git push
npm run deploy
```

Your portfolio will be automatically deployed to `https://aral11.github.io/aral-portfolio` ! 🚀
