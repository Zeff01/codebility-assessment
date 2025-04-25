// src/data/posts.ts
import { Post } from '@/types/post';

export const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first app",
    content:
      "Next.js is a React framework that enables server-side rendering and generating static websites. It provides a great developer experience with features like automatic routing, built-in CSS support, and API routes.\n\nTo create your first Next.js app, you can use the create-next-app command which sets up everything automatically for you. Next.js also provides optimized image loading with the Image component, making it easy to display responsive and optimized images.\n\nOne of the biggest advantages of Next.js is its flexible rendering options, allowing you to choose between server-side rendering, static site generation, or client-side rendering on a per-page basis.",
    date: "2025-04-15",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content:
      "There are multiple ways to style your Next.js application including CSS modules, Tailwind CSS, styled-components, and more.\n\nCSS Modules are a popular choice as they allow you to write traditional CSS that is scoped locally to components by default. This helps avoid class name collisions and makes your styles more maintainable.\n\nTailwind CSS has gained significant popularity due to its utility-first approach that lets you build designs directly in your markup. Next.js has built-in support for Tailwind, making it easy to integrate.\n\nFor those who prefer a CSS-in-JS approach, libraries like styled-components or Emotion work well with Next.js. They allow you to write actual CSS inside your JavaScript files, enabling dynamic styling based on props.",
    date: "2025-04-16",
  },
  {
    id: 3,
    title: "API Routes in Next.js",
    excerpt: "Learn how to create backend functionality directly in your Next.js app",
    content:
      "Next.js API Routes provide a straightforward solution for building API functionality directly within your Next.js app. Instead of setting up a separate backend server, you can write server-side code right inside your Next.js project.\n\nTo create an API route, you simply add files inside the `pages/api` directory (or `app/api` when using the App Router) and export a handler function. These API endpoints are deployed as serverless functions, making them highly scalable.\n\nAPI Routes can be used for various purposes like handling form submissions, authenticating users, connecting to databases, integrating with third-party services, or creating a full-fledged API for your frontend to consume.\n\nYou can also use dynamic API routes by adding brackets to a file name, similar to how you create dynamic pages in Next.js.",
    date: "2025-04-17",
  },
  {
    id: 4,
    title: "Understanding the Next.js App Router",
    excerpt: "An in-depth look at the new App Router in Next.js 13 and beyond",
    content:
      "The App Router is a newer routing system introduced in Next.js 13 that uses a file-system based router built on React Server Components. It offers improved performance and developer experience compared to the Pages Router.\n\nWith the App Router, you organize your application using nested folders that define routes. Special files like `page.js`, `layout.js`, and `loading.js` determine what gets rendered for each route segment.\n\nOne major advantage of the App Router is built-in support for React Server Components, allowing portions of your UI to be rendered on the server, reducing JavaScript sent to the client and improving performance.\n\nThe App Router also introduces new concepts like parallel routes, intercepting routes, and route handlers that give developers more flexibility in building complex applications. Route handlers are particularly useful for API endpoints, replacing the API Routes functionality from the Pages Router.",
    date: "2025-04-18",
  }
];