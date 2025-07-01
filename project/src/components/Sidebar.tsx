import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTshirt } from 'react-icons/fa';
import {
  FiShoppingBag,
  FiBox,
  FiBarChart2,
  FiSettings,
} from 'react-icons/fi';

const links = [
  { name: 'Orders', path: '/orders', icon: <FiShoppingBag /> },
  { name: 'Add Product', path: '/add', icon: <FaTshirt /> },
  { name: 'List', path: '/list', icon: <FiBox /> },
  { name: 'Analytics', path: '/analytics', icon: <FiBarChart2 /> },
  { name: 'Settings', path: '/settings', icon: <FiSettings /> },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="h-screen w-64 bg-white shadow-lg px-6 pt-[100px] border-r">
      <nav className="flex-1">
        <ul className="space-y-2 mt-4 list-none">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg text-[17px] transition-all duration-200 no-underline ${
                  location.pathname === link.path
                    ? 'bg-gray-200 text-black font-semibold'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-black'
                }`}
              >
                <span className="text-[20px]">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
