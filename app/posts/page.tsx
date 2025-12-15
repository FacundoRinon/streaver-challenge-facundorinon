"use client";

import useSWR from "swr";
import { fetchPosts } from "@/lib/posts/api";
import { useEffect, useState } from "react";

import { Post } from "@/models/Post";

import SectionLoader from "@/components/utils/SectionLoader";
import PostCard from "@/components/posts/PostCard";
import SearchBar from "@/components/utils/SearchBar";
import SlowConnectionNotice from "@/components/utils/SlowConnectionNotice";

export default function PostsPage() {
  const [filter, setFilter] = useState<string>("");
  const [posts, setPosts] = useState<Post[] | null>(null);

  const [isSlow, setIsSlow] = useState(false);

  const { data, error } = useSWR<Post[]>(
    filter ? `posts-filtered-${filter}` : "posts",
    () => fetchPosts(filter),
    {
      loadingTimeout: 2000,
      onLoadingSlow: () => {
        setIsSlow(true);
      },
      onSuccess: () => {
        setIsSlow(false);
      },
      onError: () => {
        setIsSlow(false);
      },
    }
  );

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <header className="mb-5">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Posts</h1>
        </header>
        <div className="mb-8">
          <SearchBar
            inputType="number"
            placeholder="Filtra posts por numero de autor..."
            onChange={(value) => setFilter(value)}
          />
        </div>

        <section className="grid grid-cols-3 gap-3 min-h-[300px]">
          {error && (
            <div className="min-h-screen flex items-center justify-center text-red-500">
              Error al cargar los posts
            </div>
          )}
          {posts === null && (
            <div className="col-span-3 flex items-center justify-center text-gray-500">
              <SectionLoader size={150} />
            </div>
          )}

          {posts !== null && posts.length === 0 && (
            <p className=" mt-5 col-span-3 text-xl text-center text-gray-500">
              No se encontraron posts que coincidan con la búsqueda.
            </p>
          )}

          {posts !== null &&
            posts?.length > 0 &&
            posts?.map((post) => <PostCard key={post.id} post={post} />)}
        </section>
      </div>
      <SlowConnectionNotice visible={isSlow} />
    </main>
  );
}
