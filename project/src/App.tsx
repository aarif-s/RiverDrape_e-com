// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/navbar';
import AdminLogin from './pages/AdminLogin';
// import AdminSignup from './pages/AdminSignup';
import AdminDashboard from './pages/AdminDashboard';
// import Add from './pages/Add';
// import List from './pages/List';
// import Orders from './pages/Orders';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          {/* <Route path="/admin/signup" element={<AdminSignup />} /> */}
          <Route path="/admin/dashboard" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
          {/* <Route path="/add" element={<PrivateRoute><Add /></PrivateRoute>} />
          <Route path="/list" element={<PrivateRoute><List /></PrivateRoute>} />
          <Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>} /> */}
          <Route path="*" element={<AdminLogin />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
