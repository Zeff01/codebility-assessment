import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type Post } from "@/data/posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.id}`} className="group block">
      <Card className="h-full transition-shadow group-hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">{post.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {post.excerpt}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Badge variant="secondary">{post.date}</Badge>
        </CardContent>
      </Card>
    </Link>
  );
}
