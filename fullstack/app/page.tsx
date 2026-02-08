import PostCard from "@/components/PostCard";
import { Post } from "@/types";

export const metadata = {
    title: "Next.js Blog",
};

export default async function Home() {
    const res = await fetch("http://localhost:3000/api/posts", {
        cache: "no-store",
    });

    const posts: Post[] = await res.json();

    return (
        <div className="max-w-7xl mx-auto px-5 py-8">
            <main className="max-w-7xl">
                <header className="mb-6">
                    <h1 className="text-3xl font-semibold">Next.js Blog</h1>
                    <p className="mt-2 text-gray-700">
                        A collection of thoughts, tips, and insights about
                        building applications with Next.js.
                    </p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {posts.map((post) => (
                        <PostCard
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            excerpt={post.excerpt}
                            date={post.date}
                        />
                    ))}
                </section>
            </main>
        </div>
    );
}
