import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import assets from '../assets/assets';  

interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  images: string[]; // local or placeholder images
}

const List: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Sample mock data
    const sampleData: Product[] = [
      {
        _id: '1',
        name: 'Urban Oversized Tee',
        description: 'Premium cotton t-shirt with relaxed fit for streetwear vibes.',
        category: 'T-Shirt',
        price: 599,
        images: [assets.tshirt1],
      },
      {
        _id: '2',
        name: 'Classic White Tee',
        description: 'Essential white t-shirt with breathable fabric.',
        category: 'T-Shirt',
        price: 399,
        images: [assets.tshirt2],
      },
      {
        _id: '3',
        name: 'Graphic Streetwear Tee',
        description: 'Trendy print design on a comfortable tee.',
        category: 'T-Shirt',
        price: 699,
        images: [assets.tshirt3],
      },
    ];

    setProducts(sampleData);
  }, []);

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((product) => product._id !== id));
    toast.success('Mock: Product removed!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">T-shirt Products</h2>

      {products.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={item.images[0]}
                alt={item.name}
                className="h-64 w-full object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                <p className="text-sm text-gray-500 mt-1">Category: {item.category}</p>
                <p className="text-sm text-black font-semibold mt-2">₹{item.price}</p>
                <button
                  onClick={() => deleteProduct(item._id)}
                  className="mt-auto bg-red-100 text-red-600 hover:bg-red-200 px-3 py-2 text-sm rounded-md font-medium mt-4"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
