"use client";
import { todos } from "@prisma/client";
import { Trash2, Check, Pencil, X, Loader2, Lock } from "lucide-react";
import { useTransition, useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  deleteTodo,
  updateTodoStatus,
  updateTodoTask,
} from "@/app/lib/services";
import { useSession } from "next-auth/react";

export default function TodoItem({ todo }: { todo: todos }) {
  const [isPending, startTransition] = useTransition();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.task);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { status } = useSession();

  const isAuthenticated = status === "authenticated";
  const isLocked = !isAuthenticated;
  const isWorking = isPending;

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [isEditing]);

  const handleToggle = () => {
    if (isLocked || isWorking || isEditing) return;
    startTransition(async () => {
      const res = await updateTodoStatus(todo.id, !todo.is_completed);
      if (res.success) router.refresh();
    });
  };

  const handleSaveEdit = () => {
    if (isLocked) return;
    const trimmedText = editText.trim();
    if (!trimmedText || trimmedText === todo.task) {
      setEditText(todo.task);
      return setIsEditing(false);
    }

    startTransition(async () => {
      const res = await updateTodoTask(todo.id, trimmedText);
      if (res.success) {
        setIsEditing(false);
        router.refresh();
      }
    });
  };

  return (
    <div
      className={`
      group flex items-center justify-between p-5 bg-white rounded-2xl border transition-all duration-200
      ${isEditing ? "border-orange-400 ring-4 ring-orange-50" : "border-gray-100 shadow-sm hover:shadow-md"}
      ${isLocked ? "opacity-75 bg-gray-50/50" : "opacity-100"}
    `}
    >
      <p className="hidden">{status}</p>
      <div className="flex items-center gap-5 flex-1">
        <button
          disabled={isLocked || isWorking || isEditing}
          onClick={handleToggle}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 ${
            todo.is_completed
              ? "bg-orange-600 border-orange-600 text-white"
              : "border-gray-200 hover:border-orange-400"
          } ${isLocked || isWorking ? "cursor-not-allowed" : "cursor-pointer"}`}
        >
          {isWorking && !isEditing ? (
            <Loader2 size={12} className="animate-spin" />
          ) : isLocked ? (
            <Lock size={10} className="text-gray-400" />
          ) : todo.is_completed ? (
            <Check size={14} strokeWidth={4} />
          ) : null}
        </button>

        {isEditing ? (
          <input
            ref={inputRef}
            value={editText}
            disabled={isWorking}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSaveEdit();
              if (e.key === "Escape") {
                setIsEditing(false);
                setEditText(todo.task);
              }
            }}
            className="w-full text-[15px] font-medium text-[#202124] focus:outline-none bg-transparent"
          />
        ) : (
          <span
            className={`text-[15px] font-medium tracking-tight transition-all duration-300 ${
              todo.is_completed
                ? "text-gray-400 line-through"
                : "text-[#202124]"
            } ${isLocked ? "text-gray-400/80" : ""}`}
          >
            {todo.task}
          </span>
        )}
      </div>

      <div
        className={`flex gap-1 transition-opacity duration-200 ${
          isEditing ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        } ${isLocked ? "hidden" : "flex"}`}
      >
        {isEditing ? (
          <>
            <button
              onClick={handleSaveEdit}
              disabled={isWorking}
              className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg"
            >
              {isWorking ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Check size={18} strokeWidth={3} />
              )}
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setEditText(todo.task);
              }}
              className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg"
            >
              <X size={18} />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
            >
              <Pencil size={18} />
            </button>
            <button
              onClick={() =>
                startTransition(async () => {
                  const res = await deleteTodo(todo.id);
                  if (res.success) router.refresh();
                })
              }
              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Trash2 size={18} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
