"use client";

import { useId, useState } from "react";

interface PasswordFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
}

export default function PasswordField({
  label,
  name,
  value,
  onChange,
  placeholder = "••••••••",
  autoComplete = "current-password",
  required = true,
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);
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
        {/* lock icon */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-blue-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
        >
          <rect x="4" y="10.5" width="16" height="9.5" rx="2" />
          <path d="M7.5 10.5V7.75a4.5 4.5 0 0 1 9 0v2.75" />
        </svg>

        <input
          id={inputId}
          name={name}
          type={visible ? "text" : "password"}
          value={value}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-2.5 pl-[42px] pr-11 text-sm text-slate-100 placeholder:text-slate-600 outline-none transition-all duration-200 focus:border-blue-500/60 focus:bg-white/[0.06] focus:ring-4 focus:ring-blue-500/15"
        />

        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          aria-pressed={visible}
          className="absolute right-2.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-slate-500 transition-colors hover:text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
        >
          {visible ? (
            <svg
              aria-hidden="true"
              className="h-[18px] w-[18px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
            >
              <path d="M3 3l18 18" />
              <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
              <path d="M9.4 5.5A9.6 9.6 0 0 1 12 5c5 0 8.5 3.5 10 7-.6 1.3-1.5 2.7-2.7 3.9M6.6 6.6C4.6 8 3.1 9.9 2 12c1.5 3.5 5 7 10 7 1.3 0 2.5-.2 3.6-.6" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              className="h-[18px] w-[18px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
            >
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
