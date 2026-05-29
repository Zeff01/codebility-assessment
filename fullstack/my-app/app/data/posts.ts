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
    content: "Next.js is a React framework that enables server-side rendering and generating static websites...",
    date: "2025-04-15",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content: "There are multiple ways to style your Next.js application including CSS modules, Tailwind CSS...",
    date: "2025-04-16",
  },
  {
    id: 3,
    title: "Mastering the App Router",
    excerpt: "Deep dive into layout, loading, and error handling in Next.js",
    content: "The App Router introduces a file-system based router built on top of React Server Components, making layouts and nested routing incredibly seamless...",
    date: "2025-04-18",
  },
  {
    id: 4,
    title: "Data Fetching Strategies",
    excerpt: "Understand Server Components, SSR, and SSG in modern React",
    content: "Fetching data in Next.js is as simple as making an async fetch call directly inside your React Server Component, reducing client-side bundle sizes...",
    date: "2025-04-20",
  },
  {
    id: 5,
    title: "Optimizing Images and Fonts",
    excerpt: "How to achieve a perfect Core Web Vitals score",
    content: "Using the next/image and next/font components ensures layout shift is minimized and assets are automatically optimized for every device...",
    date: "2025-04-22",
  },
  {
    id: 6,
    title: "Understanding Server Actions",
    excerpt: "Handle form submissions and data mutations without API routes",
    content: "Server Actions allow you to define asynchronous server functions that can be called directly from your client-side or server-side components...",
    date: "2025-04-25",
  },
  {
    id: 7,
    title: "Middleware in Next.js",
    excerpt: "How to run code before a request is completed",
    content: "Middleware enables you to intercept requests and responses. It is perfect for authentication, redirecting users, or geo-targeting content...",
    date: "2025-04-28",
  },
  {
    id: 8,
    title: "Deploying to Vercel",
    excerpt: "Going from localhost to production in just a few clicks",
    content: "Vercel is the creator of Next.js and provides the absolute optimal hosting environment, including global edge networks and automatic CI/CD integrations...",
    date: "2025-05-01",
  },
  {
    id: 9,
    title: "Implementing Authentication",
    excerpt: "Securing your Next.js application with Auth.js (NextAuth)",
    content: "Authentication doesn't have to be a nightmare. Learn how to set up social logins, credentials provider, and protect routes using modern patterns...",
    date: "2025-05-04",
  },
  {
    id: 10,
    title: "State Management Dilemmas",
    excerpt: "Zustand, Redux, or Context API in React Server Components?",
    content: "With the shift towards server-first architectures, traditional client-side global state management needs a rethink. Here is how to navigate it...",
    date: "2025-05-07",
  },
  {
    id: 11,
    title: "SEO Best Practices",
    excerpt: "Utilizing the Metadata API for better search engine rankings",
    content: "Next.js has a built-in Metadata API that allows you to easily configure your page titles, descriptions, and Open Graph tags for optimal social sharing...",
    date: "2025-05-10",
  },
  {
    id: 12,
    title: "Internationalization (i18n)",
    excerpt: "Setting up multi-language support in the App Router",
    content: "Routing and localized content can be tricky, but by leveraging sub-path routing and middleware, you can scale your app to a global audience...",
    date: "2025-05-13",
  }
];