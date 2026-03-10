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
    headers: { "Content-Type": "application/json" },
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
    headers: { "Content-Type": "application/json" },
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
  try {
    const response = await fetch(`${API_URL}/products`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return { success: false, message: "Failed to fetch products" };
  }
};

/* GET SINGLE PRODUCT */
export const getSingleProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    return { success: false, message: "Failed to fetch product" };
  }
};

/* CREATE PRODUCT (Admin Only) */
export const createProduct = async (formData) => {
  try {
    const token = getToken();
    const response = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData, // FormData includes the image
    });
    return await response.json();
  } catch (error) {
    console.error("Create product error:", error);
    return { success: false, message: "Server error while creating product" };
  }
};

/* UPDATE PRODUCT (Admin Only) */
export const updateProduct = async (id, formData) => {
  try {
    const token = getToken();
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: formData, // FormData includes optional new image
    });
    return await response.json();
  } catch (error) {
    console.error("Update product error:", error);
    return { success: false, message: "Server error while updating product" };
  }
};

/* DELETE PRODUCT (Admin Only) */
export const deleteProduct = async (id) => {
  try {
    const token = getToken();
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    return await response.json();
  } catch (error) {
    console.error("Delete product error:", error);
    return { success: false, message: "Server error while deleting product" };
  }
};