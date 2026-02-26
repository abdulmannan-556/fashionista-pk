const API_URL = "https://fashionistapk-backend-production.up.railway.app/api";

/* ==========================
   GET TOKEN FROM userInfo
========================== */
const getToken = () => {
  const userInfo = localStorage.getItem("userInfo");

  if (!userInfo) return null;

  try {
    const parsed = JSON.parse(userInfo);
    return parsed.token;
  } catch {
    return null;
  }
};

/* ==========================
   REGISTER USER
========================== */
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

/* ==========================
   LOGIN USER
========================== */
export const loginUser = async (email, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  return data; // DO NOT save token here anymore
};

/* ==========================
   GET CURRENT USER
========================== */
export const getCurrentUser = async () => {
  const token = getToken();

  if (!token) return null;

  const response = await fetch(`${API_URL}/auth/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

/* ==========================
   LOGOUT USER
========================== */
export const logoutUser = () => {
  localStorage.removeItem("userInfo");
};