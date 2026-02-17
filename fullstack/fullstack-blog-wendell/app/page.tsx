"use client";

import { useState, useMemo, useEffect } from "react";
import { postService } from "@/services/postService";
import { BlogCard } from "@/components/blog/BlogCard";
import { SearchBar } from "@/components/blog/SearchBar";
import { Post } from "@/models/Post";
import { Hero } from "@/components/layout/Hero";

export default function HomePage() {
  // --- States ---
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // --- Data Fetching ---
  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const data = await postService.getAll();

        // Senior Move: Validate the array content
        const validData = data.filter((p) => p.id && p.title);

        if (validData.length === 0 && data.length > 0) {
          throw new Error("Received malformed data from the server.");
        }

        setPosts(data);
        setError(null);
      } catch (err: any) {
        console.error("Failed to load posts:", err);
        setError(err.message || "We couldn't retrieve the blog posts.");
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  // --- Logic & Derived State ---
  // Senior Tip: Derived state doesn't need its own 'useState'
  const categories = useMemo(
    () => ["All", ...new Set(posts.map((p) => p.category))],
    [posts],
  );

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // 1. Defensive Programming: Ensure 'post' and 'post.title' actually exist
      if (!post || !post.title) return false;

      // 2. Use Optional Chaining (?.) for extra safety
      const title = post.title.toLowerCase();
      const category = post.category?.toLowerCase() || "";

      const matchesSearch = title.includes(search.toLowerCase().trim());
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory, posts]);

  // --- Early Returns (UX States) ---
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Something went wrong
        </h2>
        <p className="text-foreground/60 mb-6">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-primary text-background rounded-full font-bold hover:opacity-90 transition-opacity"
        >
          Retry
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-12 text-center text-primary font-bold animate-pulse">
        Loading Tech Insights...
      </div>
    );
  }

  // --- Main Render ---
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 bg-background">
      {/* <header className="mb-12 max-w-4xl mx-auto text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
          Tech Insights <span className="text-primary">.</span>
        </h1>
        <p className="text-lg text-foreground/70">
          Exploring the future of Full Stack development, security, and
          hardware.
        </p>
      </header> */}
      <Hero />
      <SearchBar
        search={search}
        setSearch={setSearch}
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-foreground/5 rounded-3xl">
          <p className="text-xl font-medium text-foreground/40">
            No matching posts found.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setActiveCategory("All");
            }}
            className="mt-4 text-primary font-bold hover:underline"
          >
            Clear Filters
          </button>
        </div>
      )}
    </main>
  );
}
