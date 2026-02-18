import { todos as ITodos } from "@prisma/client";
import axios from "axios";
import { prisma } from "./prisma";

interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

export const fetchTodos = async (): Promise<ApiResponse<ITodos[]>> => {
  const res = await axios.get("/api/todos");
  return res.data;
};

export const createTodo = async (
  task: string,
): Promise<ApiResponse<ITodos>> => {
  const res = await axios.post("/api/todos", { task });
  return res.data;
};

export const updateTodoStatus = async (
  id: string,
  is_completed: boolean,
): Promise<ApiResponse<ITodos>> => {
  const res = await axios.patch(`/api/todos/${id}`, { is_completed });
  return res.data;
};

export const deleteTodo = async (id: string): Promise<ApiResponse<null>> => {
  const res = await axios.delete(`/api/todos/${id}`);
  return res.data;
};

export const updateTodoTask = async (
  id: string,
  task: string,
): Promise<ApiResponse<ITodos>> => {
  const res = await axios.patch(`/api/todos/${id}`, { task });
  return res.data;
};

export async function createCookingOrder(dishName: string) {
  try {
    const res = await axios.post("/api/cooking", { dishName });

    return { success: true, data: res.data };
  } catch (error) {
    console.error("Cooking API Error:");
    return {
      success: false,
      error: "Chef is busy, try again!",
    };
  }
}
