import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get userInfo from localStorage
    const userInfo = localStorage.getItem("userInfo");

    if (!userInfo) {
      setUser(null);
      return;
    }

    try {
      const parsedUser = JSON.parse(userInfo);

      if (parsedUser && parsedUser.token) {
        setUser(parsedUser);
      } else {
        setUser(null);
      }
    } catch (error) {
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    setUser(null);
    navigate("/login");
    window.location.reload();
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
            <span className="font-semibold">
              Hello, {user.name}
            </span>

            {user.role === "admin" && (
              <Link
                to="/add-product"
                className="px-3 py-1 bg-green-600 text-white rounded"
              >
                Add Product
              </Link>
            )}

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