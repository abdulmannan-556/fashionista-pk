import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminLayout from "../components/admin/AdminLayout";
import api from "../api";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });

  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const { data } = await api.get(`/products/${id}`);
      setFormData(data.product);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/products/${id}`, formData);
      alert("Product updated successfully");
      navigate("/admin/products");
    } catch (error) {
      console.error("Update error:", error);
      alert("Failed to update product");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <AdminLayout>
      <h1 style={styles.heading}>Edit Product</h1>

      {loading ? (
        <p>Loading product...</p>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            style={styles.textarea}
            required
          />

          <button type="submit" style={styles.button}>
            Update Product
          </button>
        </form>
      )}
    </AdminLayout>
  );
};

const styles = {
  heading: {
    marginBottom: "20px",
  },
  form: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    maxWidth: "500px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
  },
  textarea: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    minHeight: "100px",
  },
  button: {
    backgroundColor: "#6c5ce7",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default EditProduct;