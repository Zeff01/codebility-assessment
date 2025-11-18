export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

export const posts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first app",
    content: "Next.js is a React framework that enables server-side rendering and generating static websites. It offers a great developer experience with many built-in features like TypeScript support, ESLint, and more. In this post, we'll explore how to set up your first Next.js application and understand its core concepts. We'll cover everything from installation to deployment, including the App Router, API routes, and static site generation.",
    date: "2025-11-18",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content: "There are multiple ways to style your Next.js application including CSS modules, Tailwind CSS, styled-components, and more. Each approach has its own benefits and use cases. CSS modules provide scoped styling by default, while Tailwind offers utility-first CSS for rapid development. In this comprehensive guide, we'll compare each method and help you choose the right one for your project.",
    date: "2025-11-18",
  },
  {
    id: 3,
    title: "API Routes in Next.js",
    excerpt: "Learn how to create backend APIs within your Next.js application",
    content: "Next.js API routes allow you to build your API as part of your Next.js application. These are server-side functions that can handle requests and return responses. They're perfect for handling form submissions, fetching data from databases, or creating RESTful APIs. We'll dive deep into how to create, test, and deploy API routes, including best practices for error handling and authentication.",
    date: "2025-11-18",
  },
  {
    id: 4,
    title: "Deployment Strategies",
    excerpt: "How to deploy your Next.js application to production",
    content: "Next.js applications can be deployed in various ways including Vercel (the creators of Next.js), Netlify, AWS, and more. The framework supports multiple deployment modes: static site generation, serverless functions, or traditional Node.js servers. This post will walk you through each deployment option, their pros and cons, and provide step-by-step guides for the most popular platforms.",
    date: "2025-11-18",
  }
];