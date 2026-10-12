import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostById, posts } from "@/data/posts";

export const instant = false;

export function generateStaticParams() {
  return posts.map((post) => ({ id: String(post.id) }));
}

export default async function PostPage(props: PageProps<"/posts/[id]">) {
  const { id } = await props.params;
  const post = getPostById(Number(id));

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <Link
        href="/"
        className="text-sm text-gray-500 transition hover:text-gray-900 dark:hover:text-zinc-100"
      >
        &larr; Back to all posts
      </Link>

      <article className="mt-6">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="mt-2 text-sm text-gray-500">{post.date}</p>
        <p className="mt-6 leading-7 text-gray-700 dark:text-gray-300">
          {post.content}
        </p>
      </article>
    </main>
  );
}
