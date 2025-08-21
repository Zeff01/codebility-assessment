import Link from "next/link"
import BlogPostContainer from "./_components/BlogPostContainer"
import { notFound } from "next/navigation"

export default async function BlogPost({ params }) {
  const { id } = await params
  const res = await fetch(`http://localhost:3000/api/posts/${id}`)

  if (!res.ok) {
    notFound()
  }

  const post = await res.json()
  return (
    <div className="lg:w-[1280px] max-lg:w-full p-2 h-full">
      <BlogPostContainer post={post} />
    </div>
  )
}
