// components/Button.tsx
import React from "react";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary text-white  py-2 px-4 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
