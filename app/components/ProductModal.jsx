"use client";

import { useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function ProductModal({ product, onClose, addToCart, WHATSAPP_PHONE }) {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    // lock scroll
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  if (!product) return null;

  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.18 } },
  };

  const content = prefersReduced
    ? {}
    : {
        hidden: { opacity: 0, scale: 0.98, transform: "translate3d(0,8px,0)" },
        visible: {
          opacity: 1,
          scale: 1,
          transform: "translate3d(0,0,0)",
          transition: { duration: 0.36, ease: [0.22, 1, 0.36, 1] },
        },
        exit: { opacity: 0, scale: 0.98, transition: { duration: 0.24 } },
      };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          variants={backdrop}
          onClick={onClose}
        />

        <motion.div
          className="relative bg-white rounded-2xl max-w-3xl w-full mx-4 shadow-2xl p-6 z-10"
          variants={content}
          role="dialog"
          aria-modal="true"
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, info) => {
            if (info.offset.y > 120 || info.velocity.y > 800) onClose();
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden bg-neutral-100 aspect-4/3">
              <img src={product.image} alt={product.title} className="object-cover w-full h-full" />
            </div>

            <div>
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="mt-2 text-neutral-600">{product.short}</p>

              <div className="mt-4 text-pink-600 font-bold text-lg">Rp{product.price.toLocaleString()}</div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => {
                    addToCart({ ...product, qty: 1 });
                    onClose();
                  }}
                  className="px-4 py-2 rounded-lg bg-pink-600 text-white shadow-sm hover:opacity-95"
                >
                  Tambah ke Keranjang
                </button>

                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=Halo%20saya%20mau%20tanya%20tentang%20${encodeURIComponent(
                    product.title
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg border border-neutral-200"
                >
                  Chat WA
                </a>
              </div>

              <button
                onClick={onClose}
                className="mt-4 text-sm text-neutral-500 hover:text-neutral-700"
              >
                Tutup
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
