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
    content: `Next.js is a React framework that enables server-side rendering and generating static websites for React based web applications.`,
    date: "2025-04-15",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content: `There are multiple ways to style your Next.js application including CSS modules, Tailwind CSS, styled-components, and more.`,
    date: "2025-04-16",
  },
  {
    id: 3,
    title: "Server Components vs Client Components",
    excerpt: "Understanding the difference between Server and Client Components in Next.js 13+",
    content: `With the introduction of the App Router in Next.js 13, we now have Server Components and Client Components, each with their own use cases.`,
    date: "2025-04-17",
  },
];