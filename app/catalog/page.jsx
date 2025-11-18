"use client";

import React, { useState, useMemo } from "react";
import HeaderHome from "../components/HeaderHome";
import CatalogGrid from "../components/CatalogGrid";
import HeroSection from "../components/HeroSection";
import { SAMPLE_PRODUCTS } from "../../data/products";

const WHATSAPP_PHONE = "6281234567890";

export default function CatalogPageClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(10000000);

  // Ambil semua kategori unik dari produk
  const categories = useMemo(() => {
    if (!SAMPLE_PRODUCTS || SAMPLE_PRODUCTS.length === 0) return ["all"];
    const cats = Array.from(new Set(SAMPLE_PRODUCTS.map((p) => p.category || "Uncategorized")));
    return ["all", ...cats];
  }, []);

  // Filter products berdasarkan query, category, dan maxPrice
  const filteredProducts = useMemo(() => {
    return SAMPLE_PRODUCTS.filter((p) => {
      const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "all" || p.category === category;
      const matchesPrice = p.price <= maxPrice;
      return matchesQuery && matchesCategory && matchesPrice;
    });
  }, [query, category, maxPrice]);

  return (
    <>
      <HeaderHome WHATSAPP_PHONE={WHATSAPP_PHONE} />
      
      <HeroSection
        query={query}
        setQuery={setQuery}
        category={category}
        setCategory={setCategory}
        categories={categories}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />

      <CatalogGrid products={filteredProducts} WHATSAPP_PHONE={WHATSAPP_PHONE} />
    </>
  );
}
