import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

/* =============================
   ADMIN PAGES
============================= */
import AdminProducts from "./pages/AdminProducts.jsx";
import AdminAddProduct from "./pages/AdminAddProduct.jsx";
import AdminEditProduct from "./pages/AdminEditProduct.jsx";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>

        {/* =============================
           PUBLIC ROUTES
        ============================= */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<About />} />

        {/* =============================
           AUTH ROUTES
        ============================= */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* =============================
           USER PROTECTED ROUTES
        ============================= */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        {/* =============================
           ADMIN ROUTES
        ============================= */}

        <Route
          path="/admin/products"
          element={
            <ProtectedRoute>
              <AdminProducts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/add-product"
          element={
            <ProtectedRoute>
              <AdminAddProduct />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/edit-product/:id"
          element={
            <ProtectedRoute>
              <AdminEditProduct />
            </ProtectedRoute>
          }
        />

      </Routes>

      <Footer />
    </Router>
  );
};

export default App;