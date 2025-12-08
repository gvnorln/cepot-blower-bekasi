"use client";
import React, { useEffect, useState } from "react";

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

  // Lightbox
  function openLightbox(i) {
    setLightboxIndex(i);
    setLightboxOpen(true);
  }
  function closeLightbox() {
    setLightboxOpen(false);
  }
  function prevLightbox() {
    setLightboxIndex((p) => (p - 1 + photos.length) % photos.length);
  }
  function nextLightbox() {
    setLightboxIndex((p) => (p + 1) % photos.length);
  }

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
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
        <div className="rounded-3xl overflow-hidden relative shadow-xl">
          <div className="relative h-[25rem] sm:h-[30rem]">
            {photos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Hero"
                className={`absolute inset-0 w-full h-full object-cover duration-[1200ms] transition-opacity ${
                  i === heroIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 lg:px-20">
              <p className="bg-white/20 text-white px-3 py-1 rounded-full text-sm w-fit mb-4 backdrop-blur">
                Penyewaan Perlengkapan Event
              </p>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white max-w-xl leading-tight">
                Sewa AC, Blower, Lighting & Sound untuk Acara Profesional
              </h1>

              <p className="mt-4 text-white/90 max-w-md text-sm sm:text-base leading-relaxed">
                Unit berkualitas, instalasi rapi, tim handal—siap dukung acara
                Anda dengan pelayanan maksimal.
              </p>

              {/* <div className="flex gap-3 mt-6">
                <a
                  href="#catalog"
                  className="bg-white text-indigo-700 px-4 py-2 rounded-lg font-medium shadow hover:scale-105 transition"
                >
                  Lihat Katalog
                </a>
                <button
                  onClick={openWhatsApp}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-indigo-700 transition"
                >
                  Konsultasi WA
                </button>
              </div> */}
            </div>

            {/* hero metrics */}
            <div className="absolute bottom-6 left-20 flex gap-4">
              {[
                { label: "Acara", value: "1200+" },
                { label: "Unit", value: "300+" },
                { label: "Rating", value: "4.9★" },
              ].map((m, i) => (
                <div
                  key={i}
                  className="bg-white/10 border border-white/20 backdrop-blur px-4 py-2 rounded-xl text-white"
                >
                  <p className="text-xs">{m.label}</p>
                  <p className="font-semibold">{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-10">
        {/* HIGHLIGHT CARDS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: "Pengiriman Tepat Waktu",
              sub: "On-time delivery",
              gradient: "from-indigo-200 to-indigo-400",
            },
            {
              title: "Instalasi Profesional",
              sub: "Teknisi ahli",
              gradient: "from-emerald-200 to-emerald-400",
            },
            {
              title: "Unit Terawat Maksimal",
              sub: "Bersih & prima",
              gradient: "from-amber-200 to-amber-400",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="p-4 flex gap-4 bg-white/70 backdrop-blur border border-white/30 rounded-2xl shadow hover:shadow-md transition"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center font-bold text-white`}
              >
                {c.title[0]}
              </div>
              <div>
                <p className="text-gray-800 font-semibold">{c.title}</p>
                <p className="text-gray-500 text-sm">{c.sub}</p>
              </div>
            </div>
          ))}
        </section>

        {/* SERVICES + GALLERY */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* SERVICES (REDESIGNED) */}
          <div className="md:col-span-1 flex flex-col gap-6">
            {/* MAIN SERVICE CARD */}
            <div className="p-7 bg-white/75 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl">
              <h3 className="text-xl font-extrabold text-gray-900 mb-5 tracking-tight">
                Layanan Unggulan
              </h3>

              <div className="space-y-5">
                {[
                  {
                    icon: "❄️",
                    title: "Cooling & Ventilation",
                    desc: "AC Standing, Blower Embun, Misty Fan untuk semua skala event",
                  },
                  {
                    icon: "🎬",
                    title: "Lighting & Stage",
                    desc: "Lighting ambience, spotlight, dan penataan panggung profesional",
                  },
                  {
                    icon: "🔊",
                    title: "Sound & Power",
                    desc: "Sound system, kabel, teknisi onsite, hingga genset cadangan",
                  },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-3 rounded-xl bg-white/60 border border-white/40 shadow-sm hover:shadow-md transition"
                  >
                    <div className="text-2xl">{s.icon}</div>
                    <div>
                      <p className="font-semibold text-gray-900">{s.title}</p>
                      <p className="text-sm text-gray-600 leading-tight">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={openWhatsApp}
                className="mt-6 bg-indigo-600 w-full text-white py-2.5 rounded-xl font-medium hover:bg-indigo-700 transition shadow-md"
              >
                Konsultasi Gratis
              </button>
            </div>

            {/* NEW CONTENT – BENEFIT / WHY US (PREMIUM UI) */}
            {/* <div className="p-6 bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Kenapa Memilih Kami?
              </h3>

              <div className="space-y-4">
                {[
                  {
                    icon: "⚡",
                    title: "Respon Cepat",
                    desc: "Admin fast response dan teknisi standby 24/7.",
                  },
                  {
                    icon: "🧼",
                    title: "Unit Bersih & Terawat",
                    desc: "Selalu dilakukan perawatan rutin sebelum dikirim.",
                  },
                  {
                    icon: "📦",
                    title: "Pengiriman Tepat Waktu",
                    desc: "Tim logistik terlatih & selalu on schedule.",
                  },
                  {
                    icon: "💳",
                    title: "Harga Fleksibel",
                    desc: "Diskon khusus untuk event besar & repeat order.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-3 items-start p-3 rounded-xl hover:bg-white/80 transition"
                  >
                    <div className="text-xl">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-600 mt-0.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* GALLERY */}
          <div className="md:col-span-2 space-y-6">
            {/* TITLE */}
            <div className="p-6 bg-white/60 backdrop-blur-lg border border-white/40 rounded-2xl shadow">
              <h3 className="text-xl font-bold text-gray-800">
                Preview Perlengkapan
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Lihat beberapa contoh unit yang sering digunakan untuk event dan
                wedding.
              </p>
            </div>

            {/* GALLERY GRID */}
            <div className="p-6 bg-white/70 backdrop-blur border border-white/30 rounded-2xl shadow">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {photos.map((src, i) => (
                  <div
                    key={i}
                    className="group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
                    onClick={() => openLightbox(i)}
                  >
                    <div className="relative h-40 sm:h-44">
                      <img
                        src={src}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
                    </div>

                    <div className="p-2 bg-white/80 backdrop-blur text-center text-xs text-gray-600 border-t border-white/40">
                      Klik untuk melihat detail
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TESTIMONIAL CARD */}
            <div className="p-6 bg-white/70 backdrop-blur border border-white/30 rounded-2xl shadow flex flex-col">
              <h4 className="text-base font-semibold text-gray-800 mb-2">
                Ulasan Pelanggan
              </h4>

              <p className="italic text-gray-700 text-sm">
                “{testimonials[testIndex].text}”
              </p>
              <p className="text-xs text-gray-500 mt-2">
                — {testimonials[testIndex].name}
              </p>

              <div className="flex gap-2 mt-4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition ${
                      i === testIndex ? "bg-indigo-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= LIGHTBOX ================= */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            &times;
          </button>
          <button
            onClick={prevLightbox}
            className="absolute left-6 text-white text-3xl"
          >
            &#10094;
          </button>

          <div className="max-w-3xl max-h-[80vh]">
            <img
              src={photos[lightboxIndex]}
              className="w-full h-auto rounded-xl shadow-xl"
            />
            <p className="text-white text-center mt-3 text-sm">
              Foto {lightboxIndex + 1} / {photos.length}
            </p>
          </div>

          <button
            onClick={nextLightbox}
            className="absolute right-6 text-white text-3xl"
          >
            &#10095;
          </button>
        </div>
      )}

      {/* ================= FLOATING WA ================= */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-5 right-5 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="w-6 h-6"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 15a4 4 0 01-4 4H7l-4 2 2-4V7a4 4 0 014-4h10a4 4 0 014 4z"
          />
        </svg>
      </button>
    </>
  );
}
