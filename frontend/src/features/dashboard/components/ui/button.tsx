import { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

/**
 * Button component
 *
 * A responsive reusable button component that can be used to create a button.
 *
 * @param className - className for the button
 * @param children - children for the button
 * @param props - props for the button
 * @returns Button component
 *
 * @example
 * <Button className="bg-black text-white text-xs sm:text-sm md:text-base lg:text-lg p-2 rounded-md hover:bg-gray-800">Button</Button>
 */

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  radius?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
}

function Button({
  className,
  children = "Button",
  radius = "md",
  ...props
}: ButtonProps) {
  const radiusClasses = {
    xs: "rounded-xs",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  return (
    <button
      className={clsx("px-6 py-3 text-black", radiusClasses[radius], className)}
      {...props}>
      {children}
    </button>
  );
}

export default Button;
