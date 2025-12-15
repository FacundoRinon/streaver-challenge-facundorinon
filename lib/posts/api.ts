import { Post } from "@/models/Post";

export async function fetchPosts(filter?: string): Promise<Post[]> {
  //   await new Promise((resolve) => setTimeout(resolve, 5000)); // Se puede descomentar para probar el punto 5 (conexiones lentas)

  const url = filter ? `/api/posts?userId=${filter}` : "/api/posts";

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Error fetching posts");
  }

  return res.json();
}

export async function fetchPostById(id: string): Promise<Post> {
  // await new Promise((resolve) => setTimeout(resolve, 5000)); // Se puede descomentar para probar el punto 5 (conexiones lentas)

  const res = await fetch(`/api/posts/${id}`);

  if (!res.ok) {
    throw new Error("Error fetching post");
  }

  return res.json();
}
