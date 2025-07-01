import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("adminToken");
      const res = await fetch("http://localhost:5000/admin/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setUser(data.user);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2>Admin Dashboard</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default AdminDashboard;
