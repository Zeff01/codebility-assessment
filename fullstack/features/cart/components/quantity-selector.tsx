"use client";

import { cn } from "@/lib/cn";

type QuantitySelectorProps = {
  value: number;
  max: number;
  min?: number;
  disabled?: boolean;
  size?: "sm" | "md";
  onChange: (value: number) => void;
  label?: string;
};

export function QuantitySelector({
  value,
  max,
  min = 1,
  disabled,
  size = "md",
  onChange,
  label = "Quantity",
}: QuantitySelectorProps) {
  const buttonClass = cn(
    "grid place-items-center rounded-full text-lg font-medium text-muted transition",
    "hover:bg-surface hover:text-foreground hover:shadow-sm",
    "focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-indigo-500",
    "disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:shadow-none",
    size === "sm" ? "h-7 w-7" : "h-10 w-10",
  );

  return (
    <div
      className={cn("inline-flex items-center rounded-full bg-surface-muted p-1", size === "md" && "h-12")}
      role="group"
      aria-label={label}
    >
      <button
        type="button"
        className={buttonClass}
        onClick={() => onChange(value - 1)}
        disabled={disabled || value <= min}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span
        className={cn("min-w-8 text-center font-semibold tabular-nums", size === "sm" ? "text-sm" : "text-base")}
        aria-live="polite"
      >
        {value}
      </span>
      <button
        type="button"
        className={buttonClass}
        onClick={() => onChange(value + 1)}
        disabled={disabled || value >= max}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
