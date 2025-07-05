// src/components/common/Categories.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const categories = ["T-Shirts", "Hoodies", "Polo", "Oversized"];

const Categories: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="text-gray-800 font-medium hover:text-black">
        Categories ▾
      </button>

      {open && (
        <div className="absolute z-50 mt-0.2 w-40 bg-white border border-gray-200 rounded shadow-md">
          <ul className="flex flex-col text-sm">
            {categories.map((cat, index) => (
              <li key={index}>
                <Link
                  to={`/category/${cat.toLowerCase()}`}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Categories;