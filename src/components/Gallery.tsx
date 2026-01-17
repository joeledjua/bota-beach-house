'use client';

import Image from 'next/image';
import { useState } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface GalleryProps {
  images?: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  const defaultImages: GalleryImage[] = [
    { src: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80', alt: 'Beach View', category: 'Exterior' },
    { src: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&q=80', alt: 'Living Room', category: 'Interior' },
    { src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=80', alt: 'Bedroom', category: 'Interior' },
    { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80', alt: 'Beach House Exterior', category: 'Exterior' },
    { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80', alt: 'Kitchen', category: 'Interior' },
    { src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80', alt: 'Bathroom', category: 'Interior' },
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80', alt: 'Ocean View', category: 'Views' },
    { src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80', alt: 'Sunset Beach', category: 'Views' },
    { src: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80', alt: 'Pool Area', category: 'Amenities' },
    { src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80', alt: 'Dining Area', category: 'Interior' },
    { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80', alt: 'House Front', category: 'Exterior' },
    { src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80', alt: 'Terrace', category: 'Amenities' },
  ];

  const galleryImages = images || defaultImages;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filter === category
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="relative h-64 cursor-pointer group overflow-hidden rounded-lg"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <p className="text-white text-sm font-medium">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            aria-label="Close"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-white hover:text-gray-300 z-10"
            aria-label="Previous"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-white hover:text-gray-300 z-10"
            aria-label="Next"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
            {selectedImage + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </>
  );
}
