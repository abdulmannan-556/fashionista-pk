import React from "react";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";

// Example products data (can later be fetched from API)
const featuredProducts = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 19.99,
    image: "/assets/products/white-tshirt.jpg",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 49.99,
    image: "/assets/products/denim-jacket.jpg",
  },
  {
    id: 3,
    name: "Elegant Dress",
    price: 79.99,
    image: "/assets/products/elegant-dress.jpg",
  },
  {
    id: 4,
    name: "Casual Sneakers",
    price: 59.99,
    image: "/assets/products/sneakers.jpg",
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
