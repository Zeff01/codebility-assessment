import Link from "next/link";
import { Post } from "../types";

export default function PostCard({ post }: { post: Post }) {
	return (
		<Link
			key={post.id}
			href={`/posts/${post.id}`}
			className="bg-zinc-100 text-black dark:bg-zinc-50 shadow-sm dark:shadow-none font-sans p-4 rounded hover:scale-105 transition-all duration-200"
		>
			<header>
				<b className="text-2xl">{post.title}</b>
			</header>

			<main>
				<p>{post.excerpt}</p>
			</main>

			<footer>
				<small>Posted {post.date}</small>
			</footer>
		</Link>
	)
}
