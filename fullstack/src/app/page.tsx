"use client";

import { useState } from "react";
import { GetPosts } from "./action/post";
import Link from "next/link";

interface Post {
    id: number;
    title: string;
    excerpt: string;
}

export default function Home() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [msg, setMsg] = useState("");

    const fetch = async () => {
        try {
            const res = await GetPosts();

            if (!res.success) {
                return setMsg(res?.message);
            }

            setPosts(res?.post);
        } catch (error) {
            console.log("error in fetch post");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="shadow-xl size-[400px]  border rounded-xl p-4 flex flex-col  items-center justify-around">
                <div className="p-2 flex flex-col ">
                    {posts.map((post, index) => (
                        <Link key={index} href={`/post/${post.id}`}>
                            <div className="mb-4 hover:bg-slate-300 hover:cursor-pointer">
                                <h2 className="text-lg text-slate-950 font-bold">
                                    {post.title}
                                </h2>
                                <p className="text-md text-gray-900">
                                    {post.excerpt}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {msg && <p className="text-red-500">{msg}</p>}

                <button onClick={fetch} className=" bg-sky-600 p-2 rounded-md">
                    fetch post
                </button>
            </div>
        </div>
    );
}
