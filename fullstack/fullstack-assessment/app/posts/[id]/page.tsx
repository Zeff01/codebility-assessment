import { notFound } from 'next/navigation';
import Link from 'next/link';
import { posts } from '../../../data/post';

interface PostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  // IMPORTANT: await the params Promise
  const { id } = await params;
  const post = posts.find(p => p.id === parseInt(id));
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header with Back Button - Enhanced */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto py-4 px-4">
          <Link 
            href="/" 
            className="group inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-200"
          >
            <svg 
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content - Enhanced */}
      <main className="max-w-4xl mx-auto py-12 px-4">
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12">
            <div className="text-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white backdrop-blur-sm">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
                {post.title}
              </h1>
              <div className="w-20 h-1 bg-white/30 mx-auto rounded-full"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="px-8 py-12">
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Decorative divider */}
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-500 text-sm">
                Thank you for reading! 📖
              </p>
            </div>
          </div>
        </article>

       
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200/50 mt-16">
        <div className="max-w-4xl mx-auto py-6 px-4 text-center">
          <p className="text-gray-500 text-sm">Built with ❤️ using Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}