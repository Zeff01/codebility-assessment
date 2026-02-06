// data/posts.js
export const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first app",
    content:
      "Next.js is a powerful React framework that enables server-side rendering, static site generation, and building fully dynamic applications. In this article, you will learn how to set up a new Next.js project, understand the file-based routing system, and create your first page. We also cover essential concepts like components, props, and how Next.js enhances performance and SEO out of the box.",
    date: "2025-04-15",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content:
      "Styling in Next.js can be done in several ways. You can use CSS Modules to scope your styles locally, Tailwind CSS for utility-first rapid styling, or traditional global CSS. Additionally, you can integrate popular libraries like Styled Components or Emotion. This guide explains each method with examples and best practices to keep your styles maintainable and scalable.",
    date: "2025-04-16",
  },
  {
    id: 3,
    title: "Routing in Next.js",
    excerpt: "How to create dynamic routes in Next.js",
    content:
      "Next.js uses a file-based routing system where each file inside the 'pages' or 'app' directory becomes a route. Dynamic routes allow you to handle URLs with variable parameters using square brackets, for example, '[id].tsx'. In this tutorial, we cover both static and dynamic routing, nested routes, and route prefetching to create seamless navigation within your app.",
    date: "2025-3-11",
  },
  {
    id: 4,
    title: "API Routes in Next.js",
    excerpt: "Learn to build API endpoints in Next.js",
    content:
      "API Routes in Next.js allow you to build serverless functions directly within your application. You can create endpoints in the 'pages/api' or 'app/api' folder that respond to HTTP requests. This article walks you through creating GET, POST, and dynamic API routes, handling JSON responses, and connecting your endpoints to front-end components for full-stack functionality.",
    date: "2025-1-31",
  },
  {
    id: 5,
    title: "Using Tailwind CSS with Next.js",
    excerpt: "Integrate Tailwind CSS for rapid styling",
    content:
      "Tailwind CSS is a utility-first CSS framework that can speed up your styling workflow in Next.js projects. This tutorial shows how to install Tailwind, configure it with your Next.js app, and use utility classes to create responsive, modern layouts without writing custom CSS. You'll also learn about customizing themes and using plugins for advanced styling.",
    date: "2025-8-23",
  },
  {
    id: 6,
    title: "Managing State with React Hooks",
    excerpt: "How to use useState and useEffect in Next.js apps",
    content:
      "React Hooks such as useState and useEffect are essential for managing component state and side effects in Next.js applications. This guide covers how to initialize state, update values, handle asynchronous effects, and clean up side effects. You'll also learn patterns for lifting state up and sharing it between components efficiently.",
    date: "2025-04-15",
  },
  {
    id: 7,
    title: "Fetching Data in Next.js",
    excerpt: "Different ways to fetch data for your Next.js app",
    content:
      "Next.js provides multiple ways to fetch data, including getStaticProps, getServerSideProps, and client-side fetching using fetch or libraries like SWR. This tutorial explains each method, when to use static generation versus server-side rendering, and how to handle asynchronous requests, loading states, and errors for a robust data-fetching strategy.",
    date: "2025-7-11",
  },
  {
    id: 8,
    title: "Deploying Next.js Apps",
    excerpt: "Learn how to deploy Next.js applications",
    content:
      "Deploying a Next.js application is straightforward. Popular platforms include Vercel, Netlify, and AWS. This article covers steps to deploy your app, environment variable management, building static sites, and optimizing for production. We also discuss common deployment issues and how to monitor your app once live.",
    date: "2025-11-7",
  },
  {
    id: 9,
    title: "Optimizing Performance in Next.js",
    excerpt: "Tips for faster and more efficient Next.js apps",
    content:
      "Performance optimization is crucial for user experience and SEO. This guide covers image optimization, code splitting, lazy loading, caching strategies, and static site generation. You'll learn how Next.js built-in features like Image, Script, and dynamic imports can help improve load times and runtime performance of your application.",
    date: "2025-10-13",
  },
  {
    id: 10,
    title: "Authentication in Next.js",
    excerpt: "Adding user authentication in your Next.js application",
    content:
      "Authentication in Next.js can be implemented using NextAuth.js or custom JWT solutions. This tutorial demonstrates how to protect routes, manage sessions, handle login and registration forms, and secure API routes. You will also learn best practices for storing credentials and integrating third-party authentication providers like Google or GitHub.",
    date: "2025-2-14",
  },
  {
    id: 11,
    title: "Deploying Static Sites",
    excerpt: "How to export Next.js apps as static sites",
    content:
      "Next.js allows you to export your application as a fully static site using `next export`. This guide explains how to generate static HTML pages, configure your routes, and host your app on platforms like GitHub Pages or Netlify. You will also learn how to handle dynamic data and fallback pages in a static export scenario.",
    date: "2025-1-25",
  },
  {
    id: 12,
    title: "Server-side Rendering vs Static Generation",
    excerpt: "Understanding Next.js rendering methods",
    content:
      "Next.js supports both server-side rendering (SSR) and static site generation (SSG). This article explains the differences, advantages, and use cases for each method. You'll learn how SSR can provide dynamic data on each request, while SSG improves performance by pre-rendering pages at build time, and how to choose the right method for your pages.",
    date: "2025-12-13",
  },
  {
    id: 13,
    title: "Using Environment Variables",
    excerpt: "How to manage env variables in Next.js",
    content:
      "Environment variables are used to store sensitive information like API keys and configuration values. This guide covers how to define, access, and secure environment variables in Next.js for both development and production. You will also learn the difference between server-only and public variables and how to use them safely in your code.",
    date: "2025-6-18",
  },
  {
    id: 14,
    title: "Image Optimization with Next.js",
    excerpt: "Optimize images for faster loading",
    content:
      "Next.js has a built-in Image component that automatically optimizes images for size and format, improving page load times. This article explains how to use the Image component, set width and height, lazy-load images, and integrate third-party image services. You'll also learn best practices for responsive images and caching for performance.",
    date: "2025-07-28",
  },
];
