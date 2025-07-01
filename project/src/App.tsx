import React from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar - fixed width on the left */}
        <div className="flex-1 p-6 bg-gray-50" style={{ marginTop: '90px' }}></div>
        <div className="w-64 h-screen bg-white border-r shadow-sm">
          <Sidebar />
        </div>
        
      
      </div>
    </div>
  );
};

export default App;