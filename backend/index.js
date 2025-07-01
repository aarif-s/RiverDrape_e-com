const express = require('express');
const cors = require('cors');
require('dotenv').config();

const adminRoutes = require('./routes/adminRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

// Route for admin login
app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
