import { posts } from "../../data/posts";
import Link from "next/link";

export default function BlogPost({ params }) {
  const post = posts.find((p) => p.id === parseInt(params.id));

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-950 text-white mx-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">404 - Post Not Found</h1>
          <Link href="/" className="text-blue-400 underline hover:text-blue-300">
            ← Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-3xl mx-auto mt-20 bg-gray-900 border border-gray-800 rounded-lg p-8 shadow">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-400 mb-6 text-sm">🗓 {post.date}</p>
        <p className="text-lg leading-relaxed mb-8">{post.content}</p>
        <Link href="/" className="text-blue-400 underline hover:text-blue-300">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}