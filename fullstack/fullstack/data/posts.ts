interface PostData {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

export const posts: PostData[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first app",
    content:
      "Next.js is a React framework that enables server-side rendering and static site generation for modern web apps.",
    date: "2025-04-01",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content:
      "You can style Next.js apps using CSS Modules, global CSS, Tailwind CSS, or styled-components.",
    date: "2025-04-02",
  },
  {
    id: 3,
    title: "Understanding Server Components",
    excerpt: "Learn how Server Components work in Next.js",
    content:
      "Server Components allow you to move data fetching and heavy logic to the server, improving performance.",
    date: "2025-04-03",
  },
  {
    id: 4,
    title: "Client Components Explained",
    excerpt: "When and why to use Client Components",
    content:
      "Client Components are required when using state, effects, or browser-only APIs in Next.js.",
    date: "2025-04-04",
  },
  {
    id: 5,
    title: "Routing in the App Router",
    excerpt: "A guide to file-based routing in Next.js App Router",
    content:
      "The App Router introduces nested layouts, loading states, and improved routing patterns.",
    date: "2025-04-05",
  },
  {
    id: 6,
    title: "Layouts and Templates",
    excerpt: "Reuse UI with layouts and templates",
    content:
      "Layouts persist across routes while templates re-render on navigation, giving you flexibility.",
    date: "2025-04-06",
  },
  {
    id: 7,
    title: "SEO with Next.js",
    excerpt: "Improve search visibility with metadata",
    content:
      "Next.js provides a metadata API to manage titles, descriptions, and Open Graph tags.",
    date: "2025-04-07",
  },
  {
    id: 8,
    title: "Fetching Data in Next.js",
    excerpt: "Learn different data fetching strategies",
    content:
      "You can fetch data using Server Components, Route Handlers, or external APIs.",
    date: "2025-04-08",
  },
  {
    id: 9,
    title: "Static vs Dynamic Rendering",
    excerpt: "Understand rendering strategies",
    content:
      "Next.js supports static, dynamic, and streaming rendering to balance speed and freshness.",
    date: "2025-04-09",
  },
  {
    id: 10,
    title: "Environment Variables",
    excerpt: "Manage environment variables safely",
    content:
      "Use `.env.local` files and prefix variables with NEXT_PUBLIC_ when needed on the client.",
    date: "2025-04-10",
  },
  {
    id: 11,
    title: "Authentication Basics",
    excerpt: "Add authentication to your app",
    content:
      "Authentication can be implemented using libraries like NextAuth or custom JWT solutions.",
    date: "2025-04-11",
  },
  {
    id: 12,
    title: "Protecting Routes",
    excerpt: "Secure pages and APIs",
    content:
      "Middleware helps protect routes by checking authentication and authorization.",
    date: "2025-04-12",
  },
  {
    id: 13,
    title: "Using Middleware",
    excerpt: "Run code before requests complete",
    content:
      "Middleware runs at the edge and is useful for redirects, auth checks, and logging.",
    date: "2025-04-13",
  },
  {
    id: 14,
    title: "Image Optimization",
    excerpt: "Optimize images using next/image",
    content:
      "The Image component automatically optimizes images for performance and responsiveness.",
    date: "2025-04-14",
  },
  {
    id: 15,
    title: "Fonts in Next.js",
    excerpt: "Optimize fonts with next/font",
    content:
      "The next/font module helps load fonts efficiently without layout shift.",
    date: "2025-04-15",
  },
  {
    id: 16,
    title: "Error Handling",
    excerpt: "Handle errors gracefully",
    content:
      "Use error.tsx and not-found.tsx to handle runtime errors and missing pages.",
    date: "2025-04-16",
  },
  {
    id: 17,
    title: "Loading UI Patterns",
    excerpt: "Improve UX with loading states",
    content:
      "Loading UI can be implemented using loading.tsx or React Suspense.",
    date: "2025-04-17",
  },
  {
    id: 18,
    title: "Deploying Next.js Apps",
    excerpt: "Deploy your app with confidence",
    content:
      "Vercel is the recommended platform for deploying Next.js applications.",
    date: "2025-04-18",
  },
  {
    id: 19,
    title: "Performance Optimization",
    excerpt: "Make your app faster",
    content:
      "Optimize performance by reducing bundle size, using dynamic imports, and caching data.",
    date: "2025-04-19",
  },
  {
    id: 20,
    title: "Best Practices for Next.js",
    excerpt: "Write clean and scalable code",
    content:
      "Follow best practices such as component reuse, proper data fetching, and semantic HTML.",
    date: "2025-04-20",
  },
];
