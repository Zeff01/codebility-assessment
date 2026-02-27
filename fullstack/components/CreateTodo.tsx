"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Loader2 } from "lucide-react";

interface CreateTodoProps {
  onCreateTodo: (title: string) => void;
  isLoading?: boolean;
}

export default function CreateTodo({
  onCreateTodo,
  isLoading = false,
}: CreateTodoProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedInput = input.trim();
    if (!trimmedInput) {
      return;
    }

    onCreateTodo(trimmedInput);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        placeholder="Add a new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isLoading}
        className="flex-1"
      />
      <Button
        type="submit"
        disabled={isLoading}
        className="gap-2"
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Plus className="h-4 w-4" />
        )}
        {isLoading ? "Adding..." : "Add"}
      </Button>
    </form>
  );
}
