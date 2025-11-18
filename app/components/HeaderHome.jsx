"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header({ WHATSAPP_PHONE }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Catalog", href: "#catalog" },
    { name: "Gallery", href: "/gallery", isRoute: true },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  // Template pesan WA
  const waTemplate = `
Halo, saya ingin memesan produk dari Cepot Blower Bekasi.

Nama: 
Produk: 
Jumlah: 
Alamat: 
Catatan: 
`;

  const handleWA = () => {
    const link = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waTemplate)}`;
    window.open(link, "_blank");
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-10 h-10 flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Cepot Blower Bekasi"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <div className="leading-tight">
            <h1 className="text-lg font-semibold text-gray-800">
              Cepot Blower Bekasi
            </h1>
            <p className="text-xs text-gray-500 mt-0.5">
              Sewa blower, AC, lighting, catering gear
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) =>
            item.isRoute ? (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-indigo-600 font-medium text-sm transition duration-150"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-indigo-600 font-medium text-sm transition duration-150"
              >
                {item.name}
              </a>
            )
          )}
          <button
            onClick={handleWA}
            className="ml-4 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full shadow-md font-medium text-sm transition duration-150"
          >
            WhatsApp
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-700 focus:outline-none"
          >
            <HiMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white/80 backdrop-blur-md shadow-xl transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 focus:outline-none"
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-6 mt-6 px-5">
          {menuItems.map((item) =>
            item.isRoute ? (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-indigo-600 font-medium text-base transition duration-150"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-indigo-600 font-medium text-base transition duration-150"
              >
                {item.name}
              </a>
            )
          )}

          <button
            onClick={handleWA}
            className="mt-6 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-md font-medium text-base transition duration-150"
          >
            WhatsApp
          </button>
        </nav>
      </div>

      {/* Overlay blur */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white/30 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
