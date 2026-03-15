import { Button } from "@/components/ui/button";
import Link from "next/link";

const Post = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div>
      <h1>Post ID: {id}</h1>
      <Link href={"/"}>
        <Button variant={"secondary"}>Back</Button>
      </Link>
    </div>
  );
};

export default Post;
