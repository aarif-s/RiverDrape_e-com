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

<<<<<<< Updated upstream
=======
const styles: { [key: string]: React.CSSProperties } = {
  navbar: {
    backgroundColor: '#fff',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 999,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  logo: {
    height: '60px',
  },
  profileBtn: {
    border: '1px solid #000',
    borderRadius: '6px',
    padding: '8px 12px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontWeight: 500,
  },
  dropdown: {
    position: 'absolute',
    top: '45px',
    right: 0,
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '6px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    zIndex: 999,
  },
  link: {
    display: 'block',
    padding: '10px 14px',
    textDecoration: 'none',
    color: '#333',
    backgroundColor: '#fff',
    borderBottom: '1px solid #eee',
    cursor: 'pointer',
  },
};

>>>>>>> Stashed changes
export default Navbar;
