import React from "react";

type Variant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "gradient";
type Size = "default" | "sm" | "lg" | "icon";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
    size?: Size;
};

const baseClasses =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50";

const variantClasses: Record<Variant, string> = {
    default: "bg-purple-600 text-white hover:bg-purple-700",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-300 hover:bg-gray-100 hover:text-gray-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
    link: "text-purple-600 underline-offset-4 hover:underline bg-transparent",
    gradient:
        "bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:opacity-90",
};

const sizeClasses: Record<Size, string> = {
    default: "h-9 px-4 py-2",
    sm: "h-8 px-3 text-sm",
    lg: "h-10 px-6 text-base",
    icon: "h-9 w-9 p-0",
};

export default function Button({
    variant = "default",
    size = "default",
    className = "",
    children,
    ...props
}: ButtonProps) {
    const variantClass = variantClasses[variant] ?? variantClasses.default;
    const sizeClass = sizeClasses[size] ?? sizeClasses.default;

    const finalClassName = `${baseClasses} ${variantClass} ${sizeClass} ${className}`.trim();


    return (
        <button className={finalClassName} {...props}>
            {children}
        </button>
    );
}
