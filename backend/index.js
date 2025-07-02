import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import adminRoutes from './routes/adminRoutes.js';
import productRouter from './routes/productRoute.js';
import connectDB from './config/db.js';
import path from 'path';

dotenv.config();



const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

connectDB(); // ← this is required


// Route for admin login
app.use('/admin', adminRoutes);
app.use("/api/products", productRouter);
app.use('/uploads', express.static(path.resolve('uploads')));

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
