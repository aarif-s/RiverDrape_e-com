import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../auth/authService";

const AdminLogin = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await loginAdmin(form);
    if (res.token) {
      navigate("/admin/dashboard");
    } else {
      alert(res.message || "Login failed");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Admin Login</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
