import AdminSidebar from "./AdminSidebar";

const AdminLayout = ({ children }) => {
  return (
    <div style={styles.container}>
      <AdminSidebar />
      <div style={styles.content}>
        {children}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f4f6f9",
  },
  content: {
    flex: 1,
    padding: "30px",
  },
};

export default AdminLayout;