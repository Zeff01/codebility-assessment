import { posts } from "@/data/posts";
import { ButtonToHome } from './client'

export function generateStaticParams() {
  return posts.map(val => ({id: String(val.id)}))
}
export const dynamicParams = false

export default async function Blog({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blogPost: BlogPostsDataObject = posts[Number(id) - 1];

  return (
    <main
      className='p-4 max-w-screen-lg mx-auto'
    >

      <div className="text-center py-10">
        <p>{blogPost.date}</p>
        <h1
          className="font-bold text-5xl"
        >{blogPost.title}</h1>

        <p
          className="text-xl p-2"
        >{blogPost.excerpt}</p>
      </div>

      <p
        style={{
          minHeight: '200px'
        }}
      >{blogPost.content}</p>

      <ButtonToHome />

    </main>
  )
}
