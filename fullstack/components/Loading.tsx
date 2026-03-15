import Image from "next/image";
import { Card, CardHeader, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Skeleton } from "./ui/skeleton";

const Loading = () => {
  return (
    <div>
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
};

export default Loading;
