import BlogContainer from "./_components/BlogContainer"

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/posts")
  const posts = await res.json()
  return (
    <div className="lg:w-[1280px] px-2 h-full">
      <section className="flex flex-col gap-4">
        {posts.map((post) => (
          <BlogContainer post={post} key={post.id} />
        ))}
      </section>
    </div>
  )
}
