import Image from 'next/image';

export default function AreaPage() {
  const attractions = [
    {
      name: 'Limbe Beach',
      description: 'Black volcanic sand beaches perfect for swimming, sunbathing, and beach activities.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      distance: '5 km',
    },
    {
      name: 'Mount Cameroon',
      description: 'An active volcano and the highest peak in West Africa, offering challenging hiking trails.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      distance: '15 km',
    },
    {
      name: 'Limbe Wildlife Centre',
      description: 'Home to rescued primates and other wildlife, dedicated to conservation and education.',
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80',
      distance: '8 km',
    },
    {
      name: 'Botanical Garden',
      description: 'Historic gardens featuring diverse tropical plants and peaceful walking paths.',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
      distance: '7 km',
    },
    {
      name: 'Seme Beach',
      description: 'Picturesque beach known for its scenic beauty and seafood restaurants.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      distance: '3 km',
    },
    {
      name: 'Bimbia Slave Trade Village',
      description: 'Historical site commemorating the transatlantic slave trade with museum and ruins.',
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80',
      distance: '12 km',
    },
  ];

  const activities = [
    {
      icon: '🏊',
      title: 'Swimming',
      description: 'Enjoy the warm waters of the Atlantic Ocean at our pristine beach.',
    },
    {
      icon: '🎣',
      title: 'Fishing',
      description: 'Try your hand at fishing with local fishermen or from the shore.',
    },
    {
      icon: '🥾',
      title: 'Hiking',
      description: 'Trek up Mount Cameroon or explore coastal trails with stunning views.',
    },
    {
      icon: '🤿',
      title: 'Snorkeling',
      description: 'Discover marine life in the clear coastal waters.',
    },
    {
      icon: '🚣',
      title: 'Boat Tours',
      description: 'Take a boat trip along the coast or to nearby islands.',
    },
    {
      icon: '🍽️',
      title: 'Local Cuisine',
      description: 'Sample fresh seafood and traditional Cameroonian dishes.',
    },
    {
      icon: '📸',
      title: 'Photography',
      description: 'Capture stunning sunsets, beaches, and volcanic landscapes.',
    },
    {
      icon: '🛍️',
      title: 'Shopping',
      description: 'Browse local markets for crafts, art, and souvenirs.',
    },
  ];

  const restaurants = [
    {
      name: 'Bay Hotel Restaurant',
      cuisine: 'International & Local',
      description: 'Upscale dining with ocean views',
    },
    {
      name: 'Fisherman\'s Kitchen',
      cuisine: 'Seafood',
      description: 'Fresh catch of the day, beachside dining',
    },
    {
      name: 'African Pot',
      cuisine: 'Cameroonian',
      description: 'Traditional local dishes and grilled specialties',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-primary-600">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
          alt="Bota, Cameroon"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Discover Bota</h1>
            <p className="text-xl md:text-2xl">Where the Atlantic meets paradise</p>
          </div>
        </div>
      </section>

      {/* About Bota */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Bota</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Bota is a picturesque coastal village located in the Limbe subdivision of Cameroon's 
                  Southwest Region. Known for its stunning black volcanic sand beaches and proximity to 
                  Mount Cameroon, Bota offers a unique blend of natural beauty and cultural richness.
                </p>
                <p>
                  The area is characterized by its tropical climate, lush vegetation, and warm, welcoming 
                  local communities. The Atlantic Ocean provides a constant backdrop of waves and sea breezes, 
                  making it an ideal destination for beach lovers and nature enthusiasts.
                </p>
                <p>
                  With easy access to Limbe town and its attractions, Bota serves as a perfect base for 
                  exploring the region's diverse offerings, from wildlife sanctuaries to historical sites, 
                  all while enjoying the tranquility of a beachfront location.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80"
                alt="Bota Beach"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local Attractions */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-12">Local Attractions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{attraction.name}</h3>
                    <span className="text-sm text-primary-600 font-medium">{attraction.distance}</span>
                  </div>
                  <p className="text-gray-600">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-12">Things to Do</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-5xl mb-4">{activity.icon}</div>
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-12">Where to Eat</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{restaurant.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{restaurant.cuisine}</p>
                <p className="text-gray-600">{restaurant.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-12">Getting to Bota</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <svg className="w-8 h-8 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  By Air
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Fly to Douala International Airport (DLA)</li>
                  <li>• Take a taxi or private transfer to Limbe (1.5-2 hours)</li>
                  <li>• Continue to Bota (10-15 minutes from Limbe)</li>
                </ul>
              </div>

              <div className="bg-primary-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <svg className="w-8 h-8 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  By Road
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Well-paved roads from Douala to Limbe</li>
                  <li>• Car rentals available at Douala Airport</li>
                  <li>• Taxi services readily available</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-sand-50 p-8 rounded-lg border-2 border-sand-200">
              <h3 className="text-xl font-bold mb-4">Local Transportation Tips</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Motorcycle taxis (okadas) are common for short distances</li>
                <li>• Arrange airport transfers in advance for convenience</li>
                <li>• Car rental with driver recommended for exploring the region</li>
                <li>• Our team can help arrange reliable transportation services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-8">Location</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="font-medium">Bota Beach House</p>
                  <p className="text-sm">Bota, Limbe, Southwest Region, Cameroon</p>
                  <p className="text-xs mt-2 text-gray-400">
                    (Interactive map can be embedded here using Google Maps or Mapbox)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
