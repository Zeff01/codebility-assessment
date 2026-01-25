import Card from '@/app/components/card'
import { Post } from '@/app/types/post'

const API_URL = process.env.API_URL;

const Home = async () => {
  const response = await fetch(`${API_URL}/posts`);
  const { data } = await response.json();
  
  const featured = data[0];
  const secondary = data.slice(1,3);
  const rest = data.slice(3);


  return (
    <div className="min-h-screen pt-12 pb-8 px-6 font-sans relative overflow-hidden">
      {/* Centered circular gradient background */}
      <div className="absolute inset-0 -z-10">
        {/* Main radial gradient expanded */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3),rgba(139,92,246,0.2),rgba(168,85,247,0.15),rgba(255,255,255,0.05),transparent_80%)]"></div>

        {/* Larger, soft circular highlights around center */}
        <div className="absolute top-1/2 left-1/2 w-[40rem] h-[40rem] bg-blue-700 rounded-full opacity-20 blur-[10rem] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[32rem] h-[32rem] bg-indigo-700 rounded-full opacity-15 blur-[8rem] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[24rem] h-[24rem] bg-purple-700 rounded-full opacity-10 blur-[6rem] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[16rem] h-[16rem] bg-white rounded-full opacity-5 blur-[5rem] -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-3xl font-bold mb-8">
          Featured Posts
        </h1>

        {/* Bento Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-[1fr_1fr] items-stretch gap-6 mb-12">
          {/* Featured Post */}
          {featured && (
            <div className="lg:col-span-2 lg:row-span-2 h-full">
              <Card
                id={featured.id}
                title={featured.title}
                date={featured.date}
                excerpt={featured.excerpt}
              />
            </div>
          )}

          {/* Right Top */}
          {secondary[0] && (
            <div className="h-full">
              <Card
                id={secondary[0].id}
                title={secondary[0].title}
                date={secondary[0].date}
                excerpt={secondary[0].excerpt}
              />
            </div>
          )}

          {/* Right Bottom */}
          {secondary[1] && (
            <div className="h-full">
              <Card
                id={secondary[1].id}
                title={secondary[1].title}
                date={secondary[1].date}
                excerpt={secondary[1].excerpt}
              />
            </div>
          )}
        </div>


        {/* Rest of posts */}
        <section>
          <h2 className="text-zinc-300 text-xl font-semibold mb-4">
            More Posts
          </h2>

          <div className="space-y-4">
            {rest.map((post: Post) => (
              <Card
                key={post.id}
                id={post.id}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home