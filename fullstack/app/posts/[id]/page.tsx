import BackButton from "@/app/components/BackButton";
import type { Post } from "@/app/types/post";
import { getBaseUrl } from "@/app/lib/getBaseUrl";

interface Props {
  params: Promise<{ id: string }>;
}

async function fetchPost(id: string): Promise<Post> {
  const baseUrl = await getBaseUrl();

  if (!id) {
    throw new Error("No ID provided");
  }

  const response = await fetch(`${baseUrl}/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }

  return response.json();
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  const post = await fetchPost(id);

  if (!post)
    return (
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold">Post not found</h1>
      </main>
    );

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <BackButton />

      <article className="mt-6 space-y-6">
        <h1 className="text-4xl font-bold leading-tight">{post.title}</h1>
        <p className="text-lg text-gray-600">{post.excerpt}</p>

        <p className="text-sm text-gray-400">
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>

        <div className="prose prose-lg max-w-none">{post.content}</div>
      </article>
    </main>
  );
}
