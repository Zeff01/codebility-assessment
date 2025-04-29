import { ComponentProps, ReactNode } from "react";

type ButtonSize = "default" | "large" | "small";
type ButtonVariant = "dark" | "light";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
} & ComponentProps<"button">;

export const Button = ({ children, variant = "dark", size = "default", ...props }: ButtonProps) => {
  const variants = {
    dark: "bg-foreground-dark focus:bg-foreground-dark/95 focus:shadow-none active:bg-foreground-dark/95 hover:bg-foreground-dark/95 text-white",
    light:
      "bg-white focus:bg-white/95 focus:shadow-none active:bg-white/95 hover:bg-white/95 text-foreground-dark",
  };

  const sizes = {
    default: "py-2.5 px-6 text-base",
    large: "py-3 px-8 text-lg",
    small: "py-2.5 px-6 text-[15px]",
  };

  return (
    <button
      type="button"
      {...props}
      className={`${variants[variant]} ${sizes[size]} whitespace-nowrap font-medium rounded-full border border-transparent text-center transition-all hover:shadow-lg shadow-sm active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer capitalize ${props.className}`}
    >
      {children}
    </button>
  );
};
