import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const amenities = [
    { icon: '🏖️', title: 'Beach Access', description: 'Direct access to pristine beach' },
    { icon: '🛏️', title: '4 Bedrooms', description: 'Sleeps up to 10 guests' },
    { icon: '🏊', title: 'Swimming Pool', description: 'Private infinity pool' },
    { icon: '🍳', title: 'Full Kitchen', description: 'Modern, fully equipped' },
    { icon: '📶', title: 'WiFi', description: 'High-speed internet' },
    { icon: '🅿️', title: 'Free Parking', description: 'Secure on-site parking' },
    { icon: '❄️', title: 'Air Conditioning', description: 'All rooms climate controlled' },
    { icon: '🌅', title: 'Ocean Views', description: 'Panoramic sea views' },
  ];

  const highlights = [
    {
      title: 'Beachfront Paradise',
      description: 'Wake up to the sound of waves and stunning ocean views from your private beach house.',
      image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80',
    },
    {
      title: 'Modern Comfort',
      description: 'Enjoy contemporary amenities and thoughtful design throughout the property.',
      image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&q=80',
    },
    {
      title: 'Perfect Location',
      description: 'Explore Bota and Limbe with easy access to local attractions, restaurants, and activities.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'United States',
      text: 'Absolutely stunning property! The beach access and views were incredible. Our family had the most amazing week here.',
      rating: 5,
    },
    {
      name: 'Pierre Dubois',
      location: 'France',
      text: 'Perfect getaway spot. The house is even more beautiful in person. Highly recommend for anyone visiting Cameroon.',
      rating: 5,
    },
    {
      name: 'Amina Hassan',
      location: 'Nigeria',
      text: 'Best vacation rental we\'ve ever stayed at. Clean, comfortable, and the location is unbeatable. Will definitely return!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px]">
        <Image
          src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1600&q=80"
          alt="Bota Beach House"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Welcome to Paradise
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience the ultimate beach getaway at our luxurious beach house in Bota, Cameroon
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="btn-primary text-lg">
                Book Your Stay
              </Link>
              <Link href="/gallery" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 text-lg">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-primary-600 text-white">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold">4</div>
              <div className="text-sm opacity-90">Bedrooms</div>
            </div>
            <div>
              <div className="text-3xl font-bold">10</div>
              <div className="text-sm opacity-90">Guests</div>
            </div>
            <div>
              <div className="text-3xl font-bold">3</div>
              <div className="text-sm opacity-90">Bathrooms</div>
            </div>
            <div>
              <div className="text-3xl font-bold">★ 5.0</div>
              <div className="text-sm opacity-90">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Description */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Your Perfect Coastal Retreat</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nestled along the beautiful coastline of Bota, our beach house offers the perfect blend of 
              luxury and comfort. With direct beach access, modern amenities, and breathtaking ocean views, 
              this is your ideal destination for a memorable vacation. Whether you&apos;re planning a family 
              getaway, romantic retreat, or adventure with friends, our spacious property provides everything 
              you need for an unforgettable stay.
            </p>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-12">Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-3">{amenity.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{amenity.title}</h3>
                <p className="text-gray-600 text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="group">
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-12">Guest Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Book Your Stay?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don&apos;t miss out on the opportunity to experience this coastal paradise. 
            Contact us today to check availability and make your reservation.
          </p>
          <Link href="/booking" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg inline-block">
            Check Availability
          </Link>
        </div>
      </section>
    </div>
  );
}
