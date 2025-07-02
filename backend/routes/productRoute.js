import express from 'express';
import multer from 'multer';
import path from 'path';
import { addProduct,listProducts,removeProduct } from '../controllers/productController.js';
const productRouter = express.Router();

// Configure multer for multiple file uploads
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, 'product-' + Date.now() + '-' + Math.round(Math.random() * 1e9) + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png|webp/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb('Error: Only image files (jpeg, jpg, png, webp) are allowed!');
    }
  }
});

// Routes
productRouter.post('/add', upload.array('images', 5), addProduct); // max 5 images
productRouter.get("/list", listProducts);
productRouter.post("/remove", removeProduct);
// Add more routes like /list, /remove if needed

export default productRouter;
