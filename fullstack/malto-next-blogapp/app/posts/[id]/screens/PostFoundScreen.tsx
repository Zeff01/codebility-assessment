import Link from "next/link";
import NavBar from "../../../screens/components/NavBar"

type Post = {
    id: number | string, // I wanted to simulate using UUIDs with the new additions, but I'm keeping the original ones to have the "number" type  
    title: string,
    excerpt: string,
    content: string,
    date: string
}

const PostFoundScreen = (post: Post) => {
    return (
        <>
            <NavBar />
            <main className="min-h-[90dvh] flex flex-col justify-center items-center p-6 bg-linear-to-b from-amber-50 to-amber-200">
                <article className="bg-white rounded-2xl shadow-md w-full max-w-3xl p-8 space-y-6">
                    <header className="border-b border-gray-200 pb-4">
                        <p className="text-sm text-gray-500">{post.date}</p>
                        <h2 className="text-3xl font-bold text-gray-800 mt-1">{post.title}</h2>
                        <p className="text-gray-600 italic mt-1">{post.excerpt}</p>
                    </header>

                    <section className="text-gray-700 leading-relaxed">
                        <p>{post.content}</p>
                    </section>

                    <footer className="pt-6 border-t border-gray-200 flex justify-end">
                        <Link
                            href="/"
                            className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
                        >
                            ← Back to Home
                        </Link>
                    </footer>
                </article>
            </main>
        </>
    )
}

export default PostFoundScreen