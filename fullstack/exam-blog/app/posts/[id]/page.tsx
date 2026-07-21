import { notFound } from "next/navigation";
import { Post } from "@/types/post";
import BackButton from "@/components/BackButton";
import { posts } from "@/data/posts";

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  // Await params as required in Next.js 15+
  const { id } = await params;

  // Find the post directly from local data
  const post: Post | undefined = posts.find((p) => p.id === parseInt(id));

  // If post is not found, trigger Next.js 404 page
  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <BackButton />

      <article className="prose dark:prose-invert mt-6">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Published on {post.date}
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
          <p>{post.content}</p>
        </div>
      </article>
    </main>
  );
}