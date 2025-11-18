"use client";
import React from "react";

export default function ContactSection({ WHATSAPP_PHONE }) {
  const socials = [
    { name: "Instagram", icon: "📸", handle: "@cepot_blowerbekasi", link: "https://instagram.com/cepot_blowerbekasi" },
    { name: "TikTok", icon: "🎵", handle: "@cepot_blowerbekasi", link: "https://www.tiktok.com/@cepot_blowerbekasi" },
    { name: "Facebook", icon: "📘", handle: "@cepot_blowerbekasi", link: "https://facebook.com/cepot_blowerbekasi" },
  ];

  return (
    <section id="contact" className="mt-10 bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">

        {/* Kontak & Socials */}
        <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-gray-800 mb-2">Kontak Kami</h4>
            <p className="text-gray-600 mb-4 text-sm">
              Hubungi kami untuk penawaran atau pemesanan. Kami siap membantu Anda!
            </p>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 transition-colors text-white font-medium px-6 py-3 rounded-lg shadow-md"
            >
              <span className="text-xl">💬</span> Chat WhatsApp
            </a>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-medium text-gray-700 mb-2">Social Media</h5>
              <div className="flex flex-col gap-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition text-sm"
                  >
                    <span className="text-lg">{s.icon}</span> <span className="font-medium">{s.name}</span> {s.handle}
                  </a>
                ))}
              </div>
            </div>

            {/* Website & Alamat */}
            <div className="mt-6 text-sm text-gray-600 space-y-1">
              <p>🌐 Website: <a href="https://www.cepotblowerbekasi.com" target="_blank" className="text-indigo-600 hover:underline">www.cepotblowerbekasi.com</a></p>
              <p>📍 Alamat: Jln. Pansor Rawa Gede Bojong Menteng, Rawa Lumbu, Bekasi RT.01/RW.02 (Gang Aki)</p>
            </div>
          </div>
        </div>

        {/* Form Kirim Pesan */}
        <form className="bg-white p-8 rounded-2xl shadow-xl flex flex-col gap-4">
          <h4 className="text-2xl font-bold text-gray-800 mb-4">Kirim Pesan</h4>

          <input
            className="border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition text-sm"
            placeholder="Nama"
            required
          />
          <input
            type="email"
            className="border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition text-sm"
            placeholder="Email"
            required
          />
          <textarea
            className="border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition resize-none text-sm"
            rows={5}
            placeholder="Pesan..."
            required
          />
          <button
            type="submit"
            className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
          >
            Kirim
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Cepot Blower Bekasi. All rights reserved.
      </div>
    </section>
  );
}
