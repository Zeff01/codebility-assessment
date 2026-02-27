"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { ListTodo } from "lucide-react";
import TodoItem from "./TodoItem";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  userId: string;
}

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  isLoading: boolean;
}

export default function TodoList({
  todos,
  onToggle,
  onDelete,
  isLoading,
}: TodoListProps) {
  if (isLoading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton
            key={i}
            data-testid="skeleton"
            className="h-20 w-full rounded-lg"
          />
        ))}
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border py-12">
        <ListTodo className="mb-4 h-12 w-12 text-muted-foreground" />
        <h3 className="text-lg font-semibold">No todos yet</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Create your first todo to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
