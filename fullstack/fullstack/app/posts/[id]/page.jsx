'use client';

// Next.js and React imports
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// Page component to display a single blog post based on URL param `id`
const PostPage = () => {
	// Read the dynamic route parameter (post id) from the URL
	const { id } = useParams();

	// Local component state:
	// - post: will hold the fetched post object (initially an empty array as in original)
	// - loading: tracks fetch status
	const [post, setPost] = useState([]);
	const [loading, setLoading] = useState(true);

	// Fetch the post when `id` changes (or on mount)
	useEffect(() => {
		const fetchPost = async () => {
			// Request post data from the API route for the given id
			const response = await fetch(`/api/posts/${id}`);
			const data = await response.json();

			// Update local state with the fetched data and mark loading complete
			setPost(data);
			setLoading(false);
		};

		fetchPost();
	}, [id]);

	// Render UI:
	// - show loading message while fetching
	// - if fetched post has no id, show the error message (post.error expected)
	// - otherwise show the post content
	return (
		<div className="min-h-screen py-12 px-6">
			<div className="max-w-3xl mx-auto bg-gray-700 p-8 rounded-2xl shadow">
				{loading ? (
					// Loading state
					<p className="text-xl font-semibold text-white">Loading...</p>
				) : !post.id ? (
					// Error / not found state (post expected to include an `error` message)
					<>
						<p className="text-xl font-semibold text-white">{post.error}</p>
						<Link
							href="/"
							className="text-blue-400 hover:text-blue-600 font-medium">
							← Back to Blog
						</Link>
					</>
				) : (
					// Success state: display post fields (title, excerpt, date, content)
					<>
						<h1 className="text-3xl font-bold text-white mb-2">{post.title}</h1>
						<h2 className="text-xl font-medium text-gray-200 mb-2">
							{post.excerpt}
						</h2>
						<p className="text-sm text-gray-400 mb-6">{post.date}</p>
						<p className="text-gray-300 leading-relaxed mb-8">{post.content}</p>
						<Link
							href="/"
							className="text-blue-400 hover:text-blue-600 font-medium">
							← Back to Blog
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default PostPage;
