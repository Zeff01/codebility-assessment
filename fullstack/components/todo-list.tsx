import { Todo } from "@prisma/client";
import TodoItem from "./todo-item";
import { LayoutList } from "lucide-react";

interface TodoListProps {
    todos: Todo[];
}

export default function TodoList({ todos }: TodoListProps) {
    if (todos.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center text-gray-500">
                <LayoutList className="mb-4 h-12 w-12 text-gray-300" />
                <h3 className="text-lg font-medium">No todos yet</h3>
                <p>Create one above to get started!</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-3">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
}
