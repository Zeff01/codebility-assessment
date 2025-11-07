"use client"
import Button from "@/components/Button"
import Post from "@/components/Post"
import React, { useEffect, useState } from "react"

// Display a list of blog posts with titles and excerpts
// Add links to individual blog post pages
// Include basic styling

// Create a simple blog with Next.js
// Implement a page that lists blog posts
// Add a page that displays a single blog post
// Create a simple API route to serve the blog data
// Style the application with basic CSS or Tailwind

export default function Home() {
  // State to hold all posts data
  const [posts, setPosts] = useState([])

  // Fetch list of posts from endpoint on mount
  useEffect(() => {
    fetch("api/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.res)
      })
  }, [])

  // Function to scroll to main content
  const scrollToMain = () => {
    const el = document.getElementById("main")
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  // Main non-header content
  const MainContent = () => {
    return (
      <div
        id="hero"
        className="flex w-full p-20 flex-col justify-baseline gap-10 bg-accent border-b-2 border-foreground text-background"
      >
        <h1 className="font-dm text-7xl">Modernize Your Skillset.</h1>
        <p className="font-lg font-light">
          Read articles, develop skills, and become a professional
          <br />
          Start your developer career now!
        </p>
        <Button text={"Start Reading"} onClick={scrollToMain} />
      </div>
    )
  }

  // List of articles/posts below main content header
  const PostList = () => {
    return (
      <div id="main" className="flex justify-between items-center w-full p-10">
        <div className="grid grid-cols-3 gap-10 w-full">
          {posts.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center items-center w-full font-commissioner">
      <MainContent />
      <PostList />
    </div>
  )
}
