import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { posts } from '@/data/posts';

export default function HomePage() {
  return (
    <div className='container mx-auto px-4 py-10'>
      <h1 className='mb-8 text-center text-4xl font-bold'>My Blog</h1>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {posts.map((post) => (
          <Card key={post.id} className='flex h-full flex-col'>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent className='flex-grow'>
              <p className='text-muted-foreground'>{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant='outline' className='w-full'>
                <Link href={`/posts/${post.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
