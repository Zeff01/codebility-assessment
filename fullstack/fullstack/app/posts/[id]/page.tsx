import { notFound } from "next/navigation"
import Link from "next/link"
import { GetPostById } from "@/app/posts"

export default async function Post({
	params
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params

	const post = GetPostById(Number(id))
	if(!post) {
		return notFound()
	}

	return (
		<div className="p-4 mx-auto w-full max-w-md">
			<nav className="mb-4">
				<Link
					key="home"
					href="/"
					className="underline"
				>
					Back to Home
				</Link>
			</nav>

			<main>
				<header className="mb-2">
					<h1 className="text-3xl"><b>{ post.title }</b></h1>
					<small>Posted { post.date }</small>
				</header>

				<main>
					{ post.content }
				</main>
			</main>
		</div>
	)
}
