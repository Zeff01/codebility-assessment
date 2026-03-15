export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  picture?: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first app",
    content:
      "Next.js is a React framework that enables server-side rendering and generating static websites for React-based web applications. It's built on top of Node.js and uses JavaScript for both client and server code.\n\nWith Next.js, you can build applications that are fast, scalable, and easy to maintain. The framework provides built-in optimization features like automatic code splitting, server-side rendering (SSR), and static site generation (SSG).\n\nGetting started is simple - just run npx create-next-app@latest and follow the prompts to set up your first project.",
    date: "2025-04-15",
    picture: '/api.png',
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content:
      "There are multiple ways to style your Next.js application. You can use traditional CSS files, CSS modules for scoped styling, Tailwind CSS for utility-first styling, or even CSS-in-JS libraries.\n\nTailwind CSS has become increasingly popular because it provides a comprehensive set of utility classes that make it easy to build modern designs without writing custom CSS. CSS modules are great for component-specific styles, while CSS files work well for global styles.\n\nChoose the styling approach that best fits your project's needs and your team's preferences.",
    date: "2025-04-16",
    picture: '/css.png',
  },
  {
    id: 3,
    title: "API Routes in Next.js",
    excerpt: "Building backend APIs with Next.js API routes",
    content:
      "Next.js API routes allow you to build your backend API alongside your frontend in a single repository. You can create API endpoints by adding files to the app/api directory.\n\nEach file in the API route directory automatically becomes an endpoint. For example, app/api/posts/route.ts becomes /api/posts. You can handle different HTTP methods like GET, POST, PUT, and DELETE in the same route handler.\n\nAPI routes are serverless functions that run on Vercel or any Node.js hosting platform. They're perfect for building full-stack applications without needing a separate backend server.",
    date: "2025-04-17",
    picture: '/api.png',
  },
  {
    id: 4,
    title: "Dynamic Routes and Parameters",
    excerpt: "Using dynamic route segments in Next.js",
    content:
      "Dynamic routes in Next.js allow you to create routes that can handle variable content. You can define dynamic segments using square brackets, like app/posts/[id]/page.tsx.\n\nWhen a user visits /posts/123, the [id] segment will be replaced with 123, and you can access this value using the params object. This is perfect for creating pages for individual blog posts, products, or users.\n\nYou can also use generateStaticParams to pre-render multiple dynamic routes at build time, which improves performance for static content.",
    date: "2025-04-18",
    picture: '/route.png',
  },
];

export function getPostById(id: number): Post | undefined {
  return posts.find((post) => post.id === id);
}
