import PostCard from "./components/PostCard"
import posts from "../data/PostData"

const PostsScreen = () => {
    return (
        <>
        <section>
        <h2 className = "text-2xl font-bold self-start">All Posts</h2>
        <p>Read what the world has to say.</p>
      </section>
      <div className = "flex flex-wrap justify-center items-center gap-4">
        {/* Using map() function here to make the repetitive listing of <PostCard /> more efficient */}
        {posts.map((post: any) => {
          return(
            <PostCard key = {post.id} id = {post.id} title = {post.title} excerpt = {post.excerpt}/>
          )
        })}      
      </div>
      </>
    )
}

export default PostsScreen;