import Gallery from '@/components/Gallery';

export default function GalleryPage() {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h1 className="page-title">Photo Gallery</h1>
          <p className="page-subtitle">
            Explore our beautiful beach house and stunning surroundings
          </p>
        </div>
        <Gallery />
      </div>
    </div>
  );
}
