import Link from 'next/link'
import { posts } from '../data/posts'


export default function Home() {
  const featuredPost = posts[0]
  const trendingPosts = posts.slice(1, 4)
  const coverPicture = 'cover.png'
  return (
    <main className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="text-2xl font-bold text-green-600">Blog</div>
            <nav className="hidden items-center gap-8 md:flex">
              <Link href="#" className="text-sm text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link href="#" className="text-sm text-gray-700 hover:text-gray-900">
                About
              </Link>
              <Link href="#" className="text-sm text-gray-700 hover:text-gray-900">
                Service
              </Link>
              <Link href="#" className="text-sm text-gray-700 hover:text-gray-900">
                Blog
              </Link>
            </nav>
            <button className="rounded-full bg-green-600 px-6 py-2 text-sm font-semibold text-white hover:bg-green-700">
              Contact
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Sustainable Future Insights
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              We share common trends and strategies for improving your digital marketing efforts. We explore high quality content unique blocks.
            </p>
            <Link
              href={`/posts/${featuredPost.id}`}
              className="mt-8 inline-flex items-center text-base font-semibold text-green-600 hover:text-green-700"
            >
              Learn More
              <span className="ml-2">→</span>
            </Link>
          </div>
          <div className="overflow-hidden rounded-xl bg-gradient-to-b from-gray-200 to-gray-100">
            <img
              src={coverPicture}
              alt="Agricultural field"
              className="h-96 w-full object-cover"
            />
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="mt-8 flex justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
          <div className="h-2 w-2 rounded-full bg-green-600"></div>
          <div className="h-2 w-2 rounded-full bg-gray-300"></div>
        </div>
      </section>

      {/* Trending Articles Section */}
      <section className="border-t border-gray-200 bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Trending Article</h2>
            <p className="mt-4 max-w-2xl text-gray-600">
              Common trends Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>

          {/* Article Cards Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {trendingPosts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="h-64 overflow-hidden bg-gradient-to-b from-gray-200 to-gray-100">
                  <img
                    src={post.picture}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col px-6 py-6">
                  <h3 className="text-base font-bold text-gray-900">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                <div className="px-6 py-4">
                  <Link
                    href={`/posts/${post.id}`}
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
                    title="Learn more"
                  >
                    <span className="text-lg">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
