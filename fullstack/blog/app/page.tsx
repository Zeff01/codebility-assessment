import Link from 'next/link';
import { posts } from '@/data/posts';

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-6 font-sans bg-blue-200">
      <h1 className="text-gray-900 text-3xl font-bold mb-2">My Fullstack Assessment Blog</h1>
      <p className="text-gray-900 mb-6">Welcome to my coding assessment blog!</p>
      
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition border-black">
            <h2 className="text-gray-800 text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-800 mb-2">{post.date}</p>
            <p className="text-gray-700 mb-3">{post.excerpt}</p>
            <Link 
              href={`/posts/${post.id}`} 
              className="text-blue-500 hover:underline font-medium"
            >
              Read More &rarr;
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}