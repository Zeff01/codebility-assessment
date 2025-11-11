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
    title: "Routing in Next.js",
    excerpt: "Learn about dynamic and static routes in Next.js",
    content:
      "Next.js provides a flexible routing system using the pages or app directory, allowing dynamic routes, nested routes, and more...",
    date: "2025-04-17",
  },
  {
    id: 4,
    title: "Fetching Data in Next.js",
    excerpt: "How to fetch data using Server Components and API routes",
    content:
      "You can fetch data in Next.js using fetch inside Server Components, client-side fetch, or API routes to handle server-side logic...",
    date: "2025-04-18",
  },
  {
    id: 5,
    title: "Deploying Next.js Apps",
    excerpt: "Steps to deploy your Next.js application to Vercel or other platforms",
    content:
      "Next.js apps can be deployed easily on Vercel with automatic optimizations, or you can deploy to other cloud providers with static or serverless options...",
    date: "2025-04-19",
  },
];

