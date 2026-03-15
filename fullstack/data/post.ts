import { Post } from "@/types/Posts";

export const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first app",
    content:
      "Next.js is a React framework that enables server-side rendering and generating static websites. It provides features like file-based routing, API routes, and built-in optimization tools that make building production-ready React apps much easier.",
    date: "2025-04-15",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content:
      "There are multiple ways to style your Next.js application including CSS modules, Tailwind CSS, and component libraries like shadcn/ui. Each approach has its own trade-offs depending on your project's needs and team preferences.",
    date: "2025-04-16",
  },
  {
    id: 3,
    title: "Understanding App Router",
    excerpt:
      "A deep dive into Next.js 13+ App Router and how it differs from Pages Router",
    content:
      "The App Router introduced in Next.js 13 brings a new way of building applications using React Server Components. Unlike the Pages Router, it allows you to fetch data directly in your components without needing getServerSideProps or getStaticProps.",
    date: "2025-04-17",
  },
  {
    id: 4,
    title: "Building API Routes in Next.js",
    excerpt: "How to create backend endpoints inside your Next.js project",
    content:
      "Next.js allows you to build API endpoints alongside your frontend code. Using route handlers in the App Router, you can create GET, POST, PUT, and DELETE endpoints that live inside the app/api directory, making full-stack development seamless.",
    date: "2025-04-18",
  },
];
