"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Plus } from "lucide-react";
import { Modal } from "./ui/modal";

export default function TodoForm() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;

        try {
            setLoading(true);
            const res = await fetch("/api/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.description || "Failed to create todo");
            }

            setTitle("");
            router.refresh();
        } catch (error) {
            console.error(error);
            setError(error instanceof Error ? error.message : "Failed to create todo");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form onSubmit={onSubmit} className="mb-8 flex gap-2">
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add a new todo..."
                    disabled={loading}
                />
                <Button type="submit" disabled={loading || !title.trim()}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add
                </Button>
            </form>
            <Modal
                isOpen={!!error}
                onClose={() => setError(null)}
                title="Error"
                description={error || ""}
                variant="default"
            />
        </>
    );
}
