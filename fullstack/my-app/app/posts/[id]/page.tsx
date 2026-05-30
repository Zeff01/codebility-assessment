import { posts, Post } from "../../data/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

// 1. (Optional Optimization) Generate static paths for all 12 posts at build time
export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function PostDetailPage({ params }: PageProps) {
  // Await the asynchronous params
  const { id } = await params;
  
  // Find the matching post by converting the param ID string into a number
  const post: Post | undefined = posts.find((p) => p.id === parseInt(id, 10));

  // 2. Trigger Next.js 404 page if the post ID doesn't exist
  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-slate-50 text-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Navigation Link */}
        <div className="mb-8">
          <Link
            href="/posts"
            className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition-colors"
          >
            <span aria-hidden="true" className="mr-1">←</span> Back to all articles
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10 pb-8 border-b border-slate-200">
          <time className="block text-sm font-medium text-slate-400 mb-3">
            {new Date(post.date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-slate-900 leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-xl text-slate-500 italic font-normal leading-relaxed">
            "{post.excerpt}"
          </p>
        </header>

        {/* Article Content Body */}
        <div className="prose prose-slate max-w-none text-slate-700 leading-bold text-lg space-y-6">
          <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-indigo-600 first-letter:mr-3 first-letter:float-left">
            {post.content}
          </p>
          
          {/* Mock secondary paragraphs */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Bottom Footer Details */}
        <footer className="mt-16 pt-8 border-t border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
              DEV
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Written by Engineering Team</p>
              <p className="text-xs text-slate-400">Core Contributors</p>
            </div>
          </div>
        </footer>

      </div>
    </article>
  );
}