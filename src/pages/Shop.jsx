import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fashionistapk-backend-production.up.railway.app/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProducts(data.products);
        } else {
          setProducts([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 className="text-center mt-10">Loading products...</h2>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Shop</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg p-4 shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover mb-4"
              />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>

              <Link
                to={`/product/${product._id}`}
                className="inline-block mt-3 bg-purple-600 text-white px-4 py-2 rounded"
              >
                View Product
              </Link>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;