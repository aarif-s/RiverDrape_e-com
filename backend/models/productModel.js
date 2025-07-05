import mongoose from "mongoose";

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
      enum: ["T-Shirt", "Hoodie", "Polo", "Sweatshirt"],
      default: "T-Shirt",
    },
    sizes: {
      type: String,
      required: true,
    },
    colors: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);
export default productModel; // ✅ Now using default export
