import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav>
      <ul className="flex space-x-6 items-center">
        <li>
          <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
        </li>
        <li>
          <Link to="/shop" className="hover:text-indigo-600 transition">Shop</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-indigo-600 transition">About</Link>
        </li>
        <li>
          <Link to="/cart" className="hover:text-indigo-600 transition relative">
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
