import React from "react";

type Variant = "default" | "destructive" | "outline";
type Size = "default" | "sm" | "lg";

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  inputVariant?: Variant;
  inputSize?: Size;
};

const baseClasses =
  "block w-full rounded-md text-sm transition-all disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50";

const variantClasses: Record<Variant, string> = {
  default: "bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-purple-600",
  destructive: "bg-white border border-red-500 text-red-900 placeholder-red-400 focus:border-red-600",
  outline: "bg-transparent border border-gray-400 text-gray-900 placeholder-gray-500",
};

const sizeClasses: Record<Size, string> = {
  default: "h-9 px-3",
  sm: "h-8 px-2 text-sm",
  lg: "h-11 px-4 text-base",
};

export default function Input({
  inputVariant = "default",
  inputSize = "default",
  className = "",
  ...props
}: InputProps) {
  const variantClass = variantClasses[inputVariant] ?? variantClasses.default;
  const sizeClass = sizeClasses[inputSize] ?? sizeClasses.default;

  const finalClassName = `${baseClasses} ${variantClass} ${sizeClass} ${className}`.trim();

  return <input className={finalClassName} {...props} />;
}
