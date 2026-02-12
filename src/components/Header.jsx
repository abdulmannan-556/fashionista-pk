import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Fashionista PK Logo" className="h-10" />
        </Link>

        {/* Navigation */}
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
