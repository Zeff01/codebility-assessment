import Link from "next/link"
import { posts } from "../data/posts"

export default function Home() {
 return(
  <div>
    <h1 className="Header">
      Latest Posts
    </h1>
    <div>
      {posts.map((post) => {
      return (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <div>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </div>
        </Link>
        );
    })}
    </div>
  </div>
 );
}
