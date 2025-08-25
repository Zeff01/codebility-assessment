import Link from "next/link";

async function getPost(id: string) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  if (!post) {
    return (
      <main className="p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link href="/" className="text-blue-600 hover:underline mt-4 block">
          ← Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600 text-sm mb-6">{post.date}</p>
      <p className="text-gray-700 leading-relaxed">{post.content}</p>
      <Link href="/" className="text-blue-600 hover:underline mt-6 block">
        ← Back to Home
      </Link>
    </main>
  );
}
