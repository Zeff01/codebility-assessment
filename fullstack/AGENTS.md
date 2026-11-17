# AGENTS.md

## 1. Project Goal
Build a functional, clean, and responsive blog application using **Next.js App Router** for the CodeBility Fullstack Developer 1–2 Years Assessment.

The application must allow users to:

- View all blog posts on the homepage.
- Navigate to individual blog posts.
- Read the full content of a selected post.
- Retrieve all posts through an API endpoint.
- Retrieve an individual post through an API endpoint.
- Receive appropriate responses for nonexistent posts.
The priority is to demonstrate working knowledge of Next.js, routing, reusable data, API route handlers, component structure, and responsive UI development.

**The original assessment README is the source of truth.** Do not introduce features outside its requirements without a clear reason.

## 2. Technology Stack

- Next.js 16 (App Router)
- React
- JavaScript
- JSX
- CSS / CSS Modules where appropriate
- Next.js Route Handlers
- Node.js and npm
No database is currently required. Blog data is stored in a reusable JavaScript module.

## 3. Project Structure
The Next.js application is located inside `fullstack/`.

Current relevant structure:

```
fullstack/
├── AGENTS.md
├── app/
│   ├── api/
│   │   └── posts/
│   │       ├── route.js
│   │       └── [id]/
│   │           └── route.js
│   ├── posts/
│   │   └── [id]/
│   │       └── page.js
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── data/
│   └── posts.js
├── package.json
└── package-lock.json
```

## 4. Application Architecture

### Data Layer
`data/posts.js`

- Contains the reusable blog post data.
- Exports a named `posts` array.
- Each post follows a consistent structure:

```
{
  id,
  title,
  excerpt,
  content,
  date
}
```

- Currently contains four sample blog posts.
- Pages and API routes import this shared data source.

### Homepage
`app/page.js`

- Imports the reusable posts array.
- Displays all posts using `.map()`.
- Uses stable keys (`post.id`).
- Uses Next.js `Link` to navigate to individual posts.

### Individual Blog Page
`app/posts/[id]/page.js`

- Uses dynamic file-based routing.
- Retrieves the route parameter.
- Finds the matching post using its ID.
- Displays the title, publication date, and full content.
- Uses `notFound()` for nonexistent post IDs.
- Provides navigation back to the homepage.

### API Routes
`app/api/posts/route.js`

- Implements `GET /api/posts`.
- Returns all blog posts as JSON.
`app/api/posts/[id]/route.js`

- Implements `GET /api/posts/[id]`.
- Retrieves a specific post by ID.
- Returns the post as JSON.
- Returns HTTP 404 when the post does not exist.

### Root Layout and Styling
`app/layout.js`

- Provides the root HTML layout.
- Imports global styles.
- Defines application metadata.
`app/globals.css`

- Contains global styles.
- Will hold shared design tokens, typography, resets, and responsive foundations.

## 5. Implementation Checklist

### Phase 1 — Core Functionality

- Initialize Next.js application.
- Create reusable blog data.
- Display all posts on the homepage.
- Implement dynamic individual post pages.
- Implement homepage-to-post navigation.
- Handle nonexistent post pages.

### Phase 2 — API Development

- Implement GET `/api/posts`.
- Implement GET `/api/posts/[id]`.
- Return the correct post by ID.
- Handle nonexistent post IDs with HTTP 404.
- Manually verify API responses.

### Phase 3 — Verification

- Verify homepage rendering.
- Verify individual post navigation.
- Verify invalid post page handling.
- Verify API endpoints.
- Run `npm run build` successfully.
- Review code organization and remove unused starter code.
- Add a small automated test suite if time permits.

### Phase 4 — UI/UX Development

- Establish a consistent visual design system.
- Define global colors, typography, and spacing.
- Create a modern homepage layout.
- Style reusable blog post cards.
- Improve individual article page presentation.
- Add hover and focus states.
- Implement responsive mobile layouts.
- Verify tablet and desktop layouts.

### Phase 5 — Final Review and Submission

- Perform final functionality checks.
- Verify responsive behavior.
- Run production build again.
- Review Git changes.
- Commit and push completed work.
- Verify the assessment branch.
- Prepare the required pull request.
- Capture screenshots if required.

## 6. Development Guidelines

### Keep the Implementation Simple

- Prioritize assessment requirements.
- Avoid unnecessary dependencies.
- Do not introduce a database unless required.
- Do not implement authentication, admin dashboards, or CRUD features outside the assessment scope.
- Prefer readable, maintainable code over unnecessary abstractions.

### Next.js Conventions

- Use the App Router.
- Follow file-based routing conventions.
- Use `Link` from `next/link` for internal navigation.
- Use Route Handlers for API endpoints.
- Use `notFound()` for missing page resources.
- Keep reusable data outside page components.
- Use Server Components by default.
- Only introduce Client Components when browser-side interactivity requires them.

### CSS and Responsive Design

- Use global CSS for shared foundations and design tokens.
- Keep component-specific styles organized.
- Prefer responsive layouts using flexible sizing, CSS Grid, Flexbox, and media queries.
- Avoid fixed-width layouts that break on smaller screens.
- Maintain accessible color contrast and visible focus states.

### Code Quality

- Use descriptive variable and function names.
- Keep components focused on their responsibilities.
- Remove unused imports and unnecessary code.
- Handle missing data appropriately.
- Avoid duplicating data or business logic.
- Preserve existing working functionality when making changes.

## 7. Collaboration and AI Coding Instructions
The developer is learning Next.js while completing this assessment.

When assisting with development:

1. Explain the purpose of a feature before implementing it.
2. Break tasks into small, manageable steps.
3. Prefer guided implementation over dumping complete solutions.
4. Explain unfamiliar Next.js, React, JavaScript, and CSS concepts.
5. Let the developer implement changes and review their work.
6. Test changes after implementation.
7. Explain errors and their causes instead of simply replacing code.
8. Keep the project aligned with the assessment requirements.
9. Update this document when the architecture, implementation status, or project decisions materially change.
The preferred development workflow is:

**Understand → Plan → Implement → Test → Review → Refactor**

The goal is not merely to produce working code, but to ensure the developer understands and can explain the implementation.

## 8. Current Project Status
The core blog functionality, dynamic routing, API endpoints, and production build are working.

The next priority is:

1. Review and clean up the current project structure.
2. Begin the modern editorial-style UI.
3. Implement responsive styling.
4. Complete final verification and submission.
Do not unnecessarily rebuild working features.
