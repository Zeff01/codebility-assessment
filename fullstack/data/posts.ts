// data/posts.js

// it needs to determine on what fields ung bawat posts and reducing data types error
// export needs to imports sets of data in another files
export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

export const posts = [
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
    title: "Understanding API Routes",
    excerpt: "How to create and use API routes in Next.js",
    content:
      "Next.js allows you to create API endpoints inside your app using the app/api folder. These routes run server-side and can handle GET, POST, and other HTTP methods.",
    date: "2025-04-28",
  },
  {
    id: 4,
    title: "Creating a planning to create a blog posts Next.js",
    excerpt: "Different ways to style your Next.js application",
    content:
      "There are multiple ways to style your Next.js application including CSS modules, Tailwind CSS...",
    date: "2025-04-28",
  },
  {
    id: 5,
    title: "Implementing blog posts in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content:
      "There are multiple ways to style your Next.js application including CSS modules, Tailwind CSS...",
    date: "2025-04-28",
  },
  
];