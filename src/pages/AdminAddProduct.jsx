import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../components/admin/AdminLayout";
import { createProduct } from "../api";

const AdminAddProduct = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);

  /* ==========================
     SUBMIT PRODUCT
  ========================== */

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !price || !image || !description) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("image", image);

      const response = await createProduct(formData);

      if (response.success) {
        alert("Product created successfully");

        navigate("/admin/products");
      } else {
        alert(response.message || "Failed to create product");
      }

      setLoading(false);
    } catch (error) {
      console.error("Create product error:", error);
      alert("Server error");
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <h1 style={styles.heading}>Add New Product</h1>

      <form onSubmit={submitHandler} style={styles.form}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <input
          type="number"
          placeholder="Price (PKR)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={styles.input}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          style={styles.input}
        />

        <textarea
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.textarea}
        />

        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Creating..." : "Create Product"}
        </button>
      </form>
    </AdminLayout>
  );
};

const styles = {
  heading: {
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",
    gap: "12px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "14px",
  },
  textarea: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    minHeight: "120px",
    fontSize: "14px",
  },
  button: {
    backgroundColor: "#00b894",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "bold",
  },
};

export default AdminAddProduct;