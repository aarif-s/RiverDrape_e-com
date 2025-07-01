// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Sidebar from './components/Sidebar';
import AddTshirt from './pages/add';
import List from './pages/list';
import Orders from './pages/order';
const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex pt-[80px]">
        <Sidebar />

        {/* Page content: add margin-left to prevent overlap with fixed sidebar */}
        <div className="flex-1 ml-64 p-6"> {/* 👈 ml-64 = match sidebar width */}
          <Routes>
            <Route path="/add" element={<AddTshirt url="http://localhost:3000" />} />
            <Route path="/list" element={<List url="http://localhost:3000" />} />
            <Route path="/order" element={<Orders url="http://localhost:3000" />} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
