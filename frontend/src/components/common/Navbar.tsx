import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import assets from "../../assets/assets";
import Categories from "../../pages/Categories";
const Navbar = () => {
  return (
    <header className="bg-white shadow-sm w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={assets.logo} alt="Logo" className="h-16" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm text-gray-700 font-medium">
          <Categories />
          <Link to="/deals" className="hover:text-black">Deals</Link>
          <Link to="/products" className="hover:text-black">What’s New</Link>
          <Link to="/delivery" className="hover:text-black">Delivery</Link>
        </nav>

        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-100 px-3 py-1 rounded-md w-40 lg:w-60">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm w-full"
          />
          <FaSearch className="text-gray-600" />
        </div>

        {/* Account & Cart */}
        <div className="flex items-center gap-4 text-sm text-gray-700 ml-2">
          <Link to="/account" className="flex items-center gap-1 hover:text-black">
            <FaUser className="text-lg" />
            <span className="hidden md:inline">Account</span>
          </Link>
          <Link to="/cart" className="flex items-center gap-1 hover:text-black">
            <FaShoppingCart className="text-lg" />
            <span className="hidden md:inline">Cart</span>
          </Link>
          <button className="lg:hidden">
            <FaBars className="text-xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;