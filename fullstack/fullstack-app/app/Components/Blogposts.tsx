import { getBlog } from "../posts/blog";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Components/NavigationBar";

export default async function BlogPage({ params }: { params: { id: string } }) {
    const blog = await getBlog(params.id);

    return (
        <div className="min-h-screen bg-[#F1E8DF] font-sans">
            {/* Navigation Bar*/}
            <Navbar />

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 py-12">
                {/* Back Button */}
                <Link href="/" className="inline-flex items-center gap-2 text-[#846038] hover:text-[#AA3431] mb-8 transition-colors">
                    <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
                    Back to Posts
                </Link>

                <article className="bg-white rounded-lg shadow-sm border border-[#E5D5C8] p-8">
                    <header className="mb-6">
                        <h1 className="text-3xl font-bold text-[#584026] mb-4">
                            { blog?.title }
                        </h1>
                        <div className="flex items-center gap-2 text-[#846038] text-sm">
                            <FontAwesomeIcon icon={faCalendar} className="w-4 h-4" />
                            {new Date(blog?.date).toLocaleDateString()}
                        </div>
                    </header>

                    <div className="prose prose-lg max-w-none text-[#584026]">
                        <p className="text-lg text-[#846038] mb-6 italic">
                            {blog?.excerpt}
                        </p>
                        <div className="leading-relaxed">
                            {blog?.content}
                        </div>
                    </div>
                </article>
            </main>
        </div>
    );
}