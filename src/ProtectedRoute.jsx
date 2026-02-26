import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Get user info from localStorage
  const userInfo = localStorage.getItem("userInfo");

  // If nothing stored → redirect to login
  if (!userInfo) {
    return <Navigate to="/login" replace />;
  }

  try {
    const parsedUser = JSON.parse(userInfo);

    // If token missing inside userInfo → redirect
    if (!parsedUser.token) {
      localStorage.removeItem("userInfo");
      return <Navigate to="/login" replace />;
    }

    // If everything valid → allow access
    return children;

  } catch (error) {
    // If JSON parsing fails → clear storage & redirect
    localStorage.removeItem("userInfo");
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;