import Link from "next/link";
import { posts } from "@/data/posts";

interface Props {
    params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: Props) {
    const { id } = await params;
    const post = posts.find((p) => p.id === Number(id));

    if (!post) {
        return (
            <main className="max-w-3x1 mx-auto px-4 py-10">
                <p className="text-red-500">Post not found.</p>
                <Link href="/" className="text-blue-500 hover:underline">
                    Back to Home.
                </Link>
            </main>
        );
    }
    return (
        <main className="max-w-3x1 mx-auto px-4 py-10">
            <Link href="/" className="text-blue-500 hover:underline">
                Back to home.
            </Link>
            <h1  className="text-4x1 font-bold mt-4 mb-2">{post.title}</h1>
            <p className="text-gray-400 text-sm mb-6">{post.date}</p>
            <p className="text-gray-400 leading-relaxed">{post.content}</p>
        </main>
    );
}