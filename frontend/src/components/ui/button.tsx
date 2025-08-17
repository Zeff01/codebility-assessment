import React from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ children, variant = "primary", ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded font-semibold transition-colors duration-200 ${
        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};
