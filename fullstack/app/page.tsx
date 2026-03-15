"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { Post } from "@/types/posts";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);

  const fetchPosts = async () => {
    const response = await fetch("/api/posts");
    const result = await response.json();
    setPosts(result);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (!posts) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black font-sans p-6">
        <Card className="w-full max-w-5xl p-8 flex flex-row gap-8">
          {/* Left Half */}
          <div className="flex flex-col items-start gap-6 flex-1">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={80}
              height={24}
              priority
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                Codebility - Assessment
              </h1>
              <p className="text-base sm:text-lg md:text-xl leading-8 text-zinc-600 dark:text-zinc-400">
                Blog posts
              </p>
            </div>
          </div>

          {/* Right Half */}
          <div className="flex items-center justify-center flex-1">
            <Carousel className="w-full max-w-sm">
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <Card className="w-full">
                      <CardHeader>
                        <Skeleton className="h-4 w-2/3" />
                        <Skeleton className="h-4 w-1/2" />
                      </CardHeader>
                      <CardContent>
                        <Skeleton className="aspect-video w-full" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black font-sans p-6">
      <Card className="w-full max-w-5xl p-8 flex flex-row gap-8">
        {/* Left Half */}
        <div className="flex flex-col items-start gap-6 flex-1">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={80}
            height={24}
            priority
          />
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Codebility - Assessment
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-8 text-zinc-600 dark:text-zinc-400">
              Blog posts
            </p>
          </div>
        </div>

        {/* Right Half */}
        <div className="flex items-center justify-center flex-1">
          <Carousel className="w-full max-w-sm">
            <CarouselContent>
              {posts.map((post) => (
                <CarouselItem key={post.id}>
                  <div className="p-1">
                    <Card className="flex flex-col h-96 overflow-hidden">
                      <div className="flex-1 bg-zinc-100 dark:bg-zinc-800" />
                      <CardContent className="flex flex-col gap-1 px-4 pt-4 pb-2">
                        <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 line-clamp-2">
                          {post.title}
                        </span>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2">
                          {post.excerpt}
                        </span>
                      </CardContent>
                      <CardFooter className="px-4 pb-4">
                        <Button variant="secondary" className="w-full">
                          See post
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Card>
    </div>
  );
};

export default Home;
