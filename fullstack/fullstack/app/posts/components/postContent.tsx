import { HomeButton } from "./homeButton";
import { NextButton } from "./nextButton";

export function PostContent({id, title, excerpt, content, date }: { id: number; title: string; excerpt: string; content: string; date: string }) {
    return (
        <article className="flex flex-col max-w-3xl mx-auto my-12 px-4 md:px-8">
            {/* Header Section */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-8 mb-8">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
                    {title}
                </h1>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                    Published on <span className="font-semibold">{new Date(date).toLocaleDateString()}</span>
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 italic">{excerpt}</p>
            </div>

            {/* Content Section */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                <div className="text-gray-800 dark:text-gray-200 leading-relaxed">
                    {content}
                </div>
            </div>

            {/* Footer Section */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex justify-between items-center">
                <HomeButton />
                <NextButton currentPostId={id} totalPosts={4} />
            </div>
        </article>
    )
}