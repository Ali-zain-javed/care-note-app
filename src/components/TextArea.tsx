import React from 'react';

type InputProps = {
  name: string;
  value?: string;
  placeholder?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea: React.FC<InputProps> = ({ name, value, placeholder, className = '', onChange }) => {
  return (
    <textarea
      name={name}
      value={value}
      placeholder={placeholder}
      className={`border p-2 rounded ${className}`}
      onChange={onChange}
    />
  );
};

export default TextArea;
