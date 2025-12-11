"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { SAMPLE_PRODUCTS } from "../data/products";

import HeaderHome from "./components/HeaderHome";
import HeroSection from "./components/HeroSection";
import CatalogGrid from "./components/CatalogGrid";
import ProductModal from "./components/ProductModal";
import AboutSection from "./components/AboutSection";
import Testimoni from "./components/Testimoni";
import GalleryGrid from "./components/GalleryGrid";
import ContactSection from "./components/ContactSection";
import FloatingCart from "./components/FloatingCart";
import FloatingWA from "./components/FloatingWA";

const WHATSAPP_PHONE = "6281298229660";

export default function Page() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(100000000);
  const [selected, setSelected] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const [cart, setCart] = useState([]);

  // Detect mobile / small screen
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const categories = [
    "all",
    ...new Set(SAMPLE_PRODUCTS.map((p) => p.category)),
  ];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SAMPLE_PRODUCTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (p.price > maxPrice) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) || p.short.toLowerCase().includes(q)
      );
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

  // Variants untuk animasi ringan & responsive
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="px-4 sm:px-4 relative bg-linear-to-b from-[#fcfaf5] via-[#f9f6ee] to-[#f3ede3]">
      <FloatingCart
        cart={cart}
        setCart={setCart}
        WHATSAPP_PHONE={WHATSAPP_PHONE}
      />

      <HeaderHome WHATSAPP_PHONE={WHATSAPP_PHONE} />

      <motion.main
        className="pt-[72px] space-y-12"
        initial="hidden"
        animate={isMobile ? "visible" : undefined} // langsung show di mobile
        whileInView={isMobile ? undefined : "visible"} // animasi scroll untuk desktop
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariant}
      >
        {/* Hero */}
        <motion.div variants={sectionVariant} className="relative mt-5">
          <HeroSection
            query={query}
            setQuery={setQuery}
            category={category}
            setCategory={setCategory}
            categories={categories}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
          />
        </motion.div>

        {/* Catalog Grid */}
        <motion.div variants={sectionVariant}>
          <CatalogGrid
            products={filtered}
            setSelected={setSelected}
            WHATSAPP_PHONE={WHATSAPP_PHONE}
            addToCart={addToCart}
          />
        </motion.div>

        {/* Product Modal */}
        {selected && (
          <ProductModal
            product={selected}
            onClose={() => setSelected(null)}
            WHATSAPP_PHONE={WHATSAPP_PHONE}
            addToCart={addToCart}
          />
        )}

        {/* Gallery */}
        <motion.div variants={sectionVariant}>
          <GalleryGrid />
        </motion.div>

        {/* About Section */}
        <motion.div variants={sectionVariant}>
          <AboutSection />
        </motion.div>

        {/* Testimoni */}
        <motion.div variants={sectionVariant} className="relative">
          <Testimoni />
        </motion.div>

        {/* Contact Section */}
        <motion.div variants={sectionVariant}>
          <ContactSection WHATSAPP_PHONE={WHATSAPP_PHONE} />
        </motion.div>
      </motion.main>

      <FloatingWA WHATSAPP_PHONE={WHATSAPP_PHONE} />
    </div>
  );
}
