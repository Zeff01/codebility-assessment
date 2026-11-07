"use client";

import { useId, useState } from "react";

type CartQuantityStepperProps = {
  quantity: number;
  maxQuantity: number;
  disabled?: boolean;
  onChange: (quantity: number) => void;
  productName: string;
};

export function CartQuantityStepper({
  quantity,
  maxQuantity,
  disabled,
  onChange,
  productName,
}: CartQuantityStepperProps) {
  const labelId = useId();
  const [draft, setDraft] = useState<string | null>(null);
  const atMin = quantity <= 1;
  const atMax = quantity >= maxQuantity;
  const inputValue = draft ?? String(quantity);

  function commitDraft() {
    const parsed = Number.parseInt(inputValue, 10);
    setDraft(null);
    if (Number.isNaN(parsed)) {
      return;
    }
    const clamped = Math.min(maxQuantity, Math.max(1, parsed));
    if (clamped !== quantity) {
      onChange(clamped);
    }
  }

  return (
    <div
      role="group"
      aria-labelledby={labelId}
      className="flex flex-col items-end gap-1"
    >
      <span id={labelId} className="text-sm text-zinc-600 dark:text-zinc-400">
        Quantity
      </span>
      <div className="inline-flex items-stretch overflow-hidden rounded-lg border border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-900">
        <button
          type="button"
          disabled={disabled || atMin}
          aria-label={`Decrease quantity of ${productName}`}
          onClick={() => onChange(quantity - 1)}
          className="flex h-9 w-9 items-center justify-center text-lg text-zinc-700 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          −
        </button>
        <input
          type="number"
          inputMode="numeric"
          min={1}
          max={maxQuantity}
          disabled={disabled}
          aria-label={`Quantity for ${productName}`}
          value={inputValue}
          onFocus={() => setDraft(String(quantity))}
          onChange={(event) => setDraft(event.target.value)}
          onBlur={commitDraft}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.currentTarget.blur();
            }
          }}
          className="h-9 w-12 border-x border-zinc-300 bg-transparent text-center text-sm text-zinc-900 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:border-zinc-600 dark:text-zinc-100"
        />
        <button
          type="button"
          disabled={disabled || atMax}
          aria-label={`Increase quantity of ${productName}`}
          onClick={() => onChange(quantity + 1)}
          className="flex h-9 w-9 items-center justify-center text-lg text-zinc-700 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          +
        </button>
      </div>
      <span className="text-xs text-zinc-500 dark:text-zinc-500">
        Max {maxQuantity}
      </span>
    </div>
  );
}
