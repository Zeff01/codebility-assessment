import { Post } from "@/models/Post";

// Helper to determine the correct base URL for Server-Side fetching
const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // Browser can use relative paths
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // Production
  return "http://localhost:3000"; // Local Development
};

export const postService = {
  getAll: async (): Promise<Post[]> => {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/api/posts`, {
      cache: "no-store", // Senior move: ensures fresh data on every request
    });
    return res.json();
  },

  getById: async (id: string): Promise<Post | undefined> => {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/api/posts/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) return undefined;
    return res.json();
  },
};
