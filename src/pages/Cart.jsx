import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-700">Add products to your cart to see them here.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>

      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3">Product</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Quantity</th>
              <th className="px-6 py-3">Subtotal</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-t border-gray-200">
                <td className="px-6 py-3">{item.name}</td>
                <td className="px-6 py-3">${item.price.toFixed(2)}</td>
                <td className="px-6 py-3">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="w-16 border border-gray-300 rounded px-2 py-1"
                  />
                </td>
                <td className="px-6 py-3">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="px-6 py-3">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-500 transition"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={clearCart}
          className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-500 transition"
        >
          Clear Cart
        </button>
        <div className="text-2xl font-bold">
          Total: ${totalPrice.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Cart;
