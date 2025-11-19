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
      "Next.js is a React framework that enables server-side rendering and generating static websites. It provides a great developer experience with features like automatic code splitting, optimized production builds, and built-in CSS support.\n\nOne of the key advantages of Next.js is its file-based routing system. You can create routes by simply adding files to the `pages` or `app` directory. This makes it easy to build complex applications without worrying about routing configuration.\n\nNext.js also comes with excellent performance optimizations out of the box. It automatically optimizes images, implements code splitting, and provides server-side rendering capabilities that can significantly improve your application's performance and SEO.\n\nTo get started, you can create a new Next.js project using `npx create-next-app@latest`. This will set up a new project with all the necessary dependencies and configuration files.",
    date: "2025-04-15",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content:
      "There are multiple ways to style your Next.js application including CSS modules, Tailwind CSS, styled-components, and more. Each approach has its own advantages.\n\nCSS Modules provide scoped styling by automatically generating unique class names. This prevents style conflicts and makes your styles more maintainable. You can use CSS Modules by creating files with the `.module.css` extension.\n\nTailwind CSS is a utility-first CSS framework that allows you to build custom designs quickly. It's particularly popular in the Next.js community because of its excellent integration and performance optimizations. With Tailwind, you can style components directly in your JSX using utility classes.\n\nStyled-components is another popular choice that allows you to write CSS-in-JS. It provides a way to write component-scoped styles using tagged template literals, which can be very convenient for dynamic styling.\n\nNext.js also supports global CSS files, which can be imported in your root layout or `_app.js` file. This is useful for base styles, resets, and CSS variables.",
    date: "2025-04-16",
  },
  {
    id: 3,
    title: "Understanding API Routes in Next.js",
    excerpt: "Learn how to create and use API routes in your Next.js application",
    content:
      "Next.js allows you to create API routes as part of your application. These routes are serverless functions that can handle HTTP requests and return responses. They're perfect for building backend functionality without needing a separate server.\n\nIn the App Router, API routes are created by adding a `route.ts` or `route.js` file in the `app/api` directory. Each route file can export functions named after HTTP methods like `GET`, `POST`, `PUT`, `DELETE`, etc.\n\nAPI routes in Next.js are serverless functions that run on-demand. They can access the full Node.js runtime, which means you can use any Node.js API, connect to databases, and perform server-side operations.\n\nOne of the benefits of API routes is that they're co-located with your frontend code, making it easier to maintain and deploy your full-stack application. They also benefit from Next.js's automatic code splitting and optimization.\n\nWhen building API routes, remember to handle errors properly, validate input data, and implement proper security measures like CORS headers and authentication when needed.",
    date: "2025-04-17",
  },
  {
    id: 4,
    title: "Building Dynamic Routes in Next.js",
    excerpt: "Create dynamic pages that adapt to different URL parameters",
    content:
      "Dynamic routes in Next.js allow you to create pages that can handle different URL parameters. This is essential for building applications like blogs, e-commerce sites, or any application that needs to display different content based on the URL.\n\nIn the App Router, you create dynamic routes by using square brackets in your folder or file names. For example, `app/posts/[id]/page.tsx` creates a dynamic route that can handle URLs like `/posts/1`, `/posts/2`, etc.\n\nYou can access the dynamic parameters using the `params` prop in your page component. The params object will contain the values from your URL segments.\n\nNext.js also supports catch-all routes using `[...slug]` syntax, which can match multiple segments. This is useful for creating flexible routing patterns.\n\nWhen using dynamic routes, you can also generate static pages at build time using `generateStaticParams`. This allows you to pre-render pages for known routes, improving performance and SEO.\n\nDynamic routes work seamlessly with both server components and client components, giving you flexibility in how you fetch and display data.",
    date: "2025-04-18",
  },
];

