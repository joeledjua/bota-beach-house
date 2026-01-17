# Quick Start Guide

Get the Bota Beach House website up and running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

This installs all required packages including Next.js, React, Firebase, and Tailwind CSS.

## Step 2: Set Up Firebase

### Option A: Quick Setup (Use Our Template)

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Create a web app in your Firebase project
3. Enable Firestore Database
4. Copy your Firebase config values

### Option B: Detailed Setup

Follow the complete guide in [`FIREBASE_SETUP.md`](./FIREBASE_SETUP.md)

## Step 3: Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 5: Test the Website

1. **Home Page**: Check if everything loads correctly
2. **Gallery**: Click through images and test the lightbox
3. **Booking Form**: Submit a test booking
4. **Firebase**: Verify the booking appears in Firestore Console

## What's Included?

✅ **Home Page** - Hero section, amenities, testimonials  
✅ **Photo Gallery** - Lightbox gallery with filters  
✅ **Booking System** - Form with Firebase integration  
✅ **Area Info** - Information about Bota, Cameroon  
✅ **Responsive Design** - Works on mobile, tablet, desktop  
✅ **SEO Optimized** - Meta tags and semantic HTML  

## Next Steps

### Customize Content

1. **Add Your Images**
   - Place images in `public/images/`
   - Update image references in components

2. **Update Property Details**
   - Edit `src/app/page.tsx` for home page content
   - Modify `src/app/booking/page.tsx` for pricing
   - Update contact info in `src/components/Footer.tsx`

3. **Customize Styling**
   - Colors: Edit `tailwind.config.ts`
   - Global styles: Edit `src/app/globals.css`

### Deploy to Production

Choose a deployment platform:

**Vercel (Recommended)**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel dashboard.

See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for detailed deployment instructions.

## File Structure

```
blacksilver/
├── src/
│   ├── app/              # Pages (Next.js App Router)
│   │   ├── page.tsx      # Home page
│   │   ├── gallery/      # Gallery page
│   │   ├── booking/      # Booking page
│   │   └── area/         # Area info page
│   ├── components/       # React components
│   └── lib/
│       └── firebase.ts   # Firebase config
├── public/               # Static files
│   └── images/          # Images directory
├── .env.local           # Environment variables (create this)
├── package.json         # Dependencies
└── README.md           # Full documentation
```

## Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Deployment
vercel              # Deploy to Vercel
```

## Troubleshooting

### "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Firebase Connection Issues
- Check `.env.local` file exists
- Verify all Firebase variables are set
- Restart dev server after adding env variables

### Styling Not Working
```bash
# Rebuild Tailwind
npm run dev
```

### Port 3000 Already in Use
```bash
# Use different port
PORT=3001 npm run dev
```

## Need Help?

- 📚 **Full Documentation**: See [`README.md`](./README.md)
- 🔥 **Firebase Setup**: See [`FIREBASE_SETUP.md`](./FIREBASE_SETUP.md)
- 🚀 **Deployment Guide**: See [`DEPLOYMENT.md`](./DEPLOYMENT.md)
- 🧪 **Testing Guide**: See [`TESTING.md`](./TESTING.md)

## Support

For questions or issues:
- Email: info@botabeachhouse.com
- Check the documentation files
- Review error messages in browser console

---

🎉 **You're ready to go!** Start customizing your beach house website.
