import { PostType } from "@/types";
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
    excerpt:
      "Explore client-side, server-side, and static data fetching methods",
    content:
      "Next.js provides multiple ways to fetch data depending on your use case. You can use getStaticProps, getServerSideProps, or fetch directly on the client...",
    date: "2025-04-17",
  },
  {
    id: 4,
    title: "Deploying a Next.js App",
    excerpt: "Steps to deploy your Next.js app to production easily",
    content:
      "Once your Next.js app is ready, deploying is straightforward. Platforms like Vercel and Netlify provide simple integrations...",
    date: "2025-04-18",
  },
  // Add 1-2 more posts
];
