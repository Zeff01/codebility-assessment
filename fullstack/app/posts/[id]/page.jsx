'use client';

import { posts } from '@/app/data/posts';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { useState, useEffect } from 'react';

export default function PostPage() {
  const params = useParams();
  const [darkMode, setDarkMode] = useState(false);

  const postId = params?.id ? parseInt(params.id) : null;
  const post = postId ? posts.find((p) => p.id === postId) : null;

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setDarkMode(savedTheme === 'dark');
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  if (!post) {
    return (
      <div className={darkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Post Not Found
            </h1>
            <Link href="/" className="text-emerald-600 dark:text-purple-400 hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <header className="bg-emerald-50 dark:bg-purple-900 shadow-sm">
          <div className="max-w-4xl mx-auto px-6 py-6">
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className="flex items-center text-emerald-600 dark:text-purple-400 hover:text-emerald-700 dark:hover:text-purple-300 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
                Back to Blog
              </Link>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-emerald-100 dark:bg-purple-800 hover:bg-emerald-200 dark:hover:bg-purple-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                <span className="text-xl">{darkMode ? '☀️' : '🌙'}</span>
              </button>
            </div>
          </div>
        </header>

        <article className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
            <header className="mb-8">
              <time className="text-emerald-600 dark:text-purple-400 font-medium mb-4 block">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                {post.title}
              </h1>
            </header>

            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {post.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="inline-flex items-center text-emerald-600 dark:text-purple-400 hover:text-emerald-700 dark:hover:text-purple-300 font-medium transition-colors"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>
                  All Posts
                </Link>
                <div className="text-gray-500 dark:text-gray-400 text-sm">Article #{post.id}</div>
              </div>
            </footer>
          </div>
        </article>
      </div>
    </div>
  );
}
