"use client";
import React, { useState, useEffect } from "react";

export default function HeroSection({
  query,
  setQuery,
  category,
  setCategory,
  categories,
  maxPrice,
  setMaxPrice,
}) {
  const photos = [
    "/kursi-futura.png",
    "/kipas-blower-embun.png",
    "/ac-standing-5pk.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* BANNER IMAGE */}
      <div className="w-full h-96 sm:h-[26rem] relative mb-8">
        <img
          src="/home.jpg"
          alt="Banner Cepot Blower Bekasi"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-10 px-4 sm:px-6 lg:px-8">
        {/* LEFT SIDE */}
        <div className="md:col-span-2 flex flex-col gap-4">
          {/* SEARCH BOX */}
          <div className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 flex flex-col gap-4">
            {/* Title */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                Cari Perlengkapan Event
              </h2>
              <p className="text-sm text-gray-500">
                Search, pilih kategori, atau atur batas harga.
              </p>
            </div>

            {/* Search Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari produk..."
                className="col-span-2 sm:col-span-2 border border-gray-200 rounded-xl px-4 py-2 bg-gray-50 text-sm shadow-sm outline-none w-full"
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border border-gray-200 rounded-xl px-3 py-2 bg-gray-50 shadow-sm text-sm w-full"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c === "all" ? "Semua Kategori" : c}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Row */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <label className="text-sm text-gray-600 whitespace-nowrap">
                Max Harga
              </label>

              <input
                type="range"
                min="0"
                max="10000000"
                step={50000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="flex-1 accent-indigo-600 w-full"
              />

              <div className="text-sm font-semibold text-indigo-600 whitespace-nowrap">
                Rp {maxPrice.toLocaleString("id-ID")}
              </div>
            </div>
          </div>

          {/* PHOTO SLIDER */}
          <div className="bg-white p-3 rounded-2xl shadow-lg border border-gray-100">
            <div className="relative overflow-hidden rounded-xl h-60 sm:h-72">
              {photos.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Dokumentasi Event"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT – SUMMARY + ADVANTAGES */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 flex flex-col gap-6 mt-6 md:mt-0">
          <div>
            <h3 className="text-lg font-bold text-indigo-700 text-center mb-3">
              Ringkasan Paket Populer
            </h3>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b pb-1">
                <span>Kursi Futura</span>
                <span className="font-medium">50 pcs</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span>Blower Embun</span>
                <span className="font-medium">2 unit</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span>AC Standing 5 PK</span>
                <span className="font-medium">2 unit</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span>Rolltop Prasmanan</span>
                <span className="font-medium">5 pcs</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span>Sound System</span>
                <span className="font-medium">1 set</span>
              </div>
            </div>
          </div>

          <hr className="border-gray-300" />

          <div>
            <h3 className="text-lg font-bold text-indigo-700 text-center mb-3">
              Kenapa Pilih Kami?
            </h3>

            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span> Unit bersih & siap
                pakai
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span> Harga jujur &
                transparan
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span> Instalasi profesional
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✔</span> Support acara hingga
                selesai
              </li>
            </ul>
          </div>

          <a
            href="#contact"
            className="mt-2 block bg-indigo-600 text-white py-2.5 rounded-xl text-center font-medium hover:bg-indigo-700 transition"
          >
            Minta Penawaran
          </a>
        </div>
      </section>
    </>
  );
}
