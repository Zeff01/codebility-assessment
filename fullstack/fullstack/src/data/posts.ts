// src/data/posts.ts

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
      "Next.js is a React framework that enables server-side rendering and static site generation...",
    date: "2025-04-15",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content:
      "There are multiple ways to style your Next.js application including CSS modules and Tailwind CSS...",
    date: "2025-04-16",
  },
  {
    id: 3,
    title: "Routing in Next.js",
    excerpt: "Learn how routing works in Next.js including dynamic routes",
    content:
      "Next.js offers both file-based routing and dynamic routing. You can create pages in the app folder, use dynamic segments, and even nested layouts...",
    date: "2025-04-17",
  },
  {
    id: 4,
    title: "Fetching Data in Next.js",
    excerpt: "Different methods for fetching data in Next.js apps",
    content:
      "Next.js supports fetching data at build time, runtime, and client-side. You can use getStaticProps, getServerSideProps, or fetch inside a component using useEffect...",
    date: "2025-04-18",
  },
];
