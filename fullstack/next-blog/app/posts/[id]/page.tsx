import BlogPost from "@/components/BlogPost";

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post_id = Number(id);

  return (
    <div className="mt-10 w-fit">
      <BlogPost post_id={post_id} />
    </div>
  );
}
