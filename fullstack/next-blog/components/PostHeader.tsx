import { HomepagePost } from "@/types/types";
import Link from "next/link";
type PostProps = {
  post: HomepagePost;
};

export default function PostHeader({ post }: PostProps) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="flex">
        <div className="p-5 hover:shadow-2xl rounded-2xl hover:">
          <h1 className="text-2xl font-bold">➤ {post.title}</h1>
          <p className="text-gray-400">{post.excerpt}</p>
        </div>
      </div>
    </Link>
  );
}
