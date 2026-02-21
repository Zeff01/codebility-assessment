export type Post = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  tag: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt:
      "Learn the basics of Next.js and how to create your first app with server-side rendering.",
    content:
      "Next.js is a React framework that enables server-side rendering and generating static websites. It provides a powerful set of features out of the box, including file-based routing, API routes, and optimized image handling.\n\nTo get started, you simply run `npx create-next-app@latest` and follow the prompts. Next.js supports both the App Router (introduced in v13) and the classic Pages Router, giving you flexibility in how you structure your project.\n\nOne of the most compelling features is hybrid rendering — you can choose between static generation (SSG), server-side rendering (SSR), or client-side rendering on a per-page basis. This makes Next.js incredibly versatile for everything from blogs to full-scale e-commerce platforms.\n\nThe framework also integrates seamlessly with Vercel for deployment, offering zero-config deployments and edge functions that bring your application closer to your users worldwide.",
    date: "2025-04-15",
    author: "Alex Chen",
    readTime: "4 min read",
    tag: "Framework",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt:
      "Explore different ways to style your Next.js application — from CSS Modules to Tailwind.",
    content:
      "There are multiple ways to style your Next.js application, each with distinct trade-offs worth understanding before you commit to an approach.\n\n**CSS Modules** offer scoped styles with zero runtime overhead. Each component gets its own `.module.css` file, and class names are automatically namespaced to prevent collisions. This is the default recommendation for teams that prefer traditional CSS.\n\n**Tailwind CSS** has become the dominant utility-first framework, letting you compose designs directly in your markup. It pairs beautifully with Next.js's component model and eliminates the need to context-switch between HTML and CSS files.\n\nFor most projects, Tailwind strikes the best balance between developer experience and performance. But the right choice always depends on your team's familiarity and your project's specific requirements.",
    date: "2025-04-16",
    author: "Maya Patel",
    readTime: "5 min read",
    tag: "Styling",
  },
  {
    id: 3,
    title: "API Routes in Next.js",
    excerpt:
      "Build backend functionality directly inside your Next.js project using API routes.",
    content:
      "Next.js blurs the line between frontend and backend with its built-in API routes. Instead of maintaining a separate server, you can define endpoints directly inside your project — either in `pages/api/` (Pages Router) or `app/api/` (App Router).\n\nIn the App Router, API routes are defined using `route.ts` files that export named functions corresponding to HTTP methods: `GET`, `POST`, `PUT`, `DELETE`, and so on. This makes intent explicit and keeps your code self-documenting.\n\nAPI routes run on the server, meaning they can safely access environment variables, databases, and third-party APIs without exposing sensitive credentials to the client. They're perfect for form submissions, authentication callbacks, webhooks, and data fetching proxies.\n\nFor more complex backend needs, you can integrate Next.js with ORMs like Prisma, authentication libraries like NextAuth.js, or even spin up a dedicated API service. But for most CRUD operations, the built-in API routes are more than sufficient.",
    date: "2025-04-17",
    author: "Jordan Kim",
    readTime: "6 min read",
    tag: "Backend",
  },
  {
    id: 4,
    title: "Deploying Next.js to Production",
    excerpt:
      "Everything you need to know about taking your Next.js app from localhost to the world.",
    content:
      "Deploying a Next.js application is remarkably straightforward, especially on Vercel — the platform built by the creators of Next.js. A simple `git push` triggers automatic builds, previews for every pull request, and production deployments with global CDN distribution.\n\nBeyond Vercel, Next.js can be self-hosted on any Node.js server, containerized with Docker, or exported as a fully static site. The `next build` command produces an optimized production bundle, and `next start` runs it.\n\nFor Docker deployments, Next.js provides an official Dockerfile template that uses multi-stage builds to minimize the final image size. Environment variables need to be carefully managed — public variables are prefixed with `NEXT_PUBLIC_` and embedded at build time, while server-only variables remain private.\n\nCaching strategy is critical in production. Next.js's Incremental Static Regeneration (ISR) lets you revalidate static pages in the background without a full redeploy, giving you the best of both static performance and dynamic data freshness.",
    date: "2025-04-18",
    author: "Sam Rivera",
    readTime: "7 min read",
    tag: "DevOps",
  },
];
