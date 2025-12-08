import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { posts } from "../../data/posts";

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <header className="">
          <div className="mx-auto max-w-4xl px-8 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Blog</h1>
          </div>
        </header>
        
        <div className="min-h-screen flex items-center justify-center p-8">
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>Post not found</CardTitle>
            </CardHeader>
            <CardContent>
              <Link href="/" className="text-sm text-primary hover:underline">
                ← Back to home
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="">
        <div className="mx-auto max-w-4xl px-8 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Blog</h1>
        </div>
      </header>

      <main className="mx-auto max-w-3xl p-8">
        <Link href="/" className="inline-flex items-center text-sm text-primary hover:underline mb-6">
          ← Back to home
        </Link>
        
        <Card className="overflow-hidden">
          {post.image && (
            <img src={post.image} alt={post.title} className="w-full h-80 object-cover" />
          )}
          <CardHeader>
            <CardTitle className="text-3xl">{post.title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">{post.date}</p>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed whitespace-pre-wrap">{post.content}</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
