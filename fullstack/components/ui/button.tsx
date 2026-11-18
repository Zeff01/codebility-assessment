import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-linear-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-600/25 hover:from-indigo-700 hover:to-violet-700 hover:shadow-indigo-600/40",
  secondary: "bg-surface text-foreground ring-1 ring-border hover:bg-surface-muted",
  ghost: "text-muted hover:bg-surface-muted hover:text-foreground",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

type ButtonProps = ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
};

export const buttonStyles = ({ variant = "primary", size = "md" }: { variant?: Variant; size?: Size } = {}) =>
  cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all active:scale-[0.98]",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
    "disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",
    variants[variant],
    sizes[size],
  );

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return <button className={cn(buttonStyles({ variant, size }), className)} {...props} />;
}
