import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

const Button = ({ children, onClick, type = "button", className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;