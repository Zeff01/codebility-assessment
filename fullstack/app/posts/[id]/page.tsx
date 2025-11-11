import Link from "next/link"
import { posts, Post } from "@/data/posts"

interface PostPageProps {
    params: {
        id: string
    }
}

const PostPage = async ({params}: PostPageProps) => {
    const { id } = await params.id

    const post: Post | undefined = posts.find(p => p.id === Number(id))
    if (!post) return <p>Post not found</p>

    return (
        <main style={{ padding: "2rem" }}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link href="/">← Back to Home</Link>
        </main>
    )
}

export default PostPage