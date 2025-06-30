const jwt = require('jsonwebtoken');

const ADMIN_USER = {
  username: 'admin',
  password: 'admin123',
  role: 'admin'
};

const SECRET_KEY = process.env.JWT_SECRET || 'yourSecretKey';

exports.loginAdmin = (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USER.username && password === ADMIN_USER.password) {
    const token = jwt.sign(
      { username, role: ADMIN_USER.role },
      SECRET_KEY,
      { expiresIn: '1h' }
    );
    return res.json({ token });
  }

  res.status(401).json({ message: 'Invalid credentials' });
};
