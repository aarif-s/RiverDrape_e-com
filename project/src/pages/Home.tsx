import React from 'react';
import {
  FiShoppingCart,
  FiDollarSign,
  FiUsers,
  FiBox,
  FiActivity,
} from 'react-icons/fi';

const summaryCards = [
  {
    title: 'Total Orders',
    value: 1245,
    icon: <FiShoppingCart className="text-2xl text-indigo-600" />,
  },
  {
    title: 'Products Listed',
    value: 87,
    icon: <FiBox className="text-2xl text-green-600" />,
  },
  {
    title: 'Revenue',
    value: '₹89,450',
    icon: <FiDollarSign className="text-2xl text-yellow-600" />,
  },
  {
    title: 'Customers',
    value: 349,
    icon: <FiUsers className="text-2xl text-pink-600" />,
  },
];

const recentActivity = [
  'New order received from John Doe',
  'New product “Streetwear Tee” added',
  'Inventory updated for Polo Shirts',
  'Order #2332 marked as Fulfilled',
];

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Dashboard Overview</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {summaryCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg p-5 flex items-center gap-4"
          >
            <div className="p-3 bg-gray-100 rounded-full">{card.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{card.title}</p>
              <p className="text-xl font-semibold text-gray-800">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <FiActivity className="text-lg text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-700">Recent Activity</h3>
        </div>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {recentActivity.map((activity, index) => (
            <li key={index} className="text-sm">
              {activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;