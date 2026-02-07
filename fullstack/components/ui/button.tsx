import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger" | "ghost";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={twMerge(
                    clsx(
                        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
                        {
                            "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500":
                                variant === "primary",
                            "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500":
                                variant === "secondary",
                            "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500":
                                variant === "danger",
                            "bg-transparent hover:bg-gray-100 text-gray-700": variant === "ghost",
                        }
                    ),
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
