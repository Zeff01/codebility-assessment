export interface Posts {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

// data/posts.js
export const posts: Posts[] = [
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
    title: "Understanding Next.js Routing",
    excerpt: "Learn how file-based routing works in Next.js",
    content:
      "Next.js uses a file-based routing system which makes it easy to create pages and navigate between them...",
    date: "2025-04-17",
  },
  {
    id: 4,
    title: "API Routes in Next.js",
    excerpt: "Build backend APIs inside your Next.js app",
    content:
      "API routes allow you to create backend endpoints directly inside a Next.js project using the pages/api directory...",
    date: "2025-04-18",
  },
  {
    id: 5,
    title: "Optimizing Performance in Next.js",
    excerpt: "Improve the speed and performance of your Next.js app",
    content:
      "Next.js provides several built-in optimizations such as image optimization, code splitting, and caching strategies...",
    date: "2025-04-19",
  },
  {
    id: 6,
    title: "Deploying a Next.js App",
    excerpt: "Learn how to deploy your Next.js project to production",
    content:
      "You can deploy Next.js apps easily using platforms like Vercel, Netlify, or your own custom server setup...",
    date: "2025-04-20",
  },
  {
    id: 7,
    title: "Dynamic Routes in Next.js",
    excerpt: "Handle dynamic pages with ease",
    content:
      "Dynamic routes in Next.js allow you to create pages that depend on parameters such as blog post IDs or usernames...",
    date: "2025-04-21",
  },
];
