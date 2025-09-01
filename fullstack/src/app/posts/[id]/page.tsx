import { posts, Post } from "@/app/data/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

interface PageProps {
  params: { id: string };
}

export default function PostPage({ params }: PageProps) {
  const id = parseInt(params.id);
  const post: Post | undefined = posts.find((p) => p.id === id);

  if (!post) notFound();

  return (
    <main className={`${jetBrainsMono.className} min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white p-6`}>
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-green-300 hover:text-green-100 font-medium mb-6"
        >
          <svg
            className="mr-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-green-200 mb-6">{post.excerpt}</p>

        <div className="bg-green-950/60 p-6 rounded-2xl shadow-lg prose prose-lg text-green-100 max-w-none">
          {post.content.split("\n").map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>

        <p className="mt-6 text-sm text-green-400">{post.date}</p>
      </div>
    </main>
  );
}
