import React from 'react';

type InputProps = {
  name: string;
  type?: string;
  value?: string;
  placeholder?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

const Input: React.FC<InputProps> = ({
  name,
  type = 'text',
  value,
  placeholder,
  className = '',
  onChange,
  required = false,
}) => {
  return (
    <input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      className={`border p-2 rounded ${className}`}
      onChange={onChange}
      required={true}
    />
  );
};

export default Input;
