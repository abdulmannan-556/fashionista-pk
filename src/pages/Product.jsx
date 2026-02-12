import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

// Example products data (should match Shop page)
const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 19.99,
    description: "A comfortable, classic white t-shirt for everyday wear.",
    image: "/assets/products/white-tshirt.jpg",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 49.99,
    description: "Stylish denim jacket perfect for layering in any season.",
    image: "/assets/products/denim-jacket.jpg",
  },
  {
    id: 3,
    name: "Elegant Dress",
    price: 79.99,
    description: "Elegant dress suitable for formal occasions and parties.",
    image: "/assets/products/elegant-dress.jpg",
  },
  {
    id: 4,
    name: "Casual Sneakers",
    price: 59.99,
    description: "Comfortable casual sneakers for daily wear and outings.",
    image: "/assets/products/sneakers.jpg",
  },
];

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 flex flex-col md:flex-row gap-8">
      {/* Product Image */}
      <div className="md:w-1/2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Product Details */}
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-indigo-600 mb-6">
            ${product.price.toFixed(2)}
          </p>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-500 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
