export const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first app.",
    content:
      "Next.js is a React framework that helps you build fast web applications with file-based routing, server rendering, and API routes. In this simple blog, each page is created from files inside the app folder.",
    date: "2025-04-15",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application.",
    content:
      "There are multiple ways to style a Next.js application, including global CSS, CSS modules, and Tailwind CSS. This project uses Tailwind utility classes for simple layout, spacing, and colors.",
    date: "2025-04-16",
  },
  {
    id: 3,
    title: "Building API Routes",
    excerpt: "Serve blog data from a small API endpoint.",
    content:
      "Route handlers let a Next.js app return JSON from files inside the app/api folder. This makes it easy to expose local data, such as blog posts, without setting up a database for a small assessment project.",
    date: "2025-04-17",
  },
  {
    id: 4,
    title: "Why File-Based Routing Helps",
    excerpt: "Understand how folders become pages in the App Router.",
    content:
      "In the App Router, folders define URL segments and page files make those routes public. A folder like app/posts/[id] can display a different blog post depending on the id in the address bar.",
    date: "2025-04-18",
  },
];

export function getPostById(id) {
  return posts.find((post) => post.id === Number(id));
}
