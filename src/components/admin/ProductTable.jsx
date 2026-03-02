import { Link } from "react-router-dom";

const ProductTable = ({ products, onDelete }) => {
  return (
    <div style={styles.wrapper}>
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
          {products.length === 0 ? (
            <tr>
              <td colSpan="4" style={styles.empty}>
                No products found
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product._id} style={styles.tr}>
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
                  <Link
                    to={`/admin/edit-product/${product._id}`}
                    style={styles.editBtn}
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => onDelete(product._id)}
                    style={styles.deleteBtn}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  wrapper: {
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
    borderBottom: "1px solid #f0f0f0",
  },
  tr: {
    transition: "0.2s",
  },
  image: {
    width: "60px",
    height: "60px",
    objectFit: "cover",
    borderRadius: "6px",
  },
  editBtn: {
    backgroundColor: "#0984e3",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: "5px",
    textDecoration: "none",
    marginRight: "8px",
    fontSize: "14px",
  },
  deleteBtn: {
    backgroundColor: "#d63031",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
  empty: {
    textAlign: "center",
    padding: "20px",
    color: "#999",
  },
};

export default ProductTable;