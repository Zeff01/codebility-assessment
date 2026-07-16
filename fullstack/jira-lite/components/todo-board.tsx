"use client";

import { useState } from "react";

import { CreateTicketModal, type NewTicketInput } from "@/components/create-ticket-modal";
import { ViewTicketModal } from "@/components/view-ticket-modal";

type TodoStatus =
  | "TO_DO"
  | "IN_PROGRESS"
  | "READY_FOR_TESTING"
  | "TESTED_AND_VERIFIED"
  | "COMPLETED";

type Todo = {
  id: string;
  title: string;
  points: number;
  status: TodoStatus;
  createdAt: string;
  owner: { id: string; name: string };
  isOwner: boolean;
  description: string | null;
  problem: string | null;
  acceptanceCriteria: string | null;
  technicalImplementation: string | null;
  permissions: {
    allowedStatuses: TodoStatus[];
    canEdit: boolean;
    canDelete: boolean;
  };
};

const STATUS_LABELS: Record<TodoStatus, string> = {
  TO_DO: "To Do",
  IN_PROGRESS: "In Progress",
  READY_FOR_TESTING: "Ready for Testing",
  TESTED_AND_VERIFIED: "Tested and Verified",
  COMPLETED: "Completed",
};

export function TodoBoard({
  columns,
  initialTodos,
}: {
  columns: TodoStatus[];
  initialTodos: Todo[];
}) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewingTodo, setViewingTodo] = useState<Todo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pendingIds, setPendingIds] = useState<Set<string>>(new Set());

  async function handleCreate(input: NewTicketInput) {
    const response = await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error ?? "Failed to create ticket");
    }

    const data = await response.json();
    setTodos((prev) => [data.todo, ...prev]);
    setIsModalOpen(false);
  }

  async function handleStatusChange(todo: Todo, status: TodoStatus) {
    setPendingIds((prev) => new Set(prev).add(todo.id));
    setError(null);

    try {
      const response = await fetch(`/api/todos/${todo.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error ?? "Failed to update todo");
      }

      const data = await response.json();
      setTodos((prev) => prev.map((t) => (t.id === todo.id ? data.todo : t)));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setPendingIds((prev) => {
        const next = new Set(prev);
        next.delete(todo.id);
        return next;
      });
    }
  }

  async function handleDelete(todo: Todo) {
    setPendingIds((prev) => new Set(prev).add(todo.id));
    setError(null);

    try {
      const response = await fetch(`/api/todos/${todo.id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete todo");

      setTodos((prev) => prev.filter((t) => t.id !== todo.id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setPendingIds((prev) => {
        const next = new Set(prev);
        next.delete(todo.id);
        return next;
      });
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col gap-6 px-6 py-8">
      <div className="flex justify-end">
        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          New ticket
        </button>
      </div>

      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}

      <div className="flex flex-1 gap-4 overflow-x-auto pb-2">
        {columns.map((status) => {
          const columnTodos = todos.filter((t) => t.status === status);
          return (
            <div
              key={status}
              className="flex min-w-56 flex-1 basis-0 flex-col gap-3 rounded-lg bg-zinc-100 p-4 dark:bg-zinc-900/50"
            >
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                {STATUS_LABELS[status]}
                <span className="rounded-full bg-zinc-200 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                  {columnTodos.length}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {columnTodos.length === 0 ? (
                  <EmptyState />
                ) : (
                  columnTodos.map((todo) => (
                    <TodoCard
                      key={todo.id}
                      todo={todo}
                      isPending={pendingIds.has(todo.id)}
                      onStatusChange={(status) => handleStatusChange(todo, status)}
                      onDelete={() => handleDelete(todo)}
                      onView={() => setViewingTodo(todo)}
                    />
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      {isModalOpen && (
        <CreateTicketModal onClose={() => setIsModalOpen(false)} onCreate={handleCreate} />
      )}

      {viewingTodo && (
        <ViewTicketModal ticket={viewingTodo} onClose={() => setViewingTodo(null)} />
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <p className="rounded-md border border-dashed border-zinc-300 px-3 py-6 text-center text-sm text-zinc-400 dark:border-zinc-700 dark:text-zinc-600">
      Nothing here
    </p>
  );
}

function TodoCard({
  todo,
  isPending,
  onStatusChange,
  onDelete,
  onView,
}: {
  todo: Todo;
  isPending: boolean;
  onStatusChange: (status: TodoStatus) => void;
  onDelete: () => void;
  onView: () => void;
}) {
  const canChangeStatus = todo.permissions.allowedStatuses.length > 0;
  const selectableStatuses = canChangeStatus
    ? Array.from(new Set([todo.status, ...todo.permissions.allowedStatuses]))
    : [];

  return (
    <div className="flex flex-col gap-2 rounded-md border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm text-zinc-900 dark:text-zinc-50">{todo.title}</p>
        <div className="flex shrink-0 items-center gap-1">
          <button
            onClick={onView}
            className="rounded px-1.5 py-0.5 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
          >
            View
          </button>
          {todo.permissions.canDelete && (
            <button
              onClick={onDelete}
              disabled={isPending}
              aria-label="Delete todo"
              className="rounded p-1 text-zinc-400 transition-colors hover:bg-red-50 hover:text-red-600 disabled:opacity-60 dark:hover:bg-red-950"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 dark:text-zinc-600">
        {new Date(todo.createdAt).toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
        <span className="rounded-full bg-zinc-100 px-2 py-0.5 font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
          {todo.owner.name}
        </span>
        {todo.points > 0 && (
          <span className="rounded-full bg-blue-100 px-2 py-0.5 font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            {todo.points} pts
          </span>
        )}
      </div>

      {canChangeStatus ? (
        <select
          value={todo.status}
          disabled={isPending}
          onChange={(e) => onStatusChange(e.target.value as TodoStatus)}
          className="rounded-md border border-zinc-300 bg-white px-2 py-1 text-xs text-zinc-900 disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
        >
          {selectableStatuses.map((status) => (
            <option key={status} value={status}>
              {STATUS_LABELS[status]}
            </option>
          ))}
        </select>
      ) : (
        <span className="w-fit rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
          {STATUS_LABELS[todo.status]}
        </span>
      )}
    </div>
  );
}
