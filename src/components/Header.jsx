import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../api";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    logoutUser();
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header className="flex justify-between items-center px-8 py-4 shadow bg-white">
      <h1 className="text-2xl font-bold text-purple-600">
        <Link to="/">Fashionista PK</Link>
      </h1>

      <nav className="flex gap-6 items-center">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>

        {!isLoggedIn ? (
          <>
            <Link
              to="/login"
              className="bg-black text-white px-4 py-2 rounded"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="border border-black px-4 py-2 rounded"
            >
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;