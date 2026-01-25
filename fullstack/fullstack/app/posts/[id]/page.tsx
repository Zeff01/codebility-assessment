import Link from 'next/link'

const API_URL = process.env.API_URL;

const Blogpost = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const response = await fetch(`${API_URL}/posts/${id}`)
  const { data, success } = await response.json()

if (!success || !data) {
  {/* Post Not Found Page */}
  return (
    <div className="flex min-h-screen items-center justify-center relative overflow-hidden px-4 font-sans">
      
      {/* Radial gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),rgba(139,92,246,0.1),rgba(255,255,255,0.02),transparent_80%)]"></div>
        <div className="absolute top-1/2 left-1/2 w-[32rem] h-[32rem] bg-blue-700 rounded-full opacity-15 blur-[8rem] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/3 left-1/3 w-[24rem] h-[24rem] bg-indigo-700 rounded-full opacity-10 blur-[6rem] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-2/3 left-2/3 w-[16rem] h-[16rem] bg-purple-700 rounded-full opacity-8 blur-[5rem] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-2/3 w-[12rem] h-[12rem] bg-white rounded-full opacity-5 blur-[4rem] -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="text-center text-white z-10">
        <p className="text-xl mb-4">Post not found.</p>
        <Link
          href="/"
          className="inline-block text-blue-400 hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}

  {/* Blogpost Page Content */}
  return (
    <div className="flex justify-center min-h-screen px-4 py-12 font-sans relative overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),rgba(139,92,246,0.1),rgba(255,255,255,0.02),transparent_80%)]"></div>

        <div className="absolute top-1/2 left-1/2 w-[32rem] h-[32rem] bg-blue-700 rounded-full opacity-15 blur-[8rem] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/3 left-1/3 w-[24rem] h-[24rem] bg-indigo-700 rounded-full opacity-10 blur-[6rem] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-2/3 left-2/3 w-[16rem] h-[16rem] bg-purple-700 rounded-full opacity-8 blur-[5rem] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-2/3 w-[12rem] h-[12rem] bg-white rounded-full opacity-5 blur-[4rem] -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-3xl w-full bg-black/40 backdrop-blur-md rounded-xl p-8 shadow-lg transition-all">
        <Link
          href="/"
          className="text-zinc-300 hover:text-white hover:underline mb-6 inline-block"
        >
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-white mb-2">{data.title}</h1>

        <span className="text-zinc-400 text-sm mb-6 block">
          Published on {data.date}
        </span>

        <p className="text-zinc-300 italic mb-6">{data.excerpt}</p>

        <div className="text-zinc-200 leading-relaxed space-y-4">
          {data.content.split("\n").map((para: string, index: number) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogpost
