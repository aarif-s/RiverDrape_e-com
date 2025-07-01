export const API_URL = "http://localhost:5000/admin";

export const loginAdmin = async (credentials: { username: string; password: string }) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  const data = await res.json();
  if (res.ok) {
    localStorage.setItem("adminToken", data.token);
  }
  return data;
};

export const registerAdmin = async (details: { username: string; password: string }) => {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(details),
  });
  return res.json();
};

export const logoutAdmin = () => {
  localStorage.removeItem("adminToken");
};

export const isAdminLoggedIn = () => {
  return !!localStorage.getItem("adminToken");
};
