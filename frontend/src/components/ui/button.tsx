import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none active:scale-[0.98]";
    const variants: Record<string, string> = {
      default: "bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]",
      outline: "border border-black/10 dark:border-white/20 bg-transparent hover:bg-black/[.05] dark:hover:bg-white/[.06]",
      ghost: "bg-transparent hover:bg-black/[.05] dark:hover:bg-white/[.06]",
    };
    const sizes: Record<string, string> = {
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-6 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;


