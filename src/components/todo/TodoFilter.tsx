"use client";

import { cn } from "@/lib/utils";
import { useAppSelector, useAppDispatch } from "@/store";
import { selectTodosFilter, selectTodoStats, setFilter } from "@/store/features/todo";

export function TodoFilter() {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectTodosFilter);
  const stats = useAppSelector(selectTodoStats);

  const filters: { value: "all" | "active" | "completed"; label: string }[] = [
    { value: "all", label: `All (${stats.total})` },
    { value: "active", label: `Active (${stats.active})` },
    { value: "completed", label: `Completed (${stats.completed})` },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => dispatch(setFilter(value))}
          className={cn(
            "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
            filter === value
              ? "bg-blue-600 text-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
