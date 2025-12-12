"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SAMPLE_PRODUCTS } from "../data/products";

import HeaderHome from "./components/HeaderHome";
import HeroSection from "./components/HeroSection";
import CatalogGrid from "./components/CatalogGrid";
import ProductModal from "./components/ProductModal";
import AboutSection from "./components/AboutSection";
import Testimoni from "./components/Testimoni";
import GalleryGrid from "./components/GalleryGrid";
import FAQSection from "./components/FAQSection";
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

  // Reduce motion for accessibility & smoother performance on low-end devices
  const prefersReduced = useReducedMotion();

  // Detect mobile / small screen (debounced for better smoothness)
  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
    };

    update();

    let timeout;
    const onResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(update, 120); // Debounce 120ms
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
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
        p.title.toLowerCase().includes(q) ||
        p.short.toLowerCase().includes(q)
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

  // Reworked animation variants (smooth, GPU-accelerated)
  const containerVariant = prefersReduced
    ? {}
    : {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
            ease: "easeOut",
          },
        },
      };

  const sectionVariant = prefersReduced
    ? {}
    : {
        hidden: {
          opacity: 0,
          y: 20,
          transform: "translate3d(0,20px,0)",
        },
        visible: {
          opacity: 1,
          y: 0,
          transform: "translate3d(0,0,0)",
          transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1], // smoother cubic bezier
          },
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
        animate="visible"
        viewport={{ once: true, amount: 0.15 }}
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

        {/* Modal */}
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

        {/* About */}
        <motion.div variants={sectionVariant}>
          <AboutSection />
        </motion.div>

        {/* Testimoni */}
        <motion.div variants={sectionVariant} className="relative">
          <Testimoni />
        </motion.div>
        {/* Testimoni */}
        <motion.div variants={sectionVariant} className="relative">
          <FAQSection />
        </motion.div>

        {/* Contact */}
        <motion.div variants={sectionVariant}>
          <ContactSection WHATSAPP_PHONE={WHATSAPP_PHONE} />
        </motion.div>
      </motion.main>

      <FloatingWA WHATSAPP_PHONE={WHATSAPP_PHONE} />
    </div>
  );
}
