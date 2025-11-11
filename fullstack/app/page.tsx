import Link from "next/link"
import {posts, Post} from "@/data/posts"

const HomePage = () => {
  return (
    <main>
      <h1>My Blog</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id} style={{marginBottom: "1rem"}}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link href={`/posts/${post.id}`}>Read more</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default HomePage