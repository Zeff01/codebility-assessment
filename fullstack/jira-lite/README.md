# jira-lite

A minimal, Jira-styled todo app built with Next.js — authentication, role-based
access control, a ticket status pipeline, and a Kanban board.

## Tech stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (class-based dark mode, custom light/dark toggle)
- **Auth**: NextAuth.js (Auth.js v5) — Credentials provider, JWT sessions
- **Database**: SQLite via Prisma ORM 7 (`@prisma/adapter-better-sqlite3` driver adapter)
- **Validation**: Zod
- **Password hashing**: bcryptjs
- **Testing**: Vitest (unit tests for validation schemas and the ABAC policy)
- **Linting**: ESLint (`eslint-config-next`)

## Getting started

```bash
npm install
npx prisma migrate dev   # creates dev.db and applies all migrations
npx prisma db seed       # seeds demo accounts (see below)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env` first if it doesn't already exist, and generate
your own `AUTH_SECRET` (e.g. `npx auth secret`).

### Seeded accounts

All passwords are `password123`.

| Email | Role | Group |
|---|---|---|
| `admin@example.com` | Admin | — |
| `dev@example.com` | Dev | Team Alpha |
| `qa@example.com` | QA | Team Alpha |
| `solo@example.com` | Dev | — (no group) |

### Scripts

```bash
npm run dev      # start the dev server
npm run build    # production build
npm run start    # run the production build
npm run lint      # eslint
npm test         # vitest
```

## Access control model

Access isn't a flat role → permission table — it's **attribute-based**: the
decision depends on the combination of the viewer's role, their group, and
who owns the ticket.

- **Admin** — full control over every ticket, any status, any time. Manages
  groups and assigns roles/groups to users via `/admin`.
- **Dev** — owns the first half of the pipeline: **To Do → In Progress →
  Ready for Testing**. Can see and toggle a same-group teammate's ticket
  status, but can't rename or delete anyone else's ticket.
- **QA** — owns the second half: **Ready for Testing → Tested and Verified →
  Completed**. QA's own tickets skip straight to "Ready for Testing" (their
  work is already verification work). QA's board only ever shows those three
  columns — To Do / In Progress tickets are invisible to QA entirely.
- A user with **no group** only ever sees their own tickets.

## User flow by role

### Everyone

1. Register at `/register` → redirected to `/confirm-email` (a no-op
   confirmation screen for this demo — click through to `/login`).
2. Sign in with email/password (NextAuth Credentials, bcrypt-verified).
3. Land on `/todos`, a Kanban board scoped to what that role can see.
4. Toggle light/dark mode any time via the sun/moon button in the header.

### Dev

1. See a 5-column board: **To Do | In Progress | Ready for Testing | Tested
   and Verified | Completed**.
2. Create a ticket via **New ticket** — title, story points, description,
   problem, acceptance criteria, technical implementation (all but title are
   optional). New tickets start at **To Do**.
3. Move their own tickets through **To Do → In Progress → Ready for
   Testing** via the status dropdown on the card.
4. See a same-group QA teammate's tickets too (read-only for status once
   past their own stages) — the **Members** dropdown in the navbar lists the
   whole team.
5. Click **View** on any card to see its full details in a read-only modal.
6. Can rename or delete only their own tickets.

### QA

1. See a 3-column board: **Ready for Testing | Tested and Verified |
   Completed** — To Do / In Progress never appear.
2. Any ticket they create starts directly at **Ready for Testing**.
3. Move any visible ticket (their own, or a same-group dev's) through
   **Ready for Testing → Tested and Verified → Completed**.
4. Cannot rename or delete a teammate's ticket, and cannot move a ticket
   backward into To Do / In Progress.

### Admin

1. Sees every ticket from every user, all 5 columns, and can set any status
   on any ticket at any time.
2. Has an **Admin** link in the navbar leading to `/admin`:
   - **Groups** — create teams.
   - **Users** — reassign any user's role (Admin/Dev/QA) and group. Changes
     take effect on that user's very next request — no re-login required.
3. Not a member of a group by default, so has no "teammates" of their own —
   their reach comes from the admin role, not group membership.

## Project structure

```
app/
  api/            REST routes (todos, auth, admin) — Next.js Route Handlers
  admin/          Admin-only pages (groups, users)
  todos/          The Kanban board page
  login/ register/ confirm-email/   Auth pages
components/       Client components (board, modals, navbar, admin tables)
lib/
  auth.ts / auth.config.ts   NextAuth setup (Node vs edge-safe split)
  authorization.ts           The ABAC policy — pure functions, unit tested
  current-user.ts            Session → fresh DB user lookup
  validations/                Zod schemas for auth and todo input
prisma/
  schema.prisma    User, Group, Todo models + Role/TodoStatus enums
  migrations/      Incremental schema history
  seed.ts          Demo data
```

## Testing

```bash
npm test
```

Covers:
- `lib/validations/auth.ts` — register/login schema rules
- `lib/validations/todo.ts` — ticket field validation (title, status, points, detail fields)
- `lib/authorization.ts` — the full ABAC policy matrix (owner, admin, same-group
  teammate, outsider, no-group × read/edit/delete/status-transition)

Not yet covered: API route handlers, UI components, and end-to-end flows —
see the app for manual verification steps if extending this further.
