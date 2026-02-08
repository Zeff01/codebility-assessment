import Link from "next/link";
import { Post } from "@/types";

export const metadata = {
    title: "Post Details",
};

async function getPost(id: string): Promise<Post> {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Post not found");
    }

    return res.json();
}

export default async function PostPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const post = await getPost(id);

    return (
        <div className="max-w-7xl mx-auto px-5 py-8">
            <main className="max-w-3xl">
                <Link
                    href="/"
                    className="text-blue-500 flex items-center gap-2 hover:text-blue-700 transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4"
                        fill="currentColor"
                    >
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                    </svg>
                    Back to home
                </Link>

                <h1 className="text-3xl font-semibold mt-6">{post.title}</h1>
                <p className="text-gray-500 mt-1">{post.date}</p>
                <article className="mt-6 prose">{post.content}</article>
            </main>
        </div>
    );
}
