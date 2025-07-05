import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 text-sm text-gray-600 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        © {new Date().getFullYear()} Shopcart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;