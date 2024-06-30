// components/InputField.tsx
import React from "react";

interface InputFieldProps {
  label?: string;
  name?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const Input: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border border-[#D1D5DB] rounded-[8px] w-full mt-3 py-[14px] px-[20px] text-[#6B7280] focus:ring-green-500 focus:border-green-500 ${className}`}
      />
    </div>
  );
};

export default Input;
