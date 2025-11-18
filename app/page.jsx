"use client";

import { useState, useMemo } from "react";
import { SAMPLE_PRODUCTS } from "../data/products";

import HeaderHome from "./components/HeaderHome";
import HeroSection from "./components/HeroSection";
import CatalogGrid from "./components/CatalogGrid";
import ProductModal from "./components/ProductModal";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FloatingCart from "./components/FloatingCart";
import FloatingWA from "./components/FloatingWA";

const WHATSAPP_PHONE = "6281298229660";

export default function Page() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(100000000);
  const [selected, setSelected] = useState(null);

  const [cart, setCart] = useState([]);

  const categories = ["all", ...new Set(SAMPLE_PRODUCTS.map((p) => p.category))];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SAMPLE_PRODUCTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (p.price > maxPrice) return false;
      if (!q) return true;
      return p.title.toLowerCase().includes(q) || p.short.toLowerCase().includes(q);
    });
  }, [query, category, maxPrice]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find(
        (p) =>
          p.id === product.id &&
          p.selectedVariant.name === product.selectedVariant.name
      );
      if (exists) {
        return prev.map((p) =>
          p.id === product.id &&
          p.selectedVariant.name === product.selectedVariant.name
            ? { ...p, qty: p.qty + product.qty }
            : p
        );
      }
      return [...prev, product];
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <FloatingCart cart={cart} setCart={setCart} WHATSAPP_PHONE={WHATSAPP_PHONE} />
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

        <CatalogGrid
          products={filtered}
          setSelected={setSelected}
          WHATSAPP_PHONE={WHATSAPP_PHONE}
          addToCart={addToCart}
        />

        {selected && (
          <ProductModal
            product={selected}
            onClose={() => setSelected(null)}
            WHATSAPP_PHONE={WHATSAPP_PHONE}
            addToCart={addToCart}
          />
        )}

        <AboutSection />
        <ContactSection WHATSAPP_PHONE={WHATSAPP_PHONE} />
      </main>

      <FloatingWA WHATSAPP_PHONE={WHATSAPP_PHONE} />
    </div>
  );
}
