import Link from "next/link"
import { notFound } from "next/navigation"
import { posts } from "@/data/posts"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const {id} =await params
  const post = posts.find((p) => p.id === Number.parseInt(id))

  //make sure post property is not undefined
  if (!post) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-slate-600 hover:text-blue-600 font-sans transition-colors duration-200"
          >
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            ← Back
          </Link>
        </div>

        <article className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
          <header className="mb-12">
            <h1 className="text-4xl font-serif font-bold text-slate-800 mb-4 leading-tight drop-shadow-sm">
              {post.title }
            </h1>
            <div className="text-blue-600 font-sans font-medium">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 font-sans leading-relaxed text-lg whitespace-pre-line">{post.content}</p>
          </div>
        </article>

        <div className="mt-16 pt-8 border-t border-slate-200">
          <Link
            href="/"
            className="inline-flex items-center text-slate-600 hover:text-blue-600 font-sans transition-colors duration-200"
          >
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            ← All Posts
          </Link>
        </div>
      </div>
    </div>
  )
}
