"use client";

import { useState, useMemo } from "react";
import { SAMPLE_PRODUCTS } from "../data/products";

import HeaderHome from "./components/HeaderHome";
import HeroSection from "./components/HeroSection";
import CatalogGrid from "./components/CatalogGrid";
import ProductModal from "./components/ProductModal";
// import SummaryBox from "./components/SummaryBox";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FloatingWA from "./components/FloatingWA";

const WHATSAPP_PHONE = "6281234567890";

export default function Page() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(100000000);
  const [selected, setSelected] = useState(null);

  const categories = ["all", ...new Set(SAMPLE_PRODUCTS.map(p => p.category))];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SAMPLE_PRODUCTS.filter(p => {
      if (category !== "all" && p.category !== category) return false;
      if (p.price > maxPrice) return false;
      if (!q) return true;
      return p.title.toLowerCase().includes(q) || p.short.toLowerCase().includes(q);
    });
  }, [query, category, maxPrice]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <HeaderHome WHATSAPP_PHONE={WHATSAPP_PHONE} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <HeroSection
          query={query}
          setQuery={setQuery}
          category={category}
          setCategory={setCategory}
          categories={categories}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />

        {/* <SummaryBox /> */}

        <CatalogGrid products={filtered} setSelected={setSelected} WHATSAPP_PHONE={WHATSAPP_PHONE} />

        {selected && (
          <ProductModal
            product={selected}
            onClose={() => setSelected(null)}
            WHATSAPP_PHONE={WHATSAPP_PHONE}
          />
        )}

        <AboutSection />
        <ContactSection WHATSAPP_PHONE={WHATSAPP_PHONE} />
      </main>

      <FloatingWA WHATSAPP_PHONE={WHATSAPP_PHONE} />
    </div>
  );
}
