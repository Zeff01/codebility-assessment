import { postById } from '@/axios-actions/posts'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function Post({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params

    const post = await postById(id)

    if (!post) return notFound()

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription className="italic">{post.excerpt}</CardDescription>
            </CardHeader>
            <CardContent>{post.content}</CardContent>
            <CardFooter className="flex-col gap-2">
                <Button className="w-full" variant={'outline'} asChild>
                    <Link href={'/'}>Back To Home</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
