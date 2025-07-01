import React, { useState } from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/Sidebar';
import { FiMenu } from 'react-icons/fi';

const App: React.FC = () => {

  return (
    <div className="App">
      <Navbar />


      {/* Layout with sidebar and content */}
      <div className="flex" style={{ paddingTop: '080px' }}>
      <Sidebar />

        
      </div>
    </div>
  );
};

export default App;
