"use client";

import { useState, type FormEvent } from "react";

interface AddTodoFormProps {
  onAdd: (title: string) => Promise<void> | void;
}

export default function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [title, setTitle] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed || submitting) return;

    setSubmitting(true);
    try {
      await onAdd(trimmed);
      setTitle("");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl sm:flex-row sm:items-center"
    >
      <div className="group relative flex-1">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-blue-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to get done?"
          aria-label="New task title"
          className="w-full rounded-xl border border-transparent bg-transparent py-3 pl-11 pr-4 text-[15px] text-slate-100 placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-blue-500/50 focus:bg-white/[0.04] focus:ring-4 focus:ring-blue-500/15"
        />
      </div>

      <button
        type="submit"
        disabled={!title.trim() || submitting}
        className="flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-blue-500 to-blue-600 px-5 text-sm font-semibold text-white shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_0_16px_-4px_rgba(59,130,246,0.6)] transition-all duration-200 hover:from-blue-400 hover:to-blue-500 hover:shadow-[0_0_22px_-4px_rgba(59,130,246,0.8)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30 disabled:cursor-not-allowed disabled:from-white/10 disabled:to-white/10 disabled:text-slate-500 disabled:shadow-none active:scale-[0.97]"
      >
        {submitting ? (
          <svg
            aria-hidden="true"
            className="h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              className="opacity-90"
              fill="currentColor"
              d="M21 12a9 9 0 0 0-9-9v3a6 6 0 0 1 6 6h3z"
            />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.25}
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        )}
        Add task
      </button>
    </form>
  );
}
