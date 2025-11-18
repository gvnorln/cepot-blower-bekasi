"use client";
import React from "react";

export default function FloatingCart({ cart = [], setCart, WHATSAPP_PHONE }) {
  const [open, setOpen] = React.useState(false);

  const decreaseQty = (id, variantName) => {
    setCart(
      cart
        .map((p) =>
          p.id === id && p.selectedVariant.name === variantName
            ? { ...p, qty: p.qty - 1 }
            : p
        )
        .filter((p) => p.qty > 0)
    );
  };

  const removeFromCart = (id, variantName) => {
    setCart(cart.filter((p) => !(p.id === id && p.selectedVariant.name === variantName)));
  };

  const totalPrice = cart.reduce(
    (acc, p) =>
      acc + (p.selectedVariant.pricePerUnit || p.selectedVariant.pricePerPcs) * p.qty,
    0
  );

  const handleWAOrder = () => {
    if (cart.length === 0) {
      alert("Cart kosong!");
      return;
    }
    let msg = `Halo, saya ingin memesan produk dari Cepot Blower Bekasi.%0A%0A`;
    cart.forEach((p) => {
      msg += `${p.title} (${p.selectedVariant.name}) - Qty: ${p.qty}%0A`;
    });
    msg += `%0ATotal: Rp${totalPrice.toLocaleString()}%0A%0ANama: %0AAlamat: %0ACatatan:`;
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${msg}`, "_blank");
  };

  return (
    <div className="fixed right-6 z-50 flex flex-col items-end" style={{ bottom: "80px" }}>
      {open && (
        <div className="mb-2 bg-white rounded-2xl shadow-xl p-4 w-72 max-h-80 overflow-auto border">
          <h4 className="text-lg font-semibold mb-2">Cart</h4>
          {cart.length === 0 ? (
            <p className="text-sm text-gray-500">Belum ada produk di cart</p>
          ) : (
            <div className="flex flex-col gap-2">
              {cart.map((p, idx) => (
                <div key={idx} className="flex justify-between items-center border-b py-1">
                  <div>
                    <p className="text-sm font-medium">{p.title}</p>
                    <p className="text-xs text-gray-500">
                      {p.selectedVariant.name} x {p.qty} - Rp{" "}
                      {((p.selectedVariant.pricePerUnit || p.selectedVariant.pricePerPcs) * p.qty).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={() => decreaseQty(p.id, p.selectedVariant.name)}
                      className="text-red-500 font-bold px-2"
                    >
                      -
                    </button>
                    <button
                      onClick={() => setCart([...cart, { ...p, qty: 1 }])}
                      className="text-green-500 font-bold px-2"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(p.id, p.selectedVariant.name)}
                      className="text-gray-400 font-bold px-2"
                    >
                      x
                    </button>
                  </div>
                </div>
              ))}
              <p className="text-sm font-medium mt-2">
                Total: Rp{totalPrice.toLocaleString()}
              </p>
              <button
                onClick={handleWAOrder}
                className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
              >
                Order via WhatsApp
              </button>
            </div>
          )}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full p-3 bg-blue-600 shadow-lg text-white hover:bg-blue-700 transition"
      >
        🛒 {cart.length > 0 && <span className="ml-1 font-bold">{cart.length}</span>}
      </button>
    </div>
  );
}
