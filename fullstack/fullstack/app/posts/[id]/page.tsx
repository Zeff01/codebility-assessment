import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { posts } from '@/data/posts';

import { ChevronLeft } from 'lucide-react';

export default async function PostPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: idParam } = await params;
  const id = parseInt(idParam);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <div className='container mx-auto max-w-2xl px-4 py-10'>
      <div className='mb-6'>
        <Button asChild variant='ghost' className='pl-0 hover:bg-transparent'>
          <Link href='/' className='flex items-center gap-2'>
            <ChevronLeft size={20} />
            Back to Home
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className='text-muted-foreground mb-2 text-sm'>{post.date}</div>
          <CardTitle className='text-3xl font-extrabold'>
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='prose dark:prose-invert'>
            <p className='leading-7 [&:not(:first-child)]:mt-6'>
              {post.content}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
