export async function getPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
}

export async function getPostById(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch post");
    return res.json();
}