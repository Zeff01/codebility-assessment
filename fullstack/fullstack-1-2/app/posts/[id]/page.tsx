import { posts } from "@/data/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/">
        <Button variant="ghost" size="sm">
          &larr; Back to posts
        </Button>
      </Link>

      <article className="mt-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
          <div className="mt-3 flex items-center gap-3">
            <Badge variant="secondary">{post.date}</Badge>
          </div>
          <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
        </header>

        <hr className="my-6 border-border" />

        <div className="prose prose-neutral max-w-none text-foreground leading-7">
          {post.content}
        </div>
      </article>
    </main>
  );
}
