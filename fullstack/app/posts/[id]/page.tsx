import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Post } from "@/types/posts";
import Link from "next/link";

const PostPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const response = await fetch(`http://localhost:3000/api/posts/${id}`);
  const post: Post = await response.json();

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black font-sans p-16">
      <Card className="w-full max-w-5xl h-125 p-8 flex flex-row gap-8">
        {/* Left Half */}
        <div className="flex flex-col justify-between flex-1 gap-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              {post?.title}
            </h1>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              {post?.date}
            </p>
          </div>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-8">
            {post?.excerpt}
          </p>
          <Link href={"/"}>
            <Button className="bg-zinc-900 text-zinc-50 hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 px-6">
              ← Back
            </Button>
          </Link>
        </div>

        {/* Right Half */}
        <div className="flex-1">
          <Card className="h-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-8">
                {post?.content}
              </p>
            </CardContent>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default PostPage;
