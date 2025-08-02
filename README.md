# Aral D'Souza Portfolio

A modern, responsive portfolio website showcasing Aral Aldrin John D'Souza's expertise in IBM Maximo development, technical consulting, and entrepreneurship.

## 🚀 Live Demo

Visit the live portfolio: [https://aral11.github.io/aral-portfolio](https://aral11.github.io/aral-portfolio)

## ✨ Features

- Modern React 18 + TypeScript application
- Responsive design with Tailwind CSS
- Functional contact form with EmailJS integration
- Coastal-inspired design theme
- Professional portfolio sections
- GitHub Pages deployment ready

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI
- **Forms**: EmailJS integration
- **Deployment**: GitHub Pages with Actions
- **Icons**: Lucide React

## 📧 EmailJS Setup

To enable the contact form functionality:

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account

### 2. Set up Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. Note your **Service ID**

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```html
From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Set these variables in the template:
   - `from_name` - Sender's name
   - `from_email` - Sender's email
   - `subject` - Email subject
   - `message` - Email message
5. Note your **Template ID**

### 4. Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

### 5. Configure Environment Variables
1. Copy `.env.example` to `.env.local`
2. Replace the placeholder values:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 🚀 GitHub Pages Deployment

### Prerequisites
- GitHub account
- Git installed on your computer

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click **New Repository**
3. Name it: `aral-portfolio`
4. Make it **Public**
5. Don't initialize with README (we already have one)
6. Click **Create Repository**

### Step 2: Add Environment Variables to GitHub
1. Go to your repository on GitHub
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** for each:
   - `VITE_EMAILJS_SERVICE_ID` = your service ID
   - `VITE_EMAILJS_TEMPLATE_ID` = your template ID  
   - `VITE_EMAILJS_PUBLIC_KEY` = your public key

### Step 3: Enable GitHub Pages
1. Go to **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Click **Save**

### Step 4: Deploy Your Code
Run these commands in your project folder:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial portfolio setup"

# Add GitHub repository as origin
git remote add origin https://github.com/aral11/aral-portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 5: Automatic Deployment
- GitHub Actions will automatically build and deploy your site
- Check the **Actions** tab to see deployment progress
- Your site will be live at: `https://aral11.github.io/aral-portfolio`

## 🔧 Local Development

### Installation
```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env.local
# Edit .env.local with your EmailJS credentials

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run typecheck    # Check TypeScript types
npm test            # Run tests
```

## 📁 Project Structure

```
├── .github/workflows/   # GitHub Actions deployment
├── client/             # React frontend
│   ├── components/ui/  # Reusable UI components
│   ├── pages/         # Page components
│   └── global.css     # Global styles
├── public/            # Static assets
├── server/            # Express server (dev only)
└── shared/            # Shared types
```

## 🎨 Customization

### Colors
Edit `client/global.css` and `tailwind.config.ts` to customize the coastal color theme.

### Content
Update `client/pages/Index.tsx` to modify portfolio content.

### Resume
Replace the resume link in the download button with your actual resume URL.

## 📞 Contact

- **Email**: araldsouza20@gmail.com
- **LinkedIn**: [Aral Aldrin John D'Souza](https://www.linkedin.com/in/aral-aldrin-john-d-souza-bb901218a)
- **Instagram**: [@cheerboyaral](https://www.instagram.com/cheerboyaral)

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ by Aral Aldrin John D'Souza
