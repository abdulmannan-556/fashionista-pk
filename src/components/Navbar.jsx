import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";
import { logoutUser } from "../api";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const cartCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  // Get logged in user
  const userInfo = localStorage.getItem("userInfo");
  const user = userInfo ? JSON.parse(userInfo) : null;

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav>
      <ul className="flex space-x-6 items-center">
        <li>
          <Link to="/" className="hover:text-indigo-600 transition">
            Home
          </Link>
        </li>

        <li>
          <Link to="/shop" className="hover:text-indigo-600 transition">
            Shop
          </Link>
        </li>

        <li>
          <Link to="/about" className="hover:text-indigo-600 transition">
            About
          </Link>
        </li>

        <li>
          <Link
            to="/cart"
            className="hover:text-indigo-600 transition relative"
          >
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </li>

        {/* ================= AUTH SECTION ================= */}

        {!user ? (
          <>
            <li>
              <Link to="/login" className="hover:text-indigo-600 transition">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-indigo-600 transition">
                Register
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="font-semibold">
              Hello {user.name}
            </li>

            {user.role === "admin" && (
              <li>
                <Link
                  to="/add-product"
                  className="hover:text-indigo-600 transition"
                >
                  Add Product
                </Link>
              </li>
            )}

            <li>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:text-red-800 transition"
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;