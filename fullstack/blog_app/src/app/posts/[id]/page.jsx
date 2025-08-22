import Link from "next/link";
import { notFound } from "next/navigation";

async function getPost(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}

export default async function PostPage({ params }) {
  const { id } = await params; // ✅ await params
  const post = await getPost(id);

  if (!post) {
    notFound(); // triggers app/not-found.jsx
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Link href="/" className="text-blue-600 hover:underline">
        &larr; Back
      </Link>
      <h1 className="text-3xl font-bold mt-4 mb-2">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-6">📅 {post.date}</p>
      <article className="prose">{post.content}</article>
    </main>
  );
}
