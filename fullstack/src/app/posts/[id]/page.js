"use client"
import Button from "@/components/Button"
import ContentDivider from "@/components/ContentDivider"
import { notFound, useParams, useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"

// Display a single blog post with full content
// Include a back button to return to the home page
// Style the page appropriately

export default function PostID() {
  const params = useParams()
  const router = useRouter()

  // State to store the post/article data
  const [post, setPost] = useState(null)

  // Fetch post/article data based from ID parameter on mount
  useEffect(() => {
    fetch(`/api/posts/${params.id}`)
      .then((res) => {
        // If API response is error, redirect to not found page
        if (res.status === 404 || res.status === 500) {
          router.push("/not-found")
        } else return res.json()
      })
      .then((data) => {
        setPost(data.res)
      })
  }, [params])

  // Display nothing if post is still loading
  if (!post) return

  return (
    <div className="flex flex-col items-center py-20 font-commissioner">
      <div className="w-[40%] flex flex-col">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-5xl">{post.title}</h1>
          <p className="font-light opacity-70">{post.excerpt}</p>
        </div>
        <div className="flex flex-row my-4 items-center gap-4">
          <p className="text-md">Writen by {post.author}</p>
          <p className="text-xs opacity-80">·</p>
          <p className="text-xs opacity-80">{post.date}</p>
        </div>
        <ContentDivider />
        <p className="flex">{post.content}</p>
        <div className="flex w-full justify-end mt-20">
          <Button text={"More Topics"} onClick={() => router.push("/")} />
        </div>
      </div>
    </div>
  )
}
