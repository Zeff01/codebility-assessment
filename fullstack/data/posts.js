export const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first app",
    content:
      "Next.js is a React framework that enables server-side rendering and generating static websites for React-based web applications. It provides an out-of-the-box solution for features like server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR), allowing developers to build high-performance, SEO-friendly applications with ease.",
    date: "2025-04-15",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content:
      "There are multiple ways to style your Next.js application including CSS modules, Tailwind CSS, and CSS-in-JS libraries like styled-components or Emotion. Next.js has built-in support for CSS Modules using the .module.css extension, and it provides a first-class configuration experience for Tailwind CSS, enabling a utility-first workflow that scales with your project.",
    date: "2025-04-16",
  },
  {
    id: 3,
    title: "Deploying Next.js Apps",
    excerpt: "How to deploy your Next.js application to production",
    content:
      "Next.js can be deployed on various platforms such as Vercel, Netlify, and AWS. In this post, we will explore the deployment process of a Next.js application, focusing on Vercel—the creators of Next.js—which offers a seamless 'Git-to-Deployment' workflow. We will also cover how to use next build to create an optimized production build that can be hosted on any provider that supports Node.js or static hosting.",
    date: "2025-04-17",
  },
  {
    id: 4,
    title: "Next.js API Routes",
    excerpt: "Create API endpoints directly in your Next.js app",
    content:
      "Next.js allows you to create API routes that can be used to handle form submissions, fetch data, and more. In this post, we will learn how to set up API routes in Next.js by creating files inside the pages/api (or app/api) directory. Any file inside these folders is mapped to /api/* and treated as an API endpoint instead of a page, allowing you to build your entire backend API directly within your Next.js project.",
    date: "2025-04-21",
  }
];
