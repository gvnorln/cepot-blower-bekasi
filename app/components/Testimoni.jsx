"use client";
import React, { useState, useRef, useEffect } from "react";

const testimonials = [
  { name: "Rina (Wedding Client)", text: "Layanan cepat dan unit AC sangat membantu untuk tamu kami. Professional team!" },
  { name: "Budi (Event Organizer)", text: "Komunikasi lancar, pengiriman tepat waktu, dan instalasi rapi. Recommended." },
  { name: "Sari (Konser Lokal)", text: "Sound system memuaskan — suara kuat dan jernih. Terima kasih timnya!" },
  { name: "Ahmad (Corporate Event)", text: "AC dan lighting bekerja sempurna, membuat acara perusahaan kami berjalan lancar." },
  { name: "Dewi (Birthday Party)", text: "Tim sangat ramah dan profesional. Semua perlengkapan datang tepat waktu." },
  { name: "Fajar (Festival Musik)", text: "Sound system luar biasa, bass dan treble seimbang. Sangat puas!" },
];

export default function Testimoni() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(prevIndex);
    scrollToIndex(prevIndex);
  };

  const scrollToIndex = (index) => {
    const container = carouselRef.current;
    if (!container) return;
    const card = container.children[index];
    container.scrollTo({
      left: card.offsetLeft - (container.offsetWidth - card.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  // Swipe support
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);
  const handleTouchStart = (e) => (touchStartRef.current = e.targetTouches[0].clientX);
  const handleTouchMove = (e) => (touchEndRef.current = e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    const diff = touchStartRef.current - touchEndRef.current;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
  };

  return (
    <section
      id="testimoni"
      className="relative w-full py-28 px-4 sm:px-12 lg:px-24 bg-linear-to-b from-[#0c0b1b] via-[#201f38] to-[#13112a] text-white overflow-hidden rounded-3xl "
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-linear-to-r from-[#f5e6d3] via-[#ffffff] to-[#dcc7a1]">
          Apa Kata Klien Kami
        </h2>
        <p className="text-white/60 text-sm sm:text-base leading-relaxed">
          Klien kami percaya pada kualitas dan layanan profesional yang kami berikan. Berikut beberapa testimoni dari mereka.
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4"
      >
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className={`snap-center shrink-0 w-full sm:w-[45%] md:w-[30%] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl transition-transform duration-500 transform hover:scale-105 hover:shadow-3xl`}
          >
            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-4">
              "{t.text}"
            </p>
            <p className="text-white/70 text-sm font-semibold text-right">
              — {t.name}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx);
              scrollToIndex(idx);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 transform ${
              idx === currentIndex ? "bg-white/90 scale-125" : "bg-white/40 scale-100"
            }`}
            aria-label={`Tampilkan testimonial ${idx + 1}`}
          />
        ))}
      </div>

      {/* Decorative Glows */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-purple-400/10 blur-[180px] sm:blur-[220px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-72 h-72 sm:w-[420px] sm:h-[420px] rounded-full bg-yellow-300/10 blur-[180px] sm:blur-[220px]" />
      <div className="pointer-events-none absolute top-1/2 -right-36 w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-pink-400/10 blur-[160px] sm:blur-[180px] translate-y-[-50%]" />
    </section>
  );
}
