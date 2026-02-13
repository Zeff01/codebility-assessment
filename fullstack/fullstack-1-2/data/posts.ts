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
    excerpt:
      "Learn the basics of Next.js and how to create your first app with the App Router.",
    content:
      "Next.js is a React framework that enables server-side rendering and generating static websites. It provides an intuitive file-based routing system, automatic code splitting, and built-in API routes. With the App Router introduced in Next.js 13, you get React Server Components by default, nested layouts, and streaming — making it one of the most powerful full-stack frameworks available today. To get started, simply run npx create-next-app@latest and follow the prompts.",
    date: "2025-04-15",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt:
      "Explore different ways to style your Next.js application, from CSS Modules to Tailwind.",
    content:
      "There are multiple ways to style your Next.js application including CSS Modules, Tailwind CSS, CSS-in-JS libraries like styled-components, and global CSS files. Tailwind CSS is the most popular choice in the Next.js ecosystem because it integrates seamlessly — just install it during project setup and start using utility classes directly in your JSX. For component libraries, shadcn/ui provides beautifully designed, accessible components that you can copy into your project and customize to your needs.",
    date: "2025-04-16",
  },
  {
    id: 3,
    title: "Understanding Server Components",
    excerpt:
      "Dive into React Server Components and how they change the way we build web apps.",
    content:
      "React Server Components (RSC) are a new paradigm where components render on the server by default. This means you can directly access databases, read files, and fetch data without exposing secrets to the client. In Next.js App Router, every component is a Server Component unless you add the 'use client' directive at the top of the file. This results in smaller JavaScript bundles sent to the browser and faster page loads. Client Components are still used when you need interactivity — things like event handlers, useState, and useEffect.",
    date: "2025-04-17",
  },
  {
    id: 4,
    title: "API Routes in Next.js",
    excerpt:
      "Learn how to build backend API endpoints right inside your Next.js project.",
    content:
      "Next.js allows you to create API endpoints as part of your application using Route Handlers. In the App Router, you create a route.ts file inside app/api/ and export functions named after HTTP methods — GET, POST, PUT, DELETE. This is similar to how Laravel defines controller methods, but the file path itself determines the URL. For example, app/api/posts/route.ts handles requests to /api/posts. You can access query parameters, parse request bodies, and return JSON responses using NextResponse. This makes Next.js a true full-stack framework.",
    date: "2025-04-18",
  },
];
