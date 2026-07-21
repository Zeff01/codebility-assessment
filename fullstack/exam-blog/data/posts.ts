import { Post } from "@/types/post";

export const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first app",
    content:
      "Next.js is a React framework that enables server-side rendering and generating static websites...",
    date: "2025-04-15",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content:
      "There are multiple ways to style your Next.js application including CSS modules, Tailwind CSS...",
    date: "2025-04-16",
  },
  {
    id: 3,
    title: "Mastering TypeScript",
    excerpt: "Enhance your developer workflow with type safety",
    content:
      "TypeScript adds static type definitions to JavaScript, allowing developers to catch errors early in development...",
    date: "2025-04-17",
  },
];