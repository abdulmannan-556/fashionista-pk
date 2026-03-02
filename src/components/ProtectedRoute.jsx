import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const userInfo = localStorage.getItem("userInfo");

  if (!userInfo) {
    // Not logged in
    return <Navigate to="/login" replace />;
  }

  const user = JSON.parse(userInfo);

  // If route requires admin access
  if (adminOnly && user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;