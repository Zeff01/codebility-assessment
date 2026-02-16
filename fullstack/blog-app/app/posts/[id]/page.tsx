import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

type Post = (typeof posts)[0];

export default async function BlogPost({ params }: PageProps) {
  const { id } = await params;

  // Fetch post directly from data (standard practice for server components)
  const post = posts.find((p) => p.id === parseInt(id, 10));

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-linear-to-b from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 font-medium transition-colors"
        >
          ← Back to Home
        </Link>

        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
              {post.excerpt}
            </p>

            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              {post.content.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return posts.map((post) => ({
    id: String(post.id),
  }));
}
