import BlogCard from "@/components/blog-card"
import { posts } from "@/data/posts"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <header className="mb-16">
          <h1 className="text-5xl font-serif font-bold text-slate-800 mb-6 leading-tight drop-shadow-sm">
            Personal Blog
          </h1>
          <p className="text-lg text-slate-600 font-sans">
            Random thoughts, tutorials, and things I've learned along the way
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div key={post.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <BlogCard id={post.id} title={post.title} excerpt={post.excerpt} date={post.date} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
