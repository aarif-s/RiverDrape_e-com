import React from 'react';
import assets from '../assets/assets'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={assets.logo} alt="Logo" className="navbar-logo" />
      </div>
    </nav>
  );
};

export default Navbar;
