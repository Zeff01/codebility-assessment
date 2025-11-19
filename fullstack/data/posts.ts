// data/posts.ts
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
      "Next.js is a React framework that enables server-side rendering and generating static websites. It helps in SEO and performance optimization...",
    date: "2025-04-15",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content:
      "There are multiple ways to style your Next.js application including CSS modules, Tailwind CSS, and styled-components. Tailwind is popular for utility-first styling...",
    date: "2025-04-16",
  },
  {
    id: 3,
    title: "API Routes in Next.js",
    excerpt: "Learn how to create backend API routes",
    content:
      "Next.js allows you to create API endpoints easily in the `app/api` or `pages/api` directory. This can be used to fetch data or process requests...",
    date: "2025-04-17",
  },
  {
    id: 4,
    title: "Optimizing Next.js Performance",
    excerpt: "Tips and techniques to speed up your Next.js apps",
    content:
      "Performance in Next.js can be improved with features like static generation, image optimization, lazy loading components, and server-side caching...",
    date: "2025-04-18",
  },
  {
    id: 5,
    title: "Authentication in Next.js",
    excerpt: "How to implement authentication and authorization",
    content:
      "Next.js supports authentication using libraries like NextAuth.js or custom JWT solutions. You can protect pages, API routes, and manage sessions easily...",
    date: "2025-04-19",
  },
];
