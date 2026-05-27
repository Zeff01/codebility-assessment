import Link from 'next/link';
import { posts } from '../data/post';


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto py-8 px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-10">
              My Next.js Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exploring the world of Next.js, one post at a time
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-12 px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Latest Posts</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-2 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article 
              key={post.id} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Decorative header bar */}
              <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              
              <div className="p-6">
                {/* Date badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="text-gray-400 text-sm">#{post.id}</span>
                </div>
                
                {/* Title */}
                <Link href={`/posts/${post.id}`}>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                
                {/* Excerpt */}
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Read more link */}
                <Link 
                  href={`/posts/${post.id}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-200"
                >
                  Read more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200/50 mt-16">
        <div className="max-w-6xl mx-auto py-8 px-4 text-center">
          <p className="text-gray-600">Built with ❤️ using Next.js 15 & Tailwind CSS</p>
          <p className="text-sm text-gray-500 mt-2">© 2025 My Next.js Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}