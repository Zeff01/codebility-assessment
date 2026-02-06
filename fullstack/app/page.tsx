
import Card from "@/components/Card";

import { ApiResponse } from "@/types";
export default async function Home() {

  let data: ApiResponse | null = null;

  try {
    const response = await fetch("http://localhost:3000/api/posts");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    data = await response.json();

  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }



  return (
    <section className="max-container padding-x py-15 flex-1">

    <div className="mb-8 max-w-2xl space-y-3">
          <h1 className="text-3xl font-bold">Latest Posts</h1>
          <p className="text-gray-600">
            Explore our latest articles, insights, and updates. From practical tips to in-depth
            discussions, each post is crafted to help you learn, stay inspired, and keep up with
            what’s new.
          </p>
    </div>

      {data?.data ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {data?.data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map(post =>
            <Card key={post.id} post={post}/>
          )}
        </div>

      ) : (
        <p className="text-center text-red-500">
          Failed to load posts. Please try again later.
        </p>
      )}

        
        
    </section>
    
  );
}
