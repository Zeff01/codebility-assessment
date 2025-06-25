"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const CreatePage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<null | string>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreatePost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setLoading(false);
        setFormData({
          title: "",
          excerpt: "",
          content: "",
        });
        router.push("/");
        router.refresh();
      }
    } catch (error) {}
  };

  return (
    <main className="h-[100svh] w-full grid place-items-center">
      <form
        onSubmit={handleCreatePost}
        className="form-container bg-[#28282b] text-[#f9f6ee] flex flex-col p-3 rounded-xl gap-5"
      >
        <header>
          <h1 className="logo font-bold text-center">Create Post</h1>
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

        <button className="bg-[#f9f6ee] text-[#28282b] p-2 rounded-lg cursor-pointer font-bold text-lg">
          {loading ? "Creating..." : "Create"}
        </button>
      </form>
    </main>
  );
};

export default CreatePage;
