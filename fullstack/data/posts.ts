import type { Post } from "@/types";

export const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and build your first application.",
    content:
      "Next.js is a React framework that simplifies building production-ready web applications. It provides file-based routing, server-side rendering, static site generation, API routes, image optimization, and many other features out of the box.",
    date: "2025-04-15",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Explore different ways to style your Next.js applications.",
    content:
      "Next.js supports several styling solutions including CSS Modules, Tailwind CSS, Sass, and CSS-in-JS libraries. Tailwind CSS has become one of the most popular options due to its utility-first approach.",
    date: "2025-04-16",
  },
  {
    id: 3,
    title: "Understanding Server Components",
    excerpt: "Improve performance with React Server Components.",
    content:
      "Server Components render on the server, reducing the amount of JavaScript sent to the browser. This results in faster page loads and better performance for users.",
    date: "2025-04-17",
  },
  {
    id: 4,
    title: "Building APIs with Next.js",
    excerpt: "Learn how to build backend endpoints using Route Handlers.",
    content:
      "Next.js App Router allows developers to create REST API endpoints using Route Handlers. This makes building full-stack applications much simpler since both frontend and backend can live in the same project.",
    date: "2025-04-18",
  },
];