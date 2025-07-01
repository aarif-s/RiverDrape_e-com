const express = require('express');
const router = express.Router();
const { loginAdmin, registerAdmin } = require('../controllers/adminController');
const { verifyAdminToken } = require('../middleware/jwt');

// Public Routes
router.post('/register', registerAdmin);
router.post('/login', loginAdmin);

// ✅ Protected Dashboard Route
router.get('/dashboard', verifyAdminToken, (req, res) => {
  res.json({
    message: `Welcome, Admin ${req.user.username}!`,
    user: req.user,
  });
});

module.exports = router;




