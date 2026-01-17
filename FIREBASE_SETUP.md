# Firebase Setup Guide

Complete guide to setting up Firebase for the Bota Beach House website.

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project"
3. Enter project name: "bota-beach-house" (or your preference)
4. Enable Google Analytics (optional but recommended)
5. Click "Create Project"

## Step 2: Set Up Web App

1. In Firebase Console, click the web icon (</>) to add a web app
2. Register app with nickname: "Bota Beach House Website"
3. Copy the configuration values
4. Click "Continue to console"

## Step 3: Enable Firestore Database

1. In left sidebar, click "Firestore Database"
2. Click "Create database"
3. Choose "Start in production mode" (we'll configure rules later)
4. Select your location (choose closest to Cameroon, e.g., europe-west)
5. Click "Enable"

## Step 4: Configure Firestore Collections

### Create Collections

1. **bookings** collection:
   - Click "Start collection"
   - Collection ID: `bookings`
   - Add a test document to initialize:
     ```
     Document ID: (auto-generated)
     Fields:
       - name (string): "Test User"
       - email (string): "test@example.com"
       - phone (string): "+237 XXX XXX XXX"
       - checkIn (timestamp): (select a future date)
       - checkOut (timestamp): (select a date after check-in)
       - guests (number): 2
       - message (string): "Test booking"
       - status (string): "pending"
       - createdAt (timestamp): (current time)
     ```

2. **propertyInfo** collection (optional):
   - Click "Start collection"
   - Collection ID: `propertyInfo`
   - Document ID: `details`
   - Fields:
     ```
     - description (string): "Beautiful beachfront property..."
     - amenities (array): ["WiFi", "Pool", "Beach Access", "Kitchen"]
     - bedrooms (number): 4
     - maxGuests (number): 10
     - pricing (map):
       - weeknight (number): 150
       - weekend (number): 200
       - weekly (number): 900
     ```

## Step 5: Set Security Rules

1. Go to "Firestore Database" > "Rules" tab
2. Replace the rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Bookings collection
    match /bookings/{bookingId} {
      // Anyone can create a booking
      allow create: if true
                    && request.resource.data.name is string
                    && request.resource.data.email is string
                    && request.resource.data.phone is string
                    && request.resource.data.guests is number
                    && request.resource.data.guests > 0
                    && request.resource.data.guests <= 10;
      
      // Only authenticated admins can read/update/delete
      allow read, update, delete: if request.auth != null;
    }
    
    // Property info - public read, admin write
    match /propertyInfo/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

3. Click "Publish"

## Step 6: Configure Environment Variables

1. Copy your Firebase configuration from Project Settings
2. In your local project, create `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
```

## Step 7: Restrict API Key (Security)

1. Go to Google Cloud Console
2. Navigate to "APIs & Services" > "Credentials"
3. Find your Firebase API key
4. Click "Edit"
5. Under "Application restrictions", select "HTTP referrers"
6. Add your domains:
   - `localhost:3000` (for development)
   - `*.vercel.app` (for Vercel preview deployments)
   - `yourdomain.com` (your production domain)
   - `www.yourdomain.com`

## Step 8: Set Up Firebase Authentication (Optional - for Admin)

If you want an admin panel to view bookings:

1. In Firebase Console, go to "Authentication"
2. Click "Get Started"
3. Enable "Email/Password" sign-in method
4. Add admin users under "Users" tab

## Step 9: Enable Email Notifications (Optional)

To receive email notifications for new bookings:

### Option A: Firebase Extensions (Easiest)

1. Go to "Extensions" in Firebase Console
2. Install "Trigger Email" extension
3. Configure with your email service (SendGrid, Mailgun, etc.)
4. Set up a Firestore trigger on `bookings` collection

### Option B: Cloud Functions

Create a Cloud Function to send emails:

```javascript
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.sendBookingNotification = functions.firestore
  .document('bookings/{bookingId}')
  .onCreate((snap, context) => {
    const booking = snap.data();
    
    // Configure your email service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password'
      }
    });
    
    const mailOptions = {
      from: 'noreply@botabeachhouse.com',
      to: 'admin@botabeachhouse.com',
      subject: 'New Booking Inquiry',
      html: `
        <h2>New Booking Inquiry</h2>
        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Phone:</strong> ${booking.phone}</p>
        <p><strong>Check-in:</strong> ${booking.checkIn.toDate()}</p>
        <p><strong>Check-out:</strong> ${booking.checkOut.toDate()}</p>
        <p><strong>Guests:</strong> ${booking.guests}</p>
        <p><strong>Message:</strong> ${booking.message}</p>
      `
    };
    
    return transporter.sendMail(mailOptions);
  });
```

## Step 10: Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/booking`

3. Fill out and submit the booking form

4. Check Firestore Console to verify the booking was saved

## Monitoring and Analytics

### Enable Firebase Analytics

1. Go to "Analytics" in Firebase Console
2. Enable Google Analytics
3. Link to existing GA4 property or create new one

### Set Up Monitoring

1. Go to "Performance" to monitor page load times
2. Use "Crashlytics" for error reporting (optional)

## Backup Strategy

### Export Firestore Data

Use the Firebase CLI to schedule backups:

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Export Firestore data
firebase firestore:export gs://your-bucket/backup-folder
```

### Automated Backups

Set up Cloud Scheduler to run daily backups:

1. Enable Cloud Scheduler API
2. Create a scheduled job
3. Configure to run export command daily

## Cost Estimation

Firebase Free Tier (Spark Plan) includes:
- 1 GB Firestore storage
- 50K document reads/day
- 20K document writes/day
- 20K document deletes/day

This should be sufficient for a small beach house booking site.

## Troubleshooting

### Common Issues

1. **"Missing or insufficient permissions"**
   - Check Firestore security rules
   - Verify API key configuration

2. **"Firebase: Error (auth/unauthorized-domain)"**
   - Add your domain to authorized domains in Firebase Console
   - Go to Authentication > Settings > Authorized domains

3. **Environment variables not loading**
   - Ensure `.env.local` file exists
   - Restart development server
   - Verify variable names start with `NEXT_PUBLIC_`

4. **CORS errors**
   - Check Firebase security rules
   - Verify domain restrictions on API key

## Support Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Firebase Support](https://firebase.google.com/support)

## Next Steps

1. ✅ Create Firebase project
2. ✅ Enable Firestore
3. ✅ Set up collections
4. ✅ Configure security rules
5. ✅ Add environment variables
6. ✅ Test booking form
7. 📧 Set up email notifications (optional)
8. 👤 Create admin authentication (optional)
9. 📊 Enable analytics
10. 🔐 Restrict API key
