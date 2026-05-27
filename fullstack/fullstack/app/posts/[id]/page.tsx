import Link from "next/link";
import { posts } from "@/data/posts";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PostDetail({ params }: Props) {
  const { id } = await params;
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-800"
      >
        Back to Home
      </Link>

      <article key={post.id} className="mt-8 space-y-4">
        <header className="space-y-2">
          <h1 className="text-4xl font-semibold text-slate-900">
            {post.title}
          </h1>
          <p className="text-sm text-slate-500">{post.date}</p>
        </header>

        <p className="text-lg leading-7 text-slate-700">{post.content}</p>
      </article>
    </main>
  );
}
