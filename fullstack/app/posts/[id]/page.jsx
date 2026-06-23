import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostById, posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export default async function BlogPostPage({ params }) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <main className="grid gap-5 px-5 py-12 text-[#0F172A] dark:bg-slate-950 dark:text-slate-50 sm:px-8 lg:px-10">
      <article className="mx-auto max-w-3xl rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
        <Link
          href="/"
          className="font-medium text-teal-700 hover:text-teal-900"
        >
          Back to posts
        </Link>
        <p className="mt-8 text-sm text-slate-500">{post.date}</p>
        <h1 className="mt-3 text-4xl font-bold text-[#0F172A]">{post.title}</h1>
        <p className="mt-6 text-lg leading-8 text-slate-700">{post.content}</p>
      </article>
    </main>
  );
}
