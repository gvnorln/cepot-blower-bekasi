import React from "react";

export default function SummaryBox() {
  return (
    <aside className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 mb-6">

      {/* HEADER */}
      <div className="text-center mb-6">
        <span className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow">
          Paket Paling Dicari
        </span>

        <h3 className="text-2xl font-bold mt-3 text-gray-800">
          Ringkasan Paket
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          Paket rekomendasi untuk acara kecil - menengah
        </p>
      </div>

      {/* ITEM GRID */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        {[
          { name: "Kursi Futura", price: "Rp 400.000 / 50 pcs" },
          { name: "Blower Embun", price: "Rp 500.000 / 2 unit" },
          { name: "AC 5 PK", price: "Rp 1.400.000 / 2 unit" },
          { name: "AC 1.5 PK", price: "Rp 900.000 / 2 unit" },
          { name: "Rolltop Prasmanan", price: "Rp 300.000 / 5 pcs" },
          { name: "Sound System", price: "Rp 800.000" },
        ].map((item, i) => (
          <div
            key={i}
            className="group p-4 rounded-xl bg-gray-50 hover:bg-indigo-50 transition-all duration-200 shadow-sm hover:shadow-md border border-gray-200 hover:border-indigo-300 cursor-pointer"
          >
            <div className="flex flex-col items-center text-center">
              <span className="text-indigo-600 text-lg mb-1 group-hover:scale-110 transition">
                ◆
              </span>
              <p className="font-semibold text-gray-800">{item.name}</p>
              <p className="text-gray-500 text-xs mt-1">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <a
        href="#contact"
        className="mt-8 block bg-indigo-600 text-white py-3 rounded-xl text-center font-semibold hover:bg-indigo-700 shadow-md hover:shadow-lg transition"
      >
        Minta Penawaran
      </a>
    </aside>
  );
}
