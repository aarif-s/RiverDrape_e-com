import React from 'react';
import Navbar from './components/Navbar'; 
import Sidebar from './components/Sidebar';
import './App.css'; // Assuming you have a CSS file for global styles

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Sidebar/>
      </div>
    </div>
  );
};

export default App;
