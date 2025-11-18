"use client";
import React from "react";

export default function FloatingWA({ WHATSAPP_PHONE, productName = "", quantity = "" }) {
  // Template pesan default
  const template = `
Halo, saya ingin memesan produk dari Cepot Blower Bekasi.

${productName ? `Produk: ${productName}` : ""}
${quantity ? `Jumlah: ${quantity}` : ""}
Nama: 
Alamat: 
Catatan: 
`;

  const handleClick = () => {
    const link = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(template)}`;
    window.open(link, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 rounded-full p-3 bg-green-600 shadow-lg text-white hover:bg-green-700 transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-9.95 11.09A10 10 0 0 0 12 22a10 10 0 0 0 10-10A10 10 0 0 0 12 2Zm5.27 14.53c-.22.62-1.31 1.2-1.82 1.28s-.47.41-3.05-.84a10.82 10.82 0 0 1-3.93-3.88c-.41-.73-.41-1.35-.31-1.49s.72-.72.94-.94.47-.21.78-.1.45.28.62.61c.46.89.98 1.71 1.21 1.97s.4.31.62.21a6.38 6.38 0 0 0 1.11-.83c.31-.26.53-.23.84-.14s1.92.94 1.92 1.15-.02.85-.24 1.47Z"
        />
      </svg>
    </button>
  );
}
