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
    title: "Routing with the App Router",
    excerpt: "An introduction to the Next.js App Router and nested routes",
    content:
      "The Next.js App Router brings colocation of data fetching, layouts, and server components together for a better developer experience...",
    date: "2025-04-17",
  },
  {
    id: 4,
    title: "Deploying Next.js",
    excerpt: "Simple steps to deploy your Next.js application",
    content:
      "There are several ways to deploy Next.js apps including Vercel, Netlify, and Docker-based workflows...",
    date: "2025-04-18",
  },
];
