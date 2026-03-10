import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminLayout from "../components/admin/AdminLayout";
import { getSingleProduct, updateProduct } from "../api";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: null, // changed to null for file upload
    description: "",
  });

  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(""); // preview current image

  /* ==========================
     FETCH PRODUCT
  ========================== */
  const fetchProduct = async () => {
    try {
      const data = await getSingleProduct(id);

      if (data && data.product) {
        setFormData({
          name: data.product.name,
          price: data.product.price,
          image: null,
          description: data.product.description,
        });
        setCurrentImage(data.product.image || "");
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      setLoading(false);
    }
  };

  /* ==========================
     INPUT CHANGE
  ========================== */
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files && files[0]) {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  /* ==========================
     UPDATE PRODUCT
  ========================== */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("price", formData.price);
      data.append("description", formData.description);

      // only append image if a new file was selected
      if (formData.image) {
        data.append("image", formData.image);
      }

      await updateProduct(id, data);

      alert("Product updated successfully");
      navigate("/admin/products");
    } catch (error) {
      console.error("Update error:", error);
      alert("Failed to update product");
    }
  };

  /* ==========================
     PAGE LOAD
  ========================== */
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

          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              style={styles.input}
            />
            {currentImage && !formData.image && (
              <img
                src={currentImage}
                alt="Current Product"
                style={{ maxWidth: "150px", borderRadius: "6px", marginTop: "5px" }}
              />
            )}
            {formData.image && (
              <p>New image selected: {formData.image.name}</p>
            )}
          </div>

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