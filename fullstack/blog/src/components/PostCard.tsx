import { Post } from "@/types/post";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition">
      <p className="text-sm text-gray-200">{post.date}</p>
      <h2 className="text-xl font-bold mt-2 mb-2 text-white">
        {post.title}
      </h2>
      <p className="text-gray-100 mb-4 text-base">
        {post.excerpt}
      </p>
      <a
        href={`/blog/${post.id}`}
        className="inline-block text-blue-300 font-medium hover:underline"
      >
        Read more →
      </a>
    </div>
  );
}
