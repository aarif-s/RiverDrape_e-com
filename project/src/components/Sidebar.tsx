import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar bg-gray-800 text-white w-64 h-full p-4">
            <h2 className="text-xl font-bold mb-4">Sidebar</h2>
            <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Home</a></li>
                <li><a href="#" className="hover:text-blue-400">About</a></li>
                <li><a href="#" className="hover:text-blue-400">Services</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
