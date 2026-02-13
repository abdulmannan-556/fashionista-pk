import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";

// Sample products (replace with dynamic API later)
const products = [
  {
    id: 1,
    name: "Stylish Jacket",
    price: 79.99,
    image: "https://via.placeholder.com/400x400?text=Jacket",
    description: "A stylish jacket for all seasons."
  },
  {
    id: 2,
    name: "Casual Sneakers",
    price: 49.99,
    image: "https://via.placeholder.com/400x400?text=Sneakers",
    description: "Comfortable sneakers for everyday use."
  },
  {
    id: 3,
    name: "Classic T-Shirt",
    price: 19.99,
    image: "https://via.placeholder.com/400x400?text=T-Shirt",
    description: "Classic T-Shirt made from premium cotton."
  },
  {
    id: 4,
    name: "Denim Jeans",
    price: 59.99,
    image: "https://via.placeholder.com/400x400?text=Jeans",
    description: "Stylish denim jeans for casual wear."
  }
];

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 flex flex-col md:flex-row gap-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-1/2 h-auto object-cover rounded"
      />
      <div className="md:w-1/2 flex flex-col justify-start">
        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
        <p className="text-gray-700 mb-6">${product.price}</p>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
