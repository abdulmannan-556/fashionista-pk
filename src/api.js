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

  return response.json();
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

/* ==========================
   PRODUCT APIs
========================== */

/* GET ALL PRODUCTS */
export const getAllProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  return response.json();
};

/* GET SINGLE PRODUCT */
export const getSingleProduct = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`);
  return response.json();
};

/* CREATE PRODUCT (Admin Only) */
export const createProduct = async (formData) => {
  const token = getToken();

  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  return response.json();
};

/* UPDATE PRODUCT (Admin Only) */
export const updateProduct = async (id, formData) => {
  const token = getToken();

  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  return response.json();
};

/* DELETE PRODUCT (Admin Only) */
export const deleteProduct = async (id) => {
  const token = getToken();

  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};