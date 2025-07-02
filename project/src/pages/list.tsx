import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  images: string[];
}

const List: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const apiUrl = 'http://localhost:4000';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/products/list`);
        if (res.data.success) {
          setProducts(res.data.data);
        } else {
          toast.error('Failed to fetch products');
        }
      } catch (error) {
        console.error(error);
        toast.error('Something went wrong while fetching products');
      }
    };

    fetchProducts();
  }, []);

  const deleteProduct = async (id: string) => {
    try {
      const res = await axios.post(`${apiUrl}/api/products/remove`, { id });
      if (res.data.success) {
        setProducts((prev) => prev.filter((product) => product._id !== id));
        toast.success('Product deleted successfully');
      } else {
        toast.error(res.data.message || 'Failed to delete product');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error deleting product');
    }
  };

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'rounded-xl',
    dotsClass: 'slick-dots bottom-2',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">T-shirt Products</h2>

      {products.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition duration-300 hover:shadow-xl"
            >
              <div className="w-full h-64 relative">
                {product.images.length > 1 ? (
                  <Slider {...sliderSettings}>
                    {product.images.map((img, idx) => (
                      <div key={idx} className=''>
                        <img
                          src={`${apiUrl}/uploads/${img}`}
                          alt={`${product.name}-${idx}`}
                          className="w-full h-64 object-cover rounded-t-2xl"
                        />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <img
                    src={`${apiUrl}/uploads/${product.images[0]}`}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                <p className="text-sm text-gray-500 mt-1">Category: {product.category}</p>
                <p className="text-md text-black font-semibold mt-2">₹{product.price}</p>
                <button
                  onClick={() => deleteProduct(product._id)}
                  className="mt-auto bg-red-100 text-red-600 hover:bg-red-200 px-3 py-2 text-sm rounded-lg font-medium mt-4"
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
