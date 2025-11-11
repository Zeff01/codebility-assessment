import Link from "next/link"
import { posts, Post } from "@/data/posts"
import { use } from "react"

interface PostPageProps {
    params: Promise<{
        id: string
    }>
}


const PostPage = ({ params }: PostPageProps) => {
    const { id } = use(params)
    const postId = parseInt(id, 10)

    const post: Post | undefined = posts.find(p => p.id === postId)
    if (!post) return <p>Post not found</p>

    return (
        <main style={{ padding: "2rem" }}>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
            <p>{post.content}</p>
            <p>{post.date}</p>
            <Link href="/">← Back to Home</Link>
        </main>
    )
}

export default PostPage