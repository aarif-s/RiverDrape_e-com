import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { FiMenu } from 'react-icons/fi';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="App">
      <Navbar />

      {/* ✅ Toggle button aligned visually with sidebar */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-[200px] left-4 z-[1100] bg-white border border-gray-300 shadow-md rounded-md p-2 hover:bg-gray-100"
      >
        <FiMenu size={20} />
      </button>

      {/* ✅ Sidebar + Content Layout */}
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
