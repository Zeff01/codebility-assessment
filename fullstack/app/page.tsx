import Link from "next/link"
import {posts, Post} from "@/data/posts"
import styles from "./page.module.css"

const HomePage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Blog</h1>
        <p className={styles.subtitle}>Welcome to my blog where I share thoughts and tutorials</p>
      </div>

      <div className={styles.postsGrid}>
        {posts.map((post: Post) => (
          <article key={post.id} className={styles.card}>
            <h2 className={styles.cardTitle}>{post.title}</h2>
            <p className={styles.cardDate}>{post.date}</p>
            <p className={styles.cardExcerpt}>{post.excerpt}</p>
            <Link href={`/posts/${post.id}`} className={styles.button}>
              Read More
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}

export default HomePage