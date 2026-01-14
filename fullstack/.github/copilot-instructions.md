# Codebility Blog Assessment - Next.js 14

This workspace contains a simple blog application built for the Codebility Fullstack Assessment (1-2 Years Experience).

## Project Overview

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Pattern:** Server Components for data fetching

## Key Features

- Dummy blog data in `data/posts.ts`
- API routes for posts (`/api/posts` and `/api/posts/[id]`)
- Home page with post list (card layout)
- Dynamic post detail pages
- Fully responsive, mobile-first design
- Type-safe with TypeScript

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Notes

- Uses Next.js Server Components for improved performance
- API routes follow RESTful conventions
- Tailwind CSS with custom utility classes
- Clean separation of concerns (data, API, UI)
