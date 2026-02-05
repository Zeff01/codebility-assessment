import { Post } from "@/types/post";

export const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first app",
    content: `Next.js is a React framework that enables server-side rendering and generating static websites. It is built on top of React and provides a number of powerful features that make building web applications easier and more efficient. One of the main advantages of Next.js is its hybrid rendering model, allowing you to choose between static generation (SSG) and server-side rendering (SSR) for each page. This makes your application faster and more SEO-friendly.`,
    date: "2026-04-15",
    image: "/posts/image_1.jpg",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content: `Styling in Next.js can be done in several ways depending on your project needs. You can use traditional CSS files, CSS modules, Tailwind CSS, or even styled-components for a component-level styling approach. CSS modules are a great way to scope your styles to individual components, preventing conflicts and making your code easier to maintain. Tailwind CSS, on the other hand, provides a utility-first approach, allowing rapid design without writing custom CSS.`,
    date: "2026-04-16",
    image: "/posts/image_2.jpg",
  },
  {
    id: 3,
    title: "Server Components vs Client Components",
    excerpt: "Understanding the new rendering model in Next.js App Router",
    content: `Next.js 13 introduced the App Router, which allows developers to take advantage of both Server Components and Client Components. Server Components run on the server and are never shipped to the client, reducing the JavaScript bundle size and improving performance.`,
    date: "2026-04-17",
    image: "/posts/image_3.jpg",
  },
];
