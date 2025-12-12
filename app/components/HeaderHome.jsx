"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header({ WHATSAPP_PHONE }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Beranda", href: "/" },
    { name: "Katalog", href: "#catalog" },
    { name: "Galeri", href: "#gallery", isRoute: true },
    { name: "Tentang", href: "#about" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 md:bg-white/30 md:backdrop-blur-xl border-b border-gray-200 shadow-lg shadow-black/5">
      <div className="w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 flex items-center justify-between">
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
            <h1 className="text-lg font-semibold text-gray-900">
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
                className="text-gray-800 hover:text-blue-600 font-medium text-sm transition duration-150"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-blue-600 font-medium text-sm transition duration-150"
              >
                {item.name}
              </a>
            )
          )}
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

      {/* MOBILE SIDEBAR */}
      <div
        className={`
          fixed top-0 right-0 h-full w-60
          bg-white/95 backdrop-blur-xl
          shadow-2xl border-l border-gray-200
          transform transition-transform duration-300 z-60 flex flex-col
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-800 focus:outline-none"
          >
            <HiX className="w-7 h-7" />
          </button>
        </div>

        {/* Scrollable Menu */}
        <nav className="flex-1 overflow-y-auto flex flex-col gap-4 mt-6 px-5 pb-5">
          {menuItems.map((item) =>
            item.isRoute ? (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-blue-600 font-semibold text-base transition py-2 px-3 rounded-lg hover:bg-blue-50"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-blue-600 font-semibold text-base transition py-2 px-3 rounded-lg hover:bg-blue-50"
              >
                {item.name}
              </a>
            )
          )}
        </nav>
      </div>

      {/* DARK OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
