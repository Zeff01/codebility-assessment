import { Post } from "@/app/types/post";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostProps {
  params: {
    id: string;
  };
}

async function getPost(id: string): Promise<Post | null> {
  try {
    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/api/posts/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          ← Back to home
        </Link>

        <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>

            <div className="flex items-center text-gray-500 text-sm">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="mx-2">•</span>
              <span>By {post.author}</span>
            </div>
          </header>

          <div className="prose prose-gray max-w-none">
            <div className="text-gray-700 leading-relaxed text-lg">
              {post.content}
            </div>
          </div>
        </article>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to all posts
          </Link>
        </div>
      </div>
    </div>
  );
}
