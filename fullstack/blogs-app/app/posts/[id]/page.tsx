import { notFound } from "next/navigation";
import { getPostById } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black px-4 py-16 font-sans">
      <div className="container mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-block mb-6 text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
        >
          &larr; Back to all posts
        </Link>

        {post.image && (
          <div className="relative w-full h-80 sm:h-96 mb-6">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="rounded-xl object-cover shadow-md"
            />
          </div>
        )}

        <article className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm">
          <h1 className="text-3xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">{post.title}</h1>
          <time className="text-sm text-zinc-500 mb-4 block">{post.date}</time>
          <div className="prose dark:prose-invert text-zinc-800 dark:text-zinc-200">
            <p>{post.content}</p>
          </div>
        </article>
      </div>
    </main>
  );
}
