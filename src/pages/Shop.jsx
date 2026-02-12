import React from "react";
import ProductCard from "../components/ProductCard";

// Example products data (can later be fetched from API or context)
const allProducts = [
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
  {
    id: 5,
    name: "Leather Handbag",
    price: 99.99,
    image: "/assets/products/leather-handbag.jpg",
  },
  {
    id: 6,
    name: "Blue Jeans",
    price: 39.99,
    image: "/assets/products/blue-jeans.jpg",
  },
];

const Shop = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Shop All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
