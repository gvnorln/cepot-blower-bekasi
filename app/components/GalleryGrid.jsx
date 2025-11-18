"use client";

import { useState } from "react";
import Image from "next/image";
import { photos } from "../../data/photos";

export default function GalleryGrid() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const prevPhoto = () => setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  const nextPhoto = () => setCurrentIndex((currentIndex + 1) % photos.length);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300 group cursor-pointer"
            onClick={() => openLightbox(i)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <p className="text-white text-center text-sm px-2">{photo.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold"
            onClick={closeLightbox}
          >
            &times;
          </button>

          <button
            className="absolute left-5 text-white text-3xl font-bold"
            onClick={prevPhoto}
          >
            &#10094;
          </button>

          <div className="max-w-3xl max-h-[80vh] overflow-hidden">
            <Image
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              width={800}
              height={600}
              className="object-contain w-full h-full rounded-xl"
            />
            <p className="text-white text-center mt-2">{photos[currentIndex].alt}</p>
          </div>

          <button
            className="absolute right-5 text-white text-3xl font-bold"
            onClick={nextPhoto}
          >
            &#10095;
          </button>
        </div>
      )}
    </>
  );
}
