"use client";
import React, { useState } from "react";

export default function ContactSection() {
  const WHATSAPP_PHONE = "6281298229660"; // nomor tujuan WA

  const socials = [
    {
      name: "Instagram",
      icon: "📸",
      handle: "@cepot_blowerbekasi",
      link: "https://instagram.com/cepot_blowerbekasi",
    },
    {
      name: "TikTok",
      icon: "🎵",
      handle: "@cepot_blowerbekasi",
      link: "https://www.tiktok.com/@cepot_blowerbekasi",
    },
    {
      name: "Facebook",
      icon: "📘",
      handle: "@cepot_blowerbekasi",
      link: "https://facebook.com/cepot_blowerbekasi",
    },
  ];

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = () => {
    const text = `
Halo, saya ingin menghubungi Cepot Blower Bekasi.

Nama: ${name}
Pesan: ${message}
`;
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="
    px-4 sm:px-6 lg:px-12 py-10
    bg-linear-to-br from-[#faf7f2] via-[#ffffff] to-[#f3efe7]
    rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.06)]
    border border-[#e9e2d4]/60
    "
    >
      <div className="max-w-[1750px] mx-auto px-4 sm:px-8 lg:px-14">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">
          Hubungi <span className="text-indigo-600">Kami</span>
        </h3>
        <p className="text-gray-600 text-center mt-3 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Tim kami siap merespons cepat kebutuhan event Anda dengan layanan
          profesional.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-5">
          {/* Left */}
          <div className="p-10 rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] flex flex-col gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 tracking-tight">
                Informasi Kontak
              </h4>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                Tersedia 24/7 untuk pemesanan, konsultasi, dan penawaran cepat.
              </p>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-gray-700 mb-3">
                Sosial Media
              </h5>
              <div className="flex flex-col gap-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition text-sm"
                  >
                    <span className="text-lg">{s.icon}</span>
                    <span className="font-medium">{s.name}</span>
                    <span className="opacity-70">{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="text-sm text-gray-600 space-y-1 pt-2">
              <p>
                🌐 Website:{" "}
                <a
                  href="https://www.cepotblowerbekasi.com"
                  target="_blank"
                  className="text-indigo-600 hover:underline"
                >
                  www.cepotblowerbekasi.com
                </a>
              </p>
              <p>
                📍 Jln. Pansor Rawa Gede Bojong Menteng, Rawa Lumbu, Bekasi
                RT.01/RW.02 (Gang Aki)
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="p-10 rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] flex flex-col gap-6">
            <h4 className="text-xl font-semibold text-gray-900 tracking-tight">
              Kirim Pesan Cepat
            </h4>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-indigo-400 bg-white/80 backdrop-blur-sm focus:outline-none text-sm transition"
              placeholder="Nama Anda"
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-indigo-400 bg-white/80 backdrop-blur-sm resize-none text-sm transition"
              rows={5}
              placeholder="Pesan Anda..."
            />

            <button
              onClick={handleWhatsApp}
              className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl shadow-[0_10px_25px_rgba(79,70,229,0.25)] transition text-sm"
            >
              Kirim Pesan via WhatsApp
            </button>
          </div>
        </div>

        <div className="mt-20 border-t border-gray-300/50 pt-6 text-center text-gray-500 text-xs tracking-wide">
          &copy; {new Date().getFullYear()} Cepot Blower Bekasi. All rights
          reserved.
        </div>
      </div>
    </section>
  );
}
