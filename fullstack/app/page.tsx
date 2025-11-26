'use client'

import Link from "next/link"
import Image from "next/image"
import { posts } from "@/data/posts"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import ClickSpark from "@/components/ui/ClickSpark"
import GradientText from "@/components/GradientText"

export default function Home() {
  
  const words = [
    {
      text: "Kurt",
      className: "text-blue-500"
    },
    {
      text: "Personal",
      className: "text-blue-500"
    },
    {
      text: "Blog",
      className: "text-blue-500"
    }
  ]
  
  return (
    <div className="min-h-screen bg-slate-200 px-8 py-8 mx-auto">
      <ClickSpark>
      <h1 className="justify-items-center font-bold text-4xl text-blue-800 mb-12">
      <TypewriterEffectSmooth words={words} />
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden shadow-md">
            
            {post.image && (
              <div className="relative w-full h-80">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <CardHeader>
            <GradientText
              colors={["#40ffaa", "#4079ff"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              <CardTitle>{post.title}</CardTitle>
              </GradientText>
              <CardDescription>{post.excerpt}</CardDescription>
            </CardHeader>

            <CardFooter>
              <Link
                href={`/posts/${post.id}`}
                className="text-blue-600 font-medium hover:text-blue-900"
              >
                Read More ⇢
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      </ClickSpark>
    </div>
  )
}
