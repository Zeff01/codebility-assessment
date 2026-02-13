import { posts } from "@/data/posts";
import { PostCard } from "@/components/post-card";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="mt-2 text-muted-foreground">
          Thoughts, ideas, and tutorials on modern web development.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
