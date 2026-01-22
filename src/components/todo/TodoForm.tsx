"use client";

import { useState, FormEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { createTodo, updateTodo, selectAllTodos } from "@/store/features/todo";
import {
  selectIsModalOpen,
  selectModalType,
  selectSelectedTodoId,
  closeModal,
  showToast,
} from "@/store/features/ui";
import { Button, Input, Textarea, Modal } from "@/components/ui";

export function TodoForm() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsModalOpen);
  const modalType = useAppSelector(selectModalType);
  const selectedTodoId = useAppSelector(selectSelectedTodoId);
  const todos = useAppSelector(selectAllTodos);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ title?: string }>({});

  const isEditing = modalType === "edit";
  const selectedTodo = todos.find((t) => t.id === selectedTodoId);

  useEffect(() => {
    if (isEditing && selectedTodo) {
      setTitle(selectedTodo.title);
      setDescription(selectedTodo.description || "");
    } else {
      setTitle("");
      setDescription("");
    }
    setErrors({});
  }, [isEditing, selectedTodo, isOpen]);

  const validateForm = () => {
    const newErrors: { title?: string } = {};
    if (!title.trim()) {
      newErrors.title = "Title is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      if (isEditing && selectedTodoId) {
        await dispatch(
          updateTodo({
            id: selectedTodoId,
            title: title.trim(),
            description: description.trim() || undefined,
          })
        ).unwrap();
        dispatch(showToast({ message: "Todo updated successfully", type: "success" }));
      } else {
        await dispatch(
          createTodo({
            title: title.trim(),
            description: description.trim() || undefined,
          })
        ).unwrap();
        dispatch(showToast({ message: "Todo created successfully", type: "success" }));
      }
      handleClose();
    } catch {
      dispatch(
        showToast({
          message: `Failed to ${isEditing ? "update" : "create"} todo`,
          type: "error",
        })
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    dispatch(closeModal());
    setTitle("");
    setDescription("");
    setErrors({});
  };

  if (modalType !== "create" && modalType !== "edit") return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={isEditing ? "Edit Todo" : "Create New Todo"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Title"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          error={errors.title}
          autoFocus
        />

        <Textarea
          label="Description (optional)"
          placeholder="Add more details..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
        />

        <div className="flex gap-3 justify-end pt-2">
          <Button type="button" variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" isLoading={isSubmitting}>
            {isEditing ? "Update" : "Create"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
