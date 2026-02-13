import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Fashionista PK. All rights reserved.</p>
        <p className="mt-2 text-gray-400 text-sm">
          Designed with ❤️ for the best shopping experience.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
