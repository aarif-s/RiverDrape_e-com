import React from 'react';
import assets from '../assets/assets';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { logout, isAuthenticated } = useAuth(); // <- assuming you have `isAuthenticated`, or fallback to checking token

  return (
    <nav className="bg-white h-20 fixed top-0 left-0 right-0 shadow-sm z-50">
      <div className="max-w-[1000px] w-full mx-auto px-2 flex items-center justify-between h-full">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src={assets.logo} alt="Logo" className="h-16" />
        </div>

        {/* Right: Profile & Logout */}
        <div className="flex items-center space-x-3">
          <button className="bg-white border border-black text-black px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-100">
            Profile
          </button>

          {isAuthenticated && (
            <button
              onClick={logout}
              className="bg-black text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-800"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
