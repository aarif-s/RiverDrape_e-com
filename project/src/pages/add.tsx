import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

//interface AddTshirtProps {
  //url: string;
//}


const AddTshirt: React.FC = () => {
  const url = "http://localhost:4000";
  const [images, setImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [data, setData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'T-Shirt',
    sizes: '',
    colors: '',
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setImages(filesArray);

      // Generate previews
      const previews = filesArray.map((file) => URL.createObjectURL(file));
      setPreviewUrls(previews);
    }
  };

  useEffect(() => {
    // Clean up object URLs to avoid memory leaks
    return () => {
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (images.length === 0) {
      toast.error('Please upload at least one image.');
      return;
    }

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', data.price); // backend will parse it
    formData.append('category', data.category);
    formData.append('sizes', data.sizes);
    formData.append('colors', data.colors);

    // Append all images
    images.forEach((img) => formData.append('images', img));

    try {
      const res = await axios.post(`${url}/api/products/add`, formData);
      if (res.data.success) {
        toast.success('Product added successfully!');
        setData({
          name: '',
          description: '',
          price: '',
          category: 'T-Shirt',
          sizes: '',
          colors: '',
        });
        setImages([]);
        setPreviewUrls([]);
      } else {
        toast.error(res.data.message || 'Failed to add product');
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add T-shirt Product</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Images */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Upload Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="mt-2 block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
            required
          />
          {previewUrls.length > 0 && (
            <div className="mt-4 flex gap-3 flex-wrap">
              {previewUrls.map((url, idx) => (
                <img
                  key={idx}
                  src={url}
                  alt="preview"
                  className="w-20 h-20 object-cover rounded border"
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            name="name"
            type="text"
            value={data.name}
            onChange={handleInputChange}
            placeholder="e.g., Urban Oversized Tee"
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            rows={4}
            value={data.description}
            onChange={handleInputChange}
            placeholder="Describe your product..."
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
            value={data.category}
            onChange={handleInputChange}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="T-Shirt">T-Shirt</option>
            <option value="Hoodie">Hoodie</option>
            <option value="Polo">Polo</option>
            <option value="Sweatshirt">Sweatshirt</option>
          </select>
        </div>

        {/* Sizes */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Sizes</label>
          <input
            name="sizes"
            type="text"
            value={data.sizes}
            onChange={handleInputChange}
            placeholder="e.g., S, M, L, XL"
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
        </div>

        {/* Colors */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Colors</label>
          <input
            name="colors"
            type="text"
            value={data.colors}
            onChange={handleInputChange}
            placeholder="e.g., Black, White, Red"
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Price (₹)</label>
          <input
            name="price"
            type="number"
            value={data.price}
            onChange={handleInputChange}
            placeholder="e.g., 499"
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-all"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddTshirt;
