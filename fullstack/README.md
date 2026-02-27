# Todo App - Fullstack

A modern, fullstack todo application built with Next.js 16, TypeScript, and Prisma.

## Tech Stack

- **Frontend**: Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS, shadcn/ui
- **Authentication**: NextAuth.js v5 (Credentials Provider), bcryptjs
- **Database**: Prisma ORM, SQLite
- **Icons**: Lucide React

## Features

- User authentication (sign up, sign in, sign out)
- Create, read, update, delete todos
- Toggle todo completion status
- Per-user data isolation
- Responsive design (mobile-first)

## Getting Started

### Prerequisites

- Node.js 20.9+ and npm (Next.js 16 requirement)
- TypeScript 5.1+ (automatically installed with dependencies)

### Quick Start (TL;DR)

```bash
cd fullstack
npm install
cp .env.example .env
npx prisma generate && npx prisma db push && npx prisma db seed
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) and sign in with:
- Email: `demo@example.com`
- Password: `password123`

### Detailed Setup

1. **Clone the repository and navigate to the fullstack directory**

   ```bash
   cd fullstack
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup environment variables**

   Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

   The `.env` file should contain:

   ```
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_SECRET="your-random-secret-here"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Setup database and seed data**

   **Generate Prisma Client:**
   ```bash
   npx prisma generate
   ```
   This generates the TypeScript types and Prisma Client based on your schema.

   **Create the database:**
   ```bash
   npx prisma db push
   ```
   This creates the SQLite database file (`dev.db`) and sets up the tables (User and Todo).

   **Seed demo data (recommended):**
   ```bash
   npx prisma db seed
   ```

   This creates:
   - **Demo user account:**
     - Email: `demo@example.com`
     - Password: `password123`
   - **4 sample todos** (2 completed, 2 pending) to demonstrate the app

   > **Note:** You can skip seeding and create your own account via the sign-up page, but seeding provides a quick way to test the app immediately.

   **Verify database (optional):**
   ```bash
   npx prisma studio
   ```
   This opens Prisma Studio at [http://localhost:5555](http://localhost:5555) where you can visually browse your database.

5. **Start development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Demo Credentials

If you seeded the database, you can use:

- **Email**: `demo@example.com`
- **Password**: `password123`

## Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
fullstack/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/
│   │   ├── register/
│   │   └── todos/
│   ├── auth/
│   │   ├── signin/
│   │   └── signup/
│   ├── todos/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   ├── AuthForm.tsx
│   ├── Navbar.tsx
│   ├── TodoItem.tsx
│   ├── TodoList.tsx
│   ├── CreateTodo.tsx
│   ├── TodoPageClient.tsx
│   └── Providers.tsx
├── lib/
│   ├── auth.ts
│   ├── prisma.ts
│   └── utils.ts
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
└── package.json
```

## Key Implementation Details

### Authentication

- Credentials-based authentication with NextAuth.js v5
- Passwords hashed with bcryptjs (10 salt rounds)
- JWT session strategy
- Protected `/todos` route with middleware

### API Routes

All todo API routes include:

- Session validation (401 if unauthenticated)
- Ownership verification (users can only access their own todos)
- Input validation
- Proper HTTP status codes

Endpoints:

- `GET /api/todos` - Fetch all user's todos
- `POST /api/todos` - Create new todo
- `PATCH /api/todos/[id]` - Update todo
- `DELETE /api/todos/[id]` - Delete todo

### Database

Prisma schema includes:

- **User** model: email (unique), password hash, name
- **Todo** model: title, completed status, timestamps, user reference

## Troubleshooting

### Database Issues

**"Cannot find module '@prisma/client'"**
```bash
npx prisma generate
```

**Database locked error**
- Stop the dev server
- Close Prisma Studio if running
- Restart: `npm run dev`

**Need to reset database**
```bash
# Delete the database file
rm dev.db

# Recreate from scratch
npx prisma db push
npx prisma db seed
```

**Forgot demo credentials?**
- Email: `demo@example.com`
- Password: `password123`
- Or create a new account via the sign-up page

## Commands Reference

| Command                 | Description                           |
| ----------------------- | ------------------------------------- |
| `npm run dev`           | Start development server              |
| `npm run build`         | Build for production                  |
| `npm start`             | Start production server               |
| `npm run lint`          | Run ESLint                            |
| `npx prisma generate`   | Generate Prisma client (run after schema changes) |
| `npx prisma db push`    | Create/sync database schema           |
| `npx prisma db seed`    | Seed demo user and sample todos       |
| `npx prisma studio`     | Open database browser at :5555        |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- The app uses SQLite for simplicity (stored in `fullstack/dev.db`)
- The database is automatically created on first run
- `.env` is in `.gitignore` but `.env.example` is committed for reviewers
- No external API calls are made (fully self-contained)

## Built by

Elmar Angao — Full Stack Developer
