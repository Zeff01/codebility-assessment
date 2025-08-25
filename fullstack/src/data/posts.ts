import { PostsDataType } from "../types/posts.type";

export const PostsData: PostsDataType[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first app.",
    content:
      "Next.js is a powerful React framework that enables developers to build fast, scalable, and SEO-friendly applications using features like server-side rendering and static site generation. This guide walks you through setting up your first Next.js project from scratch, creating pages, linking routes, and running your development server. By the end, you'll have a fully functional Next.js app and a solid foundation to explore advanced concepts like data fetching and API routes.",
    date: "2025-04-15",
    image: "https://placehold.co/800x400?text=Getting+Started+with+Next.js",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Explore different ways to style your Next.js application.",
    content:
      "Next.js supports multiple styling solutions, giving you flexibility in how you design your application. You can use CSS Modules for locally scoped styles, Tailwind CSS for utility-first styling, Styled Components for dynamic theming, or traditional global CSS. This article explores each approach, showing examples, benefits, and trade-offs, so you can confidently choose the best styling method for your project and maintain a clean, scalable, and visually appealing user interface.",
    date: "2025-04-16",
    image: "https://placehold.co/800x400?text=Styling+in+Next.js",
  },
  {
    id: 3,
    title: "Optimizing Images in Next.js",
    excerpt: "Use the Image component for faster page loads.",
    content:
      "Images are critical for modern web apps, but they can slow down your site if not optimized. Next.js offers the Image component, which automatically serves responsive, optimized images for all devices. This guide teaches you how to configure image domains, set proper sizes, and implement lazy loading. By using the Next.js Image component effectively, you’ll improve page load times, boost Core Web Vitals scores, and enhance the overall user experience on your website.",
    date: "2025-04-18",
    image: "https://placehold.co/800x400?text=Optimizing+Images",
  },
  {
    id: 4,
    title: "API Routes in Next.js",
    excerpt: "Create serverless functions using API routes.",
    content:
      "Next.js API routes allow you to create backend endpoints directly within your app without setting up a separate server. These routes run as serverless functions and can handle tasks like fetching data from a database, processing form submissions, or integrating third-party APIs. This tutorial shows you how to create and organize API routes, handle HTTP methods like GET and POST, and secure your endpoints, enabling you to build full-stack applications quickly and efficiently.",
    date: "2025-04-20",
    image: "https://placehold.co/800x400?text=API+Routes",
  },
  {
    id: 5,
    title: "Deploying Next.js to Vercel",
    excerpt: "Step-by-step guide to deploying your app.",
    content:
      "Deploying your Next.js application to Vercel is straightforward and fast. Vercel, the platform created by the makers of Next.js, offers seamless integration with GitHub, GitLab, and Bitbucket. This guide covers connecting your repository, setting up environment variables, configuring custom domains, and understanding Vercel’s serverless infrastructure. By following these steps, you can launch your app to production with zero downtime and automatic scaling for high traffic environments.",
    date: "2025-04-22",
    image: "https://placehold.co/800x400?text=Deploying+to+Vercel",
  },
  {
    id: 6,
    title: "Next.js and SEO",
    excerpt: "Improve your search engine rankings with Next.js.",
    content:
      "Next.js provides excellent tools for building SEO-friendly applications through server-side rendering and static generation. This article explains how to optimize meta tags, create dynamic sitemaps, use Open Graph and Twitter cards, and improve performance metrics like page speed. You'll learn how to make your pages discoverable, boost search engine rankings, and ensure that your Next.js site delivers an exceptional experience for both users and search engine crawlers.",
    date: "2025-04-24",
    image: "https://placehold.co/800x400?text=Next.js+SEO",
  },
  {
    id: 7,
    title: "Dynamic Routing in Next.js",
    excerpt: "Learn to create dynamic routes for your application.",
    content:
      "Dynamic routing in Next.js allows you to create pages that adapt to URL parameters, making your application more flexible and scalable. Using file-based routing, you can define dynamic segments and fetch data for each page at build time or on request. This tutorial covers building pages with [id] parameters, implementing getStaticPaths, and creating user-friendly URLs. By mastering dynamic routing, you can create blogs, e-commerce stores, and dashboards with ease.",
    date: "2025-04-26",
    image: "https://placehold.co/800x400?text=Dynamic+Routing",
  },
  {
    id: 8,
    title: "Authentication in Next.js",
    excerpt: "Implement login and registration features easily.",
    content:
      "Implementing authentication in Next.js can be done using libraries like NextAuth.js, Firebase, or custom JWT strategies. This guide demonstrates how to set up secure sign-in options, including email/password, OAuth providers like Google and GitHub, and session management. You'll also learn how to protect API routes, display user-specific data, and handle logout functionality. With proper authentication, you can build secure, personalized Next.js applications users can trust.",
    date: "2025-04-28",
    image: "https://placehold.co/800x400?text=Authentication",
  },
  {
    id: 9,
    title: "Fetching Data in Next.js",
    excerpt: "Understand data fetching methods in Next.js.",
    content:
      "Next.js offers powerful data fetching methods to handle various use cases, including static generation (getStaticProps), server-side rendering (getServerSideProps), and client-side fetching with React hooks. This article explains when to use each approach, how to optimize for performance, and integrate APIs or databases effectively. By mastering data fetching in Next.js, you can build fast, SEO-friendly, and dynamic applications that adapt to real-time data changes effortlessly.",
    date: "2025-04-30",
    image: "https://placehold.co/800x400?text=Fetching+Data",
  },
  {
    id: 10,
    title: "Middleware in Next.js",
    excerpt: "Use middleware for authentication and redirects.",
    content:
      "Middleware in Next.js lets you run code before a request is completed, enabling powerful features like authentication, redirects, logging, and feature toggling. This guide walks through creating middleware functions, matching routes, and integrating user roles for access control. By leveraging middleware effectively, you can enhance security, improve user experiences, and add advanced functionality without adding unnecessary complexity to your Next.js application architecture.",
    date: "2025-05-02",
    image: "https://placehold.co/800x400?text=Middleware",
  },
  {
    id: 11,
    title: "Open Graph in Next.js",
    excerpt: "Enhance link previews with Open Graph metadata.",
    content:
      "Open Graph meta tags control how your pages appear when shared on social media platforms like Facebook, LinkedIn, or Slack. This tutorial shows you how to add dynamic Open Graph tags in Next.js using the <Head> component, generate custom preview images, and include Twitter card metadata. With proper configuration, your site will have visually appealing link previews that drive higher engagement, improve click-through rates, and strengthen your online presence.",
    date: "2025-05-04",
    image: "https://placehold.co/800x400?text=Open+Graph",
  },
];
