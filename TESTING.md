# Testing & Verification Guide

This document provides a comprehensive checklist for testing the Bota Beach House website.

## Prerequisites

- [ ] Node.js and npm installed
- [ ] Dependencies installed (`npm install`)
- [ ] Firebase project configured
- [ ] Environment variables set in `.env.local`
- [ ] Development server running (`npm run dev`)

## Manual Testing Checklist

### 1. Home Page Testing

#### Desktop (1920x1080)
- [ ] Hero section displays correctly with image
- [ ] Navigation menu is visible and functional
- [ ] All links in navigation work
- [ ] Property highlights section loads
- [ ] Amenities grid displays properly (4 columns)
- [ ] "Why Choose Us" images load
- [ ] Testimonials section displays correctly
- [ ] CTA buttons work and navigate properly
- [ ] Footer displays with all information

#### Tablet (768x1024)
- [ ] Layout adjusts to 2 columns for amenities
- [ ] Hero text is readable
- [ ] Images resize appropriately
- [ ] Navigation remains functional

#### Mobile (375x667)
- [ ] Hamburger menu appears
- [ ] Menu opens and closes smoothly
- [ ] Hero section adjusts for mobile
- [ ] Amenities stack vertically (2 columns)
- [ ] All text is readable
- [ ] Images load properly
- [ ] CTA buttons are easily tappable

### 2. Gallery Page Testing

#### Functionality
- [ ] Gallery loads all images
- [ ] Category filters work correctly
- [ ] Clicking an image opens lightbox
- [ ] Lightbox displays image properly
- [ ] Next/Previous buttons work in lightbox
- [ ] Close button closes lightbox
- [ ] Image counter displays correctly
- [ ] Keyboard navigation works (ESC, Arrow keys)
- [ ] Clicking outside image closes lightbox

#### Responsive
- [ ] Desktop: 3 columns
- [ ] Tablet: 2 columns
- [ ] Mobile: 1 column
- [ ] Hover effects work on desktop
- [ ] Touch events work on mobile
- [ ] Lightbox is responsive on all devices

### 3. Booking Page Testing

#### Form Validation
- [ ] All required fields show error when empty
- [ ] Email validation works
- [ ] Phone number accepts input
- [ ] Check-in date cannot be in the past
- [ ] Check-out date must be after check-in
- [ ] Guest selection dropdown works
- [ ] Message field accepts text (optional)

#### Form Submission
- [ ] Form submits successfully with valid data
- [ ] Success message displays after submission
- [ ] Form clears after successful submission
- [ ] Error message displays on failure
- [ ] Loading state shows during submission
- [ ] Submit button is disabled during submission

#### Firebase Integration
- [ ] Data is saved to Firestore `bookings` collection
- [ ] All fields are saved correctly
- [ ] Timestamps are properly formatted
- [ ] Status is set to "pending"
- [ ] createdAt timestamp is set
- [ ] Check Firebase Console to verify data

#### Sidebar Information
- [ ] Property details display correctly
- [ ] Pricing information is visible
- [ ] Contact information shows
- [ ] Icons render properly

#### Responsive
- [ ] Desktop: 2 column layout (form + sidebar)
- [ ] Mobile: Stack vertically
- [ ] Form is usable on all devices
- [ ] Date pickers work on mobile

### 4. Area Info Page Testing

#### Content
- [ ] Hero image loads
- [ ] About Bota section displays
- [ ] All attraction cards load with images
- [ ] Activities grid shows all items
- [ ] Restaurant information displays
- [ ] Transportation section is readable
- [ ] Map placeholder shows

#### Responsive
- [ ] Attractions: 3 columns desktop, 2 tablet, 1 mobile
- [ ] Activities: 4 columns desktop, 2 tablet/mobile
- [ ] Getting There section adjusts properly
- [ ] All text is readable on small screens

### 5. Navigation Testing

#### Desktop
- [ ] Logo links to home page
- [ ] All nav links work
- [ ] Active page is highlighted
- [ ] Hover effects work

#### Mobile
- [ ] Hamburger icon displays
- [ ] Menu opens smoothly
- [ ] Menu closes when link clicked
- [ ] Menu closes when clicking outside
- [ ] Active page highlighted in mobile menu

### 6. Footer Testing

- [ ] All sections display (About, Quick Links, Contact)
- [ ] Links work correctly
- [ ] Contact information is correct
- [ ] Copyright year is current
- [ ] Email link works (opens mail client)
- [ ] Responsive on all devices

### 7. Cross-Browser Testing

Test on multiple browsers:

#### Chrome
- [ ] All pages load correctly
- [ ] Forms work
- [ ] Images display
- [ ] Animations smooth

#### Firefox
- [ ] All pages load correctly
- [ ] Forms work
- [ ] Images display
- [ ] Animations smooth

#### Safari
- [ ] All pages load correctly
- [ ] Forms work
- [ ] Images display
- [ ] Date pickers work correctly

#### Edge
- [ ] All pages load correctly
- [ ] Forms work
- [ ] Images display

### 8. Performance Testing

#### Page Load Speed
- [ ] Home page loads in < 3 seconds
- [ ] Gallery loads in < 3 seconds
- [ ] Booking page loads in < 3 seconds
- [ ] Area page loads in < 3 seconds

#### Image Optimization
- [ ] Images load progressively
- [ ] Lazy loading works
- [ ] Next.js Image optimization working

#### Lighthouse Scores (Target)
- [ ] Performance: > 90
- [ ] Accessibility: > 90
- [ ] Best Practices: > 90
- [ ] SEO: > 90

Run Lighthouse in Chrome DevTools:
1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Desktop" or "Mobile"
4. Click "Generate report"

### 9. Accessibility Testing

- [ ] All images have alt text
- [ ] Form labels are properly associated
- [ ] Keyboard navigation works throughout site
- [ ] Focus indicators are visible
- [ ] Color contrast meets WCAG standards
- [ ] Screen reader compatible (test with NVDA/VoiceOver)

### 10. SEO Testing

- [ ] Page titles are descriptive
- [ ] Meta descriptions present
- [ ] Heading hierarchy is correct (H1 → H2 → H3)
- [ ] Images have alt text
- [ ] Links have descriptive text
- [ ] URLs are clean and readable

### 11. Security Testing

- [ ] Environment variables not exposed in client
- [ ] Firebase API key restrictions work
- [ ] Firestore security rules prevent unauthorized access
- [ ] No sensitive data in console logs
- [ ] HTTPS enabled (in production)
- [ ] No mixed content warnings

### 12. Error Handling

- [ ] Broken image links show placeholder
- [ ] 404 page displays (create if needed)
- [ ] Firebase connection errors handled gracefully
- [ ] Form errors display clearly
- [ ] Network timeout handled

## Automated Testing (Optional)

Create test files for automated testing:

```bash
# Install testing libraries
npm install --save-dev @testing-library/react @testing-library/jest-dom jest

# Run tests
npm test
```

### Unit Tests
- [ ] BookingForm validation logic
- [ ] Date validation functions
- [ ] Firebase connection

### Integration Tests
- [ ] Form submission flow
- [ ] Navigation between pages
- [ ] Gallery interaction

### E2E Tests
Consider using Playwright or Cypress for end-to-end testing.

## Firebase Testing

### Firestore Rules Testing

Test security rules:

```javascript
// Test booking creation (should succeed)
- Create booking without authentication
- Verify data is saved

// Test booking read (should fail without auth)
- Try to read bookings without authentication
- Should be denied

// Test property info read (should succeed)
- Read property info without authentication
- Should succeed
```

### Data Validation

- [ ] Booking created with correct schema
- [ ] Timestamps are properly set
- [ ] Number fields contain numbers
- [ ] String fields contain strings
- [ ] Required fields are present

## Production Testing

Before going live:

- [ ] Test on production URL
- [ ] Verify SSL certificate
- [ ] Check custom domain works
- [ ] Test from different geographical locations
- [ ] Verify email notifications (if set up)
- [ ] Check analytics tracking
- [ ] Test on real mobile devices
- [ ] Verify Firebase quota limits

## Known Issues & Limitations

Document any known issues:

1. **Placeholder Images**: Currently using Unsplash images. Replace with actual property photos.
2. **Email Notifications**: Not implemented. Add Firebase Cloud Functions or Extensions.
3. **Admin Dashboard**: Not implemented. Would need Authentication.
4. **Payment Integration**: Not implemented. Booking is inquiry-only.
5. **Availability Calendar**: Not implemented. Bookings are inquiries, not confirmed reservations.

## Reporting Issues

If you find bugs:

1. Document the issue clearly
2. Include steps to reproduce
3. Note browser and device used
4. Include screenshots if relevant
5. Check browser console for errors

## Test Results

Date tested: _______________
Tested by: _______________

### Summary
- Total tests: _____
- Passed: _____
- Failed: _____
- Not applicable: _____

### Critical Issues Found
1. 
2. 
3. 

### Minor Issues Found
1. 
2. 
3. 

### Recommendations
1. 
2. 
3. 

## Sign Off

- [ ] All critical tests passed
- [ ] All critical issues resolved
- [ ] Site ready for production
- [ ] Documentation complete

Approved by: _______________
Date: _______________
