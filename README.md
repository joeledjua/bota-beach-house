# Bota Beach House Website

A modern, responsive website for a beautiful beach house in Bota, Cameroon, built with Next.js and Firebase Firestore.

## Features

- 🏖️ **Responsive Design**: Fully responsive layout that works on all devices
- 📸 **Photo Gallery**: Interactive gallery with lightbox functionality
- 📅 **Booking System**: Firebase-integrated booking inquiry form
- 🌍 **Area Information**: Comprehensive information about Bota and surrounding attractions
- 🎨 **Modern UI**: Beautiful design with Tailwind CSS
- ⚡ **Fast Performance**: Optimized with Next.js 14 and App Router

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Firebase Firestore
- **Forms**: React Hook Form
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Firebase project set up
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   cd blacksilver
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Firebase Setup

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Firestore Database

### 2. Configure Firestore

Create the following collections in Firestore:

**bookings** collection:
- Auto-generated document IDs
- Fields: name, email, phone, checkIn, checkOut, guests, message, status, createdAt

**propertyInfo** collection (optional):
- Document ID: "details"
- Fields: description, amenities, bedrooms, maxGuests, pricing

### 3. Set Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /bookings/{booking} {
      allow read: if request.auth != null;
      allow create: if true;
    }
    match /propertyInfo/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Project Structure

```
blacksilver/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── gallery/           # Gallery page
│   │   ├── booking/           # Booking page
│   │   └── area/              # Area info page
│   ├── components/            # React components
│   │   ├── Navigation.tsx     # Header navigation
│   │   ├── Footer.tsx         # Footer
│   │   ├── Gallery.tsx        # Gallery with lightbox
│   │   └── BookingForm.tsx    # Booking form
│   └── lib/
│       └── firebase.ts        # Firebase configuration
├── public/                    # Static assets
├── .env.local                # Environment variables
└── package.json              # Dependencies
```

## Customization

### Adding Your Own Images

1. Place images in `public/images/` directory
2. Update image references in components
3. Or use a CDN/cloud storage service

### Updating Content

- **Home Page**: Edit `src/app/page.tsx`
- **Gallery**: Modify `src/components/Gallery.tsx`
- **Area Info**: Update `src/app/area/page.tsx`
- **Contact Info**: Edit `src/components/Footer.tsx`

### Styling

- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component-specific styles: Use Tailwind classes

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

```bash
npm run build
```

### Environment Variables on Vercel

Add all Firebase configuration variables in the Vercel project settings under "Environment Variables".

## Features to Add (Future Enhancements)

- [ ] Admin dashboard for managing bookings
- [ ] Email notifications for booking inquiries
- [ ] Payment integration (Stripe/PayPal)
- [ ] Availability calendar
- [ ] Multi-language support
- [ ] Blog section
- [ ] Customer reviews system
- [ ] SEO optimization
- [ ] Analytics integration

## Support

For support, email info@botabeachhouse.com or contact us through the website.

## License

This project is proprietary and confidential.

---

Built with ❤️ for Bota Beach House
