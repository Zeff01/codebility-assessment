import { postLists } from '@/axios-actions/posts'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item'
import Link from 'next/link'

export default async function Home() {
    const posts = await postLists()

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>POSTS</CardTitle>
                <CardDescription className="italic">Lists of Posts</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex w-full flex-col gap-6">
                    {posts.map((post) => (
                        <Item key={post.id} variant="outline">
                            <ItemContent>
                                <ItemTitle>{post.title}</ItemTitle>
                                <ItemDescription>{post.excerpt}</ItemDescription>
                            </ItemContent>
                            <ItemActions>
                                <Button variant="outline" size="sm" asChild>
                                    <Link href={`/posts/${post.id}`}>View Post</Link>
                                </Button>
                            </ItemActions>
                        </Item>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
