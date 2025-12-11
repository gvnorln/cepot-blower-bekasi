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
      (currentIndex - 1 + currentEvent.photos.length) %
        currentEvent.photos.length
    );
  };

  const nextPhoto = () => {
    if (!currentEvent) return;
    setCurrentIndex((currentIndex + 1) % currentEvent.photos.length);
  };

  return (
    <section
      id="gallery"
      className="
    px-4 sm:px-6 lg:px-12 py-10
    bg-linear-to-br from-[#faf7f2] via-[#ffffff] to-[#f3efe7]
    rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.06)]
    border border-[#e9e2d4]/60
  "
    >
      {/* Header */}
      <div className="mb-4 text-center">
        {/* Header */}
        <h3
          className="
    text-3xl sm:text-4xl font-bold text-center
    bg-linear-to-r from-[#1f1b16] to-[#3b2d23]
    bg-clip-text text-transparent pt-1.5 pb-1.5
  "
        >
          Galeri <span className="text-indigo-600">Cepot Blower Bekasi</span>
        </h3>
         <p className=" text-sm text-gray-500">
          Events dan dokumentasi foto Cepot Blower Bekasi dalam berbagai acara
        </p>
      </div>

      {/* Container lebih lebar */}
      <div className="py-6 max-w-[1850px] mx-auto columns-1 sm:columns-2 lg:columns-3 gap-8 relative z-10">
        {events.map((event) => (
          <div
            key={event.id}
            className="
              relative mb-8 break-inside-avoid cursor-pointer
              group overflow-hidden rounded-3xl shadow-2xl
              transition-transform duration-500
              hover:scale-[1.04] hover:shadow-indigo-300/30
            "
            onClick={() => openLightbox(event)}
          >
            {/* Glass background */}
            <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-white/20 via-white/10 to-white/5 backdrop-blur-2xl shadow-inner shadow-indigo-100/20"></div>

            {/* Tag title */}
            <div
              className="
                absolute top-3 left-3 z-10 bg-white/30 backdrop-blur-md
                text-gray-900 text-xs font-semibold px-3 py-1 rounded-lg shadow
                transition-all duration-300 group-hover:bg-white/70
              "
            >
              {event.title} — {event.photos.length} foto
            </div>

            {/* Main image */}
            <Image
              src={event.photos[0]}
              alt={`${event.title} Foto 1`}
              width={1000}
              height={650}
              className="
                relative w-full h-[360px] object-cover rounded-3xl shadow-lg
                transition-transform duration-700
                group-hover:scale-110 group-hover:brightness-110
              "
            />

            {/* Mini thumbnails hover */}
            <div
              className="
                absolute bottom-3 left-1/2 -translate-x-1/2
                flex space-x-1 opacity-0 group-hover:opacity-100
                transition-opacity duration-300
              "
            >
              {event.photos.slice(0, 3).map((photo, idx) => (
                <Image
                  key={idx}
                  src={photo}
                  alt={`${event.title} Foto ${idx + 1}`}
                  width={50}
                  height={50}
                  className="
                    rounded-md border border-white/50 object-cover shadow-md
                    transition-transform duration-300 hover:scale-110
                  "
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && currentEvent && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center px-4 py-8">
          <button
            className="absolute top-6 right-6 text-white text-5xl font-bold hover:text-indigo-400 transition-colors"
            onClick={closeLightbox}
          >
            &times;
          </button>

          <button
            className="absolute left-6 text-white text-4xl font-bold hover:text-indigo-300 transition-colors"
            onClick={prevPhoto}
          >
            &#10094;
          </button>

          <div className="max-w-[1600px] max-h-[85vh] flex flex-col items-center">
            <div className="bg-white/20 backdrop-blur-md text-white text-sm px-4 py-1 rounded-lg mb-4 shadow-md">
              {currentEvent.title} — Foto {currentIndex + 1}/
              {currentEvent.photos.length}
            </div>

            <Image
              src={currentEvent.photos[currentIndex]}
              alt={`${currentEvent.title} Foto ${currentIndex + 1}`}
              width={1600}
              height={1100}
              className="object-contain w-full h-full rounded-2xl shadow-2xl"
            />
          </div>

          <button
            className="absolute right-6 text-white text-4xl font-bold hover:text-indigo-300 transition-colors"
            onClick={nextPhoto}
          >
            &#10095;
          </button>
        </div>
      )}
    </section>
  );
}
