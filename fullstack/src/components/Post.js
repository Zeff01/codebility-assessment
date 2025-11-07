"use client"
import Link from "next/link"
import React from "react"

// Data component for each post in the posts list on the home page
export default function Post({ data }) {
  return (
    <Link
      className="group cursor-pointer rounded-2xl p-4 transition-transform duration-200 transform-gpu hover:bg-secondary/15 hover:shadow-md hover:scale-[1.01] hover:-translate-y-0.5"
      href={"/posts/" + data.id}
    >
      <div className="flex">
        <p className="font-bold text-2xl text-foreground/30 mr-5">{data.id}</p>
        <div className="flex flex-col gap-1">
          <p className="font-bold text-left text-lg">{data.title}</p>
          <p className="text-xs">{data.excerpt}</p>
          <p className="opacity-50 text-xs">{data.date}</p>
        </div>
      </div>
    </Link>
  )
}
