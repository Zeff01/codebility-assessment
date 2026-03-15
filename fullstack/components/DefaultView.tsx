import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DefaultViewProps } from "@/types/DefaultViewProps";

const DefaultView = ({ posts, router }: DefaultViewProps) => {
  return (
    <Card className="w-full max-w-5xl h-125 p-8 flex flex-row gap-8">
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
                      <Button
                        className="w-full bg-zinc-900 text-zinc-50 hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                        onClick={() => router.push(`/posts/${post.id}`)}>
                        See post →
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
  );
};

export default DefaultView;
