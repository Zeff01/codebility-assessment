import Link from "next/link";
import { posts } from "@/data/posts";

type Props = {
  params: Promise<{ id: string }> | { id: string };
};

export default async function PostPage({ params }: Props) {
  const { id: idStr } = (await params) as { id: string };
  const id = Number(idStr);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <main className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-2xl font-semibold">Post not found</h1>
        <p className="mt-4">We couldn't find the post you were looking for.</p>
        <Link href="/" className="text-blue-600 hover:underline mt-4 block">
          Back to home
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="mx-auto max-w-3xl">
        <article className="rounded-2xl bg-white p-8 shadow">
          <header>
            <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>
            <time className="text-sm text-gray-500">{post.date}</time>
          </header>

          <section className="prose mt-8 text-gray-800">{post.content}</section>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200"
            >
              ← Back to home
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
