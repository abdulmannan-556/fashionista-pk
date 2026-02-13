import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import ProductCard from "../components/ProductCard.jsx";

// Sample static products (later will be dynamic)
const products = [
  {
    id: 1,
    name: "Stylish Jacket",
    price: 79.99,
    image: "https://via.placeholder.com/400x400?text=Jacket"
  },
  {
    id: 2,
    name: "Casual Sneakers",
    price: 49.99,
    image: "https://via.placeholder.com/400x400?text=Sneakers"
  },
  {
    id: 3,
    name: "Classic T-Shirt",
    price: 19.99,
    image: "https://via.placeholder.com/400x400?text=T-Shirt"
  },
  {
    id: 4,
    name: "Denim Jeans",
    price: 59.99,
    image: "https://via.placeholder.com/400x400?text=Jeans"
  }
];

const Home = () => {
  return (
    <div>
      <HeroSection />
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
