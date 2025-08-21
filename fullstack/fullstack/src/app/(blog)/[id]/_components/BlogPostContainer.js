"use client"
import Link from "next/link"
import { motion } from "motion/react"
import { anim } from "../../layout"
export default function BlogPostContainer({ post }) {
  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
  }
  return (
    <motion.section className="flex flex-col gap-4 px-2" {...anim(opacity)}>
      <div className="flex flex-col gap-1">
        <h1 className="text-5xl max-sm:text-3xl font-bold tracking-tight">
          {post.title}
        </h1>
        <p className="tracking-wider">{post.excerpt}</p>
      </div>

      <p className="text-lg max-sm:text-sm tracking-widest">{post.content}</p>
      <Link
        href="/"
        className="self-start p-4 max-sm:p-2 bg-black  text-white hover:scale-105 hover:bg-gray-700 duration-200 "
      >
        Return Home
      </Link>
    </motion.section>
  )
}
