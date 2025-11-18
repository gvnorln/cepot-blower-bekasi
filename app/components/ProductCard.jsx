"use client";

import React, { useState } from "react";

export default function ProductCard({ p, addToCart }) {
  const [qty, setQty] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(p.variants[0]);
  const [showModal, setShowModal] = useState(false);

  const handleIncrement = () => setQty(qty + 1);
  const handleDecrement = () => setQty(Math.max(0, qty - 1));
  const handleChange = (e) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val >= 0) setQty(val);
  };

  const handleAddToCart = () => {
    if (qty < selectedVariant.minOrder) {
      alert(
        `Minimal order untuk produk ini adalah ${selectedVariant.minOrder}`
      );
      return;
    }
    addToCart({ ...p, qty, selectedVariant });
    setQty(0);
  };

  const pricePerUnit =
    selectedVariant.pricePerUnit || selectedVariant.pricePerPcs;
  const priceDisplay = pricePerUnit.toLocaleString("id-ID");

  return (
    <>
      <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition hover:shadow-lg hover:-translate-y-1 duration-300 font-sans">
        {/* Image */}
        <div className="w-full overflow-hidden rounded-t-2xl">
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-3">
          {/* Title & Short Description */}
          <div>
            <h4 className="text-gray-900 font-semibold text-base md:text-lg line-clamp-2">
              {p.title}
            </h4>
            <p className="text-gray-500 text-sm mt-1 line-clamp-2">{p.short}</p>
          </div>

          {/* Variant Selector */}
          <div className="flex flex-col gap-1">
            <select
              value={selectedVariant.name}
              onChange={(e) =>
                setSelectedVariant(
                  p.variants.find((v) => v.name === e.target.value)
                )
              }
              className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              {p.variants.map((v) => (
                <option key={v.name} value={v.name}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>

          {/* Price & Minimal Order */}
          <div className="flex flex-col gap-1 mt-2">
            <div className="text-indigo-600 font-bold text-lg md:text-xl">
              Rp {priceDisplay} / pcs
            </div>
            <div className="text-gray-500 text-sm">
              Minimal order: {selectedVariant.minOrder} pcs
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-2">
            {/* Detail Button */}
            <button
              onClick={() => setShowModal(true)}
              className="px-3 py-1.5 border border-gray-200 rounded-lg text-gray-700 text-sm hover:bg-gray-50 transition"
            >
              Detail
            </button>

            {/* Qty Control + Add to Cart */}
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-2 py-1">
              <button
                onClick={handleDecrement}
                className="bg-gray-300 text-gray-800 px-2 py-1 rounded hover:bg-gray-400 transition"
              >
                -
              </button>
              <input
                type="number"
                value={qty}
                onChange={handleChange}
                className="w-12 text-center text-sm border border-gray-300 rounded px-1 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                min={0}
              />
              <button
                onClick={handleIncrement}
                className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition"
              >
                +
              </button>
              <button
                onClick={handleAddToCart}
                className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl max-w-md w-full relative shadow-lg">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold text-lg transition"
            >
              ×
            </button>

            {/* Modal Content */}
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover rounded-xl"
            />
            <h2 className="text-xl font-bold mt-4">{p.title}</h2>
            <p className="text-gray-600 mt-2">{p.short}</p>

            <div className="mt-3">
              <strong>Variant:</strong> {selectedVariant.name}
            </div>

            <div className="text-indigo-600 font-bold text-lg mt-1">
              Rp {priceDisplay} / pcs
            </div>

            <div className="mt-2">
              <strong>Minimal order:</strong> {selectedVariant.minOrder} pcs
            </div>

            <ul className="mt-3 list-disc list-inside text-gray-600 text-sm">
              {p.specs.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
