// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div>
          <img src="/logo.png" alt="Logo" style={styles.logo} />
        </div>

        <div style={{ position: 'relative' }}>
          <button onClick={() => setOpen(!open)} style={styles.profileBtn}>
            Admin
          </button>

          {open && (
            <div style={styles.dropdown}>
              {!isLoggedIn ? (
                <>
                  <Link to="/admin/login" style={styles.link}>Login</Link>
                  <Link to="/admin/signup" style={styles.link}>Sign Up</Link>
                </>
              ) : (
                <>
                  <p style={styles.link}>Logged in as Admin</p>
                  <button onClick={handleLogout} style={styles.link}>Logout</button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

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
<<<<<<< HEAD
    height: '60px',
=======
    height: '60px', // logo size retained
  },
  right: {
    display: 'flex',
    alignItems: 'center',
>>>>>>> 3d7d716a65749b6dbb583c80bf8f8dbce0ace365
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

export default Navbar;
