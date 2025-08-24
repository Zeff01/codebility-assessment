import Link from "next/link"

interface BlogCardProps {
  id: number
  title: string
  excerpt: string
  date: string
}

export default function BlogCard({ id, title, excerpt, date }: BlogCardProps) {
  return (
    <Link href={`/posts/${id}`} className="block group">
      <article className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

        <div className="mb-4">
          <h2 className="text-2xl font-serif font-semibold text-slate-800 mb-3 leading-snug group-hover:text-blue-700 transition-colors duration-200">
            {title}
          </h2>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <time className="text-sm text-blue-600 font-sans font-medium tracking-wide">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
        <p className="text-slate-700 font-sans leading-relaxed text-base mb-4">{excerpt}</p>
        <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors">
          <span>Read more</span>
          <svg
            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </article>
    </Link>
  )
}
