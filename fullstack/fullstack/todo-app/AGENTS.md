# AGENTS.md - Agentic Coding Guidelines

This document provides guidelines for agents operating in this repository.

## Project Overview

- **Project**: Todo App (Next.js 16 + TypeScript + Tailwind CSS 4)
- **Location**: `todo-app/`
- **Framework**: Next.js 16 with App Router (React 19)

## Commands

### Development
```bash
cd todo-app
npm run dev        # Start development server at http://localhost:3000
```

### Build & Production
```bash
npm run build     # Build for production
npm run start     # Start production server
```

### Linting
```bash
npm run lint      # Run ESLint
npm run lint -- --fix   # Run ESLint with auto-fix
```

### Running a Single Test
This project does not currently have a test framework configured. To run tests:
1. Install a test framework (e.g., Vitest, Jest)
2. Add appropriate scripts to package.json

## Code Style Guidelines

### General Principles
- Use functional components with arrow functions where appropriate
- Prefer composition over inheritance
- Keep components small and focused (single responsibility)
- Use TypeScript for all new code

### TypeScript
- Always use explicit types for function parameters and return values
- Use `interface` for object shapes, `type` for unions/intersections
- Enable strict mode in tsconfig.json
- Avoid `any` - use `unknown` when type is truly unknown
- Use utility types (`Partial`, `Required`, `Pick`, `Omit`) where appropriate

Example:
```typescript
interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

function createTodo(title: string): Todo {
  return {
    id: crypto.randomUUID(),
    title,
    completed: false,
    createdAt: new Date(),
  };
}
```

### Naming Conventions
- **Files**: kebab-case for components (`todo-item.tsx`), PascalCase for pages (`page.tsx`)
- **Components**: PascalCase (e.g., `TodoList`, `Button`)
- **Functions**: camelCase (e.g., `handleSubmit`, `formatDate`)
- **Variables**: camelCase (e.g., `isLoading`, `todoItems`)
- **Constants**: UPPER_SNAKE_CASE for compile-time constants, camelCase for others
- **Interfaces**: PascalCase with descriptive names (e.g., `TodoItemProps`)

### Imports
- Order imports as follows:
  1. External libraries (React, Next.js)
  2. Internal components
  3. Types/interfaces
  4. Utils/helpers
  5. Styles/assets
- Use absolute imports with `@/` prefix (configure in tsconfig.json)
- Group imports with empty lines between groups

Example:
```typescript
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { TodoItem } from "@/components/TodoItem";
import { TodoForm } from "@/components/TodoForm";
import type { Todo } from "@/types/todo";
import { formatDate, sortTodos } from "@/utils/helpers";

import "./globals.css";
```

### Formatting
- Use Prettier for code formatting (install VS Code extension)
- Line length: 100 characters max
- Use 2 spaces for indentation
- Trailing commas in arrays and objects
- Use template literals instead of string concatenation

### React/Next.js Patterns
- Use `use client` directive only when needed (for hooks, event handlers, browser APIs)
- Server Components by default in App Router
- Use `next/image` for images, `next/link` for navigation
- Extract reusable logic into custom hooks
- Use composition pattern for shared UI

Example:
```typescript
// Custom hook
function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback((title: string) => {
    setTodos(prev => [...prev, createTodo(title)]);
  }, []);

  return { todos, addTodo };
}
```

### Tailwind CSS
- Use utility classes for styling
- Follow mobile-first responsive design
- Use semantic color names when possible
- Group related classes logically

Example:
```tsx
<button
  className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
  disabled={isLoading}
>
  {isLoading ? "Loading..." : "Submit"}
</button>
```

### Error Handling
- Use try-catch for async operations
- Display user-friendly error messages
- Log errors appropriately for debugging
- Use Error Boundaries for component-level errors

Example:
```typescript
async function fetchTodos(): Promise<Todo[]> {
  try {
    const response = await fetch("/api/todos");
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
}
```

### File Organization
```
todo-app/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # Reusable UI components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── types/                  # TypeScript type definitions
├── public/                 # Static assets
├── package.json
├── tsconfig.json
└── eslint.config.mjs
```

### Git Conventions
- Use meaningful commit messages
- Keep commits atomic and focused
- Branch naming: `feature/description`, `fix/description`, `refactor/description`
- Run `npm run lint` before committing

### ESLint Configuration
- The project uses `eslint-config-next/core-web-vitals` and TypeScript rules
- Do not disable ESLint rules without good reason
- Fix linting issues before committing

## Common Tasks

### Adding a New Component
1. Create file in `components/`
2. Use TypeScript interfaces for props
3. Export as default or named export
4. Add to parent component

### Adding a New API Route
1. Create file in `app/api/route.ts`
2. Use appropriate HTTP method handlers (GET, POST, etc.)
3. Return proper Response objects

### Adding a New Page
1. Create folder in `app/` (e.g., `app/todos/`)
2. Add `page.tsx` with the page component
3. Add `layout.tsx` if needed for page-specific layout
