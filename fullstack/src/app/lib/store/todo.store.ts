import { create, type StateCreator } from 'zustand';
import type { Todo, TodoCreate, TodoUpdate } from '@/lib/types/todo.type';
import { toast } from 'react-hot-toast';
import { auth, dataHeader } from '../service';
import axios from 'axios';

export interface TodoSlice {
  todos: Todo[];
  selectedTodo: Todo | null;
  isLoading: boolean;
  error: string | null;
  
  fetchTodos: () => Promise<void>;
  getTodoById: (id: string) => Promise<void>;
  createTodo: (data: TodoCreate) => Promise<void>;
  updateTodo: (id: string, data: TodoUpdate) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  clearSelectedTodo: () => void;
}

export const createTodoStore: StateCreator<TodoSlice> = (set, get) => ({
  todos: [],
  selectedTodo: null,
  isLoading: false,
  error: null,

  fetchTodos: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get('/api/todo', dataHeader());
      set({ todos: response.data.todos });
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || error.message || 'An error occurred';
      set({ error: errorMessage });
      toast.error(errorMessage);
    } finally {
      set({ isLoading: false });
    }
  },

  getTodoById: async (id: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`/api/todo/${id}`, dataHeader());
      set({ selectedTodo: response.data.todo });
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || error.message || 'An error occurred';
      set({ error: errorMessage });
      toast.error(errorMessage);
    } finally {
      set({ isLoading: false });
    }
  },

  createTodo: async (data: TodoCreate) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post('/api/todo', data, dataHeader());

      set((state) => ({
        todos: [...state.todos, response.data.todo],
      }));
      toast.success('Todo created successfully');
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || error.message || 'An error occurred';
      set({ error: errorMessage });
      toast.error(errorMessage);
    } finally {
      set({ isLoading: false });
    }
  },

  updateTodo: async (id: string, data: TodoUpdate) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.patch(`/api/todo/${id}`, data, dataHeader());

      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? response.data.todo : todo
        ),
        selectedTodo:
          state.selectedTodo?.id === id ? response.data.todo : state.selectedTodo,
      }));
      toast.success('Todo updated successfully');
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || error.message || 'An error occurred';
      set({ error: errorMessage });
      toast.error(errorMessage);
    } finally {
      set({ isLoading: false });
    }
  },

  deleteTodo: async (id: string) => {
    set({ isLoading: true, error: null });
    try {
      await axios.delete(`/api/todo/${id}`, dataHeader());

      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
        selectedTodo:
          state.selectedTodo?.id === id ? null : state.selectedTodo,
      }));
      toast.success('Todo deleted successfully');
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || error.message || 'An error occurred';
      set({ error: errorMessage });
      toast.error(errorMessage);
    } finally {
      set({ isLoading: false });
    }
  },

  clearSelectedTodo: () => {
    set({ selectedTodo: null });
  },
});
