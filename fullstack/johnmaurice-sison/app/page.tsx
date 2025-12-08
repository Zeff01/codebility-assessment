import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { posts } from "./data/posts";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="">
        <div className="mx-auto max-w-4xl px-8 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Blog</h1>
        </div>
      </header>

      <main className="mx-auto max-w-4xl p-8">
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link key={post.id} href={`/posts/${post.id}`}>
              <Card className="overflow-hidden">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
