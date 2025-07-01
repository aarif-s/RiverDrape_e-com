import React, { useState } from 'react';

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
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Orders</h2>

      {/* Table Container */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-xs text-gray-500 uppercase text-left">
            <tr>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Items</th>
              <th className="px-4 py-3 hidden md:table-cell">Order Date</th>
              <th className="px-4 py-3">Payment</th>
              <th className="px-4 py-3 hidden md:table-cell">Method</th>
              <th className="px-4 py-3 hidden md:table-cell">Fulfillment</th>
              <th className="px-4 py-3">Tracking</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelectedOrder(order)}
              >
                <td className="px-4 py-3 font-medium">{order.id}</td>
                <td className="px-4 py-3">{order.customer}</td>
                <td className="px-4 py-3">{order.total}</td>
                <td className="px-4 py-3">{order.items}</td>
                <td className="px-4 py-3 hidden md:table-cell">{order.date}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${badgeClass[order.paymentStatus]}`}>
                    {order.paymentStatus}
                  </span>
                </td>
                <td className="px-4 py-3 hidden md:table-cell">{order.method}</td>
                <td className="px-4 py-3 hidden md:table-cell">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${badgeClass[order.fulfillment]}`}>
                    {order.fulfillment}
                  </span>
                </td>
                <td className="px-4 py-3 text-blue-600">{order.tracking}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sliding Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg transition-transform duration-300 z-50 overflow-y-auto ${
          selectedOrder ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {selectedOrder && (
          <div className="p-5 sm:p-6">
            {/* Close Button */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Order Details</h3>
              <button
                className="text-gray-400 hover:text-gray-600 text-xl"
                onClick={() => setSelectedOrder(null)}
              >
                &times;
              </button>
            </div>

            <div className="space-y-3 text-sm text-gray-700">
              <p><strong>ID:</strong> {selectedOrder.id}</p>
              <p><strong>Customer:</strong> {selectedOrder.customer}</p>
              <p><strong>Total:</strong> {selectedOrder.total}</p>
              <p><strong>Items:</strong> {selectedOrder.items}</p>
              <p><strong>Date:</strong> {selectedOrder.date}</p>
              <p>
                <strong>Payment:</strong>{' '}
                <span className={`px-2 py-1 rounded text-xs font-semibold ${badgeClass[selectedOrder.paymentStatus]}`}>
                  {selectedOrder.paymentStatus}
                </span>
              </p>
              <p><strong>Method:</strong> {selectedOrder.method}</p>
              <p>
                <strong>Fulfillment:</strong>{' '}
                <span className={`px-2 py-1 rounded text-xs font-semibold ${badgeClass[selectedOrder.fulfillment]}`}>
                  {selectedOrder.fulfillment}
                </span>
              </p>
              <p>
                <strong>Tracking:</strong>{' '}
                <span className="text-blue-600 break-all">{selectedOrder.tracking}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
