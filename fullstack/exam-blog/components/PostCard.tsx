import Link from "next/link"; // <-- Ensure this import is present at line 1
import { Post } from "@/types/post";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow dark:border-gray-800">
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        {post.date}
      </div>
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {post.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {post.excerpt}
      </p>
      <Link
        href={`/posts/${post.id}`}
        className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
      >
        Read more &rarr;
      </Link>
    </div>
  );
}