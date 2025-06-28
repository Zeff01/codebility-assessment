import React from "react";

type Variant = "default" | "secondary" | "destructive" | "outline" | "glass";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
    variant?: Variant;
};

const baseClasses =
    "inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-all";

const variantClasses: Record<Variant, string> = {
    default: "bg-purple-600 text-white border-transparent",
    secondary: "bg-gray-200 text-gray-800 border-transparent",
    destructive: "bg-red-600 text-white border-transparent",
    outline: "border border-gray-300 text-gray-700 bg-transparent",
    glass: "bg-white/10 text-white border border-white/20 backdrop-blur-sm",
};

export default function Badge({
    variant = "default",
    className = "",
    children,
    ...props
}: BadgeProps) {
    const variantClass = variantClasses[variant] ?? variantClasses.default;
    const finalClassName = `${baseClasses} ${variantClass} ${className}`.trim();

    return (
        <span className={finalClassName} {...props}>
            {children}
        </span>
    );
}
