import Link from "next/link";
import Image from "next/image"; 
import { posts, Post } from "@/data/posts";

interface PageProps {
  params: { id: string };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { id } = await params;
    const post: Post | undefined = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-primary">Post Not Found</h1>
      </main>
    );
  }

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 py-10 justify-items-center">

      <h1 className="text-center text-4xl font-bold text-blue-800 mb-6">{post.title}</h1>
      <p className="italic mb-6 text-gray-600 text-sm">
      {post.date}
      </p>

      <Image 
      src={post.image}
      alt={post.title}
      width={600}
      height={600}
      className="object-cover mb-8"
      />

      <p className="text-justify whitespace-pre-line text-primary mb-8">
        {post.content}
      </p>
      <Link
        href="/"
        className="text-blue-600 font-medium hover:text-blue-900"
      >
        ⇠ Back to Home
      </Link>
    </div>
  );
}
