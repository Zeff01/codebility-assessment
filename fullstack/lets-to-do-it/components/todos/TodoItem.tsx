"use client";

import { useState } from "react";
import PriorityBadge from "./PriorityBadge";
import { derivePriority, type Todo } from "./types";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

function formatDate(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const [deleting, setDeleting] = useState(false);
  const priority = derivePriority(todo.id);

  function handleDelete() {
    setDeleting(true);
    // small delay lets the exit animation play before the item leaves the list
    window.setTimeout(() => onDelete(todo.id), 180);
  }

  return (
    <li
      className={`group relative flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.05] hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)] ${
        deleting ? "scale-95 opacity-0" : "scale-100 opacity-100"
      } ${todo.completed ? "bg-white/[0.015]" : ""}`}
    >
      {/* priority accent strip */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-3 bottom-3 w-1 rounded-full ${
          priority === "High"
            ? "bg-rose-400/70"
            : priority === "Medium"
              ? "bg-amber-400/70"
              : "bg-slate-400/40"
        }`}
      />

      {/* animated checkbox */}
      <button
        type="button"
        role="checkbox"
        aria-checked={todo.completed}
        aria-label={todo.completed ? "Mark task as not done" : "Mark task as done"}
        onClick={() => onToggle(todo.id, !todo.completed)}
        className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-white/20 transition-all duration-200 hover:border-blue-400 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30 data-[checked=true]:border-blue-500 data-[checked=true]:bg-blue-500"
        data-checked={todo.completed}
      >
        <svg
          aria-hidden="true"
          className={`h-3 w-3 text-white transition-all duration-200 ${
            todo.completed ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m5 13 4 4L19 7" />
        </svg>
      </button>

      <div className="min-w-0 flex-1">
        <p
          className={`break-words text-[15px] leading-relaxed transition-all duration-300 ${
            todo.completed
              ? "text-slate-500 line-through decoration-slate-600"
              : "text-slate-100"
          }`}
        >
          {todo.title}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-2.5">
          <span className="text-xs text-slate-500">
            {formatDate(todo.createdAt)}
          </span>
          <span className="text-slate-700">·</span>
          <PriorityBadge priority={priority} />
        </div>
      </div>

      <button
        type="button"
        onClick={handleDelete}
        aria-label={`Delete "${todo.title}"`}
        className="shrink-0 rounded-lg p-2 text-slate-600 opacity-0 transition-all duration-200 hover:bg-rose-500/10 hover:text-rose-400 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/40 group-hover:opacity-100"
      >
        <svg
          aria-hidden="true"
          className="h-[18px] w-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 7h16M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2m-8 0 .7 12.2a2 2 0 0 0 2 1.8h4.6a2 2 0 0 0 2-1.8L18 7" />
        </svg>
      </button>
    </li>
  );
}
