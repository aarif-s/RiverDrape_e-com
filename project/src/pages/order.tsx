// src/pages/order.tsx
import React from 'react';

interface Order {
  id: string;
  customer: string;
  total: string;
  items: string;
  date: string;
  paymentStatus: 'Success' | 'Pending' | 'Failed';
  method: 'Debit card' | 'Credit card' | 'Apple Pay' | 'Google Pay' | 'Crypto';
  fulfillment: 'Fulfilled' | 'Unfulfilled' | 'Cancelled';
  tracking: string;
}

const mockOrders: Order[] = [
  {
    id: '4772827',
    customer: 'John Smith',
    total: '$120.75',
    items: '1 item',
    date: '24 Jun 2024, 9:23 pm',
    paymentStatus: 'Success',
    method: 'Debit card',
    fulfillment: 'Fulfilled',
    tracking: '1Z999AA10123456784',
  },
  {
    id: '8491763',
    customer: 'Daniel Wilson',
    total: '$45.50',
    items: '1 item',
    date: '19 May 2024, 7:55 am',
    paymentStatus: 'Success',
    method: 'Apple Pay',
    fulfillment: 'Unfulfilled',
    tracking: '94050596999307012',
  },
  {
    id: '6172054',
    customer: 'Olivia Martin',
    total: '$450.30',
    items: '1 item',
    date: '12 Aug 2022, 1:00 pm',
    paymentStatus: 'Pending',
    method: 'Apple Pay',
    fulfillment: 'Cancelled',
    tracking: '9400101890230123456',
  },
];

const badgeClass = {
  Success: 'bg-green-100 text-green-700',
  Pending: 'bg-yellow-100 text-yellow-700',
  Failed: 'bg-red-100 text-red-700',
  Fulfilled: 'bg-green-100 text-green-700',
  Unfulfilled: 'bg-orange-100 text-orange-700',
  Cancelled: 'bg-red-100 text-red-700',
};

const Orders: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Orders</h2>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-xs text-gray-500 uppercase text-left">
            <tr>
              <th className="px-6 py-4">Order ID</th>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Total</th>
              <th className="px-6 py-4">Items</th>
              <th className="px-6 py-4">Order Date</th>
              <th className="px-6 py-4">Payment</th>
              <th className="px-6 py-4">Method</th>
              <th className="px-6 py-4">Fulfillment</th>
              <th className="px-6 py-4">Tracking</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-800">{order.id}</td>
                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4">{order.total}</td>
                <td className="px-6 py-4">{order.items}</td>
                <td className="px-6 py-4">{order.date}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      badgeClass[order.paymentStatus]
                    }`}
                  >
                    {order.paymentStatus}
                  </span>
                </td>
                <td className="px-6 py-4">{order.method}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      badgeClass[order.fulfillment]
                    }`}
                  >
                    {order.fulfillment}
                  </span>
                </td>
                <td className="px-6 py-4 text-blue-600">{order.tracking}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
