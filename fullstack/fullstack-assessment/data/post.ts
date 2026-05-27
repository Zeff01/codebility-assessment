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
    content: "Next.js is a React framework that enables server-side rendering and generating static websites. It makes building React applications easy with features like file-based routing, API routes, and built-in CSS support. Getting started is simple - just run create-next-app and you're ready to build!",
    date: "2025-04-15",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content: "There are multiple ways to style your Next.js application including CSS modules, Tailwind CSS, and global CSS. Each approach has its benefits. CSS Modules provide scoped styling, Tailwind offers utility-first classes, and global CSS is great for app-wide styles. Choose the one that fits your project best!",
    date: "2025-04-16",
  },
  {
    id: 3,
    title: "Understanding Next.js API Routes",
    excerpt: "Build backend endpoints directly in your Next.js application",
    content: "API routes in Next.js allow you to create backend endpoints without running a separate server. They're perfect for handling form submissions, interacting with databases, and creating RESTful APIs. API routes are created in the app/api directory and can handle different HTTP methods like GET, POST, PUT, and DELETE.",
    date: "2025-04-17",
  },
  {
    id: 4,
    title: "Deploying Next.js Applications",
    excerpt: "Learn how to deploy your Next.js app to production",
    content: "Deploying Next.js applications is straightforward with platforms like Vercel, Netlify, or AWS. Vercel, created by the makers of Next.js, offers the best integration with features like automatic static optimization, serverless functions, and preview deployments. You can deploy for free and scale as your app grows.",
    date: "2025-04-18",
  },
];