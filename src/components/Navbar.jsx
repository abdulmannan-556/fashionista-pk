import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
        <li>
          <Link to="/" className="hover:text-indigo-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop" className="hover:text-indigo-600">
            Shop
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-indigo-600">
            About
          </Link>
        </li>
        <li>
          <Link to="/cart" className="hover:text-indigo-600">
            Cart
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-2 font-medium text-gray-700 bg-white shadow-lg p-4 rounded">
          <li>
            <Link to="/" className="block hover:text-indigo-600" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="block hover:text-indigo-600" onClick={toggleMenu}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="block hover:text-indigo-600" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/cart" className="block hover:text-indigo-600" onClick={toggleMenu}>
              Cart
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
