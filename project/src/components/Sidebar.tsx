import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiPlusCircle, FiList, FiShoppingCart } from 'react-icons/fi';

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="bg-gray-900 text-white w-64 h-screen pt-[180px] pl-6 pr-4">
      <h2 className="text-2xl font-bold mb-8 tracking-tight">Admin Panel</h2>

      <p className="text-sm font-semibold uppercase text-gray-400 tracking-wide mb-4">
        Product Management
      </p>

      <ul className="space-y-3">
        <li>
          <Link
            to="/add"
            className={`flex items-center gap-3 px-4 py-2 rounded-md font-medium transition duration-200 ${
              location.pathname === '/add'
                ? 'bg-gray-800 text-white'
                : 'hover:bg-gray-800 text-gray-300'
            }`}
          >
            <FiPlusCircle className="text-xl" />
            <span>Add Product</span>
          </Link>
        </li>

        <li>
          <Link
            to="/list"
            className={`flex items-center gap-3 px-4 py-2 rounded-md font-medium transition duration-200 ${
              location.pathname === '/list'
                ? 'bg-gray-800 text-white'
                : 'hover:bg-gray-800 text-gray-300'
            }`}
          >
            <FiList className="text-xl" />
            <span>Product List</span>
          </Link>
        </li>

        <li>
          <Link
            to="/orders"
            className={`flex items-center gap-3 px-4 py-2 rounded-md font-medium transition duration-200 ${
              location.pathname === '/orders'
                ? 'bg-gray-800 text-white'
                : 'hover:bg-gray-800 text-gray-300'
            }`}
          >
            <FiShoppingCart className="text-xl" />
            <span>Orders</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
