import React, { useState } from "react";

interface GalleryProps {
  images: string[]; // Array of image URLs
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (src: string) => {
    setSelectedImage(src);
  };

  const closeImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage(null);
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery image ${index + 1}`}
            className="rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => openImage(src)}
          />
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-3/4 max-w-4xl"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-white text-black rounded-full p-2 hover:bg-gray-300 transition-colors"
              onClick={closeImage}
              aria-label="Close image"
            >
              ✕
            </button>

            {/* Selected Image */}
            <img
              src={selectedImage}
              alt="Selected in gallery"
              className="max-w-full max-h-screen rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
