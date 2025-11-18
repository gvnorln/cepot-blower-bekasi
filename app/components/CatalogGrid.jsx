"use client";

import React, { useMemo, useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function CatalogGrid({ products = [], setSelected, WHATSAPP_PHONE, addToCart }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("cheapest");
  const [loading, setLoading] = useState(false);
  const ITEMS_PER_PAGE = 6;
  const [page, setPage] = useState(1);

  const categories = useMemo(() => {
    const cats = Array.from(new Set((products || []).map((p) => p.category || "Uncategorized")));
    return ["all", ...cats];
  }, [products]);

  const productsWithMeta = useMemo(() => {
    return (products || []).map((p, i) => {
      const publishedAt = p.publishedAt ?? new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString();
      const popularity = p.popularity ?? Math.max(1, 100 - i);
      return { ...p, publishedAt, popularity };
    });
  }, [products]);

  const filteredSortedList = useMemo(() => {
    let list = productsWithMeta.slice();
    if (activeCategory !== "all") list = list.filter((p) => p.category === activeCategory);
    if (sortBy === "cheapest") list.sort((a, b) => a.price - b.price);
    else if (sortBy === "popular") list.sort((a, b) => b.popularity - a.popularity);
    else if (sortBy === "newest") list.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    return list;
  }, [productsWithMeta, activeCategory, sortBy]);

  useEffect(() => {
    setPage(1);
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, [activeCategory, sortBy, productsWithMeta]);

  const totalPages = Math.max(1, Math.ceil(filteredSortedList.length / ITEMS_PER_PAGE));
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
    if (page < 1) setPage(1);
  }, [page, totalPages]);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const pagedItems = filteredSortedList.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  function openWhatsApp(product) {
    const text = encodeURIComponent(
      `Halo! Saya tertarik dengan ${product.title}.\nID: ${product.id}\nHarga: Rp ${product.price.toLocaleString("id-ID")}`
    );
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, "_blank");
  }

  const skeletonCount = ITEMS_PER_PAGE;

  if (!products) return <div className="p-6 text-center text-gray-500">Loading produk...</div>;

  return (
    <section className="mt-10 px-4 sm:px-6 lg:px-8">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 flex-wrap">
        <div>
          <section id="catalog" />
          <h3 className="text-2xl font-bold text-gray-800">Katalog Produk</h3>
          <p className="text-sm text-gray-500 mt-1">
            Semua perlengkapan event — pilih kategori atau urutkan untuk menemukan produk.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-3 sm:mt-0">
          {/* Category pills */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`text-sm px-3 py-1.5 rounded-full border transition font-medium cursor-pointer
                  ${activeCategory === c
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                  }`}
              >
                {c === "all" ? "Semua" : c}
              </button>
            ))}
          </div>

          {/* Sort select */}
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <label className="text-sm text-gray-600 whitespace-nowrap">Urutkan:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white cursor-pointer"
            >
              <option value="cheapest">Termurah</option>
              <option value="popular">Terpopuler</option>
              <option value="newest">Terbaru</option>
            </select>
          </div>
        </div>
      </div>

      <hr className="border-gray-200 mb-6" />

      {/* Masonry grid using CSS columns */}
      <div className="min-h-[80px]">
        {loading ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {Array.from({ length: skeletonCount }).map((_, i) => (
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
            <p className="text-sm text-gray-500 mt-2">Coba reset filter atau ubah opsi urutkan.</p>
            <div className="mt-4">
              <button
                onClick={() => { setActiveCategory("all"); setSortBy("cheapest"); }}
                className="mt-2 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg cursor-pointer"
              >
                Reset Filter
              </button>
            </div>
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
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            className={`px-3 py-1.5 rounded-lg border bg-white text-sm shadow 
              ${page === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-gray-100 cursor-pointer"}`}
          >
            Prev
          </button>

          <div className="flex flex-wrap items-center gap-2 text-sm">
            {(() => {
              const pages = [];
              const maxButtons = 7;
              let start = Math.max(1, page - Math.floor(maxButtons / 2));
              let end = start + maxButtons - 1;
              if (end > totalPages) { end = totalPages; start = Math.max(1, end - maxButtons + 1); }
              for (let num = start; num <= end; num++) pages.push(num);
              return pages.map((num) => (
                <button
                  key={num}
                  onClick={() => setPage(num)}
                  className={`px-3 py-1 rounded-md border shadow-sm 
                    ${page === num ? "bg-indigo-600 text-white" : "bg-white hover:bg-gray-100 cursor-pointer"}`}
                >
                  {num}
                </button>
              ));
            })()}
          </div>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
            className={`px-3 py-1.5 rounded-lg border bg-white text-sm shadow 
              ${page === totalPages ? "cursor-not-allowed opacity-50" : "hover:bg-gray-100 cursor-pointer"}`}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
