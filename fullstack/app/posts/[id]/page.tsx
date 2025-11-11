import Link from "next/link"
import { posts, Post } from "@/data/posts"
import { use } from "react"
import styles from "./page.module.css"

interface PostPageProps {
    params: Promise<{
        id: string
    }>
}


const PostPage = ({ params }: PostPageProps) => {
    const { id } = use(params)
    const postId = parseInt(id, 10)

    const post: Post | undefined = posts.find(p => p.id === postId)
    if (!post) return (
        <main className={styles.container}>
            <div className={styles.notFound}>
                <h1>Post not found</h1>
                <p>The post you're looking for doesn't exist.</p>
                <Link href="/" className={styles.backButton}>← Back to Home</Link>
            </div>
        </main>
    )

    return (
        <main className={styles.container}>
            <article className={styles.post}>
                <Link href="/" className={styles.backButton}>← Back to Home</Link>

                <header className={styles.header}>
                    <h1 className={styles.title}>{post.title}</h1>
                    <p className={styles.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </header>

                <p className={styles.excerpt}>{post.excerpt}</p>

                <div className={styles.content}>
                    <p>{post.content}</p>
                </div>
            </article>
        </main>
    )
}

export default PostPage