import React from 'react';

type InputProps = {
  type: string;
  value: string;
  placeholder?: string;
  className?: string;
};

const Input: React.FC<InputProps> = ({ type, value, placeholder, className = '' }) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className={`border p-2 rounded ${className}`}
    />
  );
};

export default Input;
