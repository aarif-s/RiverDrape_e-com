const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      enum: ['T-Shirt', 'Hoodie', 'Polo', 'Sweatshirt'],
      default: 'T-Shirt',
    },
    sizes: {
      type: String, // or use [String] if you split by comma on backend
      required: true,
    },
    colors: {
      type: String, // or use [String]
      required: true,
    },
    images: {
      type: [String], // filenames of uploaded images
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
