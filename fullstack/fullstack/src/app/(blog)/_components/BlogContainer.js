"use client"
import Link from "next/link"
import { anim } from "../layout"
import { motion } from "motion/react"

const MotionLink = motion.create(Link)

export default function BlogContainer({ post }) {
  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
  }

  return (
    <MotionLink
      href={`/${post.id}`}
      {...anim(opacity)}
      className="px-4 py-15 shadow-lg rounded-md items-center hover:scale-105 duration-200 border"
    >
      <h1 className="text-4xl max-sm:text-2xl font-semibold tracking-tight">
        {post.title}
      </h1>
      <p className="tracking-wider max-sm:text-sm">{post.excerpt}</p>
    </MotionLink>
  )
}
