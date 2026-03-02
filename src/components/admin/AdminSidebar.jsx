import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/admin/products" },
    { name: "Add Product", path: "/add-product" },
  ];

  return (
    <div style={styles.sidebar}>
      <h2 style={styles.logo}>Admin Panel</h2>

      {menuItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          style={{
            ...styles.link,
            ...(location.pathname === item.path ? styles.active : {}),
          }}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

const styles = {
  sidebar: {
    width: "240px",
    backgroundColor: "#1e1e2f",
    color: "#fff",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    marginBottom: "30px",
    fontSize: "20px",
    fontWeight: "bold",
  },
  link: {
    color: "#ccc",
    textDecoration: "none",
    padding: "12px 10px",
    borderRadius: "6px",
    marginBottom: "10px",
    transition: "0.3s",
  },
  active: {
    backgroundColor: "#6c5ce7",
    color: "#fff",
  },
};

export default AdminSidebar;