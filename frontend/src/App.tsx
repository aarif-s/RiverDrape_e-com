import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import T_Shirts from "./pages/T_Shirts";
import Hoodies from "./pages/Hoodies";


const Products = () => <div className="p-10 text-xl">💼 Product Page</div>;
const Contact = () => <div className="p-10 text-xl">📞 Contact Page</div>;
const Account = () => <div className="p-10 text-xl">👤 Account Page</div>;
const Cart = () => <div className="p-10 text-xl">🛒 Cart Page</div>;

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/t-shirts" element={<T_Shirts />} />
          <Route path="/category/hoodies" element={<Hoodies />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;