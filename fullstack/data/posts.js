export const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first app with server-side rendering and static generation.",
    content: "Next.js is a React framework that enables server-side rendering and generating static websites for React-based web applications. It provides a great developer experience with features like fast refresh, file-based routing, and built-in CSS support. To get started, you simply run npx create-next-app@latest and follow the prompts. The framework handles all the complex configuration so you can focus on building your application. One of the most powerful features is the hybrid rendering model — you can choose between static generation, server-side rendering, or client-side rendering on a per-page basis. This flexibility makes Next.js suitable for a wide range of use cases, from simple blogs to complex e-commerce platforms.",
    date: "2025-04-15",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application including CSS modules, Tailwind CSS, and styled-components.",
    content: "There are multiple ways to style your Next.js application. CSS Modules are built-in and allow you to write scoped CSS that won't conflict with other components. Simply name your file with the .module.css extension and import it into your component. Tailwind CSS is another popular option that provides utility classes for rapid UI development. It integrates seamlessly with Next.js through a simple configuration step. For those who prefer CSS-in-JS, libraries like styled-components and emotion work great with Next.js as well. Each approach has its trade-offs: CSS Modules are zero-runtime and great for performance, Tailwind accelerates development speed, and CSS-in-JS shines when you need dynamic styles based on props or state.",
    date: "2025-04-16",
  },
  {
    id: 3,
    title: "Understanding the App Router",
    excerpt: "A deep dive into the Next.js App Router and how it revolutionizes the way we structure and think about routing.",
    content: "The App Router, introduced in Next.js 13, represents a fundamental shift in how we build Next.js applications. It is built on top of React Server Components, which allows components to run on the server by default. This means less JavaScript shipped to the client and faster page loads. The file-based routing system uses a folder structure inside the app directory, where each folder represents a route segment. Special files like page.jsx, layout.jsx, and loading.jsx give you fine-grained control over each route. Layouts are particularly powerful — they wrap child routes and persist across navigation without re-rendering. This is a massive performance win for navigation-heavy applications. The App Router also introduces new data fetching patterns that align with React's Suspense model.",
    date: "2025-04-17",
  },
  {
    id: 4,
    title: "Building API Routes in Next.js",
    excerpt: "Create powerful backend endpoints directly within your Next.js project using the built-in route handler system.",
    content: "Next.js allows you to build your API directly within the same project as your frontend using Route Handlers. In the App Router, you create a route.js file inside the app/api directory to define your endpoints. You can export named functions like GET, POST, PUT, and DELETE that correspond to HTTP methods. This co-location of frontend and backend code simplifies development and deployment significantly. Route Handlers have access to the incoming request via the Request object and can return a Response object. You can read query parameters, request bodies, and set custom headers with ease. For database integration, you can use any Node.js-compatible ORM or query builder directly inside your handlers. This makes Next.js a true full-stack framework capable of handling the entire web application lifecycle.",
    date: "2025-04-18",
  },
];