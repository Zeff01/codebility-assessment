export interface Post {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
}

export const posts: Post[] = [
    {
        id: 1,
        title: "Getting Started with Next.js",
        excerpt: "Learn the basics of Next.js and how to create your first app",
        content:
            "Next.js is a React framework that enables server-side rendering and generating static websites. It provides file-based routing, API routes, and built-in optimizations that make building production-ready apps straightforward.",
        date: "2025-04-15",
        author: "Jane Doe",
    },
    {
        id: 2,
        title: "Styling in Next.js",
        excerpt: "Different ways to style your Next.js application",
        content:
            "There are multiple ways to style your Next.js application including CSS Modules, Tailwind CSS, styled-components, and more. Each has trade-offs depending on team size and project complexity.",
        date: "2025-04-16",
        author: "John Smith",
    },
    {
        id: 3,
        title: "Understanding the App Router",
        excerpt: "A deep dive into Next.js 13+ App Router conventions",
        content:
            "The App Router introduces React Server Components, nested layouts, and co-located data fetching. Understanding the difference between server and client components is key to building performant apps.",
        date: "2025-04-17",
        author: "Jane Doe",
    },
    {
        id: 4,
        title: "API Routes in Next.js",
        excerpt: "Build backend endpoints directly inside your Next.js project",
        content:
            "Next.js API routes let you write server-side logic without a separate backend. With the App Router you use Route Handlers in route.ts files, returning standard Response objects.",
        date: "2025-04-18",
        author: "John Smith",
    },
];