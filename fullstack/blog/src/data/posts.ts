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
    title: "Optimizing Performance in Next.js",
    excerpt: "Tips and techniques for faster Next.js apps",
    content:
      "Performance optimization in Next.js can be achieved through image optimization, dynamic imports, and caching strategies...",
    date: "2025-04-20",
  },
  {
    id: 4,
    title: "Deploying a Next.js App",
    excerpt: "Step-by-step guide to deploy your Next.js app",
    content:
      "Deploying a Next.js application is simple with platforms like Vercel and Netlify. You can also use Docker and custom servers...",
    date: "2025-04-22",
  },
];
