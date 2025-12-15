"use client";

import useSWR from "swr";
import { useEffect, useState } from "react";

import { fetchPosts } from "@/lib/posts/api";

import { Post } from "@/models/Post";

import SectionLoader from "@/components/utils/SectionLoader";
import PostCard from "@/components/posts/PostCard";
import SearchBar from "@/components/utils/SearchBar";
import SlowConnectionNotice from "@/components/utils/SlowConnectionNotice";
import ThemeToggle from "@/components/utils/ThemeToggle";
import ScrollToTopButton from "@/components/utils/ScrollToTopButton";

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
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <header className="mb-5 flex justify-between items-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">
            Posts PRUEBA
          </h1>
          <ThemeToggle />
        </header>
        <div className="mb-8">
          <SearchBar
            inputType="number"
            placeholder="Filter by author number..."
            onChange={(value) => setFilter(value)}
          />
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-3 min-h-[300px]">
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
      <ScrollToTopButton />
      <SlowConnectionNotice visible={isSlow} />
    </main>
  );
}
