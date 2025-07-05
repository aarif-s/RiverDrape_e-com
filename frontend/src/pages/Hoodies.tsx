import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/common/ProductCard";
import { toast } from "react-toastify";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  images: string[];
}

const Hoodies: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const apiUrl = "http://localhost:4000"; // change when deployed

  useEffect(() => {
    const fetchHoodies = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/products/list`);
        if (res.data.success) {
          const filtered = res.data.data.filter(
            (product: Product) =>
              product.category.toLowerCase().includes("hoodie")
          );
          setProducts(filtered);
        } else {
          toast.error("Failed to fetch Hoodies");
        }
      } catch (err) {
        console.error(err);
        toast.error("Error fetching Hoodies");
      }
    };

    fetchHoodies();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Hoodies</h2>

      <div className="flex overflow-x-auto gap-6 pb-4">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            images={product.images.map((img) => `${apiUrl}/uploads/${img}`)}
            title={product.name}
            price={`₹${product.price}`}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Hoodies;