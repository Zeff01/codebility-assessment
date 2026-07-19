# Let’s To-Do It

A fullstack todo application built for the **Codebility Fullstack Assessment (3–5 years track)**.

The project demonstrates authenticated task management, protected API routes, persistent storage with Prisma + SQLite, and a modern dark glassmorphism dashboard built with **Next.js App Router** and **Tailwind CSS v4**.

---

## Features

* **Authentication** — email/password sign-in using **NextAuth.js (Credentials Provider)**
* **Protected routes** — `/todos` and `/api/todos/*` are guarded by middleware
* **Todo CRUD** — create, complete/uncomplete, and delete tasks
* **Persistent storage** — data is stored in **SQLite via Prisma ORM**
* **Optimistic UI** — task actions update instantly and roll back on failure
* **Dashboard analytics** — total, completed, remaining tasks, and a completion progress bar
* **Loading, empty, and error states** — skeleton loaders, illustrated empty state, and dismissible alerts
* **Responsive & accessible** — mobile-friendly layout, keyboard focus states, and semantic HTML

---

## Tech Stack

| Layer          | Technology              |
| -------------- | ----------------------- |
| Framework      | Next.js 16 (App Router) |
| Language       | TypeScript              |
| Styling        | Tailwind CSS v4         |
| Authentication | NextAuth.js             |
| Database       | SQLite                  |
| ORM            | Prisma                  |

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file in the project root:

```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="replace-with-a-random-secret"
NEXTAUTH_URL="http://localhost:3000"
```

Generate a secure secret (optional):

```bash
openssl rand -base64 32
```

### Set up the database

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### Seed the demo user

```bash
npx tsx prisma/seed.ts
```

### Run the development server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## Demo Credentials

```text
Email: demo@example.com
Password: password123
```

---

## Project Structure

```text
src/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/route.ts
│   │   └── todos/
│   │       ├── route.ts
│   │       └── [id]/route.ts
│   ├── (auth)/login/page.tsx
│   ├── (site)/todos/page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   ├── todos/
│   ├── ui/
│   └── providers.tsx
├── lib/
│   ├── auth.ts
│   └── prisma.ts
└── middleware.ts

prisma/
└── schema.prisma
```

---

## Architecture Notes

* **Route groups** separate the authentication UI from the main dashboard layout without affecting URLs.
* **Optimistic updates** provide a fast, app-like experience without introducing a global state library.
* **Priority badges** are currently **UI-only** and derived from the todo ID for visual consistency; this can be replaced with a real database field in a future iteration.
* **SQLite** was chosen for zero-configuration local development and quick assessment setup.

---

## Future Improvements

* Editable task titles
* Real priority field with sorting and filtering
* Task search
* Pagination or virtualization for large lists
* Automated tests for API routes and authentication flow

---

## Screenshots

![Login Page](LoginPage.png)
![To-Do Page](ToDoPage.png)