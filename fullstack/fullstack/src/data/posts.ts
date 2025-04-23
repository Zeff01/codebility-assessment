export const posts: TBlogPost[] = [
   {
     id: 1,
     title: "Getting Started with Next.js",
     excerpt: "Learn the basics of Next.js and how to create your first app",
     content:
       "Next.js is a React framework that enables server-side rendering and generating static websites for React-based web applications. It offers built-in routing, file-system based pages, and automatic code splitting for performance. To get started, install Next.js via `npx create-next-app` and begin building your pages inside the `pages` directory. You can use `getServerSideProps`, `getStaticProps`, and API routes to control data fetching.",
     date: "2025-04-15",
   },
   {
     id: 2,
     title: "Styling in Next.js",
     excerpt: "Different ways to style your Next.js application",
     content:
       "There are multiple ways to style your Next.js application including CSS Modules, Tailwind CSS, global CSS, and styled-components. CSS Modules let you scope CSS to components. Tailwind provides utility-first CSS for fast UI development. To use Tailwind, install it with PostCSS and add the necessary directives to your global CSS. You can also combine multiple methods depending on your project's needs.",
     date: "2025-04-16",
   },
   {
     id: 3,
     title: "Automate with Bash Script",
     excerpt: "Why it's better to use Bash scripts than manually typing in the terminal",
     content:
       "Bash scripts are a powerful way to automate repetitive tasks in your development workflow. Instead of typing the same commands over and over in the terminal, you can save them in a `.sh` file and run them with a single command. This saves time, reduces human error, and improves consistency across environments. Bash also supports variables, conditionals, loops, and functions, making it capable of handling complex automation scenarios.",
     date: "2025-04-20",
   },
   {
     id: 4,
     title: "Deploying a Next.js App",
     excerpt: "How to deploy your Next.js project to Vercel or other platforms",
     content:
       "Deployment is straightforward with Vercel, the creators of Next.js. You can import your GitHub repo and deploy it with zero config. For other platforms like Netlify or custom servers, build your app using `next build` and serve it with `next start`. Ensure your environment variables are properly configured and static assets are optimized for production.",
     date: "2025-04-21",
   },
 ];
 