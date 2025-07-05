import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import ProductCard from "../components/common/ProductCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// API base URL
const apiUrl = "http://localhost:4000";

interface Product {
  _id: string;
  name: string;
  price: number;
  mrp?: number;
  discount?: string;
  images: string[];
  description:string;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/products/list`);
        if (res.data.success) {
          setProducts(res.data.data);
        } else {
          toast.error("Failed to fetch products");
        }
      } catch (error) {
        console.error(error);
        toast.error("Error fetching products");
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-12">
      {/* Hero Banner */}
      <div className="w-full h-48 bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center rounded-lg shadow">
        <h2 className="text-3xl font-bold text-green-800">Big Summer Sale ✨</h2>
      </div>

      {/* Hot Picks Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Hot Picks for You</h3>
        <div className="flex overflow-x-auto gap-6 pb-2">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              images={product.images.map(img => `${apiUrl}/uploads/${img}`)}
              title={product.name}
              price={`₹${product.price}`}
              description={product.description}

            />
          ))}
        </div>
      </div>

      {/* Email Subscription */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center sm:text-left">
          Welcome to Shopcart 🛂
        </h1>
        <p className="mb-4 text-gray-700 text-center sm:text-left">
          Start shopping from the best deals and latest collections!
        </p>
        <form className="space-y-4 max-w-md mx-auto sm:mx-0">
          <Input name="email" placeholder="Enter your email" />
          <Button>Subscribe</Button>
        </form>
      </div>
    </div>
  );
};

export default Home;
