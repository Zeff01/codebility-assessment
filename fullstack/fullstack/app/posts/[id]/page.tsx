import Link from 'next/link'
import { getPostById, posts } from '@/data/posts'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: String(post.id),
  }))
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params
  const post = getPostById(Number(params.id))

  if (!post) {
    return {
      title: 'Post not found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function PostPage(props: PageProps) {
  const params = await props.params
  const post = getPostById(Number(params.id))

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 mb-4"
          >
            <span className="mr-2">←</span>
            Back to posts
          </Link>
          <h1 className="text-4xl font-bold text-slate-900">{post.title}</h1>
          <p className="mt-3 text-sm font-semibold text-slate-500 uppercase tracking-wide">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </header>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none rounded-lg bg-white p-8 shadow-md">
          <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-wrap">
            {post.content}
          </p>
        </div>

        {/* Back to posts link */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to all posts
          </Link>
        </div>
      </article>
    </main>
  )
}
