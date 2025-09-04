'use client';

import Link from 'next/link';

import { useState, useEffect } from 'react';
import { posts } from './data/posts';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setDarkMode(savedTheme === 'dark');
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <header className="bg-emerald-50 dark:bg-purple-900 shadow-sm">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Blog</h1>
                <p className="text-gray-600 dark:text-gray-300">Developers Blogs</p>
              </div>
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-lg bg-emerald-100 dark:bg-purple-800 hover:bg-emerald-200 dark:hover:bg-purple-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                <span className="text-2xl">{darkMode ? '☀️' : '🌙'}</span>
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <time className="text-sm text-emerald-600 dark:text-purple-400 font-medium">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 hover:text-emerald-600 dark:hover:text-purple-400 transition-colors">
                    <Link href={`/posts/${post.id}`}>{post.title}</Link>
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/posts/${post.id}`}
                    className="inline-flex items-center text-emerald-600 dark:text-purple-400 hover:text-emerald-700 dark:hover:text-purple-300 font-medium transition-colors"
                  >
                    Read more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </main>

        <footer className="bg-emerald-50 dark:bg-purple-900 mt-16">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <p className="text-center text-gray-600 dark:text-gray-300">
              © 2025 Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
