export type Post = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
};

export const posts: Post[] = [
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
    title: "My Sample Post in Next.js",
    excerpt: "Showing a sample post in your Next.js application",
    content:
      "This is a sample content for the third post of the codebility assessment...",
    date: "2025-04-17",
  },
  {
    id: 4,
    title: "Another Sample Post in Next.js",
    excerpt: "Showing another sample post in your Next.js application",
    content:
      "This is another sample content the next day for the fourth post of the codebility assessment...",
    date: "2025-04-18",
  },
];

export function getPostById(id: number): Post | undefined {
  return posts.find((post) => post.id === id);
}
