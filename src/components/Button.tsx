import React from 'react';

type ButtonProps = {
  children?: React.ReactNode;
  onClick: () => void;
  className?: string;
  label?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', label = '' }) => {
  return (
    <button className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`} onClick={onClick}>
      {children ?? label}
    </button>
  );
};

export default Button;
