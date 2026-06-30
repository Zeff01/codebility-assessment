export async function GET() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      excerpt: "Learn the basics of Next.js.",
      content:
        "Next.js is a React framework for building fast web applications.",
    },
    {
      id: 2,
      title: "Styling in Next.js",
      excerpt: "Different styling methods in Next.js.",
      content:
        "You can use CSS Modules, Tailwind CSS, or styled-components.",
    },
    {
      id: 3,
      title: "Dynamic Routing",
      excerpt: "How dynamic routes work in Next.js.",
      content:
        "Dynamic routing uses [id] or [slug] in the file system.",
    },
  ];

  return Response.json(posts);
}