"use client";
import React, { useEffect, useState, useCallback } from "react";

export default function HeroSection() {
  const photos = [
    "/kursi-futura.png",
    "/kipas-blower-embun.png",
    "/ac-standing-5pk.png",
  ];

  const [heroIndex, setHeroIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const testimonials = [
    {
      name: "Rina (Wedding Client)",
      text: "Layanan cepat dan unit AC sangat membantu untuk tamu kami. Professional team!",
    },
    {
      name: "Budi (Event Organizer)",
      text: "Komunikasi lancar, pengiriman tepat waktu, dan instalasi rapi. Recommended.",
    },
    {
      name: "Sari (Konser Lokal)",
      text: "Sound system memuaskan — suara kuat dan jernih. Terima kasih timnya!",
    },
  ];
  const [testIndex, setTestIndex] = useState(0);

  // Auto slide hero & testimonial
  useEffect(() => {
    const t = setInterval(
      () => setHeroIndex((p) => (p + 1) % photos.length),
      4500
    );
    const tt = setInterval(
      () => setTestIndex((p) => (p + 1) % testimonials.length),
      4800
    );
    return () => {
      clearInterval(t);
      clearInterval(tt);
    };
  }, []);

  // Lightbox handlers
  const openLightbox = useCallback((i) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const prevLightbox = useCallback(() => {
    setLightboxIndex((p) => (p - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const nextLightbox = useCallback(() => {
    setLightboxIndex((p) => (p + 1) % photos.length);
  }, [photos.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    function onKey(e) {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
      if (e.key === "ArrowRight") nextLightbox();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, closeLightbox, prevLightbox, nextLightbox]);

  const WA_PHONE = "6281298229660";
  function openWhatsApp() {
    const text = encodeURIComponent(
      "Halo, saya ingin konsultasi sewa perlengkapan event."
    );
    window.open(`https://wa.me/${WA_PHONE}?text=${text}`, "_blank");
  }

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="
          relative w-full overflow-hidden
          bg-linear-to-b 
          from-[#0f0c29] via-[#302b63] to-[#24243e]
        "
      >
        {/* Slideshow images */}
        <div className="absolute inset-0">
          {photos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Hero ${i + 1}`}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-[cubic-bezier(.2,.9,.2,1)] transform-gpu ${
                i === heroIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
              style={{ willChange: "opacity, transform" }}
            />
          ))}

          {/* Overlays */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/45 to-black/20" />
            <div className="absolute -left-32 -top-24 w-96 h-96 rounded-full bg-[rgba(255,215,160,0.12)] blur-[110px]" />
            <div className="absolute -right-40 bottom-0 w-[420px] h-[420px] rounded-full bg-[rgba(160,140,255,0.14)] blur-[140px]" />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black/40 to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16 py-6 sm:py-8 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT */}
            <div className="flex flex-col gap-4 md:gap-5">
              <div
                className="
                  inline-block rounded-full
                  bg-white/5 backdrop-blur-xl border border-white/20
                  px-3 py-1 text-[11px] sm:text-xs text-white/95 w-fit
                  shadow-[0_0_12px_rgba(255,255,255,0.08)]
                "
              >
                Penyewaan Perlengkapan Event
              </div>

              <h1
                className="
                  text-transparent bg-clip-text
                  bg-linear-to-r from-[#f6e7d4] via-white to-[#dcc7a1]
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold
                  leading-snug drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)]
                "
              >
                Sewa AC, Blower, Lighting & Sound untuk Acara Profesional
              </h1>

              <p className="text-white/85 text-xs sm:text-sm md:text-base max-w-lg leading-relaxed">
                Unit berkualitas, instalasi rapi, tim handal. Siap mendukung
                acara besar Anda dengan layanan terbaik.
              </p>

              <div className="flex flex-wrap gap-3 items-center mt-2">
                <button
                  onClick={openWhatsApp}
                  className="
                    rounded-full px-5 py-2.5 sm:px-6 sm:py-3 font-semibold text-gray-900
                    bg-linear-to-r from-[#f5e6d3] to-[#e8d5b5]
                    shadow-[0_8px_22px_rgba(0,0,0,0.25)]
                    hover:shadow-[0_12px_28px_rgba(0,0,0,0.35)]
                    hover:scale-[1.03] transition
                  "
                >
                  Konsultasi Gratis
                </button>

                <a
                  href="#services"
                  className="rounded-full px-3 py-2 text-sm bg-white/5 border border-white/10 text-white/90 hover:bg-white/10 transition"
                >
                  Lihat Layanan
                </a>
              </div>

              {/* Metrics */}
              <div className="hidden md:flex gap-3 mt-4">
                {[
                  { label: "Acara", value: "1200+" },
                  { label: "Unit", value: "300+" },
                  { label: "Rating", value: "4.9★" },
                ].map((m, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center min-w-[84px] px-3 py-2 rounded-2xl bg-white/6 backdrop-blur-md border border-white/10 text-white text-center shadow-sm"
                  >
                    <p className="text-[11px] opacity-90">{m.label}</p>
                    <p className="font-semibold mt-1">{m.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Preview Perlengkapan */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden bg-white/6 backdrop-blur border border-white/8 shadow-xl p-3 sm:p-4">
                
                {/* MOBILE: horizontal carousel */}
                <div className="sm:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-none py-1">
                  {photos.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => openLightbox(i)}
                      className="snap-center flex-shrink-0 relative rounded-2xl overflow-hidden w-40 h-40"
                    >
                      <img
                        src={src}
                        alt={`Equipment ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* DESKTOP: grid */}
                <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                  {photos.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => openLightbox(i)}
                      className="group relative rounded-xl overflow-hidden w-full h-36 md:h-28 lg:h-32"
                    >
                      <img
                        src={src}
                        alt={`Equipment ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
                    </button>
                  ))}
                </div>

                <div className="mt-3 px-1 sm:px-2">
                  <h3 className="text-white font-semibold text-sm">
                    Preview Perlengkapan
                  </h3>
                  <p className="text-xs text-white/80 mt-1">
                    Klik gambar untuk memperbesar. Cocok untuk wedding, konser,
                    dan event outdoor.
                  </p>

                  <div className="mt-3 grid grid-cols-1 gap-2.5">
                    {[
                      { icon: "❄️", title: "Sewa AC & Blower" },
                      { icon: "⚡", title: "Lighting & Sound" },
                      { icon: "🛠️", title: "Instalasi Profesional" },
                    ].map((it, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 bg-white/4 border border-white/6 rounded-xl p-2.5"
                      >
                        <div className="text-base">{it.icon}</div>
                        <p className="text-white/95 font-medium text-xs sm:text-sm">
                          {it.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -right-6 top-4 w-20 h-20 sm:w-24 sm:h-24 rounded-full blur-3xl bg-purple-300/12" />
            </div>
          </div>
        </div>

        {/* Metrics mobile */}
        <div className="md:hidden px-4 sm:px-6 pb-6 z-10 relative">
          <div className="flex gap-3 justify-center">
            {[
              { label: "Acara", value: "1200+" },
              { label: "Unit", value: "300+" },
              { label: "Rating", value: "4.9★" },
            ].map((m, i) => (
              <div
                key={i}
                className="bg-white/6 backdrop-blur px-3 py-2 rounded-xl text-white text-center min-w-[68px] border border-white/10"
              >
                <p className="text-xs leading-tight">{m.label}</p>
                <p className="font-semibold mt-1">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-3xl bg-white/6 rounded-full w-10 h-10 flex items-center justify-center border border-white/10"
            aria-label="Tutup"
          >
            &times;
          </button>

          <button
            onClick={prevLightbox}
            className="absolute left-4 sm:left-6 text-white text-2xl bg-white/6 rounded-full w-10 h-10 flex items-center justify-center border border-white/10"
            aria-label="Sebelumnya"
          >
            &#10094;
          </button>

          <div className="max-w-4xl max-h-[86vh] w-full">
            <img
              src={photos[lightboxIndex]}
              alt={`Foto ${lightboxIndex + 1}`}
              className="w-full h-auto rounded-xl shadow-xl object-contain"
              loading="lazy"
            />
            <p className="text-white text-center mt-3 text-sm">
              Foto {lightboxIndex + 1} / {photos.length}
            </p>
          </div>

          <button
            onClick={nextLightbox}
            className="absolute right-4 sm:right-6 text-white text-2xl bg-white/6 rounded-full w-10 h-10 flex items-center justify-center border border-white/10"
            aria-label="Selanjutnya"
          >
            &#10095;
          </button>
        </div>
      )}
    </>
  );
}
