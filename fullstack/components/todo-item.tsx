"use client";

import { useState } from "react";
import { Todo } from "@prisma/client";
import { Button } from "./ui/button";
import { Modal } from "./ui/modal";
import { Check, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

interface TodoItemProps {
    todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalConfig, setModalConfig] = useState<{
        title: string;
        description: string;
        actionLabel?: string;
        variant?: "default" | "destructive";
        onAction?: () => void;
    }>({
        title: "",
        description: "",
        variant: "default",
    });

    const toggleComplete = async () => {
        try {
            setLoading(true);
            const res = await fetch(`/api/todos/${todo.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    completed: !todo.completed,
                    title: todo.title,
                }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.description || "Failed to update todo");
            }

            router.refresh();
        } catch (error) {
            console.error(error);
            setModalConfig({
                title: "Error",
                description: error instanceof Error ? error.message : "Failed to update todo",
                variant: "default",
            });
            setModalOpen(true);
        } finally {
            setLoading(false);
        }
    };

    const deleteTodo = async () => {
        try {
            setLoading(true);
            const res = await fetch(`/api/todos/${todo.id}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.description || "Failed to delete todo");
            }

            router.refresh();
        } catch (error) {
            console.error(error);
            setModalConfig({
                title: "Error",
                description: error instanceof Error ? error.message : "Failed to delete todo",
                variant: "default",
            });
            setModalOpen(true);
        } finally {
            setLoading(false);
        }
    };

    const confirmDelete = () => {
        setModalConfig({
            title: "Delete Todo",
            description: "Are you sure you want to delete this todo? This action cannot be undone.",
            actionLabel: "Delete",
            variant: "destructive",
            onAction: deleteTodo,
        });
        setModalOpen(true);
    };

    return (
        <>
            <div className="flex items-center justify-between rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center gap-3">
                    <button
                        disabled={loading}
                        onClick={toggleComplete}
                        className={clsx(
                            "flex h-6 w-6 items-center justify-center rounded-full border transition-colors",
                            todo.completed
                                ? "border-green-500 bg-green-500 text-white"
                                : "border-gray-300 hover:border-gray-400"
                        )}
                    >
                        {todo.completed && <Check className="h-4 w-4" />}
                    </button>
                    <span
                        className={clsx(
                            "text-base",
                            todo.completed ? "text-gray-400 line-through" : "text-gray-900"
                        )}
                    >
                        {todo.title}
                    </span>
                </div>
                <Button
                    variant="ghost"
                    onClick={confirmDelete}
                    disabled={loading}
                    className="text-gray-400 hover:text-red-500"
                >
                    <Trash2 className="h-5 w-5" />
                </Button>
            </div>
            <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                title={modalConfig.title}
                description={modalConfig.description}
                actionLabel={modalConfig.actionLabel}
                onAction={modalConfig.onAction}
                variant={modalConfig.variant}
            />
        </>
    );
}
