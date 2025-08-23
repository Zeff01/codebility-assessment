import { ArrowLeft } from "lucide-react";

interface PostPageProps {
  params: { id: string };
}

export default async function Post({ params }: PostPageProps) {
  const res = await fetch(`http://localhost:3000/api/posts/${params.id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <h1 className="text-center text-red-500">Post not found</h1>;
  }

  const post = await res.json();

  return (
    <main className="min-h-screen text-white">
      <article className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 mt-40 shadow-lg">
        <a 
          href="/" 
          className="flex items-center text-blue-300 hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blogs
        </a>

        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-400 text-sm mb-6">{post.date}</p>
        <p className="text-lg leading-relaxed">{post.content}</p>
      </article>
    </main>
  );
}
