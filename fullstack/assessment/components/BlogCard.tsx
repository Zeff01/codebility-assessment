import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { formatDistanceToNow } from "date-fns";

import React, { ComponentProps } from "react";
import { Post } from "@/types/posts";
const BlogCard = ({
  content,
  date,
  excerpt,
  id,
  title,
  ...rest
}: Post & Omit<ComponentProps<"div">, "id">) => {
  return (
    <Card
      className="lg:max-w-[300px] shadow-lg border-2 hover:border-blue-400 duration-150 transition-colors"
      {...rest}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-xs">
          posted {formatDistanceToNow(date)}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-md">{content}</CardContent>
    </Card>
  );
};

export default BlogCard;
