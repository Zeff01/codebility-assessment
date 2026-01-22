import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Todo, CreateTodoInput, UpdateTodoInput } from "./types";

interface TodoState {
  items: Todo[];
  loading: boolean;
  error: string | null;
  filter: "all" | "active" | "completed";
}

const initialState: TodoState = {
  items: [],
  loading: false,
  error: null,
  filter: "all",
};

// Async thunks
export const fetchTodos = createAsyncThunk<Todo[]>(
  "todos/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/todos");
      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }
      const data = await response.json();
      return data.todos;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to fetch todos"
      );
    }
  }
);

export const createTodo = createAsyncThunk<Todo, CreateTodoInput>(
  "todos/createTodo",
  async (input, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      if (!response.ok) {
        throw new Error("Failed to create todo");
      }
      const data = await response.json();
      return data.todo;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to create todo"
      );
    }
  }
);

export const updateTodo = createAsyncThunk<Todo, UpdateTodoInput>(
  "todos/updateTodo",
  async (input, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/todos/${input.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      if (!response.ok) {
        throw new Error("Failed to update todo");
      }
      const data = await response.json();
      return data.todo;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to update todo"
      );
    }
  }
);

export const deleteTodo = createAsyncThunk<string, string>(
  "todos/deleteTodo",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete todo");
      }
      return id;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to delete todo"
      );
    }
  }
);

export const toggleTodo = createAsyncThunk<Todo, string>(
  "todos/toggleTodo",
  async (id, { getState, rejectWithValue }) => {
    try {
      const state = getState() as { todos: TodoState };
      const todo = state.todos.items.find((t) => t.id === id);
      if (!todo) {
        throw new Error("Todo not found");
      }
      const response = await fetch(`/api/todos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !todo.completed }),
      });
      if (!response.ok) {
        throw new Error("Failed to toggle todo");
      }
      const data = await response.json();
      return data.todo;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to toggle todo"
      );
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<"all" | "active" | "completed">) => {
      state.filter = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch todos
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Create todo
      .addCase(createTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.items.unshift(action.payload);
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Update todo
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      // Delete todo
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((t) => t.id !== action.payload);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      // Toggle todo
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(toggleTodo.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export const { setFilter, clearError } = todoSlice.actions;
export default todoSlice.reducer;

// Selectors
export const selectAllTodos = (state: any) => state.todos.items;
export const selectTodosLoading = (state: any) => state.todos.loading;
export const selectTodosError = (state: any) => state.todos.error;
export const selectTodosFilter = (state: any) => state.todos.filter;

export const selectFilteredTodos = (state: any) => {
  const { items, filter } = state.todos;
  switch (filter) {
    case "active":
      return items.filter((t: Todo) => !t.completed);
    case "completed":
      return items.filter((t: Todo) => t.completed);
    default:
      return items;
  }
};

export const selectTodoStats = (state: any) => {
  const items = state.todos.items;
  return {
    total: items.length,
    completed: items.filter((t: Todo) => t.completed).length,
    active: items.filter((t: Todo) => !t.completed).length,
  };
};
