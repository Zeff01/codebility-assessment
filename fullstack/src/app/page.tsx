import Link from "next/link";
import { posts } from "./data/posts";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default async function HomePage() {
  const res = await fetch("http://localhost:3000/api/posts", { cache: "no-store" });
  return (
    <main className={`${jetBrainsMono.className} min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white p-6`}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Ram D.S. Blogs for Codeability</h1>
        <ul className="space-y-6">
          {posts.map((post: any) => (
            <li
              key={post.id}
              className="p-6 bg-green-950/60 border border-green-700 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/posts/${post.id}`} className="hover:underline text-green-300">
                  {post.title}
                </Link>
              </h2>
              <p className="text-green-200 mb-2">{post.excerpt}</p>
              <p className="text-sm text-green-200">{post.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
