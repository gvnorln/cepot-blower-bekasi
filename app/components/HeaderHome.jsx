"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header({ WHATSAPP_PHONE }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Catalog", href: "#catalog" },
    { name: "Gallery", href: "#gallery", isRoute: true },
    { name: "About", href: "#about" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "Contact", href: "#contact" },
  ];

  const waTemplate = `
Halo, saya ingin memesan produk dari Cepot Blower Bekasi.

Nama: 
Produk: 
Jumlah: 
Alamat: 
Catatan: 
`;

  const handleWA = () => {
    const link = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
      waTemplate
    )}`;
    window.open(link, "_blank");
  };

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-white/80 md:bg-white/30
        md:backdrop-blur-xl
        border-b border-white/20
        shadow-lg shadow-black/5
      "
    >
      <div
        className="
          w-full mx-auto
          px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20
          py-4
          flex items-center justify-between
        "
      >
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
            <p className="text-xs text-gray-600 mt-0.5">
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
                className="text-gray-800 hover:text-indigo-600 font-medium text-sm transition duration-150"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-indigo-600 font-medium text-sm transition duration-150"
              >
                {item.name}
              </a>
            )
          )}

          <button
            onClick={handleWA}
            className="
              ml-4 inline-flex items-center gap-2
              bg-green-600 hover:bg-green-700 text-white
              px-5 py-2 rounded-full shadow-md
              font-medium text-sm transition duration-150
            "
          >
            WhatsApp
          </button>
        </nav>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-800 focus:outline-none"
          >
            <HiMenu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* MOBILE SIDEBAR FIXED & SOLID */}
      <div
        className={`
          fixed top-0 right-0 h-full w-72
          bg-white
          shadow-2xl border-l border-gray-200
          transform transition-transform duration-300 z-60
          flex flex-col
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-800 focus:outline-none"
          >
            <HiX className="w-7 h-7" />
          </button>
        </div>

        {/* Scrollable items */}
        <nav className="flex-1 overflow-y-auto flex flex-col gap-6 mt-6 px-5 pb-10">
          {menuItems.map((item) =>
            item.isRoute ? (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-indigo-600 font-medium text-base transition"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-indigo-600 font-medium text-base transition"
              >
                {item.name}
              </a>
            )
          )}
        </nav>

        {/* Bottom button */}
        {/* <div className="p-5 border-t border-gray-200">
          <button
            onClick={handleWA}
            className="
              w-full inline-flex items-center justify-center
              gap-2 bg-green-600 hover:bg-green-700 text-white
              px-5 py-3 rounded-full shadow-md
              font-medium text-base transition
            "
          >
            WhatsApp
          </button>
        </div> */}
      </div>

      {/* DARK OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
