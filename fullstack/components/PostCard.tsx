import Link from "next/link";
import { PostCardProps } from "@/types";

export default function PostCard({ id, title, excerpt, date }: PostCardProps) {
    return (
        <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {title}
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {excerpt}
            </p>

            <div className="flex items-center justify-between text-sm">
                <Link
                    href={`/posts/${id}`}
                    className="text-gray-700 bg-gray-50 font-medium hover:text-gray-900 hover:bg-gray-100 transition-colors px-4 py-2 rounded"
                >
                    Read More
                </Link>

                <time className="text-gray-500">{date}</time>
            </div>
        </div>
    );
}
