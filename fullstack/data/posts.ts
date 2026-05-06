export type Post = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first app",
    content:
      "Next.js is a React framework that enables server-side rendering and generating static websites. It provides features like file-based routing, API routes, and built-in CSS support out of the box.",
    date: "2025-04-15",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content:
      "There are multiple ways to style your Next.js application including CSS Modules, Tailwind CSS, styled-components, and global CSS. Each has its own tradeoffs depending on project scale.",
    date: "2025-04-16",
  },
  {
    id: 3,
    title: "Understanding the App Router",
    excerpt: "How the Next.js App Router works and why it matters",
    content:
      "The App Router introduced in Next.js 13 uses React Server Components by default. This means data fetching happens on the server, reducing client-side JavaScript and improving performance.",
    date: "2025-04-17",
  },
];