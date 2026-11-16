<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# CodeBility Assessment — Full-Stack Blog Application

## 1. Project Goal
Build a simple, functional blog application using Next.js as part of the CodeBility Full-Stack Developer Assessment (1–2 Years Experience).

The application must allow users to:

- View a list of blog posts on the homepage.
- Read an individual blog post.
- Navigate between the homepage and individual posts.
- Retrieve all blog posts through an API endpoint.
- Retrieve a specific blog post through an API endpoint.

### Primary Objectives

1. Demonstrate familiarity with Next.js and its App Router.
2. Implement file-based and dynamic routing.
3. Use reusable, organized data structures.
4. Implement Next.js API route handlers.
5. Build a clean and usable interface.
6. Maintain readable, organized, and functional code.

### Scope and Priorities
This is a time-constrained assessment project.

Prioritize:

1. Required functionality.
2. Correct routing and data handling.
3. Clean code organization.
4. Basic responsive styling.
5. Testing and submission readiness.
Avoid unnecessary complexity. A database, authentication system, admin dashboard, and other features outside the assessment requirements are not part of the initial scope.

---

## 2. Development Checklist

### Phase 1 — Project Initialization

- Fork and clone the assessment repository.
- Create the required Git branch.
- Initialize Next.js inside the `fullstack/` directory.
- Configure JavaScript and App Router.
- Install dependencies.
- Verify the development server runs.

### Phase 2 — Blog Data and Homepage

- Create `data/posts.js`.
- Define a reusable blog post data structure.
- Add at least three blog posts.
- Import blog data into `app/page.js`.
- Render blog posts dynamically using `.map()`.
- Use unique React keys when rendering lists.
- Verify the homepage renders correctly.

### Phase 3 — Individual Blog Pages

- Create the dynamic route `app/posts/[id]/page.js`.
- Retrieve the post ID from the route parameters.
- Find the matching post from the local data array.
- Display the post title, date, and full content.
- Handle invalid or nonexistent post IDs.
- Add navigation back to the homepage.
- Add links to individual posts from the homepage.
- Test navigation between posts.

### Phase 4 — API Routes

- Create `app/api/posts/route.js`.
- Implement GET `/api/posts` to return all posts.
- Create `app/api/posts/[id]/route.js`.
- Implement GET `/api/posts/:id` to return one post.
- Return appropriate HTTP status codes.
- Handle nonexistent post IDs.
- Test both endpoints.

### Phase 5 — Styling and UI

- Establish consistent global styling.
- Style the homepage and post list.
- Style individual post pages.
- Make navigation clear and intuitive.
- Ensure basic responsiveness.
- Remove unused starter styles and imports.

### Phase 6 — Testing and Quality Assurance

- Verify the homepage.
- Verify every individual post page.
- Verify invalid post IDs.
- Test the all-posts API endpoint.
- Test the individual-post API endpoint.
- Check browser console and terminal errors.
- Verify the application builds successfully.
- Capture screenshots of the completed application.

### Phase 7 — Submission

- Review project structure and code quality.
- Check Git status for unintended files.
- Commit completed features.
- Push the assessment branch to the fork.
- Create a pull request to the original assessment repository.
- Verify the pull request and submission.

---

## 3. Project Architecture
The project uses Next.js App Router with JavaScript.

Current intended structure:

```
fullstack/
├── app/
│   ├── api/
│   │   └── posts/
│   │       ├── route.js
│   │       └── [id]/
│   │           └── route.js
│   │
│   ├── posts/
│   │   └── [id]/
│   │       └── page.js
│   │
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   └── page.module.css
│
├── data/
│   └── posts.js
│
├── public/
│
├── .gitignore
├── AGENTS.md
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
└── package-lock.json
```

### Responsibilities
`app/page.js`

- Serves as the homepage (`/`).
- Imports the blog post data.
- Displays a list of posts.
- Provides links to individual post pages.
`app/posts/[id]/page.js`

- Handles dynamic blog post routes.
- Uses the URL parameter to identify a post.
- Displays the selected post's full content.
`app/api/posts/route.js`

- Handles requests to `/api/posts`.
- Returns the complete blog post collection.
`app/api/posts/[id]/route.js`

- Handles requests to `/api/posts/:id`.
- Returns one matching blog post.
`data/posts.js`

- Acts as the local source of truth for blog post data.
- Exports the posts array for use by pages and API handlers.
`app/layout.js`

- Defines the shared application layout.
- Contains the root HTML structure and shared metadata.
`app/globals.css`

- Contains application-wide styles.
`app/page.module.css`

- Contains styles scoped to the homepage.

---

## 4. Blog Data Structure
All blog posts should follow the same structure:

```
{
  id: 1,
  title: "Example Blog Post",
  excerpt: "A short description of the article.",
  content: "The complete article content.",
  date: "2025-04-15"
}
```

### Data Rules

- Every post must have a unique ID.
- Every post must contain all five required fields.
- `title`, `excerpt`, and `content` must be strings.
- `date` should use the `YYYY-MM-DD` format.
- Keep the data structure consistent across all posts.
The initial implementation uses a local JavaScript array rather than a database.

---

## 5. Coding Conventions

### General

- Use JavaScript and JSX.
- Follow the existing Next.js App Router conventions.
- Use descriptive variable and function names.
- Keep components focused on their responsibilities.
- Avoid unnecessary dependencies.
- Remove unused imports and variables.

### React and JSX

- Use functional React components.
- Use `.map()` when rendering collections.
- Provide stable, unique keys when rendering lists.
- Use semantic HTML elements (`main`, `article`, `h1`, `h2`, etc.).
- Keep JSX readable and consistently formatted.

### Next.js

- Use the App Router.
- Use the `Link` component from `next/link` for internal navigation.
- Use dynamic route segments for individual blog posts.
- Use `route.js` for API route handlers.
- Remember that App Router components are Server Components by default.
- Only introduce Client Components when browser-side interactivity is required.

### Styling

- Prefer CSS Modules for component-specific styling.
- Use global CSS for application-wide styles.
- Avoid introducing a styling framework unless necessary.

### API Design

- Use appropriate HTTP methods and status codes.
- Return JSON responses.
- Handle missing resources explicitly.
- Keep API response structures consistent.

---

## 6. Development Workflow
Follow this workflow when implementing features:

1. **Define:** Understand the feature and expected behavior.
2. **Plan:** Identify the files and components involved.
3. **Implement:** Build one feature at a time.
4. **Test:** Verify the feature works before moving on.
5. **Understand:** Be able to explain how the implementation works.
6. **Refactor:** Improve readability and organization without changing behavior.
7. **Trace:** Understand how data flows through the application.
8. **Commit:** Save completed, working features to Git.

### Git Practices

- Work on the assessment branch:
`AlexAndre-Mago/fullstack-1-2`
- Commit after completing meaningful, tested features.
- Use descriptive commit messages.
- Do not commit `node_modules/`, `.next/`, environment files, or other generated files.
- Keep the working tree clean before submission.

---

## 7. Current Implementation Status
As of November 17, 2026:

### Completed

- Next.js project initialized.
- App Router configured.
- Local blog data created.
- Four blog posts added.
- Homepage imports the named `posts` export.
- Homepage dynamically renders post titles and excerpts using `.map()`.
- React list keys implemented.
- Homepage verified in the browser.
- Initial Git commit created.

### Latest Commit
`7179b1f`

Message: `Building the blog hompage with postdata...`

### Current Branch
`AlexAndre-Mago/fullstack-1-2`

### Immediate Next Objective
Implement dynamic individual blog post pages and connect the homepage to those pages using Next.js navigation.

---

## 8. Instructions for AI Coding Assistants
When assisting with this project:

- Respect the assessment requirements and existing architecture.
- Inspect relevant files before proposing changes.
- Do not unnecessarily rewrite working code.
- Prefer small, focused changes over large refactors.
- Explain the reasoning behind important implementation decisions.
- Do not introduce unrequested features or dependencies.
- Do not assume a database or authentication system is needed.
- Keep the implementation understandable for a developer learning Next.js.
- Verify behavior before declaring a feature complete.
- Update this document's checklist and implementation status as meaningful milestones are completed.
The goal is not simply to produce code that works. The goal is to deliver a clean, functional assessment while demonstrating an understanding of the technologies and decisions behind the implementation.
