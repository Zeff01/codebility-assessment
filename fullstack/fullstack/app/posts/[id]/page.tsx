import { getPage } from "@/data/posts";
import type { Post } from "@/app/types/post";
import type { Props } from "@/app/types/props";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home({ params }: Props) {
  const { id } = await params;
  const blog: Post | undefined = await getPage(id);
  return (
    <main className="">
      <div className="">
        <div className="title-container">
          <h1 className="title">{blog?.title}</h1>
        </div>
        <div className="content-container p-20">
          <p className="desc">{blog?.content}</p>
          <p className="time">{blog?.date}</p>
          <div className='flex p-20'>
            <Button variant="default">
              <Link href="/">Previous</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
