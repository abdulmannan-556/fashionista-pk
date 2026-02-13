import React from "react";
import Navbar from "./Navbar.jsx";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold text-indigo-600">Fashionista PK</h1>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
