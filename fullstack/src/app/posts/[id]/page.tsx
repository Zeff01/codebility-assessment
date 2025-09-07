import Link from "next/link";
import { posts } from "../../../../data/posts";

type Props = {
  params: { id: string };
};

export default function PostPage({ params }: Props) {
  const post = posts.find((p) => p.id.toString() === params.id);

  if (!post) {
    return (
      <main className="p-6 max-w-2xl mx-auto">
        <p className="text-red-500">Post not found.</p>
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-4">{post.date}</p>
      <p className="mb-6">{post.content}</p>
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to Home
      </Link>
    </main>
  );
}
