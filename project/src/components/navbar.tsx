import React from 'react';
import assets from '../assets/assets';

const Navbar = () => {
  return (
    <nav className="bg-white h-20 fixed top-0 left-0 right-0 shadow-sm z-50">
      <div className="max-w-[1000px] w-full mx-auto px-2 flex items-center justify-between h-full">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src={assets.logo} alt="Logo" className="h-16" />
        </div>

        {/* Right: Profile Button */}
        <div>
          <button className="bg-white border border-black text-black px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-100">
            Profile
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
