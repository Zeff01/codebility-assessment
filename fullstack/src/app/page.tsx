import { getPosts } from "./actions";
import Posts from "@/components/Posts";
import Header from "@/components/Header";

export default async function Home() {
  const data = await getPosts();
  return (
    <section className="min-h-screen bg-gray-50">
      <Header />
      <Posts postData={data} />
    </section>
  );
}
