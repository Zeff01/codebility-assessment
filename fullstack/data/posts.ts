export type Post = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
};

export const posts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first app.",
    content:
      "Next.js is a React framework that enables server-side rendering and generating static websites. It's great for SEO and performance. With features like automatic code splitting, optimized images, and built-in API routes, Next.js provides everything you need to build modern web applications. The framework handles routing automatically based on your file structure, making it incredibly intuitive to work with. Whether you're building a small blog or a large-scale application, Next.js scales beautifully with your needs.",
    date: "2025-04-15",
  },
  {
    id: "2",
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application.",
    content:
      "There are multiple ways to style your Next.js application including CSS modules, Tailwind CSS, and styled-components. Each approach has its own benefits and use cases. CSS Modules provide scoped styling out of the box, preventing class name conflicts. Tailwind CSS offers a utility-first approach that speeds up development significantly. Styled-components enable you to write CSS in JavaScript with full TypeScript support. Choose the approach that best fits your team's workflow and project requirements.",
    date: "2025-04-16",
  },
  {
    id: "3",
    title: "Why TypeScript matters",
    excerpt: "Understanding the benefits of type safety in React.",
    content:
      "TypeScript creates a safer development environment by catching errors at compile time rather than runtime. It provides excellent IDE support with autocomplete and intelligent refactoring. Type safety helps prevent common bugs and makes your codebase more maintainable as it grows. TypeScript's integration with React is seamless, offering prop type checking, generic components, and better documentation through types. While there's a small learning curve, the long-term benefits far outweigh the initial investment.",
    date: "2025-04-17",
  },
  {
    id: "4",
    title: "Mastering React Server Components",
    excerpt: "Deep dive into the future of React with Server Components.",
    content:
      "React Server Components represent a paradigm shift in how we build React applications. By rendering components on the server, we can dramatically reduce bundle sizes and improve initial load times. Server Components can directly access backend resources like databases and file systems without exposing sensitive logic to the client. They work seamlessly with Client Components, allowing you to choose the right rendering strategy for each part of your application. This hybrid approach gives you the best of both worlds: the interactivity of client-side React with the performance benefits of server-side rendering. Understanding when to use Server vs Client Components is key to building performant Next.js applications.",
    date: "2025-04-18",
  },
];
