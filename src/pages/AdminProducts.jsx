import { useEffect, useState } from "react";
import AdminLayout from "../components/admin/AdminLayout";
import ProductTable from "../components/admin/ProductTable";
import api from "../api";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data } = await api.get("/products");
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete product");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <AdminLayout>
      <h1 style={styles.heading}>Product Management</h1>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <ProductTable products={products} onDelete={handleDelete} />
      )}
    </AdminLayout>
  );
};

const styles = {
  heading: {
    marginBottom: "20px",
  },
};

export default AdminProducts;