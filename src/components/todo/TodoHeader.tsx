"use client";

import { useAppDispatch } from "@/store";
import { openModal } from "@/store/features/ui";
import { Button } from "@/components/ui";

export function TodoHeader() {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          My Todos
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Manage your tasks efficiently
        </p>
      </div>
      <Button onClick={() => dispatch(openModal({ type: "create" }))}>
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
        Add Todo
      </Button>
    </div>
  );
}
