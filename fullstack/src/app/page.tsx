import Link from "next/link";
import { Post } from "./data/posts";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/posts"); // Fetch response
  const posts = await response.json(); // Parse JSON-formatted HTTP response body into a JavaScript object

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Header Section */}
      <div className="mb-12 space-y-3">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          Dashboard
        </h1>
        <p className="text-lg text-slate-500">
          A collection of recent updates, tutorials, and thoughts.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 
        map() creates a new array before performing a fn on each element
        JSX expects an expression that directly returns a value
        */}
        {(posts as Post[]).map((post: Post) => (
          <div
            key={post.id}
            className="rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col bg-white"
          >
            <h2 className="text-xl font-semibold text-slate-800 mb-2">
              {post.title}
            </h2>

            {/* flex-grow pushes the link below to the very bottom */}
            <p className="text-slate-600 mb-6 flex-grow">{post.excerpt}</p>

            <Link
              href={`/posts/${post.id}`}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors inline-block mt-4"
            >
              More Details &rarr;
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
