import { Post } from "@/types/post";
import PostCard from "@/components/PostCard";

async function getPosts(): Promise<Post[]> {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8 border-b pb-4 dark:border-gray-800">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Blog Posts
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Discover modern Web Development insights
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </main>
  );
}