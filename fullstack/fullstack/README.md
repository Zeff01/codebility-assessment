## Fullstack Assessment — Next.js Blog (1–2 Years)

### Overview

A full-featured blog application built with **Next.js 14 App Router**, **Tailwind CSS**, and **Docker**. The app covers all required assessment criteria plus several enhancements for production readiness.

---

### ✅ Requirements Completed

| Requirement | Status | Notes |
|---|---|---|
| Blog post list page | ✓ | Featured post hero + responsive card grid |
| Single post page | ✓ | Full content with prev/next navigation |
| `GET /api/posts` | ✓ | Returns all posts (summary, no full content) |
| `GET /api/posts/:id` | ✓ | Returns single post; 400 on bad ID, 404 on missing |
| Tailwind CSS styling | ✓ | Dark theme, responsive, custom scrollbar |

---

### 🗂 Project Structure

```
fullstack/
├── app/
│   ├── layout.js               # Root layout — sticky nav, footer
│   ├── page.js                 # Home: hero, featured post, post grid, API panel
│   ├── globals.css             # Tailwind directives + prose component styles
│   ├── posts/
│   │   └── [id]/
│   │       └── page.js         # Dynamic single post page
│   └── api/
│       ├── posts/
│       │   └── route.js        # GET /api/posts
│       └── posts/[id]/
│           └── route.js        # GET /api/posts/:id
├── data/
│   └── posts.js                # Static blog data (4 posts)
├── Dockerfile                  # Multi-stage production build
├── docker-compose.yml          # One-command local run
├── next.config.js              # output: standalone (required for Docker)
├── tailwind.config.js
└── postcss.config.js
```

---

### 🎨 Design Decisions

- **Featured post** — First post gets a full-width hero card; remaining posts render in a responsive 1→2→3 column grid.
- **Tag color system** — Each post tag (Framework, Styling, Data, API) has its own color badge, making posts visually scannable at a glance.
- **Prev / Next navigation** — Bottom of each post page links to adjacent posts so readers can browse without going back to the list.
- **Responsive at every breakpoint** — Mobile-first with `sm:` and `lg:` breakpoints. Nav collapses, grid stacks, code blocks scroll horizontally.
- **Custom mini markdown renderer** — Parses `**bold**`, `` `inline code` ``, and ` ``` ` fenced code blocks with language labels directly in JSX — no external library needed.

---

### 🐳 Docker Setup

The app runs in a **3-stage Docker build** to keep the production image small and secure:

1. **`deps`** — installs npm dependencies
2. **`builder`** — runs `next build` with `output: standalone`
3. **`runner`** — copies only the standalone output; runs as a non-root user

**Run with Docker Compose:**
```bash
docker compose up --build
```
Visit `http://localhost:3000`

**Or build and run manually:**
```bash
docker build -t devnotes .
docker run -p 3000:3000 devnotes
```
---

### 🔌 API Reference

| Method | Endpoint | Response |
|---|---|---|
| `GET` | `/api/posts` | `{ count: 4, posts: [...] }` — all posts without `content` |
| `GET` | `/api/posts/:id` | Full post object including `content` |
| `GET` | `/api/posts/999` | `404 { error: "Post with id 999 not found." }` |
| `GET` | `/api/posts/abc` | `400 { error: "Invalid ID — must be a number." }` |

---

### 🚀 Local Development

```bash
cd fullstack
npm install
npm run dev
# → http://localhost:3000
```

---

### Screenshots

> _(Add screenshots of the home page, a single post page, and the /api/posts JSON response before submitting the PR)_
