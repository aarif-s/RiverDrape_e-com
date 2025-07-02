import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const url = "http://localhost:4000";

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await axios.post(`${url}/admin/login`, form); // ✅ Correct endpoint

    const token = res.data.token;
    
    login(token); // ✅ Save token in context/localStorage
    toast.success('Logged in successfully!');

    navigate('/'); // ✅ Redirect to home (or '/dashboard' if needed)
  } catch (err) {
    setError('Invalid credentials');
    toast.error('Login failed! Check your email/password.');
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="w-full max-w-4xl flex bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Left Section */}
        <div className="w-1/2 bg-black text-white flex flex-col justify-center items-center p-10 space-y-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold leading-tight">
              THE <br />
              BLACK & <br />
              WHITE FORM
            </h1>
          </div>
          <div className="flex space-x-4">
            <a href="#"><FaWhatsapp className="text-white text-2xl bg-white rounded-full text-black p-2 w-10 h-10" /></a>
            <a href="#"><FaInstagram className="text-white text-2xl bg-white rounded-full text-black p-2 w-10 h-10" /></a>
            <a href="#"><FaFacebookF className="text-white text-2xl bg-white rounded-full text-black p-2 w-10 h-10" /></a>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-10 flex flex-col justify-center bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-3 bg-gray-200 text-black rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              required
              className="w-full px-4 py-3 bg-gray-200 text-black rounded"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded font-semibold"
            >
              Login
            </button>
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="text-center text-sm text-gray-600 mt-4">
              Don’t have an account?{' '}
              <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={() => navigate('/admin/signup')}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
