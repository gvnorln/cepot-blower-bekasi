"use client";
import React, { useState } from "react";

export default function ContactSection({ WHATSAPP_PHONE }) {
  const socials = [
    { name: "Instagram", icon: "📸", handle: "@cepot_blowerbekasi", link: "https://instagram.com/cepot_blowerbekasi" },
    { name: "TikTok", icon: "🎵", handle: "@cepot_blowerbekasi", link: "https://www.tiktok.com/@cepot_blowerbekasi" },
    { name: "Facebook", icon: "📘", handle: "@cepot_blowerbekasi", link: "https://facebook.com/cepot_blowerbekasi" },
  ];

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = () => {
    const text = `
Halo, saya ingin menghubungi Cepot Blower Bekasi.

Nama: ${name}
Pesan: ${message}
`;
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="mt-16 bg-gradient-to-br from-white to-gray-100 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">
          Hubungi Kami
        </h2>
        <p className="text-gray-600 text-center mt-2 text-sm sm:text-base max-w-xl mx-auto">
          Butuh penawaran cepat? Kami siap membantu kebutuhan event Anda kapan saja.
        </p>

        {/* Main Card */}
        <div className="grid md:grid-cols-2 gap-10 mt-12">

          {/* Left: Contact & Socials */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col gap-6">
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-1">Informasi Kontak</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Silakan hubungi kami melalui WhatsApp atau sosial media berikut.
              </p>
            </div>

            {/* CTA WhatsApp Single Button */}
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 transition-colors text-white font-semibold px-6 py-3 rounded-xl shadow-md text-sm"
            >
              <span className="text-lg">💬</span> Hubungi via WhatsApp
            </button>

            {/* Social Media */}
            <div>
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Social Media</h5>
              <div className="flex flex-col gap-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition text-sm"
                  >
                    <span className="text-lg">{s.icon}</span>
                    <span className="font-medium">{s.name}</span>
                    <span className="opacity-70">{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="text-sm text-gray-600 space-y-1 pt-2">
              <p>🌐 Website: <a href="https://www.cepotblowerbekasi.com" target="_blank" className="text-indigo-600 hover:underline">www.cepotblowerbekasi.com</a></p>
              <p>📍 Alamat: Jln. Pansor Rawa Gede Bojong Menteng, Rawa Lumbu, Bekasi RT.01/RW.02 (Gang Aki)</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col gap-5">
            <h4 className="text-xl font-bold text-gray-800">Kirim Pesan Cepat</h4>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none text-sm"
              placeholder="Nama Anda"
            />

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none resize-none text-sm"
              rows={5}
              placeholder="Pesan Anda..."
            />

            {/* Single CTA Button */}
            <button
              onClick={handleWhatsApp}
              className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl shadow-md transition text-sm"
            >
              Kirim Pesan via WhatsApp
            </button>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Cepot Blower Bekasi. All rights reserved.
        </div>

      </div>
    </section>
  );
}
