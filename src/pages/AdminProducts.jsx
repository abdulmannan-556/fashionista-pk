import { useEffect, useState } from "react";
import api from "../api";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await api.get("/products");
    setProducts(data.products);
  };

  const deleteProduct = async (id) => {
    await api.delete(`/products/${id}`);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Admin Product List</h2>

      {products.map((product) => (
        <div key={product._id}>
          <h4>{product.name}</h4>
          <button onClick={() => deleteProduct(product._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default AdminProducts;