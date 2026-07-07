import Link from "next/link";
import { notFound } from "next/navigation";

import { posts } from "@/data/posts";

interface PostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;

  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/"
        className="text-blue-600 hover:underline"
      >
        ← Back to Home
      </Link>

      <article className="mt-8">
        <p className="text-sm text-gray-500">
          {post.date}
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          {post.title}
        </h1>

        <p className="mt-6 leading-8 text-gray-700">
          {post.content}
        </p>
      </article>
    </main>
  );
}