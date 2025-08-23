// Import Link for navigation
import Link from 'next/link';

// Import posts data
import { posts } from '../../../data/posts';

// Import notFound for handling missing posts
import { notFound } from "next/navigation";

export default function Post({ params }) {
  // Find the post that matches the id from URL
  const post = posts.find(p => p.id === Number(params.id));

  // If no post found, show 404 page
  if (!post) {
    return notFound(); 
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Button to go back to Home */}
      <Link 
        href="/" 
        className="inline-block mb-4 px-4 py-2 bg-red-500 text-white rounded-lg transition"
      >
        Back to Home
      </Link>

      {/* Display Post Title and Content */}
      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 leading-relaxed">{post.content}</p>
      </div>
    </div>
  );
}
