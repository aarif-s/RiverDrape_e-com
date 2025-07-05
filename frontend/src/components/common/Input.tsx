import React from "react";

type InputProps = {
  type?: string;
  name: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const Input = ({ type = "text", name, value, placeholder, onChange, className = "" }: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-green-700 ${className}`}
    />
  );
};

export default Input;