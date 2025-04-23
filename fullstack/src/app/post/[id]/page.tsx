"use client";

import { use, useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { SinglePost } from "@/app/action/post";

interface Post {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    date: string;
}

const page = ({ params }: { params: Promise<{ id: number }> }) => {
    const [posts, setPosts] = useState<Post | null>(null);
    const [msg, setMsg] = useState("");

    const { id } = use(params);

    const router = useRouter();

    useEffect(() => {
        const fetch = async () => {
            const res = await SinglePost(id);

            if (!res.success) {
                return setMsg(res?.message);
            }

            setPosts(res?.post);
        };
        fetch();
    }, [id]);

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="shadow-xl size-[400px]  border rounded-xl p-4 flex flex-col  items-center justify-around">
                <div className="p-2 flex flex-col ">
                    <div className="mb-4 hover:bg-slate-300  flex flex-col gap-4  hover:cursor-pointer">
                        <h1 className="text-gray-800 text-sm">
                            id {posts?.id}
                        </h1>
                        <h2 className="text-lg text-slate-950 font-bold">
                            {posts?.title}
                        </h2>
                        <p className="text-md text-gray-900">
                            {posts?.excerpt}
                        </p>
                        <p className="text-md text-gray-900">
                            {posts?.content}
                        </p>
                        <p className="text-md text-gray-900">{posts?.date}</p>
                    </div>
                </div>

                {msg && <p className="text-red-500">{msg}</p>}

                <button
                    onClick={() => router.push("/")}
                    className=" bg-sky-600 p-2 rounded-md"
                >
                    back
                </button>
            </div>
        </div>
    );
};

export default page;
