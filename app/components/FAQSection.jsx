"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    q: "Berapa minimal sewa setiap kategori?",
    a: `
Kursi Futura: 50 pcs
Kipas Blower: 2 unit
AC Standing 5 PK: 2 unit
AC Standing 1.5 PK: 2 unit
Rolltop Prasmanan: 5 pcs
Piring + Sendok + Garpu: 100 pcs
Lantai Kaca Akrilik: 6 kotak
Meja Kotak: 1 pcs
    `,
  },
  {
    q: "Apakah harga sudah termasuk instalasi?",
    a: `
Ya, untuk beberapa kategori:
• Kipas Blower — Free instalasi
• AC Standing — Free instalasi
    `,
  },
  {
    q: "Apakah ada operator yang standby?",
    a: `
Ya, untuk beberapa kategori:
• Sound System — Include operator
• Lampu Beam — Include operator
• Dry Ice — Include operator
• Genset — Standby operator
    `,
  },
  {
    q: "Bagaimana sistem pembayaran dan DP?",
    a: `
• DP 30% (tidak dapat dikembalikan)
• Pelunasan setelah unit sampai lokasi acara
• Reschedule dapat dilakukan melalui admin
    `,
  },
  {
    q: "Apakah ada free ongkir?",
    a: `
Gratis ongkir hingga 20 km dari warehouse Cepot Blower Bekasi.
    `,
  },
  {
    q: "Kapan barang dikirim?",
    a: `
Pengiriman dilakukan H-1 sebelum acara.
Jam fleksibel menyesuaikan kebutuhan penyewa.
    `,
  },
  {
    q: "Apakah barang datang bersih?",
    a: `
Ya. Untuk Rolltop & alat makan:
• Datang bersih, kembali bersih
• Pecah/kehilangan ditanggung penyewa
    `,
  },
  {
    q: "Bagaimana persyaratan listrik?",
    a: `
• AC Standing 5 PK: 5300VA 3 Phase (RST)
• AC Standing 1.5 PK: 900 watt
• Kipas Blower: 250–350 watt/unit
    `,
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      className="
        relative w-full py-20 px-4 sm:px-6 lg:px-16 
        bg-[#0f0c29] overflow-hidden rounded-3xl
      "
    >
      {/* Background Glow Orbs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-24 left-0 w-[380px] h-[380px] bg-purple-400/20 blur-[130px]" />
        <div className="absolute top-40 right-0 w-[420px] h-[420px] bg-yellow-200/10 blur-[150px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[180px] bg-white/5 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            text-center text-3xl sm:text-4xl font-extrabold 
            text-transparent bg-clip-text 
            bg-gradient-to-r from-[#f6e7d4] via-white to-[#ccb893]
          "
        >
          Pertanyaan yang Sering Diajukan
        </motion.h2>

        <p className="text-center text-white/70 text-sm sm:text-base mt-2 mb-10">
          Informasi lengkap untuk memastikan acara Anda berjalan lancar.
        </p>

        {/* FAQ Panel */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = open === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="
                  bg-white/10 backdrop-blur-xl border border-white/20 
                  rounded-2xl p-4 sm:p-5 cursor-pointer 
                  transition hover:bg-white/15 shadow-[0_8px_25px_rgba(0,0,0,0.25)]
                "
                onClick={() => setOpen(isOpen ? null : index)}
              >
                {/* Question */}
                <div className="flex justify-between items-center gap-6">
                  <h3 className="text-white font-medium text-sm sm:text-base">
                    {item.q}
                  </h3>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="
                        text-white/80 text-sm sm:text-[15px] mt-4 
                        whitespace-pre-line leading-relaxed 
                        border-t border-white/10 pt-3
                      "
                    >
                      {item.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
