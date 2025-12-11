import React from "react";

export default function AboutSection() {
  const highlights = [
    {
      icon: "⚡",
      title: "Respon Sangat Cepat",
      desc: "Penawaran diproses dalam hitungan menit. Siap melayani kebutuhan event mendadak.",
    },
    {
      icon: "💎",
      title: "Peralatan Berkualitas",
      desc: "Semua unit terawat, bersih, dan dicek sebelum pengiriman agar performanya optimal.",
    },
    {
      icon: "👷‍♂️",
      title: "Tim Profesional",
      desc: "Teknisi berpengalaman memastikan pemasangan rapi, aman, dan sesuai standar event.",
    },
    {
      icon: "🚚",
      title: "Pengiriman Tepat Waktu",
      desc: "Armada siap kirim ke Bekasi, Jakarta, dan sekitarnya dengan ketepatan waktu tinggi.",
    },
  ];

  return (
    <section
      id="about"
      className="
    px-4 sm:px-6 lg:px-12 py-10
    bg-linear-to-br from-[#faf7f2] via-[#ffffff] to-[#f3efe7]
    rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.06)]
    border border-[#e9e2d4]/60
  "
    >
      <div>
        {/* Header */}
        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">
          Tentang <span className="text-indigo-600">Cepot Blower Bekasi</span>
        </h3>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mt-4">
          Kami menyediakan layanan sewa perlengkapan event seperti blower, AC
          standing, cooling fan, lighting, dan sound system.
          <span className="font-semibold text-indigo-600">
            {" "}
            Fokus utama kami adalah kecepatan, kerapian, dan profesionalitas{" "}
          </span>
          untuk berbagai skala acara.
        </p>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
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
        <div className="mt-14 p-5 bg-indigo-50 border border-indigo-100 rounded-2xl text-center">
          <p className="text-indigo-700 font-medium text-sm sm:text-base">
            Melayani kebutuhan event Anda dengan kualitas terbaik. Cepat, aman,
            dan terpercaya.
          </p>
        </div>
      </div>
    </section>
  );
}
