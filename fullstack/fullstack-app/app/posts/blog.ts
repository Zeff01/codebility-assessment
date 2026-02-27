
type Blog = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
};

const blogs: Blog[] = [
    {
    id: "1",
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first app",
    content:
      "Next.js is a React framework that enables server-side rendering and generating static websites...",
    date: "2025-04-15",
  },
  {
    id: "2",
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content:
      "There are multiple ways to style your Next.js application including CSS modules, Tailwind CSS...",
    date: "2025-04-16",
  },
  {
    id: "3",
    title: "Understanding React Hooks",
    excerpt: "A deep dive into useState, useEffect, and other essential React Hooks.",
    content:
      "React Hooks revolutionized how we write components. This guide covers the most important Hooks...",
    date: "2025-05-01",
  },
  {
    id: "4",
    title: "State Management with Zustand",
    excerpt: "A simple and powerful state management solution for React.",
    content:
      "Tired of boilerplate? Zustand offers a minimal and fast way to manage state in your applications.",
    date: "2025-05-10",
  },
  {
    id: "5",
    title: "Deploying Your Next.js App to Vercel",
    excerpt: "A step-by-step guide to deploying your application with zero configuration.",
    content:
      "Vercel, the creators of Next.js, provide the easiest way to deploy your projects. Here's how to do it.",
    date: "2025-05-20",
  },
];
export async function getBlog(blogid: string) {
  return blogs.find(blog => blog.id === blogid) as Blog;
}

export async function getAllBlogs() {
  return blogs;
};
