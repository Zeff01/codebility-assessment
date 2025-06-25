export type PostType = {
  id: number | string;
  title: string;
  excerpt: string;
  content: string;
  date: string | Date;
};

export const posts: PostType[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first app",
    content:
      "Next.js is a React framework that enables server-side rendering and generating static websites...",
    date: "2025-04-15",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content:
      "There are multiple ways to style your Next.js application including CSS modules, Tailwind CSS...",
    date: "2025-04-16",
  },
  {
    id: 3,
    title: "Data Fetching in Next.js",
    excerpt: "Explore SSR, SSG, ISR, and client-side data fetching",
    content:
      "Next.js provides multiple methods of fetching data, including getServerSideProps, getStaticProps, and useEffect for client-side data...",
    date: "2025-04-18",
  },
  {
    id: 4,
    title: "Deploying Next.js Apps",
    excerpt: "How to deploy your Next.js application to production",
    content:
      "You can deploy Next.js apps using Vercel, Netlify, or your own server. Learn about the build process and environment variables...",
    date: "2025-04-20",
  },
];
