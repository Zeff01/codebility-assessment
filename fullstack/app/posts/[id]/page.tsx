import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

interface PostPageProps {
    params: Promise<{ id: string }>;
}

const getCategory = (id: number) => {
    const categories: Record<number, string> = {
        1: "Tutorial",
        2: "Design System",
        3: "React Core",
        4: "Architecture"
    };
    return categories[id] || "Engineering";
};

const getReadingTime = (id: number) => {
    const times: Record<number, string> = {
        1: "4 min read",
        2: "3 min read",
        3: "5 min read",
        4: "6 min read"
    };
    return times[id] || "3 min read";
};

export default async function PostPage({ params }: PostPageProps) {
    const { id } = await params;
    const postId = parseInt(id, 10);
    const post = posts.find((p) => p.id === postId);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#fafafa] dark:bg-[#0c0c0e] text-zinc-900 dark:text-zinc-100 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800 flex flex-col justify-between">
            <div>
                <header className="border-b border-zinc-200/60 dark:border-zinc-800/60 bg-white/70 dark:bg-[#0c0c0e]/70 backdrop-blur-md sticky top-0 z-50">
                    <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
                        <Link
                            href="/"
                            className="group flex items-center text-sm font-semibold text-zinc-550 dark:text-zinc-450 hover:text-zinc-900 dark:hover:text-white transition-colors"
                        >
                            <svg
                                className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Journal
                        </Link>
                        <div className="flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500 font-medium uppercase tracking-wider">
                            <span>Codebility</span>
                            <span>/</span>
                            <span>Post</span>
                        </div>
                    </div>
                </header>

                <main className="max-w-3xl mx-auto px-6 py-16">
                    <article>
                        <header className="mb-10">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200/30 dark:border-zinc-700/30">
                                    {getCategory(post.id)}
                                </span>
                                <span className="text-xs text-zinc-450 dark:text-zinc-500">{getReadingTime(post.id)}</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white leading-tight mb-6">
                                {post.title}
                            </h1>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-zinc-900 dark:bg-zinc-105 flex items-center justify-center text-white dark:text-zinc-900 font-semibold text-sm">
                                    AS
                                </div>
                                <div className="text-xs">
                                    <p className="font-semibold text-zinc-800 dark:text-zinc-200">Aldrei Santua</p>
                                    <p className="text-zinc-400 dark:text-zinc-500">
                                        Published on {new Date(post.date).toLocaleDateString("en-US", {
                                            month: "long",
                                            day: "numeric",
                                            year: "numeric",
                                        })}
                                    </p>
                                </div>
                            </div>
                        </header>

                        <div className="border-t border-zinc-200 dark:border-zinc-800 my-8"></div>

                        <div className="text-zinc-750 dark:text-zinc-350 text-lg leading-relaxed space-y-6 font-normal">
                            <p className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-zinc-900 dark:first-letter:text-white first-letter:mt-1">
                                {post.content}
                            </p>

                            <p>
                                In web development, structuring and rendering content correctly can have a major impact on search engine optimization (SEO), performance, and user experience. Next.js provides the tools to build fully optimized static or dynamic web applications with ease.
                            </p>
                            <p>
                                By utilising standard techniques such as Route Handlers and React Server Components, you can fetch and serve your site's data quickly without incurring additional client-side bundle sizes. Try adding more posts to the data file to see how dynamic pages and routing handle content growth!
                            </p>
                        </div>
                    </article>
                </main>
            </div>

            <footer className="border-t border-zinc-200/60 dark:border-zinc-800/60 mt-32 py-12 bg-white dark:bg-[#0c0c0e]">
                <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-zinc-400 dark:text-zinc-500 text-xs gap-4">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-zinc-700 dark:text-zinc-300">Codebility Journal</span>
                        <span>•</span>
                        <span>Assessment Submission</span>
                    </div>
                    <Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                        Back to Journal
                    </Link>
                </div>
            </footer>
        </div>
    );
}