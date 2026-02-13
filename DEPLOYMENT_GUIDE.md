# Free/Minimum Cost Deployment Guide

Complete guide for deploying your Next.js portfolio at zero or minimal cost.

---

## 🎯 Recommended Option: Vercel (100% FREE)

**Best for Next.js projects** - Made by the creators of Next.js

### Why Vercel?
- ✅ **100% FREE** for personal projects
- ✅ Zero configuration needed
- ✅ Automatic HTTPS/SSL
- ✅ Global CDN
- ✅ Automatic deployments from Git
- ✅ Preview deployments for branches
- ✅ Built-in analytics
- ✅ Custom domain support (free)

### Free Tier Limits:
- **Bandwidth**: 100 GB/month (more than enough)
- **Build Time**: Unlimited
- **Deployments**: Unlimited
- **Team Members**: 1 (you)
- **Projects**: Unlimited

---

## 🚀 Deployment Steps (Vercel)

### Option 1: Deploy via Vercel CLI (Fastest)

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Deploy
```bash
cd /Users/aayushagarwal/Downloads/files/aayush-portfolio
vercel
```

#### Step 3: Follow Prompts
- Login with GitHub/GitLab/Bitbucket
- Confirm project settings
- Deploy!

**Your site will be live in ~2 minutes at**: `https://your-project.vercel.app`

---

### Option 2: Deploy via Vercel Dashboard (Recommended)

#### Step 1: Push to GitHub
```bash
# Initialize git (if not already)
cd /Users/aayushagarwal/Downloads/files/aayush-portfolio
git init
git add .
git commit -m "Initial commit: Portfolio ready for deployment"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

#### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your portfolio repository
5. Click "Deploy"

**Done!** Your site is live with automatic deployments on every push.

---

## 🌐 Custom Domain Setup (FREE)

### Option A: Use Free Vercel Domain
- You get: `your-name.vercel.app` (FREE forever)
- Professional and works great!

### Option B: Buy Your Own Domain ($12/year)
1. Buy domain from Namecheap/GoDaddy (~$12/year for `.com`)
2. In Vercel dashboard → Settings → Domains
3. Add your domain
4. Update DNS records (Vercel provides instructions)
5. Done! Free SSL included.

**Recommended domains:**
- `aayushagarwal.com` - $12/year
- `aayush.dev` - $15/year
- `aayushagarwal.tech` - $5/year

---

## 💰 Alternative Free Hosting Options

### Option 2: Netlify (FREE)

**Pros:**
- ✅ 100% FREE for personal use
- ✅ 100 GB bandwidth/month
- ✅ Automatic deployments
- ✅ Custom domain support
- ✅ Easy DNS management

**Deployment:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd /Users/aayushagarwal/Downloads/files/aayush-portfolio
netlify deploy --prod
```

**Or via Dashboard:**
1. Go to [netlify.com](https://netlify.com)
2. Connect GitHub repo
3. Deploy!

---

### Option 3: GitHub Pages (FREE but Limited)

**Pros:**
- ✅ 100% FREE
- ✅ Integrated with GitHub
- ✅ Custom domain support

**Cons:**
- ⚠️ Requires static export (no server-side features)
- ⚠️ 1 GB storage limit
- ⚠️ 100 GB bandwidth/month

**Deployment:**

#### Step 1: Update `next.config.ts`
```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
```

#### Step 2: Deploy
```bash
npm run build
npm install -g gh-pages
gh-pages -d out
```

Your site: `https://YOUR_USERNAME.github.io/portfolio`

---

### Option 4: Cloudflare Pages (FREE)

**Pros:**
- ✅ Unlimited bandwidth
- ✅ Unlimited requests
- ✅ Fast global CDN
- ✅ Free SSL

**Deployment:**
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect GitHub
3. Deploy!

---

## 📊 Cost Comparison

| Platform | Free Tier | Bandwidth | Build Time | Best For |
|----------|-----------|-----------|------------|----------|
| **Vercel** | Yes | 100 GB/mo | Unlimited | Next.js (Recommended) |
| **Netlify** | Yes | 100 GB/mo | 300 min/mo | General |
| **GitHub Pages** | Yes | 100 GB/mo | Limited | Static sites |
| **Cloudflare Pages** | Yes | Unlimited | 500 builds/mo | High traffic |
| **AWS Amplify** | 12 months free | 15 GB/mo | 1000 min/mo | AWS ecosystem |

**Winner**: **Vercel** - Best for Next.js, zero config, unlimited builds

---

## 🎯 Recommended Setup (100% FREE)

### Total Cost: $0/month (or $12/year with custom domain)

**Stack:**
1. **Hosting**: Vercel (FREE)
2. **Domain**: 
   - Option A: `yourname.vercel.app` (FREE)
   - Option B: Custom domain ($12/year)
3. **Git**: GitHub (FREE)
4. **Email Forms**: Formspree FREE tier (50 submissions/month)
5. **Analytics**: Vercel Analytics (FREE)
6. **SSL Certificate**: Automatic (FREE)

**Monthly Cost**: **$0** 🎉

---

## 🚀 Quick Start Deployment (5 Minutes)

### Fastest Way to Deploy:

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Go to your project
cd /Users/aayushagarwal/Downloads/files/aayush-portfolio

# 3. Deploy!
vercel

# Follow prompts and you're DONE!
```

**Result**: Your portfolio is live at `https://your-name.vercel.app` in ~2 minutes!

---

## 🔧 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] Build succeeds: `npm run build`
- [ ] No TypeScript errors
- [ ] All data files are correct
- [ ] Images are added (or placeholders are fine)
- [ ] Contact form is configured (Formspree)
- [ ] Resume link is updated
- [ ] LinkedIn/GitHub links are correct
- [ ] Git repository is clean

---

## 📝 Environment Variables (If Needed)

If you add API keys later (analytics, forms, etc.):

### Vercel Dashboard:
1. Project → Settings → Environment Variables
2. Add key-value pairs
3. Redeploy

### Or via CLI:
```bash
vercel env add NEXT_PUBLIC_FORMSPREE_ID
```

---

## 🔄 Continuous Deployment

Once connected to Git:

1. **Push to GitHub** → **Auto-deploys to production**
2. **Pull Request** → **Preview deployment**
3. **Merge PR** → **Production update**

No manual deployment needed! 🎉

---

## 🌟 Post-Deployment Setup

### 1. Custom Domain (Optional but Recommended)

**With Vercel:**
1. Buy domain from Namecheap ($12/year)
2. Vercel → Settings → Domains
3. Add domain
4. Update nameservers
5. Done! SSL auto-enabled

### 2. Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your domain
3. Verify ownership
4. Submit sitemap (auto-generated by Next.js)

### 3. Analytics (FREE)

**Vercel Analytics** (Recommended):
```typescript
// Already included in Next.js
// Just enable in Vercel dashboard
```

**Or Google Analytics**:
```bash
npm install @next/third-parties
```

---

## 🚨 Troubleshooting

### Build Fails?
```bash
# Test locally first
npm run build

# Check errors
npm run lint
```

### Images Not Loading?
- Ensure images are in `/public/` folder
- Check file names match exactly
- Clear cache and redeploy

### 404 Errors?
- Vercel handles Next.js routing automatically
- No configuration needed

---

## 💡 Pro Tips

1. **Use Vercel for Next.js** - It's made by the same team, zero config
2. **Free is Enough** - The free tier is more than sufficient for personal portfolios
3. **Custom Domain** - Worth the $12/year for professionalism
4. **Auto Deployments** - Connect Git for automatic updates
5. **Preview Branches** - Test changes before going live
6. **Edge Network** - Your site will be fast globally

---

## 📊 Traffic Estimates

### Vercel Free Tier (100 GB bandwidth):
- **Page size**: ~500 KB (with images optimized)
- **Monthly visitors**: ~200,000 page views
- **Daily visitors**: ~6,600 page views

**More than enough for a personal portfolio!**

---

## 🎁 Bonus: Free Services for Your Portfolio

1. **Formspree** - Contact forms (50/month free)
2. **Vercel Analytics** - Visitor insights (free)
3. **Google Search Console** - SEO tracking (free)
4. **GitHub** - Code hosting (free)
5. **Cloudflare** - DNS management (free)
6. **Let's Encrypt** - SSL certificate (free via Vercel)

---

## 🎯 Final Recommendation

**Go with Vercel!**

```bash
# Three commands to deploy:
npm install -g vercel
cd /Users/aayushagarwal/Downloads/files/aayush-portfolio
vercel
```

**Benefits:**
- ✅ Zero cost
- ✅ Zero configuration
- ✅ Best performance for Next.js
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Instant deployments
- ✅ Preview deployments
- ✅ Professional and reliable

**Your portfolio will be live at**: `https://aayush-portfolio.vercel.app`

---

## 📞 Need Help?

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Deployment: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- Vercel Support: [vercel.com/support](https://vercel.com/support)

---

**Total Cost**: **$0/month** (FREE) 🎉

Or **$1/month** if you buy a custom domain ($12/year ÷ 12)

**Deploy now and your portfolio will be live in 5 minutes!** 🚀
