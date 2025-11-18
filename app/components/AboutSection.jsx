import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mt-16 bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 max-w-6xl mx-auto"
    >
      {/* Title */}
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
        Tentang Kami
      </h3>

      {/* Subtitle */}
      <p className="text-gray-600 text-sm sm:text-base md:text-base leading-relaxed text-center max-w-3xl mx-auto">
        Cepot Blower Bekasi menyediakan layanan sewa perlengkapan event lengkap:  
        blower, AC standing, lighting, sound system, genset, dan peralatan lainnya.  
        Kami berkomitmen memberikan pelayanan yang <span className="font-semibold text-indigo-600">cepat, rapi, dan profesional</span>, 
        untuk event kecil maupun besar di Bekasi, Jakarta, dan sekitarnya.
      </p>

      {/* Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {[
          {
            icon: "⚡",
            title: "Respons Cepat",
            desc: "Tim kami siap memberikan penawaran dan dukungan mendadak dengan cepat."
          },
          {
            icon: "⭐",
            title: "Kualitas Terjamin",
            desc: "Unit bersih, terawat, dan dicek sebelum pengiriman, sehingga Anda puas."
          },
          {
            icon: "🛠️",
            title: "Tim Profesional",
            desc: "Instalasi dan setup dilakukan teknisi berpengalaman dan ramah."
          }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-start gap-3"
          >
            <div className="text-3xl">{item.icon}</div>
            <h4 className="font-semibold text-gray-900 text-base sm:text-lg">{item.title}</h4>
            <p className="text-gray-600 text-sm sm:text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Extra info bottom */}
      <div className="mt-8 p-4 bg-indigo-50 border border-indigo-100 rounded-2xl text-center">
        <p className="text-indigo-700 font-medium text-sm sm:text-base">
          Kami siap membantu semua kebutuhan event Anda — dari acara intim hingga event besar dengan pelayanan maksimal.
        </p>
      </div>
    </section>
  );
}
