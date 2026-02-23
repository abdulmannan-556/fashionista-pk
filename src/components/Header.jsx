import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      // Fetch logged-in user info
      fetch("https://fashionistapk-backend-production.up.railway.app/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) setUser(data.user);
          else setUser(null);
        })
        .catch(() => setUser(null));
    } else {
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <Link to="/" className="font-bold text-xl text-purple-600">
        Fashionista PK
      </Link>

      <nav className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>

        {user ? (
          <>
            <span>Hello, {user.id.slice(0, 6)}</span>
            <button
              onClick={handleLogout}
              className="px-3 py-1 bg-red-500 text-white rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="px-3 py-1 border border-black rounded"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-3 py-1 border border-black rounded"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;