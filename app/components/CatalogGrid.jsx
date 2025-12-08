"use client";

import React, { useMemo, useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function CatalogGrid({ products = [], setSelected, WHATSAPP_PHONE, addToCart }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("cheapest");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const ITEMS_PER_PAGE = 6;
  const [page, setPage] = useState(1);

  // ----------------------------------
  // CATEGORY LIST
  // ----------------------------------
  const categories = useMemo(() => {
    const cats = Array.from(new Set((products || []).map((p) => p.category || "Uncategorized")));
    return ["all", ...cats];
  }, [products]);

  // ----------------------------------
  // META DATA
  // ----------------------------------
  const productsWithMeta = useMemo(() => {
    return products.map((p, i) => {
      const publishedAt = p.publishedAt ?? new Date(Date.now() - i * 86400000).toISOString();
      const popularity = p.popularity ?? Math.max(1, 100 - i);

      return { ...p, publishedAt, popularity };
    });
  }, [products]);

  // ----------------------------------
  // UNIVERSAL PRICE HANDLER
  // ----------------------------------
  function getPrice(p) {
    return (
      p.price ??
      p.pricePerUnit ??
      p.pricePerDay ??
      p.pricePer50 ??
      p.pricePer100 ??
      0
    );
  }

  // ----------------------------------
  // FILTER + SORT (tanpa maxPrice)
  // ----------------------------------
  const filteredSortedList = useMemo(() => {
    let list = productsWithMeta;

    // Search
    if (query.trim() !== "") {
      list = list.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase().trim())
      );
    }

    // Category Filter
    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory);
    }

    // Sort
    if (sortBy === "cheapest") {
      list = [...list].sort((a, b) => getPrice(a) - getPrice(b));
    } else if (sortBy === "popular") {
      list = [...list].sort((a, b) => b.popularity - a.popularity);
    } else if (sortBy === "newest") {
      list = [...list].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    }

    return list;
  }, [productsWithMeta, query, activeCategory, sortBy]);

  // ----------------------------------
  // LOADING EFFECT
  // ----------------------------------
  useEffect(() => {
    setPage(1);
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, [query, activeCategory, sortBy]);

  // ----------------------------------
  // PAGINATION
  // ----------------------------------
  const totalPages = Math.max(1, Math.ceil(filteredSortedList.length / ITEMS_PER_PAGE));
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const pagedItems = filteredSortedList.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // ----------------------------------
  // WHATSAPP
  // ----------------------------------
  function openWhatsApp(product) {
    const priceValue = getPrice(product);
    const text = encodeURIComponent(
      `Halo! Saya tertarik dengan ${product.title}.
ID: ${product.id}
Harga: Rp ${priceValue.toLocaleString("id-ID")}`
    );
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, "_blank");
  }

  // ----------------------------------
  // RENDER
  // ----------------------------------
  return (
    <section className="mt-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-3xl font-bold text-gray-800">Katalog Produk</h3>
        <p className="text-sm text-gray-500 mt-1">
          Cari perlengkapan event yang kamu butuhkan — filter kategori dan urutkan produk.
        </p>
      </div>

      {/* 🔍 Search + Filter Panel */}
      <div className="bg-white shadow-lg border border-gray-100 p-5 rounded-2xl flex flex-col gap-4 mb-8">

        {/* Search Input */}
        <div className="relative">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari perlengkapan event..."
            className="w-full border border-gray-200 rounded-xl px-4 py-2 bg-gray-50 text-sm shadow-sm outline-none"
          />
          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`text-sm px-3 py-1.5 rounded-full border transition font-medium
                ${
                  activeCategory === c
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                }`}
            >
              {c === "all" ? "Semua Kategori" : c}
            </button>
          ))}
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-700">Urutkan:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-gray-50 cursor-pointer"
          >
            <option value="cheapest">Termurah</option>
            <option value="popular">Terpopuler</option>
            <option value="newest">Terbaru</option>
          </select>
        </div>
      </div>

      <hr className="border-gray-200 mb-6" />

      {/* GRID */}
      <div className="min-h-[80px]">
        {loading ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
              <div key={i} className="break-inside-avoid mb-4">
                <div className="animate-pulse bg-white rounded-xl shadow-sm p-3 border border-gray-100">
                  <div className="bg-gray-200 h-44 rounded-md mb-3" />
                  <div className="h-4 bg-gray-200 rounded w-3/5 mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-1/3" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredSortedList.length === 0 ? (
          <div className="bg-white rounded-xl p-8 text-center shadow border border-gray-100">
            <p className="text-lg font-semibold text-gray-700">Produk tidak ditemukan</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {pagedItems.map((p) => (
              <div key={p.id} className="break-inside-avoid mb-4">
                <ProductCard
                  p={p}
                  setSelected={setSelected}
                  openWhatsApp={openWhatsApp}
                  addToCart={addToCart}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredSortedList.length > 0 && (
        <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className={`px-3 py-1.5 rounded-lg border bg-white text-sm shadow
              ${page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}`}
          >
            Prev
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).slice(0, 7).map((_, i) => {
              const num = i + 1;
              return (
                <button
                  key={num}
                  onClick={() => setPage(num)}
                  className={`px-3 py-1 rounded-md border shadow-sm text-sm
                    ${page === num ? "bg-indigo-600 text-white" : "bg-white hover:bg-gray-100"}`}
                >
                  {num}
                </button>
              );
            })}
          </div>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className={`px-3 py-1.5 rounded-lg border bg-white text-sm shadow
              ${page === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}`}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
