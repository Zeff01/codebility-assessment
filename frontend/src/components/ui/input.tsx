import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-10 w-full rounded-md border border-black/10 dark:border-white/20 bg-transparent px-3 py-2 text-sm placeholder:text-foreground/50 focus-visible:outline-none",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export default Input;


