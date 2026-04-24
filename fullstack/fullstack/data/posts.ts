import type { Post } from "../app/types/post";

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
    excerpt: "Data fetching methods in Next.js",
    title: "Data Fetching in Next.js",
    content:
      "Next.js provides several data fetching methods such as getStaticProps, getServerSideProps...",
    date: "2025-04-17",
  },
  {
    id: 4,
    title: "API Routes in Next.js",
    excerpt: "How to create API routes in Next.js",
    content:
      "Next.js allows you to create API routes inside the pages/api directory. These routes can be used to handle form submissions, interact with databases...",
    date: "2025-04-18",
  }
];


export async function getPage(userId: string): Promise<Post | undefined> {
    return posts.find((post) => post.id === Number(userId))
}

