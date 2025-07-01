import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTshirt } from 'react-icons/fa';
import {
  FiShoppingBag,
  FiBox,
  FiBarChart2,
  FiSettings,
  FiHome,
} from 'react-icons/fi';

const links = [
  { name: 'Home', path: '/home', icon: <FiHome /> },
  { name: 'Orders', path: '/orders', icon: <FiShoppingBag /> },
  { name: 'Add Product', path: '/add', icon: <FaTshirt /> },
  { name: 'List', path: '/list', icon: <FiBox /> },
  { name: 'Analytics', path: '/analytics', icon: <FiBarChart2 /> },
  { name: 'Settings', path: '/settings', icon: <FiSettings /> },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="h-screen w-64 bg-gradient-to-b from-white to-gray-100 shadow-md px-6 pt-[100px] border-r border-gray-200 fixed top-0 left-0">
      <nav className="flex-1">
        <ul className="space-y-1 mt-4 list-none">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 no-underline 
                    ${
                      isActive
                        ? 'bg-gray-200 text-black shadow-sm'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-black'
                    }`}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span>{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
