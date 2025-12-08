import React from "react";

export default function AboutSection() {
  const highlights = [
    {
      icon: "⚡",
      title: "Respon Sangat Cepat",
      desc: "Penawaran langsung diproses dalam hitungan menit. Cocok untuk kebutuhan mendadak event.",
    },
    {
      icon: "💎",
      title: "Peralatan Berkualitas",
      desc: "Semua unit terawat, bersih, dan dicek sebelum pengiriman untuk memastikan performa maksimal.",
    },
    {
      icon: "👷‍♂️",
      title: "Tim Profesional",
      desc: "Teknisi berpengalaman memastikan pemasangan rapi, aman, dan sesuai kebutuhan acara.",
    },
    {
      icon: "🚚",
      title: "Pengiriman Tepat Waktu",
      desc: "Armada siap kirim ke wilayah Bekasi, Jakarta, dan sekitarnya dengan ketepatan waktu.",
    },
  ];

  return (
    <section
      id="about"
      className="mt-14 bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 md:p-10 rounded-3xl shadow-md border border-gray-100 max-w-6xl mx-auto"
    >
      {/* Header */}
      <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">
        Tentang <span className="text-indigo-600">Cepot Blower Bekasi</span>
      </h3>

      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mt-3">
        Kami adalah penyedia layanan sewa perlengkapan event terlengkap di
        Bekasi — mulai dari blower, AC standing, cooling fan, hingga lighting
        dan sound system.
        <span className="font-semibold text-indigo-600">
          {" "}
          Fokus kami adalah memberikan solusi cepat, rapi, dan profesional{" "}
        </span>
        untuk kebutuhan event skala kecil hingga besar.
      </p>

      {/* Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {highlights.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-1"
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <h4 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed mt-1">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Highlight */}
      <div className="mt-10 p-4 bg-indigo-50 border border-indigo-100 rounded-2xl text-center">
        <p className="text-indigo-700 font-medium text-base">
          Melayani kebutuhan event Anda dengan kualitas terbaik — cepat, aman,
          dan terpercaya.
        </p>
      </div>
    </section>
  );
}
