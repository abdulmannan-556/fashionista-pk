import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.jpg"; // Make sure to add an image in assets

const HeroSection = () => {
  return (
    <section className="relative bg-gray-100">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center py-16 md:py-24">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Discover Your Style with Fashionista PK
          </h1>
          <p className="mb-6 text-gray-700">
            Explore the latest trends in fashion and elevate your wardrobe with premium quality apparel at affordable prices.
          </p>
          <Link
            to="/shop"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-500 transition"
          >
            Shop Now
          </Link>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={heroImage}
            alt="Fashionista PK Hero"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
