import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../../data/posts.js";

export default function BlogPost({ params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto">
                    {/* Back button */}
                    <div className="mb-8">
                        <Link
                            href="/"
                            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
                        >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Blog
                        </Link>
                    </div>

                    {/* Article */}
                    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <div className="p-8">
                            {/* Date */}
                            <div className="mb-4">
                                <time className="text-sm text-gray-500 dark:text-gray-400">
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </time>
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                {post.title}
                            </h1>

                            {/* Excerpt */}
                            <div className="text-lg text-gray-600 dark:text-gray-300 mb-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                {post.excerpt}
                            </div>

                            {/* Content */}
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                                    {post.content}
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Navigation */}
                    <div className="mt-8 flex justify-between items-center">
                        <Link
                            href="/"
                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            All Posts
                        </Link>

                        <div className="flex gap-4">
                            {id > 1 && (
                                <Link
                                    href={`/posts/${id - 1}`}
                                    className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                                >
                                    Previous
                                </Link>
                            )}

                            {id < posts.length && (
                                <Link
                                    href={`/posts/${id + 1}`}
                                    className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                                >
                                    Next
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Generate static params for all posts
export async function generateStaticParams() {
    return posts.map((post) => ({
        id: post.id.toString(),
    }));
}

// Generate metadata for each post
export async function generateMetadata({ params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
    };
}
