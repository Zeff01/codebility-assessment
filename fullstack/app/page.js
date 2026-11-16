
import { posts } from "../data/posts"

export default function Home() {
 return(
  <div>
    <h1 className="Header">
      Latest Posts
    </h1>
    <div>
      {posts.map((post) => {
        return( 
        <div key={post.id}>
          <h2 className="title">{post.title}</h2>
          <p className="excerpt">{post.excerpt}</p>
        </div> );
      })}
    </div>
  </div>
 );
}
