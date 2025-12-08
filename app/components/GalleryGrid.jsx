"use client";

import { useState } from "react";
import Image from "next/image";
import { events } from "../../data/events";

export default function GalleryMasonryGlassBackground() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (event, index = 0) => {
    setCurrentEvent(event);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const prevPhoto = () => {
    if (!currentEvent) return;
    setCurrentIndex(
      (currentIndex - 1 + currentEvent.photos.length) % currentEvent.photos.length
    );
  };

  const nextPhoto = () => {
    if (!currentEvent) return;
    setCurrentIndex((currentIndex + 1) % currentEvent.photos.length);
  };

  const heights = ["h-48", "h-56", "h-64", "h-52", "h-60", "h-44", "h-50", "h-58"];

  return (
    <section id="gallery" className="mt-12 px-2 sm:px-4 lg:px-0 relative">
      
      {/* Background Section */}
      <div className="absolute inset-0 z-10"></div>

      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Gallery Events
      </h2>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 relative z-10">
        {events.map((event, i) => (
          <div
            key={event.id}
            className={`relative mb-6 break-inside-avoid cursor-pointer group overflow-hidden rounded-3xl transition-transform duration-300 hover:scale-105`}
            onClick={() => openLightbox(event)}
          >
            {/* Glass background */}
            <div className="absolute inset-0 rounded-3xl bg-white/20 backdrop-blur-md shadow-lg"></div>

            {/* Glass info tag */}
            <div className="absolute top-3 left-3 z-10 bg-white/30 backdrop-blur-md text-gray-900 dark:text-white text-xs px-3 py-1 rounded-xl font-medium shadow-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              {event.title} — {event.photos.length} foto
            </div>

            {/* Thumbnail utama */}
            <Image
              src={event.photos[0]}
              alt={`${event.title} Foto 1`}
              width={600}
              height={400}
              className={`relative w-full object-cover rounded-3xl shadow-md transition-transform duration-500 group-hover:scale-110 ${heights[i % heights.length]}`}
            />

            {/* Mini thumbnails */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {event.photos.slice(0, 3).map((photo, idx) => (
                <Image
                  key={idx}
                  src={photo}
                  alt={`${event.title} Foto ${idx + 1}`}
                  width={50}
                  height={50}
                  className="rounded-md border-2 border-white object-cover shadow-sm"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && currentEvent && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-5 right-5 text-white text-4xl font-bold hover:text-red-500 transition-colors"
            onClick={closeLightbox}
          >
            &times;
          </button>

          <button
            className="absolute left-5 text-white text-4xl font-bold hover:text-gray-400 transition-colors"
            onClick={prevPhoto}
          >
            &#10094;
          </button>

          <div className="max-w-3xl max-h-[80vh] flex flex-col items-center">
            <div className="bg-white/30 backdrop-blur-md text-gray-900 dark:text-white text-sm px-3 py-1 rounded-xl mb-3 shadow-sm">
              {currentEvent.title} — Foto {currentIndex + 1}/{currentEvent.photos.length}
            </div>

            <Image
              src={currentEvent.photos[currentIndex]}
              alt={`${currentEvent.title} Foto ${currentIndex + 1}`}
              width={900}
              height={700}
              className="object-contain w-full h-full rounded-3xl shadow-xl"
            />
          </div>

          <button
            className="absolute right-5 text-white text-4xl font-bold hover:text-gray-400 transition-colors"
            onClick={nextPhoto}
          >
            &#10095;
          </button>
        </div>
      )}
    </section>
  );
}
