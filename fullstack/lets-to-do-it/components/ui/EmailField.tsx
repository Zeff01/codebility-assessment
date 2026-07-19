"use client";

import { useId } from "react";

interface EmailFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function EmailField({
  label,
  name,
  value,
  onChange,
  placeholder = "you@company.com",
}: EmailFieldProps) {
  const inputId = useId();

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={inputId}
        className="text-sm font-medium text-slate-300"
      >
        {label}
      </label>

      <div className="group relative">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-blue-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
        >
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="m4 7 8 6 8-6" />
        </svg>

        <input
          id={inputId}
          name={name}
          type="email"
          value={value}
          required
          autoComplete="email"
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-2.5 pl-[42px] pr-4 text-sm text-slate-100 placeholder:text-slate-600 outline-none transition-all duration-200 focus:border-blue-500/60 focus:bg-white/[0.06] focus:ring-4 focus:ring-blue-500/15"
        />
      </div>
    </div>
  );
}
