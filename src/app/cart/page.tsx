"use client";

import { useCart } from "@/hooks/useCart";
import Header from "../header";
import Footer from "../footer";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  // Ensure proper calculation of the subtotal
  const subtotal = cart?.reduce(
    (total, item) =>
      total +
      ((Number(item.product.salePrice) || Number(item.product.price)) *
        (item.quantity || 1)),
    0
  ) || 0;

  return (
    <main>
      <Header />
      <div className="p-6 mt-10">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
        {cart?.length === 0 || !cart ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.product.id}
              className="flex justify-between items-center border-b py-4"
            >
              <div>
                <p className="text-lg font-semibold">{item.product.name}</p>
                <p>Quantity: {item.quantity || 1}</p>
                <p>
                  Price: Rs.{" "}
                  {(
                    (Number(item.product.salePrice) || Number(item.product.price)) *
                    (item.quantity || 1)
                  ).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.product.id)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))
        )}
        <div className="mt-8">
          <h2 className="text-xl font-bold">Subtotal: Rs. {subtotal.toFixed(2)}</h2>
        </div>
      </div>
      <Footer />
    </main>
  );
}
