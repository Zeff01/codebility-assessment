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
        content:
            "Next.js is a React framework that enables server-side rendering, static site generation, and serverless API endpoints. It handles tooling and configuration automatically, allowing you to focus on building features.",
        date: "2025-04-15",
    },
    {
        id: 2,
        title: "Styling in Next.js",
        excerpt: "Different ways to style your Next.js application",
        content:
            "There are multiple ways to style your Next.js application including CSS Modules, Tailwind CSS, and global stylesheets. Each method provides different benefits and trade-offs depending on your project's needs.",
        date: "2025-04-16",
    },
    {
        id: 3,
        title: "React Hooks",
        excerpt: "Learn the basics of React Hooks and how to use them in your application",
        content:
            "React Hooks are functions that let you use state and other React features without writing a class. They were introduced in React 16.8 and have since become an integral part of React development.",
        date: "2025-04-17",
    },
    {
        id: 4,
        title: "React Server Components",
        excerpt: "Learn the basics of React Server Components and how to use them in your application",
        content:
            "React Server Components are functions that run on the server and can access server-side resources like databases and file systems. They were introduced in React 18 and have since become an integral part of React development.",
        date: "2025-04-18",
    },
]