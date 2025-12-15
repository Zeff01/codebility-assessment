import PostCard from "./components/PostCard";
import { GetPosts } from "./posts";

export default function Home() {
	const posts = GetPosts()

	return (
		<div className="flex min-h-screen items-center justify-center">
			<main className="flex flex-col gap-4">
				<h1 className="text-4xl mb-2"><b>My Simple Blog.</b></h1>

				{
					posts.map(p => (
						<PostCard post={p} key={p.id}></PostCard>
					))
				}
			</main>
		</div>
	);
}
