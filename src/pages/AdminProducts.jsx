import { useEffect, useState } from "react";
import AdminLayout from "../components/admin/AdminLayout";
import ProductTable from "../components/admin/ProductTable";
import { getAllProducts, deleteProduct } from "../api";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ==========================
     FETCH PRODUCTS
  ========================== */
  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();

      if (data && data.products) {
        setProducts(data.products);
      } else {
        setProducts([]);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  /* ==========================
     DELETE PRODUCT
  ========================== */
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await deleteProduct(id);

      // refresh list
      fetchProducts();
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete product");
    }
  };

  /* ==========================
     PAGE LOAD
  ========================== */
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