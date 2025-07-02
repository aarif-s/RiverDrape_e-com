import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AdminSignup: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const url = "http://localhost:4000";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${url}/admin/register`, {
        email: form.email,
        password: form.password
      });

      const token = res.data.token;
      login(token);
      toast.success('Signup successful!');
      navigate('/');
    } catch (err: any) {
      const errorMsg = err?.response?.data?.message || 'Signup failed';
      setError(errorMsg);
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="w-full max-w-4xl flex bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Left Section (Black) */}
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

        {/* Right Section (White Form) */}
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
            <input
              type="password"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={e => setForm({ ...form, confirmPassword: e.target.value })}
              required
              className="w-full px-4 py-3 bg-gray-200 text-black rounded"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded font-semibold hover:bg-gray-800 transition"
            >
              {loading ? 'Signing up...' : 'Signup'}
            </button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
