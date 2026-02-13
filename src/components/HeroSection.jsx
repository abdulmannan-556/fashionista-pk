import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-indigo-600 text-white py-24">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl font-bold mb-6">Welcome to Fashionista PK</h1>
        <p className="text-xl mb-8">
          Trendy fashion apparel and accessories for every style. Shop the latest collections now!
        </p>
        <Link
          to="/shop"
          className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
