import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants: Record<string, string> = {
    default: "bg-black/10 dark:bg-white/20 text-foreground",
    secondary: "bg-black/5 dark:bg-white/10 text-foreground",
    outline: "border border-black/10 dark:border-white/20 text-foreground",
  };
  return <div className={cn("inline-flex items-center rounded-md px-2 py-1 text-xs", variants[variant], className)} {...props} />;
}


