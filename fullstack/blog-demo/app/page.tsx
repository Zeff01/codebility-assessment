"use client";

import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Post {
    id: string;
    title: string;
    excerpt: string;
    date: string;
}

export default function HomePage() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch("/api/posts");
                const data: Post[] = await res.json();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className="min-h-dvh flex">
            <div className="flex-1">
                <div className="p-3 sm:p-5 bg-white dark:bg-black/50">
                    <h1 className="text-2xl font-bold">Next JS Blog</h1>
                    <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
                        Next JS Blogs for Modern Web Development
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-2 sm:mt-5 px-2 sm:px-5">
                    {posts.map((post) => {
                        return (
                            <div
                                className="card bg-white dark:bg-black/50 p-3 md:p-4"
                                key={post.id}
                            >
                                <div>
                                    <h1 className="font-bold sm:text-xl mb-1 md:mb-2">
                                        {post.title}
                                    </h1>
                                    <p className="text-xs sm:text-sm mb-7 text-gray-800 dark:text-gray-300">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between ">
                                    <span className="flex items-center gap-2 text-xs text-gray-800 dark:text-gray-300">
                                        <Calendar size={15} />
                                        <span>{post.date}</span>
                                    </span>

                                    <Link
                                        href={`posts/${post.id}`}
                                        className="flex items-center justify-between gap-2 text-blue-400 hover:underline"
                                    >
                                        <span className="text-sm">
                                            Read More
                                        </span>
                                        <ArrowRight size={15} />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
