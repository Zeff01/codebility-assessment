import { HomepagePost } from "@/types/types";
import PostHeader from "./PostHeader";
type PostListProps = {
  posts: HomepagePost[];
};

export default function PostList({ posts }: PostListProps) {
  return (
    <div className="mt-10 w-fit">
      {posts.map((p) => (
        <div key={p.id}>
          <PostHeader post={p} />
        </div>
      ))}
    </div>
  );
}
