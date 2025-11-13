"use client"; // Mark this file as a client component

// Import necessary modules
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  // Local state holding the list of posts (initially empty)
  const [posts, setPosts] = useState([]);
  // Loading state to manage loading indicator
  const [loading, setLoading] = useState(true);

  // Fetch posts once on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      // Request posts from the API route
      const response = await fetch('/api/posts');
      const data = await response.json();
      // Update state with fetched data
      setPosts(data);
      // Set loading to false after data is fetched
      setLoading(false);
    };
    fetchPosts();
  },[]) // Empty dependency array -> run once on mount
  
  return (
    <>
      {/* Container */}
      <div className="mx-auto max-w-2xl p-10">
        <h1 className="text-3xl font-bold">Blog list</h1>

        {/* Posts list */}
        <ul className="mt-6 space-y-4 bg-gray-700 p-8 rounded-2xl shadow">
          {loading ? <p className="text-xl font-semibold text-white">Loading...</p> : posts.map((post: { id: number; title: string; excerpt: string }) => (
            <li key={post.id} className="border-b pb-4">
              <h2 className="text-xl font-semibold text-white">{post.title}</h2>
              <p className="text-gray-200">{post.excerpt}</p>
              <Link href={`/posts/${post.id}`} className="text-blue-400 hover:text-blue-600">Read More →</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
