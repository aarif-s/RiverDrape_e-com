// src/App.tsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/navbar';
import Sidebar from './components/Sidebar';
import AdminLogin from './pages/AdminLogin';
import AdminSignup from './pages/AdminSignup';
import Home from './pages/home';
import AddTshirt from './pages/add';
import List from './pages/list';
import Orders from './pages/order';
import Analytics from './pages/analytics';
import PrivateRoute from './routes/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const hideLayout = location.pathname === '/admin/login' || location.pathname === '/admin/signup';

  return (
    <>
      {!hideLayout && <Navbar />}
      <div className={`flex ${!hideLayout ? 'pt-[80px]' : ''}`}>
        {!hideLayout && <Sidebar />}
        <div className={`${!hideLayout ? 'ml-64 p-6 flex-1' : 'w-full'}`}>
          {children}
        </div>
      </div>
    </>
  );
};

const App = () => {
  const backendURL = "http://localhost:3000";

  return (
    <AuthProvider>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/signup" element={<AdminSignup />} />

          {/* Protected Routes */}
          <Route path="/" element={
            <PrivateRoute>
              <Home url={backendURL} />
            </PrivateRoute>
          } />
          <Route path="/home" element={
            <PrivateRoute>
              <Home url={backendURL} />
            </PrivateRoute>
          } />
          <Route path="/add" element={
            <PrivateRoute>
              <AddTshirt url={backendURL} />
            </PrivateRoute>
          } />
          <Route path="/list" element={
            <PrivateRoute>
              <List url={backendURL} />
            </PrivateRoute>
          } />
          <Route path="/order" element={
            <PrivateRoute>
              <Orders url={backendURL} />
            </PrivateRoute>
          } />
          <Route path="/analytics" element={
            <PrivateRoute>
              <Analytics url={backendURL} />
            </PrivateRoute>
          } />

          {/* Optional Catch-All */}
          <Route path="*" element={
            <PrivateRoute>
              <Home url={backendURL} />
            </PrivateRoute>
          } />
        </Routes>
        <ToastContainer position="top-center" autoClose={2000} />
      </Layout>
    </AuthProvider>
  );
};

export default App;
