<<<<<<< Updated upstream
 // src/App.tsx
=======
// src/App.tsx
>>>>>>> Stashed changes
import React from 'react';
import { Routes, Route } from 'react-router-dom';
 
import Navbar from './components/navbar';
import Sidebar from './components/Sidebar';
import AdminLogin from './pages/AdminLogin';
<<<<<<< Updated upstream
//import AdminSignup from './pages/AdminSignup';
import AdminDashboard from './pages/AdminDashboard';
//import Add from './pages/Add';
//import List from './pages/List';
//import Orders from './pages/Orders';
=======
// import AdminSignup from './pages/AdminSignup';
// import AdminDashboard from './pages/AdminDashboard';
// import Add from './pages/Add';
// import List from './pages/List';
// import Orders from './pages/Orders';
>>>>>>> Stashed changes
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
        <Sidebar />
<<<<<<< Updated upstream
        {/* Main content area */}
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
          
=======
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          {/* <Route path="/admin/signup" element={<AdminSignup />} /> */}
          {/* <Route path="/admin/dashboard" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} /> */}
          {/* <Route path="/add" element={<PrivateRoute><Add /></PrivateRoute>} />
          <Route path="/list" element={<PrivateRoute><List /></PrivateRoute>} />
          <Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>} /> */}
>>>>>>> Stashed changes
          <Route path="*" element={<AdminLogin />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
