import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Post Not Found
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          The blog post you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
        >
          Back to Blog
        </Link>
      </div>
    </div>
  );
}

