import { cn } from "@/lib/utils";
import React from 'react';

type ButtonProps = React.ComponentProps<"button"> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "link" | "danger" | "icon";
  size?: "sm" | "md" | "lg";
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
    ghost: "bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-500",
    link: "text-blue-600 hover:text-blue-700 focus:ring-blue-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    icon: "bg-transparent hover:bg-blue-600 hover:text-white focus:ring-gray-500",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const iconSizeStyles = {
    sm: "p-1.5 w-8 h-8",
    md: "p-2 w-10 h-10",
    lg: "p-3 w-12 h-12",
  };

  const disabledStyles = props.disabled ? "opacity-50 cursor-not-allowed" : "";

  const buttonStyles = variant === "icon"
    ? cn(
        baseStyles,
        variantStyles[variant],
        iconSizeStyles[size],
        disabledStyles,
        props.className,
      )
    : cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabledStyles,
        props.className
      );

  return (
    <button {...props} className={buttonStyles}>
      {children}
    </button>
  );
};

Button.displayName = "Button";

export { Button };
