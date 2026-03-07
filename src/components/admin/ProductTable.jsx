import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../api";

const ProductTable = ({ products, refreshProducts }) => {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");

    if (!confirmDelete) return;

    try {
      await deleteProduct(id);
      alert("Product deleted successfully");
      refreshProducts();
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete product");
    }
  };

  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Image</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Price</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td style={styles.td}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={styles.image}
                />
              </td>

              <td style={styles.td}>{product.name}</td>

              <td style={styles.td}>Rs. {product.price}</td>

              <td style={styles.td}>
                <button
                  style={styles.editBtn}
                  onClick={() => navigate(`/admin/edit-product/${product._id}`)}
                >
                  Edit
                </button>

                <button
                  style={styles.deleteBtn}
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    textAlign: "left",
    padding: "12px",
    borderBottom: "1px solid #eee",
  },

  td: {
    padding: "12px",
    borderBottom: "1px solid #eee",
  },

  image: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "5px",
  },

  editBtn: {
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    marginRight: "10px",
    cursor: "pointer",
  },

  deleteBtn: {
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ProductTable;