"use client";

import { useParams, useRouter } from "next/navigation";
import { posts } from "@/data/posts";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PostPage() {
    const { id } = useParams();

    const post = posts.find((p) => p.id === Number(id));

    if (!post) {
        return (
            <div className="min-h-dvh flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Post not found</h1>
                    <Link
                        href="/"
                        className="text-blue-400 hover:underline flex items-center gap-2 justify-center"
                    >
                        <ArrowLeft size={16} />
                        <span>Back to Home</span>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-dvh flex">
            <div className="flex-1">
                <div className="p-3 sm:p-5 bg-white dark:bg-black/50">
                    <Link
                        href="/"
                        className="text-blue-400 hover:underline flex items-center gap-2 mb-4"
                    >
                        <ArrowLeft size={16} />
                        <span>Back to Home</span>
                    </Link>
                    <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                    </div>
                </div>

                <div className="p-2 sm:p-3 md:p-5">
                    <div className="bg-white dark:bg-black/50 p-4 sm:p-6 rounded-lg">
                        <p className="text-gray-800 dark:text-gray-300 text-sm leading-8 sm:leading-12">
                            {post.content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
