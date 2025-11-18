"use client";

export default function ProductCard({ p, setSelected, openWhatsApp }) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition hover:shadow-lg hover:-translate-y-1 duration-300 font-sans">
      
      {/* Image */}
      <div className="w-full overflow-hidden rounded-t-2xl">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        {/* Title & Short Desc */}
        <div className="flex-1">
          <h4 className="text-gray-900 font-semibold text-base md:text-lg line-clamp-2">
            {p.title}
          </h4>
          <p className="text-gray-500 text-sm md:text-sm mt-1 line-clamp-2">
            {p.short}
          </p>
        </div>

        {/* Price & Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mt-2">
          <div className="text-indigo-600 font-bold text-lg md:text-xl">
            Rp {p.price.toLocaleString("id-ID")}
          </div>

          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSelected && setSelected(p)}
              className="px-3 py-1.5 border border-gray-200 rounded-lg text-gray-700 text-sm hover:bg-gray-50 transition"
            >
              Detail
            </button>

            <button
              onClick={() => openWhatsApp && openWhatsApp(p)}
              className="px-3 py-1.5 rounded-lg bg-green-600 text-white text-sm hover:bg-green-700 transition"
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
