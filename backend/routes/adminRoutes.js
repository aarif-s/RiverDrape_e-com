import express from 'express';
import { loginAdmin, registerAdmin } from '../controllers/adminController.js';
import { verifyAdminToken } from '../middleware/jwt.js';

const router = express.Router();

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

export default router;
