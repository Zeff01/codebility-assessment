import Link from "next/link";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // devnote: I need to determine what the id is, and then use that id to fetch the post

  // Await the params to "unwrap" the  Promise
  const resolvedParams = await params;

  // Access .id safely and convert to a number
  const targetId = Number(resolvedParams.id);

  // Fetch response
  const response = await fetch(`http://localhost:3000/api/posts/${targetId}`);

  // And convert to JavaScript object
  const post = await response.json();

  // Fetch post data
  return (
    <main className="py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-8 inline-block transition-colors"
        >
          &larr; Go Back
        </Link>
        {/* Article Header */}
        <h2 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
          {post.title}
        </h2>
        <p className="text-sm text-gray-500 mb-8 border-b pb-6">{post.date}</p>

        {/* Article Content */}
        <div className="text-gray-800 leading-relaxed space-y-6">
          <p className="text-xl text-gray-600 italic">{post.excerpt}</p>
          <p>{post.content}</p>
        </div>
      </div>
    </main>
  );
}
