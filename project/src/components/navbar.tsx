import React from 'react';
import assets from '../assets/assets';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* Left: Logo */}
        <div style={styles.left}>
          <img src={assets.logo} alt="Logo" style={styles.logo} />
        </div>

        {/* Right: Profile Button */}
        <div style={styles.right}>
          <button style={styles.profileBtn}>Profile</button>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#ffffff',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px', // less padding on left and right
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  container: {
    width: '100%',
    maxWidth: '1000px', // narrower container
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '180px', // logo size retained
  },
  right: {
    display: 'flex',
    alignItems: 'center',
  },
  profileBtn: {
    backgroundColor: '#ffffff',
    border: '1px solid #000000',
    color: '#000000',
    padding: '6px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
    fontSize: '14px',
  },
};

export default Navbar;
