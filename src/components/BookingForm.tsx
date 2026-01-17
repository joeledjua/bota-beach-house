'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  message: string;
}

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<BookingFormData>();

  const checkInDate = watch('checkIn');

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Convert date strings to Timestamps
      const checkInTimestamp = Timestamp.fromDate(new Date(data.checkIn));
      const checkOutTimestamp = Timestamp.fromDate(new Date(data.checkOut));

      // Add booking to Firestore
      await addDoc(collection(db, 'bookings'), {
        name: data.name,
        email: data.email,
        phone: data.phone,
        checkIn: checkInTimestamp,
        checkOut: checkOutTimestamp,
        guests: Number(data.guests),
        message: data.message,
        status: 'pending',
        createdAt: Timestamp.now(),
      });

      setSubmitStatus('success');
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get today's date in YYYY-MM-DD format for min date validation
  const today = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone', { required: 'Phone number is required' })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="+237 XXX XXX XXX"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      {/* Check-in and Check-out Dates */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-2">
            Check-in Date *
          </label>
          <input
            type="date"
            id="checkIn"
            {...register('checkIn', { 
              required: 'Check-in date is required',
              min: {
                value: today,
                message: 'Check-in date cannot be in the past'
              }
            })}
            min={today}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          {errors.checkIn && (
            <p className="mt-1 text-sm text-red-600">{errors.checkIn.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-2">
            Check-out Date *
          </label>
          <input
            type="date"
            id="checkOut"
            {...register('checkOut', {
              required: 'Check-out date is required',
              validate: (value) =>
                !checkInDate || value > checkInDate || 'Check-out must be after check-in',
            })}
            min={checkInDate || today}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          {errors.checkOut && (
            <p className="mt-1 text-sm text-red-600">{errors.checkOut.message}</p>
          )}
        </div>
      </div>

      {/* Number of Guests */}
      <div>
        <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
          Number of Guests *
        </label>
        <select
          id="guests"
          {...register('guests', { required: 'Number of guests is required' })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="">Select number of guests</option>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? 'Guest' : 'Guests'}
            </option>
          ))}
        </select>
        {errors.guests && (
          <p className="mt-1 text-sm text-red-600">{errors.guests.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Additional Message
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="Any special requests or questions?"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Booking Inquiry'}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          <p className="font-medium">Booking inquiry submitted successfully!</p>
          <p className="text-sm mt-1">We&apos;ll get back to you shortly to confirm your reservation.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          <p className="font-medium">Error submitting booking inquiry.</p>
          <p className="text-sm mt-1">Please try again or contact us directly.</p>
        </div>
      )}
    </form>
  );
}
