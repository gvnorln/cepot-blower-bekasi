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
            </div>

            {/* hero metrics */}
            <div
              className="flex flex-wrap gap-4 
    w-full px-4 mt-4 sm:mt-0 
    sm:absolute sm:bottom-6 sm:left-20 sm:w-auto 
    justify-center sm:justify-start relative sm:relative"
            >
              {[
                { label: "Acara", value: "1200+" },
                { label: "Unit", value: "300+" },
                { label: "Rating", value: "4.9★" },
              ].map((m, i) => (
                <div
                  key={i}
                  className="bg-white/10 border border-white/20 backdrop-blur px-4 py-2 rounded-xl text-white text-center sm:text-left min-w-[70px]"
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
            <div
              className="p-8 h-full bg-gradient-to-br from-white/85 to-white/60 backdrop-blur-xl 
    border border-white/50 rounded-3xl shadow-[0_8px_25px_rgba(0,0,0,0.08)] 
    relative overflow-hidden"
            >
              {/* Decorative Glow */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-blue-300/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-indigo-300/25 rounded-full blur-2xl"></div>
              </div>

              <h3 className="text-2xl font-extrabold text-gray-900 mb-6 tracking-tight relative z-10">
                Layanan Kami
              </h3>

              <div className="space-y-2 relative z-10">
                {[
                  {
                    icon: "❄️",
                    title: "Sewa AC & Blower",
                    desc: "Unit dingin maksimal untuk event indoor maupun outdoor.",
                  },
                  {
                    icon: "⚙️",
                    title: "Perawatan Rutin",
                    desc: "Semua unit dicek & dibersihkan sebelum pengiriman.",
                  },
                  {
                    icon: "⚡",
                    title: "Instalasi Aman",
                    desc: "Pemasangan rapi, aman, dan sesuai standar teknis.",
                  },
                  {
                    icon: "🛠️",
                    title: "Teknisi Standby",
                    desc: "Monitoring selama acara untuk memastikan performa optimal.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/70 border border-white/60 
        shadow-sm hover:shadow-lg hover:bg-white/80 transition-all duration-300
        hover:-translate-y-[2px]"
                  >
                    <div className="text-3xl">{item.icon}</div>

                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-600 mt-0.5 leading-tight">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={openWhatsApp}
                className="mt-7 w-full py-3 rounded-xl font-semibold
      bg-indigo-600 text-white shadow-lg
      hover:bg-indigo-700 transition-all duration-300 
      hover:shadow-indigo-300/20 hover:-translate-y-[2px]
      relative z-10"
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
    </>
  );
}
