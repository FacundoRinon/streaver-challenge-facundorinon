"use client";

import useSWR from "swr";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { HiArrowLeft } from "react-icons/hi";

import { Post } from "@/models/Post";
import { fetchPostById } from "@/lib/posts/api";
import SectionLoader from "@/components/utils/SectionLoader";
import { capitalizeFirstLetter } from "@/lib/strings";
import SlowConnectionNotice from "@/components/utils/SlowConnectionNotice";
import ThemeToggle from "@/components/utils/ThemeToggle";

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();

  const [isSlow, setIsSlow] = useState(false);

  const { data, isLoading, error } = useSWR<Post>(
    id ? `post-${id}` : null,
    () => fetchPostById(id),
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

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <article className="w-full min-h-[75vh] max-h-[80vh] overflow-y-auto max-w-3xl bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm px-8 py-10">
        <div className="flex justify-between items-center mb-3">
          <Link
            href="/posts"
            className="inline-flex items-center text-sm text-gray-500 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
          >
            <HiArrowLeft className="mr-1" size={30} /> Back to Posts
          </Link>
          <ThemeToggle />
        </div>

        {isLoading && (
          <div className="py-20 text-center text-gray-500">
            <SectionLoader size={150} />
          </div>
        )}

        {(error || !data) && !isLoading && (
          <div className="py-20 text-center text-red-500">
            Error al cargar el post
          </div>
        )}

        {data && !isLoading && !error && (
          <>
            <h1 className="text-xl sm:text-4xl font-bold text-gray-900 leading-tight dark:text-white">
              {capitalizeFirstLetter(data.title)}
            </h1>

            <div className="my-4">
              <span className="inline-block text-sm text-gray-500 dark:text-gray-100">
                Author #{data.userId}
              </span>
            </div>

            <hr className="mb-6 border-gray-200 dark:border-gray-700" />

            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-100 leading-relaxed text-justify w-full">
              {capitalizeFirstLetter(data.body)}
            </p>
          </>
        )}
      </article>
      <SlowConnectionNotice visible={isSlow} />
    </main>
  );
}
