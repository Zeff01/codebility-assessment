import Link from "next/link";

async function getPost(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function PostPage({ params }) {
  const post = await getPost(params.id);

  if (!post) {
    return <p className="p-6 text-red-500">Post not found.</p>;
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
