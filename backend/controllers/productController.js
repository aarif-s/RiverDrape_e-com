import productModel from "../models/productModel.js"; // change as per your model path
import fs from 'fs';
import path from 'path';


// Add Product Controller
export const addProduct = async (req, res) => {
  try {
    // Check if files exist
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Please upload at least one image",
      });
    }

    // Extract image filenames
    const imageFilenames = req.files.map(file => file.filename);

    const product = new productModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      sizes: req.body.sizes,
      colors: req.body.colors,
      images: imageFilenames, // Assuming this is an array in the model
    });

    await product.save();

    res.json({
      success: true,
      message: "Product added successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error adding product",
      error: error.message,
    });
  }
};


// ✅ List All Products
// ======================
export const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: "Error fetching product list",
    });
  }
};

// ======================
// ✅ Remove Product
// ======================
export const removeProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.body.id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    // Delete associated image files
    product.images.forEach((filename) => {
      const filepath = path.join("uploads", filename);
      fs.unlink(filepath, (err) => {
        if (err) console.log("Failed to delete image:", filename);
      });
    });

    await productModel.findByIdAndDelete(req.body.id);

    res.json({
      success: true,
      message: "Product removed",
    });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: "Error removing product",
    });
  }
};

