import React from "react";
import { PostTypes } from "./types";
import { BASE_URL } from "./constant";
import {
  Header,
  ListComponent,
  Separator,
  WrapperComponents,
} from "./components";
import { BlogpostItem } from "./components/BlogpostItem";

async function getPosts() {
  try {
    const response = await fetch(`${BASE_URL}/api/posts`, {
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

async function Page() {
  const posts = await getPosts();
  return (
    <main className="bg-[#FAFBF8] h-full py-10">
      <WrapperComponents>
        <Header>
          <h1 className="text-5xl font-bold mb-4 ">My Blog</h1>
          <p className="text-2xl text-[#838481]">
            Here you will find Articles about programming
          </p>
        </Header>

        <section className="border rounded-2xl p-7">
          <ListComponent
            data={posts}
            render={(post: PostTypes, index?: number) => (
              <React.Fragment key={post.id}>
                <BlogpostItem post={post} />
                {index !== undefined && index < posts.length - 1 && (
                  <Separator />
                )}
              </React.Fragment>
            )}
          />
          {posts.length === 0 && <p>No posts available</p>}
        </section>
      </WrapperComponents>
    </main>
  );
}

export default Page;
