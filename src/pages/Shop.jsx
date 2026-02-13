import React from "react";
import ProductCard from "../components/ProductCard.jsx";

// Sample products (later will be dynamic)
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
  },
  {
    id: 5,
    name: "Leather Bag",
    price: 99.99,
    image: "https://via.placeholder.com/400x400?text=Bag"
  },
  {
    id: 6,
    name: "Summer Hat",
    price: 24.99,
    image: "https://via.placeholder.com/400x400?text=Hat"
  }
];

const Shop = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Shop All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
