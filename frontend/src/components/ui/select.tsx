import * as React from "react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export function Select({ className, children, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        "h-10 rounded-md border border-black/15 dark:border-white/20 bg-background text-foreground px-3 text-sm focus-visible:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}


