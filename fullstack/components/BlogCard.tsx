import Link from "next/link";
import type { Post } from "@/types";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <p className="text-sm text-gray-500">{post.date}</p>

      <h2 className="mt-2 text-2xl font-bold text-gray-900">
        {post.title}
      </h2>

      <p className="mt-3 text-gray-600">
        {post.excerpt}
      </p>

      <Link
        href={`/posts/${post.id}`}
        className="mt-5 inline-block font-medium text-blue-600 hover:underline"
      >
        Read More →
      </Link>
    </article>
  );
}