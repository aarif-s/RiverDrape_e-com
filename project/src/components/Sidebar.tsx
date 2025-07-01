import React, { useState } from 'react';
import Navbar from './navbar'; // ✅ correct
import Sidebar from "./Sidebar";


import { FiMenu } from 'react-icons/fi';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="App relative">
      <Navbar />

      {/* ✅ Toggle button placed below the navbar, above other content */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="absolute top-[90px] left-4 z-50 bg-white border border-gray-300 shadow-md rounded-md p-2 hover:bg-gray-100"
      >
        <FiMenu size={20} />
      </button>

      {/* ✅ Layout with Sidebar and Main Content */}
      <div className="flex" style={{ paddingTop: '180px' }}>
        <Sidebar isOpen={isSidebarOpen} />

        <main
          className="flex-1 p-6 transition-all duration-300"
          style={{ marginLeft: isSidebarOpen ? '256px' : '0' }}
        >
          <h1 className="text-2xl font-bold">Main Content</h1>
        </main>
      </div>
    </div>
  );
};

export default App;
