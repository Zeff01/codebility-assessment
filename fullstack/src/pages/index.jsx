import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);


  return (
    <div className='max-w-2xl mx-auto p-4'>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      {posts.map((post)=> (
        <div key={post.id} className="mb-6 border rounded-xl hover:shadow">
          <Link href={`/posts/${post.id}`} className='text-xl font-semibold text-blue-600 hover:underline'>
          {post.title}
          </Link>
          <p className="text-gray-600">{post.excerpt}</p>
          <p className="text-gray-400">{post.date}</p>
        </div>
      ))}
    </div>
  );
}
