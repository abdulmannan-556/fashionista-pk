const API_URL = "https://fashionistapk-backend-production.up.railway.app/api";

// ==========================
// REGISTER USER
// ==========================
export const registerUser = async (name, email, password) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  return response.json();
};

// ==========================
// LOGIN USER
// ==========================
export const loginUser = async (email, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  // Save token if login successful
  if (data.token) {
    localStorage.setItem("token", data.token);
  }

  return data;
};

// ==========================
// GET CURRENT USER (Protected)
// ==========================
export const getCurrentUser = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/auth/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

// ==========================
// LOGOUT
// ==========================
export const logoutUser = () => {
  localStorage.removeItem("token");
};