export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first app",
    content:
      "Next.js is a React framework that enables server-side rendering and generating static websites. It provides a great developer experience with features like automatic code splitting, optimized production builds, and built-in CSS support. Getting started is simple - just run `npx create-next-app@latest` and you'll have a new Next.js project ready to go. The framework supports both App Router and Pages Router, giving you flexibility in how you structure your application. With Next.js, you can build everything from simple static sites to complex full-stack applications with API routes, authentication, and database integration.",
    date: "2025-04-15",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content:
      "There are multiple ways to style your Next.js application including CSS modules, Tailwind CSS, styled-components, and global CSS. CSS Modules provide scoped styling by automatically generating unique class names, preventing style conflicts. Tailwind CSS offers a utility-first approach with pre-built classes for rapid development. Styled-components allow you to write CSS-in-JS with component-scoped styles. Global CSS files are perfect for site-wide styles and CSS variables. Next.js supports all these approaches out of the box, so you can choose the one that best fits your project needs. Many developers prefer Tailwind CSS for its rapid development capabilities and consistent design system.",
    date: "2025-04-16",
  },
  {
    id: 3,
    title: "Understanding Next.js App Router",
    excerpt: "A deep dive into the modern App Router architecture",
    content:
      "The App Router is Next.js's newest routing system, built on React Server Components. It introduces a new file-system based routing convention using folders and special files like `layout.tsx`, `page.tsx`, `loading.tsx`, and `error.tsx`. Server Components are the default, which means components render on the server by default, reducing the JavaScript bundle sent to the client. You can use the 'use client' directive to mark components that need client-side interactivity. The App Router also supports advanced features like parallel routes, intercepting routes, and route groups. This architecture enables better performance, improved SEO, and a more intuitive developer experience compared to the Pages Router.",
    date: "2025-04-17",
  },
  {
    id: 4,
    title: "API Routes in Next.js",
    excerpt: "How to create and use API endpoints in Next.js",
    content:
      "Next.js allows you to create API endpoints as serverless functions within your application. In the App Router, you create API routes by adding a `route.ts` file in an `api` folder. These routes can handle GET, POST, PUT, DELETE, and other HTTP methods. API routes are perfect for handling form submissions, database operations, authentication, and integrating with third-party services. They run server-side only, so you can safely use environment variables and perform secure operations. API routes can return JSON, redirects, or any other HTTP response. They're automatically deployed as serverless functions, making them scalable and cost-effective. This eliminates the need for a separate backend server in many cases.",
    date: "2025-04-18",
  },
];

