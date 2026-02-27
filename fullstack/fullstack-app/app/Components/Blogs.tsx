"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Link from "next/link";

type Blog = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
};

export default function Blogs() {
    const [posts, setPosts] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const { getAllBlogs } = await import("../posts/blog");
            const data = await getAllBlogs();
            setPosts(data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center w-full space-y-6">
            {posts.map((blog) => (
                <Link key={blog.id} href={`/posts/${blog.id}`} className="w-full max-w-2xl block hover:no-underline hover:scale-105 transition-transform duration-300">
                    <div className="card w-full max-w-2xl border border-[#584026]/20 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-6 rounded-xl text-black">
                        <div className="flex flex-row gap-4">
                            
                            {/* Profile Icon Section */}
                            <div className="flex justify-start">
                                <div className="bg-[#846038]/10 rounded-full flex items-center justify-center pa-5 w-12 h-12">
                                    <FontAwesomeIcon icon={faCircleUser} className="text-[#846038] text-4xl" />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex flex-col space-y-2">
                                <div>
                                    <h2 className="text-xl font-bold text-[#584026] leading-tight">
                                        {blog.title}
                                    </h2>
                                    <p className="text-sm font-medium text-[#846038]/70 mt-1 uppercase tracking-wider">
                                        {new Date(blog.date).toLocaleDateString()}
                                    </p>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    {blog.excerpt}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}