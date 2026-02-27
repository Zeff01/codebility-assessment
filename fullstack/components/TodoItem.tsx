"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  userId: string;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
}: TodoItemProps) {
  const formattedDate = new Date(todo.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-white p-4">
      <Checkbox
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id)}
        aria-label={`Toggle ${todo.title}`}
      />

      <div className="flex-1">
        <p
          className={cn(
            "text-sm font-medium",
            todo.completed && "line-through text-muted-foreground"
          )}
        >
          {todo.title}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">{formattedDate}</p>
      </div>

      <Badge variant={todo.completed ? "default" : "outline"}>
        {todo.completed ? "Completed" : "Pending"}
      </Badge>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => onDelete(todo.id)}
        className="text-destructive hover:text-destructive"
        aria-label={`Delete ${todo.title}`}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
