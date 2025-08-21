import { Post } from "@/types/posts";

export const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first app",
    content:
      "Next.js is a React framework that enables server-side rendering and generating static websites...",
    date: new Date("2025-04-15").toISOString(),
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content:
      "There are multiple ways to style your Next.js application including CSS modules, Tailwind CSS...",
    date: new Date("2025-04-16").toISOString(),
  },
  {
    id: 3,
    title: "Next.js API Routes",
    excerpt: "Learn how to create API endpoints in Next.js",
    content:
      "Next.js allows you to create API routes inside the `pages/api` directory, which can be used to handle server-side logic and database interactions...",
    date: "2025-04-17",
  },
  {
    id: 4,
    title: "Optimizing Next.js Performance",
    excerpt: "Tips to make your Next.js app faster and more efficient",
    content:
      "Performance in Next.js can be improved using techniques such as code splitting, dynamic imports, image optimization, caching strategies, and leveraging server-side rendering...",
    date: "2025-04-18",
  },
];
