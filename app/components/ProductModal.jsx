export default function ProductModal({ product, onClose, WHATSAPP_PHONE }) {
  function openWA() {
    const t = encodeURIComponent(`Halo! Saya ingin pesan ${product.title}.`);
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${t}`, "_blank");
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white max-w-3xl w-full rounded-2xl overflow-hidden shadow-lg">
        <div className="grid md:grid-cols-2 gap-4">
          <img src={product.image} className="w-full h-64 object-cover" />

          <div className="p-6">
            <h3 className="text-2xl font-bold">{product.title}</h3>
            <div className="text-gray-500 mt-1">
              {product.category} — Rp {product.price.toLocaleString("id-ID")}
            </div>

            <p className="mt-3">{product.short}</p>

            <ul className="mt-3 text-sm list-disc list-inside">
              {product.specs.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>

            <div className="mt-6 flex gap-3">
              <button
                onClick={openWA}
                className="px-4 py-2 bg-green-600 text-white rounded-md"
              >
                Order via WhatsApp
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 border rounded-md"
              >
                Tutup
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
