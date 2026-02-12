import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Company Info */}
        <div>
          <h3 className="text-white text-lg font-bold mb-2">Fashionista PK</h3>
          <p>Your go-to destination for the latest fashion trends in Pakistan. Quality apparel at affordable prices.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-bold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="hover:text-indigo-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-indigo-400">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-indigo-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-indigo-400">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-bold mb-2">Contact Us</h3>
          <p>Email: support@fashionistapk.online</p>
          <p>Phone: +92 300 1234567</p>
          <p>Karachi, Pakistan</p>
        </div>
      </div>

      <div className="bg-gray-800 text-center py-4 mt-4">
        &copy; {new Date().getFullYear()} Fashionista PK. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
