"use client";

import { useRouter } from "next/navigation";
import { posts } from "../../data/posts";

export default function Post({ params }) {
  const router = useRouter();
  const { id } = params;
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="grid place-items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold">404 - Post Not Found</h1>
        </div>
      </div>
    );
  }

  const gotoHome = () => {
    router.push('/');
  };

  return (
    <div className="grid place-items-center mt-8">
      <div className="max-w-xl">
        <header className="py-2 mb-2 text-center space-y-2">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <pre>{post.date}</pre>
        </header>
        <main>
          <p>{post.content}</p>
        </main>
        <div className="text-center">
          <button
            onClick={gotoHome}
            className="mt-4 cursor-pointer underline"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
