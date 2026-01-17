# Deployment Guide

This guide will help you deploy the Bota Beach House website to production.

## Deployment Platforms

### Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

#### Step 1: Prepare Your Repository

1. Initialize Git (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Bota Beach House website"
   ```

2. Push to GitHub:
   ```bash
   git remote add origin your-github-repo-url
   git push -u origin main
   ```

#### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: (leave default)

#### Step 3: Add Environment Variables

In Vercel dashboard, go to Settings > Environment Variables and add:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_value
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_value
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_value
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_value
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_value
NEXT_PUBLIC_FIREBASE_APP_ID=your_value
```

#### Step 4: Deploy

Click "Deploy" and Vercel will automatically build and deploy your site.

### Custom Domain Setup

1. In Vercel dashboard, go to Settings > Domains
2. Add your custom domain (e.g., botabeachhouse.com)
3. Follow DNS configuration instructions
4. Vercel will automatically provision SSL certificate

## Alternative Platforms

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables in Site Settings

### AWS Amplify

1. Connect your GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Add environment variables

### Self-Hosted

Build the production version:
```bash
npm run build
npm start
```

For PM2 process manager:
```bash
pm2 start npm --name "beach-house" -- start
```

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test booking form submission
- [ ] Check Firebase connection
- [ ] Test on mobile devices
- [ ] Verify all images load
- [ ] Check navigation on all pages
- [ ] Test gallery lightbox functionality
- [ ] Verify contact information is correct
- [ ] Test form validations
- [ ] Check page load speed
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Set up monitoring (Sentry, LogRocket, etc.)
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Create sitemap.xml
- [ ] Submit to search engines

## Performance Optimization

### Image Optimization

- Use Next.js Image component (already implemented)
- Compress images before uploading
- Use WebP format where possible
- Consider using a CDN

### Caching

Vercel automatically handles caching. For custom deployments:
- Set proper cache headers
- Use CDN for static assets
- Enable browser caching

### Monitoring

Set up monitoring tools:
- Google Analytics for traffic
- Vercel Analytics for performance
- Sentry for error tracking
- Firebase Analytics for user behavior

## Backup Strategy

1. **Code**: Version controlled with Git
2. **Database**: 
   - Enable Firebase automatic backups
   - Export Firestore data regularly
3. **Environment Variables**: Keep secure backup of `.env` values

## Rollback Procedure

### Vercel

1. Go to Deployments in dashboard
2. Find previous successful deployment
3. Click "Promote to Production"

### Manual

```bash
git revert HEAD
git push
```

## Security Checklist

- [ ] Environment variables are not committed to Git
- [ ] Firebase security rules are properly configured
- [ ] HTTPS is enabled (automatic with Vercel)
- [ ] API keys are restricted by domain
- [ ] No sensitive data in client-side code
- [ ] CORS properly configured
- [ ] Rate limiting on form submissions

## Support

For deployment issues, contact your development team or refer to:
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
