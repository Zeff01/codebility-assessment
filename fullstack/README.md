# Todo App

A full-stack todo application with authentication and protected routes, built with modern web technologies.

## Features

- **User Authentication**
  - Sign up with email, name, and password
  - Sign in with email and password
  - Password hashing with bcryptjs
  - Protected routes (redirects to sign-in if not authenticated)
  - Sign out functionality

- **Todo Management**
  - Create new todos with title validation (1-200 characters)
  - View personal todo list (filtered by logged-in user)
  - Mark todos as complete/incomplete
  - Delete todos
  - Real-time loading states for better UX
  - Error handling with user-friendly alerts

- **UI/UX**
  - Responsive design (mobile-friendly)
  - Clean, modern interface using shadcn/ui components
  - Loading indicators for async operations
  - Form validation with inline error messages
  - Dark mode support via Tailwind CSS v4

## Tech Stack

| Category             | Technology                 |
| -------------------- | -------------------------- |
| **Framework**        | Next.js 16 (App Router)    |
| **UI Library**       | React 19                   |
| **Language**         | TypeScript                 |
| **Styling**          | Tailwind CSS v4            |
| **Components**       | shadcn/ui (New York style) |
| **Authentication**   | NextAuth.js v4             |
| **Mock API**         | json-server                |
| **Password Hashing** | bcryptjs                   |
| **Icons**            | Lucide React               |
| **Package Manager**  | pnpm                       |

## Prerequisites

- **Node.js** v20 or higher
- **pnpm** (install via: `npm install -g pnpm`)

## Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Start the Mock API Server

The app uses **json-server** as a mock REST API backend. Start it on port 5000:

```bash
pnpm server
```

The API will be available at `http://localhost:5000` with the following endpoints:

- `GET/POST /users` - User management
- `GET/POST/PATCH/DELETE /todos` - Todo CRUD operations

> **Note:** Keep this server running in a separate terminal while developing.

### 3. Start the Development Server

In a new terminal, start the Next.js dev server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command           | Description                            |
| ----------------- | -------------------------------------- |
| `pnpm dev`        | Start Next.js dev server (port 3000)   |
| `pnpm build`      | Build production bundle                |
| `pnpm start`      | Start production server                |
| `pnpm lint`       | Run ESLint                             |
| `pnpm type-check` | Run TypeScript type check              |
| `pnpm server`     | Start json-server mock API (port 5000) |

## Default Test Users

The mock database (`data/db.json`) comes with pre-configured test users:

| Email              | Password      | Name      |
| ------------------ | ------------- | --------- |
| `test@example.com` | `password123` | Test User |
| `jane@example.com` | `securepass`  | Jane Doe  |
| `john@example.com` | `password123` | John Doe  |

## Project Structure

```
fullstack/
├── app/
│   ├── (protected)/todos/    # Protected todo page
│   ├── api/
│   │   └── auth/             # NextAuth.js routes
│   ├── sign-in/              # Sign-in page
│   ├── sign-up/              # Sign-up page
│   ├── globals.css           # Global styles with Tailwind v4
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home/landing page
├── components/
│   ├── auth/                 # Auth forms (sign-in, sign-up)
│   ├── ui/                   # shadcn/ui components
│   ├── providers.tsx         # Session provider wrapper
│   ├── todo-form.tsx         # Todo creation form
│   ├── todo-item.tsx         # Individual todo component
│   └── todo-list.tsx         # Todo list container
├── data/
│   └── db.json               # Mock database for json-server
├── lib/
│   ├── api-client.ts         # API client wrapper
│   └── utils.ts              # Utility functions (cn helper)
└── types/
    └── todo.ts               # TypeScript type definitions
```

## Important Notes

### Package Manager

This project uses **pnpm** exclusively. Do not use npm, yarn, or bun, as they may cause lockfile conflicts.

### Path Aliases

The `@/` prefix is used for clean imports:

- `@/components` → `components/`
- `@/lib` → `lib/`
- `@/app` → `app/`
- `@/types` → `types/`

### Mock API Limitations

Since json-server is used as a mock backend:

- Data is stored in `data/db.json` and resets when the file is modified
- No real authentication security (passwords are hashed but no JWT validation in middleware)
- For production, replace with a real backend (NestJS, Express, etc.)

### Adding shadcn/ui Components

To add new shadcn/ui components:

```bash
npx shadcn add <component-name>
```

Components are installed to `components/ui/`.

## Development Tips

1. **Run both servers simultaneously** - Keep `pnpm server` and `pnpm dev` running in separate terminals
2. **TypeScript strict mode** - The project uses strict type checking; fix type errors before committing
3. **Responsive design** - Test on different screen sizes; the app is optimized for mobile and desktop
