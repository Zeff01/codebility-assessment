import React from 'react'
import Link from 'next/link'
import { Post } from '@/types'

type CardProps = {
  post: Post
}
const Card = ({post} : CardProps) => {
  return (
    <Link href={`/post/${post.id}`} className='card'>
      <div className="space-y-2">
                  <p className="font-bold">{post.title}</p>
                  <p>{post.excerpt}...</p>

              </div>

              <p className="text-right text-xs">{
                new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: '2-digit',
                })}
      </p>

    </Link>
  )
}

export default Card