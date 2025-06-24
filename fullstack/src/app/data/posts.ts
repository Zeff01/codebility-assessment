import { Post } from "../types/post";

export const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first app",
    content:
      "Next.js is a React framework that enables server-side rendering and generating static websites. It provides an excellent developer experience with features like automatic code splitting, optimized performance, and built-in CSS support. Whether you're building a simple blog or a complex web application, Next.js offers the tools and flexibility you need to create modern, fast websites.",
    date: "2025-04-15",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content:
      "There are multiple ways to style your Next.js application including CSS modules, Tailwind CSS, styled-components, and traditional CSS. Each approach has its own benefits: CSS modules provide scoped styling, Tailwind offers utility-first classes, and styled-components enable CSS-in-JS. Choose the method that best fits your project's needs and your team's preferences.",
    date: "2025-04-16",
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "Building APIs with Next.js",
    excerpt: "How to create and manage API routes in your Next.js app",
    content:
      "Next.js makes it easy to build full-stack applications by providing API routes. You can create serverless functions that handle HTTP requests, connect to databases, and process data. API routes are perfect for handling form submissions, authentication, and creating RESTful APIs. They live alongside your pages and are automatically optimized for performance.",
    date: "2025-04-17",
    author: "Mike Johnson",
  },
  {
    id: 4,
    title: "Deploying Next.js Applications",
    excerpt: "Best practices for deploying your Next.js app to production",
    content:
      "Deploying Next.js applications is straightforward with platforms like Vercel, Netlify, and AWS. Each platform offers different benefits: Vercel provides seamless integration with Next.js features, Netlify offers great CI/CD workflows, and AWS gives you full control over your infrastructure. Consider factors like performance, cost, and scalability when choosing your deployment strategy.",
    date: "2025-04-18",
    author: "Sarah Wilson",
  },
];
