"use client";

import { PostType } from "@/data/post";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const Update = () => {
  const [post, setPost] = useState<PostType | null>(null);
  const { id } = useParams();
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: post?.title || "",
    excerpt: post?.excerpt || "",
    content: post?.content || "",
  });
  const [loading, setLoading] = useState(false);

  const getBlog = async () => {
    const res = await fetch(`/api/post/${id}`);
    const post = await res.json();
    setPost(post);
  };

  useEffect(() => {
    if (id) {
      getBlog();
    }
  }, [id]);

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
      });
    }
  }, [post]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handling Update
  const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/api/post/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setLoading(false);
        // Force refresh and redirect to home
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  return (
    <main className="h-[100svh] w-full grid place-items-center">
      <form
        onSubmit={handleUpdate}
        className="form-container bg-[#28282b] text-[#f9f6ee] flex flex-col p-3 rounded-xl gap-5"
      >
        <header>
          <h1 className="logo text-center font-bold">Update Blog</h1>
        </header>

        <div className="w-full flex flex-col gap-2">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="bg-white text-[#28282b] p-2 rounded-lg"
          />

          <input
            type="text"
            placeholder="Excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            className="bg-white text-[#28282b] p-2 rounded-lg"
          />

          <textarea
            name="content"
            placeholder="Content"
            value={formData.content}
            onChange={handleChange}
            className="bg-white text-[#28282b] p-2 rounded-lg"
          ></textarea>
        </div>

        <button
          disabled={loading}
          className="bg-[#f9f6ee] text-[#28282b] p-2 rounded-lg cursor-pointer font-bold text-lg disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update"}
        </button>
      </form>
    </main>
  );
};

export default Update;
